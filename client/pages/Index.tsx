import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Bike,
  Bus,
  Truck,
  Star,
  MapPin,
  Shield,
  Clock,
  Users,
  Search,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const vehicleTypes = [
  { icon: Car, name: "Cars", count: "2,500+" },
  { icon: Bike, name: "Motorcycles", count: "800+" },
  { icon: Truck, name: "Scooters", count: "1,200+" },
  { icon: Bus, name: "Buses", count: "150+" },
];

const features = [
  {
    icon: Shield,
    title: "Verified Vehicles",
    description: "All vehicles are inspected and verified for safety and reliability"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your rental needs"
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Find and rent vehicles in over 200+ cities across the country"
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of satisfied renters and verified hosts"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frequent Renter",
    rating: 5,
    comment: "OmniRide made it so easy to find the perfect car for my weekend trip. Great selection and amazing hosts!"
  },
  {
    name: "Mike Chen",
    role: "Vehicle Host",
    rating: 5,
    comment: "As a host, I love how OmniRide handles everything seamlessly. Great platform to earn extra income!"
  },
  {
    name: "Emma Rodriguez",
    role: "Business Traveler",
    rating: 5,
    comment: "Professional service and reliable vehicles. I use OmniRide for all my business travel needs."
  }
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">OmniRide</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-primary transition-colors">Browse Vehicles</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">How it Works</Link>
              <Link to="/become-host" className="text-gray-700 hover:text-primary transition-colors">Become a Host</Link>
              <Link to="#" className="text-gray-700 hover:text-primary transition-colors">Support</Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button variant="success">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link to="/browse" className="text-gray-700 hover:text-primary transition-colors">Browse Vehicles</Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">How it Works</Link>
                <Link to="/become-host" className="text-gray-700 hover:text-primary transition-colors">Become a Host</Link>
                <Link to="#" className="text-gray-700 hover:text-primary transition-colors">Support</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost">Sign In</Button>
                  <Button variant="success">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 #1 Vehicle Rental Marketplace
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Rent Any Vehicle,
                  <span className="text-primary block">Anywhere</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  From cars to bikes, scooters to buses - find the perfect vehicle for your journey with OmniRide's trusted community of hosts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="success" className="text-lg px-8 py-6">
                  <Search className="w-5 h-5 mr-2" />
                  Find a Vehicle
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Become a Host
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-success"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                  </div>
                  <span>10k+ Happy Users</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span>(2,340 reviews)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Search</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pick-up Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter city or address"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <Button variant="success" className="w-full py-6 text-lg">
                    Search Vehicles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Ride
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a car for a road trip, a bike for city exploration, or a bus for group travel, we've got you covered.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <vehicle.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600">{vehicle.count} available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose OmniRide?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of vehicle rental with our innovative platform designed for modern travelers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust OmniRide for their vehicle rental needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join OmniRide today and discover a new way to travel. Whether you're renting or hosting, we make it simple and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="success" className="text-lg px-8 py-6">
              Start Renting Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-50">
              Become a Host
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">OmniRide</span>
              </div>
              <p className="text-gray-400">
                The future of vehicle rental. Simple, secure, and accessible to everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Renters</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Vehicles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How to Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Hosts</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">List Your Vehicle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Host Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Host Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OmniRide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
