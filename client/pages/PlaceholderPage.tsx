import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, ArrowLeft, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">OmniRide</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Browse Vehicles
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                How it Works
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Become a Host
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Support
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button variant="success">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Placeholder Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-primary" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

              <p className="text-lg text-gray-600 mb-8">{description}</p>

              <p className="text-sm text-gray-500 mb-8">
                This page is currently under development. We're working hard to
                bring you an amazing experience. Continue prompting to help us
                build out this section of OmniRide!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button variant="success">Continue Building</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
