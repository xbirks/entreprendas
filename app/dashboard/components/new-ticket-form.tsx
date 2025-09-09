'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/app/dashboard/components/ui/card';
import { Input } from '@/app/dashboard/components/ui/input';
import { Button } from '@/app/dashboard/components/ui/button';
import { Plus } from 'lucide-react';

interface NewTicketFormProps {
  onAddTicket: (clientName: string) => void;
}

export default function NewTicketForm({ onAddTicket }: NewTicketFormProps) {
  const [clientName, setClientName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName.trim()) {
      onAddTicket(clientName.trim());
      setClientName('');
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            type="text"
            placeholder="Nombre del Cliente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="flex-grow text-base"
            aria-label="Nombre del Cliente"
            required
          />
          <Button type="submit" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Añadir
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
