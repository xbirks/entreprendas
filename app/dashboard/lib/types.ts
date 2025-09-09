export interface Service {
  id: string;
  name: string;
  rate: number; // cost per minute
  duration: number; // in seconds
  cost: number;
  isTiming: boolean;
}

export interface ServiceCategory {
    id: string;
    name: string;
}

export interface ServiceDefinition {
    id: string;
    name: string;
    rate: number; // cost per minute
    category: string;
}

export interface Ticket {
  id: string;
  clientName: string;
  createdAt: number; // timestamp
  services: Service[];
  status: 'open' | 'paid';
  total?: number;
  discountSuggestion?: string;
  paidAt?: number;
}
