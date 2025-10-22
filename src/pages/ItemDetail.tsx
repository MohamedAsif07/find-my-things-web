import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ArrowLeft, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import allItems from "@/lib/mockItems";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Lookup item from shared mock data
  const item = allItems.find((it) => it.id === id) || allItems[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Badge 
                  className={cn(
                    "text-sm",
                    item.status === "lost" 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {item.status === "lost" ? "Lost Item" : "Found Item"}
                </Badge>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              
              <h1 className="mb-4 text-4xl font-bold">{item.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (!t.dataset.error) {
                      t.dataset.error = "1";
                      t.src = "/placeholder.svg";
                    }
                  }}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-card">
                  <span className="text-8xl opacity-20">📦</span>
                </div>
              )}
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-3 text-xl font-semibold">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {item.additionalInfo && (
                  <div className="mt-4 pt-4 border-t">
                    <h3 className="mb-2 font-semibold">Additional Information</h3>
                    <p className="text-muted-foreground">
                      {item.additionalInfo}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.status === "lost" 
                    ? "If you have found this item, please contact the owner:"
                    : "If this is your item, please contact the finder:"}
                </p>
                
                <Button className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Contact via Email
                </Button>
                
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Please be prepared to verify ownership details
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-4 text-xl font-semibold">Safety Tips</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Meet in a public place</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Verify ownership before handing over items</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Don't share sensitive personal information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Trust your instincts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;