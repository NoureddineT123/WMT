import { useState } from "react";
import { Download, Monitor, Apple, Github } from "lucide-react";
import { SiLinux } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DownloadPage() {
  const [windowsUrl, setWindowsUrl] = useState("https://github.com/NoureddineT123/WMT/raw/refs/heads/main/WindowsMT.exe");

  const handleWindowsDownload = () => {
    console.log('Windows download triggered');
    window.open(windowsUrl, '_blank');
  };

  const handleLinuxClick = () => {
    console.log('Linux download clicked (disabled)');
    // Do nothing - disabled
  };

  const handleMacClick = () => {
    console.log('Mac download clicked (disabled)');
    // Do nothing - disabled
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Download Windows Multi-Tool
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your platform to get started with WMT
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Windows Download - Active */}
          <Card className="p-8 text-center hover-elevate">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Monitor className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Windows</h3>
            <p className="text-muted-foreground mb-6">
              Windows 10/11 compatible
            </p>
            <Button 
              onClick={handleWindowsDownload}
              className="w-full"
              data-testid="button-download-windows"
            >
              <Download className="w-4 h-4 mr-2" />
              Download For Windows
            </Button>
          </Card>

          {/* Linux Download - Disabled */}
          <Card className="p-8 text-center bg-muted/20">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <SiLinux className="h-12 w-12 text-muted-foreground/60" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground/60 mb-2">Linux</h3>
            <p className="text-muted-foreground/60 mb-6">
              Coming soon
            </p>
            <Button 
              onClick={handleLinuxClick}
              disabled
              className="w-full bg-muted/60 text-muted-foreground/60 hover:bg-muted/60 cursor-not-allowed"
              data-testid="button-download-linux"
            >
              <Download className="w-4 h-4 mr-2" />
              Download For Linux
            </Button>
          </Card>

          {/* Mac Download - Disabled */}
          <Card className="p-8 text-center bg-muted/20">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <Apple className="h-12 w-12 text-muted-foreground/60" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground/60 mb-2">macOS</h3>
            <p className="text-muted-foreground/60 mb-6">
              Coming soon
            </p>
            <Button 
              onClick={handleMacClick}
              disabled
              className="w-full bg-muted/60 text-muted-foreground/60 hover:bg-muted/60 cursor-not-allowed"
              data-testid="button-download-mac"
            >
              <Download className="w-4 h-4 mr-2" />
              Download For Mac
            </Button>
          </Card>
        </div>

        {/* System Requirements */}
        <div className="mt-16">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Windows</h4>
                <ul className="space-y-1">
                  <li>• Windows 10 or later</li>
                  <li>• 100 MB free disk space</li>
                  <li>• Administrator privileges</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-muted-foreground/60 mb-2">Linux & macOS</h4>
                <ul className="space-y-1 text-muted-foreground/60">
                  <li>• Support coming soon</li>
                  <li>• Stay tuned for updates</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}