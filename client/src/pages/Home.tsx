import { Link } from "wouter";
import { Download, Monitor, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-card rounded-lg border border-card-border">
              <Monitor className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Windows Multi-Tool
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            WMT is a tool for windows that makes life easy with custom commands
          </p>
          
          <Link href="/download" data-testid="link-download-hero">
            <Button size="lg" className="text-lg px-8 py-3" data-testid="button-download-hero">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover-elevate">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Custom Commands</h3>
            <p className="text-muted-foreground">
              Create and execute custom commands to automate your Windows workflows
            </p>
          </Card>

          <Card className="p-6 hover-elevate">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Optimized for speed and efficiency to boost your productivity
            </p>
          </Card>

          <Card className="p-6 hover-elevate">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Monitor className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Windows Native</h3>
            <p className="text-muted-foreground">
              Built specifically for Windows with deep system integration
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}