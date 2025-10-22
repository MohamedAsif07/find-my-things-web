import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  status: "lost" | "found";
  // ✅ CHANGE: Rename 'image' to 'imageUrl' to match mock data
  imageUrl?: string; 
}

// ✅ CHANGE: Destructure 'imageUrl' here instead of 'image'
const ItemCard = ({ id, title, description, category, location, date, status, imageUrl }: ItemCardProps) => {
  return (
    <Link to={`/item/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 animate-scale-in">
        <div className="relative h-48 overflow-hidden bg-muted">
          {/* ✅ CHANGE: Use 'imageUrl' in the conditional check and src attribute */}
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              onError={(e) => {
                // Fallback to local placeholder if external image fails to load
                const t = e.currentTarget as HTMLImageElement;
                if (!t.dataset.error) {
                  t.dataset.error = "1";
                  t.src = "/placeholder.svg";
                }
              }}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-card">
              <span className="text-4xl opacity-20">📦</span>
            </div>
          )}
          <Badge 
            className={cn(
              "absolute top-3 right-3",
              status === "lost" 
                ? "bg-accent text-accent-foreground" 
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {status === "lost" ? "Lost" : "Found"}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          
          <h3 className="mb-2 text-lg font-semibold line-clamp-1">{title}</h3>
          <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ItemCard;