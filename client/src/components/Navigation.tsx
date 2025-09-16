import { Link, useLocation } from "wouter";
import { Monitor } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 hover-elevate rounded-md px-3 py-2">
              <Monitor className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">WMT</span>
            </div>
          </Link>
          
          <div className="flex space-x-1">
            <Link href="/" data-testid="link-nav-home">
              <div className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                location === "/" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}>
                Home
              </div>
            </Link>
            <Link href="/download" data-testid="link-nav-download">
              <div className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                location === "/download" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}>
                Download
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}