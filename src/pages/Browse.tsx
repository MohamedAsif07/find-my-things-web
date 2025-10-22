import { useState } from "react";
import Navbar from "@/components/Navbar";
import ItemCard from "@/components/ItemCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

const Browse = () => {
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");

  // Mock data
  const allItems = [
    {
      id: "1",
      title: "Black Leather Wallet",
      description: "Black leather wallet with ID cards and credit cards inside",
      category: "Wallet",
      location: "Central Park, NYC",
      date: "2 hours ago",
      status: "lost" as const,
    },
    {
      id: "2",
      title: "iPhone 13 Pro",
      description: "Blue iPhone 13 Pro with cracked screen protector",
      category: "Electronics",
      location: "Starbucks, 5th Ave",
      date: "5 hours ago",
      status: "found" as const,
    },
    {
      id: "3",
      title: "Silver Bracelet",
      description: "Silver charm bracelet with heart pendant",
      category: "Jewelry",
      location: "Brooklyn Bridge",
      date: "1 day ago",
      status: "lost" as const,
    },
    {
      id: "4",
      title: "Blue Backpack",
      description: "Nike blue backpack with laptop and textbooks",
      category: "Bag",
      location: "NYU Campus",
      date: "2 days ago",
      status: "found" as const,
    },
    {
      id: "5",
      title: "Car Keys - Toyota",
      description: "Toyota car keys with red keychain",
      category: "Keys",
      location: "Times Square",
      date: "3 hours ago",
      status: "found" as const,
    },
    {
      id: "6",
      title: "Prescription Glasses",
      description: "Black framed prescription glasses in brown case",
      category: "Accessories",
      location: "Public Library",
      date: "1 day ago",
      status: "lost" as const,
    },
  ];

  const filteredItems = allItems.filter(item => {
    const matchesStatus = filter === "all" || item.status === filter;
    const matchesCategory = category === "all" || item.category === category;
    return matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Browse Items</h1>
          <p className="text-muted-foreground">Search through lost and found items</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search items..." 
                className="pl-9"
              />
            </div>
            
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="lost">Lost Items</SelectItem>
                <SelectItem value="found">Found Items</SelectItem>
              </SelectContent>
            </Select>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Wallet">Wallet</SelectItem>
                <SelectItem value="Keys">Keys</SelectItem>
                <SelectItem value="Jewelry">Jewelry</SelectItem>
                <SelectItem value="Bag">Bag</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div key={item.id} style={{ animationDelay: `${index * 50}ms` }}>
              <ItemCard {...item} />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No items found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
