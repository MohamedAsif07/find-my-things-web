import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ItemCard from "@/components/ItemCard";
import allItems from "@/lib/mockItems";

const Index = () => {
  // Use shared mock items and show the first four as recent
  const recentItems = allItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Find What's Lost, Return What's Found
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Connect people with their belongings. Report lost items or help return found ones to their rightful owners.
            </p>
            
            <div className="mx-auto mb-8 flex max-w-2xl gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search for lost or found items..." 
                  className="h-12 pl-10 bg-white/95 border-white/20"
                />
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/report-lost">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Plus className="h-5 w-5" />
                  Report Lost Item
                </Button>
              </Link>
              <Link to="/report-found">
                <Button size="lg" className="gap-2 bg-white hover:bg-white/90 text-primary">
                  <Plus className="h-5 w-5" />
                  Report Found Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Items Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Recent Items</h2>
              <p className="mt-2 text-muted-foreground">
                Browse the latest lost and found items
              </p>
            </div>
            <Link to="/browse">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentItems.map((item, index) => (
              <div key={item.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ItemCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold">How It Works</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="animate-slide-up">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Report</h3>
                <p className="text-muted-foreground">
                  Post details about the lost or found item with photos and location
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl text-secondary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Search</h3>
                <p className="text-muted-foreground">
                  Browse through listings and use filters to find matching items
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-accent-foreground">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Reunite</h3>
                <p className="text-muted-foreground">
                  Connect with the owner and arrange for a safe return
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Lost & Found. Helping reunite people with their belongings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
