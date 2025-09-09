'use client';

import { useTickets } from '@/app/dashboard/hooks/use-tickets';
import NewTicketForm from '@/app/dashboard/components/new-ticket-form';
import TicketCard from '@/app/dashboard/components/ticket-card';
import { Skeleton } from '@/app/dashboard/components/ui/skeleton';


export default function DashboardPage() {
  const { openTickets, isLoading, addTicket, updateTicket, completeTicket } = useTickets();

  return (
    <>
        <section className="mb-8">
          <NewTicketForm onAddTicket={addTicket} />
        </section>
        <section>
          <div className="grid gap-6">
            {isLoading ? (
               <>
                <Skeleton className="h-96 w-full rounded-xl" />
                <Skeleton className="h-96 w-full rounded-xl" />
               </>
            ) : openTickets.length > 0 ? (
              openTickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onUpdate={updateTicket}
                  onComplete={completeTicket}
                />
              ))
            ) : (
              <div className="text-center text-muted-foreground py-16">
                <p className="text-lg">No hay tickets abiertos.</p>
                <p>Crea un nuevo ticket para empezar.</p>
              </div>
            )}
          </div>
        </section>
    </>
  );
}
