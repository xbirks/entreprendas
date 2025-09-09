'use client';

import { useState, useEffect, useMemo, useTransition } from 'react';
import type { Ticket, Service, ServiceDefinition } from '@/app/dashboard/lib/types';
import { calculateOrderTotal } from '@/app/dashboard/ai/flows/calculate-order-total';
import { useServices } from '@/app/dashboard/hooks/use-services';
import ServiceItem from './service-item';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/dashboard/components/ui/card';
import { Button } from '@/app/dashboard/components/ui/button';
import { BrainCircuit, Wallet, Trash2, ChevronRight, Plus, ChevronLeft } from 'lucide-react';
import { Separator } from '@/app/dashboard/components/ui/separator';
import { Skeleton } from '@/app/dashboard/components/ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/dashboard/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/dashboard/components/ui/dialog"


interface TicketCardProps {
  ticket: Ticket;
  onUpdate: (ticket: Ticket) => void;
  onComplete: (ticketId: string, isPaid: boolean) => void;
}

function CreationDate({ timestamp }: { timestamp: number }) {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    // This now runs only on the client, after hydration, preventing the mismatch.
    setDateString(new Date(timestamp).toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }));
  }, [timestamp]);


  if (!timestamp) return null;

  return <>{dateString}</>;
}


export default function TicketCard({ ticket, onUpdate, onComplete }: TicketCardProps) {
  const [services, setServices] = useState<Service[]>(ticket.services);
  const [total, setTotal] = useState<number | undefined>(ticket.total);
  const [discountSuggestion, setDiscountSuggestion] = useState<string | undefined>(ticket.discountSuggestion);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isAiCalculating, startAiTransition] = useTransition();
  const [isServiceSelectorOpen, setServiceSelectorOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { categories, services: serviceDefinitions } = useServices();

   const servicesByCategory = useMemo(() => {
    const grouped: { [key: string]: ServiceDefinition[] } = {};
    serviceDefinitions.forEach(service => {
        if (!grouped[service.category]) {
            grouped[service.category] = [];
        }
        grouped[service.category].push(service);
    });
    return grouped;
  }, [serviceDefinitions]);


  const handleConfirmComplete = (isPaid: boolean) => {
    setIsCompleting(true);
    // Here you would typically send data to your database
    console.log(`Ticket ${ticket.id} for ${ticket.clientName} is being closed.`);
    // The state update is now handled by the useTickets hook via onComplete
    setTimeout(() => onComplete(ticket.id, isPaid), 300); // Animation duration
  };

  const addService = (name: string, rate: number) => {
    const newService: Service = {
      id: `service-${Date.now()}`,
      name,
      rate,
      duration: 0,
      cost: 0,
      isTiming: false,
    };
    setServices(prev => [...prev, newService]);
    setServiceSelectorOpen(false);
    setSelectedCategory(null);
  };

  const updateService = (serviceId: string, updatedValues: Partial<Service>) => {
    setServices(prev =>
      prev.map(s => (s.id === serviceId ? { ...s, ...updatedValues } : s))
    );
  };

  const removeService = (serviceId: string) => {
    setServices(prev => prev.filter(s => s.id !== serviceId));
  };

  useEffect(() => {
    const hasCompletedServices = services.some(s => s.cost > 0);

    if (!hasCompletedServices) {
        const manualTotal = services.reduce((acc, s) => acc + s.cost, 0);
        setTotal(manualTotal);
        setDiscountSuggestion('Completa un servicio para recibir una sugerencia de precios de la IA.');
        onUpdate({ ...ticket, services, total: manualTotal, discountSuggestion: '' });
        return;
    }

    const runTotalCalculation = async (currentServices: Service[]) => {
      const servicesForAI = currentServices
        .filter(s => s.cost > 0)
        .map(s => ({
          name: s.name,
          cost: parseFloat(s.cost.toFixed(2)),
          duration: Math.round(s.duration / 60),
        }));

      if (servicesForAI.length === 0) {
        const manualTotal = currentServices.reduce((acc, s) => acc + s.cost, 0);
        setTotal(manualTotal);
        setDiscountSuggestion('Completa un servicio para recibir una sugerencia de precios de la IA.');
        onUpdate({ ...ticket, services: currentServices, total: manualTotal, discountSuggestion: '' });
        return;
      }

      try {
        const result = await calculateOrderTotal({ services: servicesForAI });
        if (result) {
          setTotal(result.totalAmount);
          setDiscountSuggestion(result.discountSuggestion);
          onUpdate({ ...ticket, total: result.totalAmount, discountSuggestion: result.discountSuggestion, services: currentServices });
        }
      } catch (error) {
        console.error('AI calculation failed:', error);
        // We will not show a toast here anymore to avoid spamming the user if the API key is missing.
        // The console error is enough for debugging.
        const manualTotal = currentServices.reduce((acc, s) => acc + s.cost, 0);
        setTotal(manualTotal);
        setDiscountSuggestion('Sugerencia de IA no disponible.');
        onUpdate({ ...ticket, total: manualTotal, discountSuggestion: 'Sugerencia de IA no disponible.', services: currentServices });
      }
    };

    startAiTransition(() => {
      runTotalCalculation(services);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(services.map(s => ({id: s.id, cost: s.cost}))), ticket.id, onUpdate]);

  const manualTotal = useMemo(() => services.reduce((acc, s) => acc + s.cost, 0), [services]);

  const handleDialogClose = (open: boolean) => {
    if (!open) {
      setSelectedCategory(null);
    }
    setServiceSelectorOpen(open);
  }

  return (
    <Card className={`transition-all duration-300 ${isCompleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} bg-white shadow-lg rounded-xl flex flex-col`}>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl font-bold">{ticket.clientName}</CardTitle>
                <CardDescription><CreationDate timestamp={ticket.createdAt} /></CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>¿Cerrar ticket?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acción cerrará el ticket de {ticket.clientName} sin marcarlo como pagado. Se eliminará de la vista de tickets abiertos.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleConfirmComplete(false)} className="bg-destructive hover:bg-destructive/90">Cerrar Ticket</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <div className="text-right">
                  <p className="text-2xl font-bold">€{total !== undefined ? total.toFixed(2) : manualTotal.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">Total Sugerido</p>
              </div>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
         <div className="space-y-2 mb-4">
           <Dialog open={isServiceSelectorOpen} onOpenChange={handleDialogClose}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full bg-secondary hover:bg-muted">
                    <Plus className="mr-2 h-4 w-4 inline-block" />
                    Añadir Servicio
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='flex items-center'>
                  {selectedCategory && (
                    <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSelectedCategory(null)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  )}
                  {selectedCategory || 'Seleccionar Categoría'}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  {!selectedCategory ? (
                     <div className="space-y-2">
                        {Object.keys(servicesByCategory).map((category) => (
                          <button key={category} onClick={() => setSelectedCategory(category)} className="w-full flex justify-between items-center text-left p-3 bg-secondary hover:bg-muted rounded-lg">
                            <span>{category}</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground"/>
                          </button>
                        ))}
                      </div>
                  ) : (
                    <div className="space-y-2">
                      {servicesByCategory[selectedCategory as keyof typeof servicesByCategory].map(service => (
                        <button key={service.name} onClick={() => addService(service.name, service.rate)} className="w-full text-left p-3 bg-secondary hover:bg-muted rounded-lg">
                          {service.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
        </div>

        <Separator className="my-4"/>

        <div className="space-y-4">
          {services.map(service => (
            <ServiceItem
              key={service.id}
              service={service}
              onUpdate={updateService}
              onRemove={removeService}
            />
          ))}
          {services.length === 0 && <p className="text-center text-muted-foreground py-4">Aún no se han añadido servicios.</p>}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start gap-4 mt-auto">
        <div className="w-full">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <BrainCircuit className="h-4 w-4" />
              <span>Sugerencia de IA</span>
            </div>
            {isAiCalculating ? (
              <div className="space-y-2 mt-1">
                <Skeleton className="h-4 w-full" />
              </div>
            ) : (
             <>
                <p className="text-sm text-muted-foreground italic mt-1">{discountSuggestion}</p>
             </>
            )}
         </div>
         <AlertDialog>
          <AlertDialogTrigger asChild>
             <Button className="w-full" size="lg" disabled={isAiCalculating || manualTotal === 0}>
                <Wallet className="mr-2 h-4 w-4" />
                Pagado
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Confirmar pago?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción marcará el ticket de {ticket.clientName} como pagado y lo moverá a la sección de "Pagados".
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleConfirmComplete(true)}>Confirmar Pago</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
