'use client';

import { useState, useEffect, useRef } from 'react';
import type { Service } from '@/app/dashboard/lib/types';
import { Button } from '@/app/dashboard/components/ui/button';
import { Play, Pause, Trash2, Check, X, Edit } from 'lucide-react';
import { Input } from '@/app/dashboard/components/ui/input';

interface ServiceItemProps {
  service: Service;
  onUpdate: (serviceId: string, updatedValues: Partial<Service>) => void;
  onRemove: (serviceId: string) => void;
}

function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return [hours, minutes, seconds]
    .map(v => v.toString().padStart(2, '0'))
    .join(':');
}

function parseTime(timeString: string): number {
    const parts = timeString.split(':').map(Number);
    if (parts.length === 3) {
        return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
    }
    if (parts.length === 2) {
        return (parts[0] * 60) + parts[1];
    }
    if (parts.length === 1) {
        return parts[0];
    }
    return 0;
}


export default function ServiceItem({ service, onUpdate, onRemove }: ServiceItemProps) {
  const [elapsedTime, setElapsedTime] = useState(service.duration);
  const [isTiming, setIsTiming] = useState(service.isTiming);
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [timeInput, setTimeInput] = useState(formatTime(service.duration));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTiming) {
      const startTime = Date.now() - elapsedTime * 1000;
      intervalRef.current = setInterval(() => {
        const newElapsedTime = Math.round((Date.now() - startTime) / 1000)
        setElapsedTime(newElapsedTime);
        setTimeInput(formatTime(newElapsedTime));
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTiming, elapsedTime]);

  const handleToggleTiming = () => {
    if (isEditingTime) setIsEditingTime(false);
    const newIsTiming = !isTiming;
    setIsTiming(newIsTiming);

    if (!newIsTiming) {
      const cost = (elapsedTime / 60) * service.rate;
      onUpdate(service.id, { duration: elapsedTime, cost, isTiming: false });
    } else {
      onUpdate(service.id, { isTiming: true, duration: elapsedTime });
    }
  };

  const handleTimeEdit = () => {
    if (!isTiming) {
      setIsEditingTime(true);
    }
  }

  const handleTimeSave = () => {
    const newDuration = parseTime(timeInput);
    setElapsedTime(newDuration);
    const cost = (newDuration / 60) * service.rate;
    onUpdate(service.id, { duration: newDuration, cost });
    setIsEditingTime(false);
  }

  const handleTimeCancel = () => {
    setTimeInput(formatTime(elapsedTime));
    setIsEditingTime(false);
  }

  const currentCost = (elapsedTime / 60) * service.rate;

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <p className="font-semibold">{service.name}</p>
        <p className="text-sm text-muted-foreground">
          €{service.rate.toFixed(2)} / min
        </p>
      </div>
      <div className="flex items-center gap-2">
        {isEditingTime ? (
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
              className="w-28 font-mono text-center text-lg h-10"
            />
            <Button variant="ghost" size="icon" onClick={handleTimeSave}><Check className="h-5 w-5 text-primary"/></Button>
            <Button variant="ghost" size="icon" onClick={handleTimeCancel}><X className="h-5 w-5 text-destructive"/></Button>
          </div>
        ) : (
          <div className="text-right">
            <p className={`font-mono text-lg font-semibold transition-colors ${isTiming ? 'text-primary' : 'text-foreground'}`} onClick={handleTimeEdit}>
              {formatTime(elapsedTime)}
            </p>
            <p className="text-sm font-semibold text-muted-foreground">€{currentCost.toFixed(2)}</p>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Button variant={isTiming ? "destructive" : "default"} size="icon" onClick={handleToggleTiming} aria-label={isTiming ? 'Parar temporizador' : 'Iniciar temporizador'} className="w-10 h-10 rounded-full">
            {isTiming ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onRemove(service.id)} aria-label="Eliminar servicio" disabled={isTiming || isEditingTime}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
