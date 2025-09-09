// app/dashboard/hooks/use-tickets.tsx
'use client';

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import type { Ticket } from '@/app/dashboard/lib/types';

const isServer = typeof window === 'undefined';
const initialTickets: Ticket[] = [];

interface TicketsContextType {
  tickets: Ticket[];
  openTickets: Ticket[];
  paidTickets: Ticket[];
  isLoading: boolean;
  addTicket: (clientName: string) => void;
  updateTicket: (updatedTicket: Ticket) => void;
  completeTicket: (ticketId: string, isPaid: boolean) => void;
  setTickets: (tickets: Ticket[]) => void;
}

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export function TicketsProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isServer) return;
    try {
      const stored = localStorage.getItem('tickets');
      if (stored) {
        setTickets(JSON.parse(stored));
      } else {
        setTickets(initialTickets);
        localStorage.setItem('tickets', JSON.stringify(initialTickets));
      }
    } catch (e) {
      console.error('Failed to load tickets from localStorage', e);
      setTickets(initialTickets);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateAndSave = (next: Ticket[]) => {
    setTickets(next);
    if (!isServer) localStorage.setItem('tickets', JSON.stringify(next));
  };

  const addTicket = useCallback((clientName: string) => {
    const newTicket: Ticket = {
      id: `ticket-${Date.now()}`,
      clientName,
      createdAt: Date.now(),
      services: [],
      status: 'open',
    };
    updateAndSave([newTicket, ...tickets]);
  }, [tickets]);

  const updateTicket = useCallback((updated: Ticket) => {
    updateAndSave(tickets.map(t => (t.id === updated.id ? updated : t)));
  }, [tickets]);

  const completeTicket = useCallback((ticketId: string, isPaid: boolean) => {
    const now = Date.now();
    const updated = tickets.map(t =>
      t.id === ticketId
        ? { ...t, status: isPaid ? 'paid' : 'open', paidAt: isPaid ? now : undefined }
        : t
    );
    // Si NO quieres borrar cuando no está pagado, elimina el filter de abajo.
    const finalTickets = isPaid ? updated : updated.filter(t => t.id !== ticketId);
    updateAndSave(finalTickets);
  }, [tickets]);

  const openTickets = tickets.filter(t => t.status === 'open');
  const paidTickets = tickets.filter(t => t.status === 'paid');

  return (
    <TicketsContext.Provider value={{ tickets, openTickets, paidTickets, isLoading, addTicket, updateTicket, completeTicket, setTickets: updateAndSave }}>
      {children}
    </TicketsContext.Provider>
  );
}

export function useTickets() {
  const ctx = useContext(TicketsContext);
  if (!ctx) {
    console.error('useTickets sin TicketsProvider. Revisa app/layout.tsx y rutas de import.');
    throw new Error('useTickets must be used within a TicketsProvider');
  }
  return ctx;
}
