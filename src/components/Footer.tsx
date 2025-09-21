import React from "react";

interface NavigationItem {
  name: string;
  href: string;
}

interface FooterProps {
  navigation: NavigationItem[];
}
import { Twitter, Instagram, Linkedin, Facebook, Clover } from "lucide-react";

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-12 flex justify-content-between">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Clover />
              </div>
              <span className="text-xl font-bold text-foreground">Logo</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <nav>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
