
import Navbar from "@/components/airline/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Calendar } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto pt-20">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl font-bold">Explore the World with Port International</h1>
            <p className="text-xl">Discover new destinations and create unforgettable memories with our premium flight experiences.</p>
          </div>

          {/* Flight Search Card */}
          <Card className="mt-8 max-w-4xl bg-white/95 backdrop-blur">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input className="pl-10" placeholder="Departure City" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input className="pl-10" placeholder="Arrival City" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input className="pl-10" type="date" />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" size="lg">
                <Plane className="mr-2 h-5 w-5" /> Search Flights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="stats-card">
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-muted-foreground">Connect to over 150 destinations worldwide</p>
          </Card>
          <Card className="stats-card">
            <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
            <p className="text-muted-foreground">Experience world-class hospitality</p>
          </Card>
          <Card className="stats-card">
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-muted-foreground">Competitive fares and special offers</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
