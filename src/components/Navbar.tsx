import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Lost & Found</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/browse" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/browse') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Browse Items
            </Link>
            
            <Link to="/report-lost">
              <Button variant="outline" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Report Lost
              </Button>
            </Link>
            
            <Link to="/report-found">
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Report Found
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
