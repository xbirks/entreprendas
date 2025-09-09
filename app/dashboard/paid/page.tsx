'use client';

import { useTickets } from '@/app/dashboard/hooks/use-tickets';
import { Card, CardHeader, CardTitle, CardDescription } from '@/app/dashboard/components/ui/card';
import { Skeleton } from '@/app/dashboard/components/ui/skeleton';

function CreationDate({ timestamp }: { timestamp: number }) {
  if (!timestamp) return null;
  // This effect ensures the date is only rendered on the client, avoiding hydration mismatches.
  const [dateString, setDateString] = React.useState('');
  React.useEffect(() => {
    setDateString(new Date(timestamp).toLocaleString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }));
  }, [timestamp]);

  return <>{dateString}</>;
}

export default function PaidPage() {
  const { paidTickets, isLoading } = useTickets();

  // Sort tickets by paid date, most recent first
  const sortedPaidTickets = [...paidTickets].sort((a, b) => (b.paidAt || 0) - (a.paidAt || 0));

  return (
    <>
        <h1 className="text-2xl font-bold mb-6">Tickets Pagados</h1>
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="h-24 w-full rounded-xl" />
          </div>
        ) : sortedPaidTickets.length > 0 ? (
          <div className="space-y-4">
            {sortedPaidTickets.map(ticket => (
              <Card key={ticket.id}>
                <CardHeader className="flex flex-row justify-between items-start">
                  <div>
                    <CardTitle>{ticket.clientName}</CardTitle>
                    <CardDescription>
                      Pagado el: <CreationDate timestamp={ticket.paidAt!} />
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">€{ticket.total?.toFixed(2)}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-16">
            <p className="text-lg">Aún no hay tickets pagados.</p>
            <p>Cuando marques un ticket como "Pagado", aparecerá aquí.</p>
          </div>
        )}
    </>
  );
}
