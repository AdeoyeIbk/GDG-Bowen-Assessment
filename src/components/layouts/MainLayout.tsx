import { type ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contact", href: "#" },
];

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header navigation={navigation} />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer (optional) */}
      <Footer navigation={navigation} />
    </div>
  );
}
