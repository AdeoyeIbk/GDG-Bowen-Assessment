import { type ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

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
      <Footer />
    </div>
  );
}
