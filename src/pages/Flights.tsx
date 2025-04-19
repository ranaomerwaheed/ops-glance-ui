
import Navbar from "@/components/airline/Navbar";

const Flights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Available Flights</h1>
        <p className="text-muted-foreground">Coming soon: Flight search results and booking system.</p>
      </div>
    </div>
  );
};

export default Flights;
