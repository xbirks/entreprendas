// app/dashboard/layout.tsx
import Header from '@/app/dashboard/components/header';
import { TicketsProvider } from '@/app/dashboard/hooks/use-tickets';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <TicketsProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Header />
        <main className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </TicketsProvider>
  );
}
