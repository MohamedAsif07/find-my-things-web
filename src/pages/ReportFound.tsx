import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const ReportFound = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Item Reported",
      description: "Your found item has been posted successfully. Thank you for helping!",
    });

    setIsSubmitting(false);
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold">Report Found Item</h1>
            <p className="text-muted-foreground">
              Help reunite someone with their belonging
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>
                Describe the item you found to help the owner identify it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Name *</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g., Blue iPhone 13 Pro" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="wallet">Wallet</SelectItem>
                      <SelectItem value="keys">Keys</SelectItem>
                      <SelectItem value="jewelry">Jewelry</SelectItem>
                      <SelectItem value="bag">Bag</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="documents">Documents</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe the item (avoid including specific details that only the owner would know for verification)"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Where Did You Find It? *</Label>
                  <Input 
                    id="location" 
                    placeholder="e.g., Starbucks on 5th Avenue" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date Found *</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Your Contact Information *</Label>
                  <Input 
                    id="contact" 
                    type="email"
                    placeholder="your.email@example.com" 
                    required 
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be shared with the rightful owner when they claim the item
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Upload Photos (Optional)</Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" multiple />
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Report Found Item"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate("/browse")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportFound;
