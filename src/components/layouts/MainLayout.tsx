import { type ReactNode } from "react";
import Header from "../Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer (optional) */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 GDG Bowen Assessment. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
