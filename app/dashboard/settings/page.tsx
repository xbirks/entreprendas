'use client';

import { useState } from 'react';
import { useServices } from '@/app/dashboard/hooks/use-services';
import type { ServiceDefinition, ServiceCategory } from '@/app/dashboard/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/dashboard/components/ui/card';
import { Button } from '@/app/dashboard/components/ui/button';
import { Edit, Plus, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/app/dashboard/components/ui/dialog';
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
import { Input } from '@/app/dashboard/components/ui/input';
import { Label } from '@/app/dashboard/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/app/dashboard/components/ui/select"


function ServiceForm({ service, categories, onSave, onCancel }: { service?: ServiceDefinition, categories: ServiceCategory[], onSave: (service: ServiceDefinition) => void, onCancel: () => void }) {
    const [name, setName] = useState(service?.name || '');
    const [rate, setRate] = useState(service ? (service.rate * 60).toString() : ''); // Show hourly rate
    const [category, setCategory] = useState(service?.category || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const hourlyRate = parseFloat(rate);
        if (name && !isNaN(hourlyRate) && category) {
            onSave({
                id: service?.id || `service-${Date.now()}`,
                name,
                rate: hourlyRate / 60, // Convert to per-minute rate
                category,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4 p-4">
                <div className="space-y-2">
                    <Label htmlFor="service-name">Nombre del Servicio</Label>
                    <Input id="service-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Bajo de pantalón" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="service-rate">Precio por Hora (€)</Label>
                    <Input id="service-rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Ej: 14" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="service-category">Categoría</Label>
                     <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger id="service-category">
                            <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(cat => (
                                <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter className="p-4 mt-4">
                <DialogClose asChild>
                    <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Guardar Servicio</Button>
            </DialogFooter>
        </form>
    );
}


export default function SettingsPage() {
    const { services, categories, addService, updateService, removeService } = useServices();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingService, setEditingService] = useState<ServiceDefinition | undefined>(undefined);

    const handleAddClick = () => {
        setEditingService(undefined);
        setIsFormOpen(true);
    };

    const handleEditClick = (service: ServiceDefinition) => {
        setEditingService(service);
        setIsFormOpen(true);
    };

    const handleSaveService = (service: ServiceDefinition) => {
        if (editingService) {
            updateService(service);
        } else {
            addService(service);
        }
        setIsFormOpen(false);
        setEditingService(undefined);
    };


    const servicesByCategory = categories.map(category => ({
        ...category,
        services: services.filter(s => s.category === category.name)
    })).filter(c => c.services.length > 0);


  return (
    <>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Gestionar Servicios</h1>
           <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button onClick={handleAddClick}>
                    <Plus className="mr-2 h-5 w-5" />
                    Añadir Servicio
                </Button>
            </DialogTrigger>
            <DialogContent>
                 <DialogHeader>
                    <DialogTitle>{editingService ? 'Editar Servicio' : 'Añadir Nuevo Servicio'}</DialogTitle>
                </DialogHeader>
                <ServiceForm
                    service={editingService}
                    categories={categories}
                    onSave={handleSaveService}
                    onCancel={() => setIsFormOpen(false)}
                 />
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {servicesByCategory.map(({id, name, services}) => (
            <Card key={id}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-semibold">{service.name}</p>
                        <p className="text-sm text-muted-foreground">
                          €{(service.rate * 60).toFixed(2)} / hora
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditClick(service)}>
                            <Edit className="h-5 w-5"/>
                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                 <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Esta acción no se puede deshacer. Se eliminará permanentemente el servicio "{service.name}".
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => removeService(service.id)} className="bg-destructive hover:bg-destructive/90">
                                        Eliminar
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    </>
  );
}
