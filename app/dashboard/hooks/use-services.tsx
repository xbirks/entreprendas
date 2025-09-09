'use client';

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import type { ServiceDefinition, ServiceCategory } from '@/app/dashboard/lib/types';
import { PREDEFINED_SERVICES_CATEGORIZED, PREDEFINED_CATEGORIES } from '@/app/dashboard/lib/services';

const isServer = typeof window === 'undefined';

const initialServices: ServiceDefinition[] = Object.entries(PREDEFINED_SERVICES_CATEGORIZED).flatMap(([category, services]) =>
    services.map(service => ({
        ...service,
        id: `service-${Math.random().toString(36).substr(2, 9)}`, // Add a unique ID
        category
    }))
);


interface ServicesContextType {
    services: ServiceDefinition[];
    categories: ServiceCategory[];
    isLoading: boolean;
    addService: (service: Omit<ServiceDefinition, 'id'>) => void;
    updateService: (service: ServiceDefinition) => void;
    removeService: (serviceId: string) => void;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);


export function ServicesProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<ServiceDefinition[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isServer) return;
    try {
      const storedServices = localStorage.getItem('services');
      const storedCategories = localStorage.getItem('categories');
      
      if (storedServices) {
        setServices(JSON.parse(storedServices));
      } else {
        setServices(initialServices);
        localStorage.setItem('services', JSON.stringify(initialServices));
      }

      if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
      } else {
        setCategories(PREDEFINED_CATEGORIES);
        localStorage.setItem('categories', JSON.stringify(PREDEFINED_CATEGORIES));
      }

    } catch (error) {
      console.error("Failed to load services from localStorage", error);
      setServices(initialServices);
      setCategories(PREDEFINED_CATEGORIES);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateAndSaveServices = (newServices: ServiceDefinition[]) => {
    setServices(newServices);
    if (isServer) return;
    localStorage.setItem('services', JSON.stringify(newServices));
  };

  const addService = useCallback((service: Omit<ServiceDefinition, 'id'>) => {
    const newService = { ...service, id: `service-${Date.now()}` };
    updateAndSaveServices([...services, newService]);
  }, [services]);

  const updateService = useCallback((updatedService: ServiceDefinition) => {
    const newServices = services.map(s => s.id === updatedService.id ? updatedService : s);
    updateAndSaveServices(newServices);
  }, [services]);

  const removeService = useCallback((serviceId: string) => {
    const newServices = services.filter(s => s.id !== serviceId);
    updateAndSaveServices(newServices);
  }, [services]);

  return (
      <ServicesContext.Provider value={{ services, categories, isLoading, addService, updateService, removeService }}>
          {children}
      </ServicesContext.Provider>
  )
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
}
