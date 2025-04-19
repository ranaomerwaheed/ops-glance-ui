
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Plane, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-primary/20 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Port International</span>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="nav-item">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/flights" className="nav-item">International Flights</Link>
                      <Link to="/flights" className="nav-item">Domestic Flights</Link>
                      <Link to="/flights" className="nav-item">Special Offers</Link>
                      <Link to="/flights" className="nav-item">Flight Schedule</Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/flights" className="nav-item">Book Flight</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Book Now</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
