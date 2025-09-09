import Link from 'next/link';
import { Settings, CircleDollarSign } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/dashboard" className="text-2xl font-bold text-center text-foreground">
            Gestión EntrePrendas
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard/settings" className="text-foreground hover:text-primary transition-colors">
              <Settings className="h-6 w-6" />
            </Link>
            <Link href="/dashboard/paid" className="text-foreground hover:text-primary transition-colors">
              <CircleDollarSign className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
