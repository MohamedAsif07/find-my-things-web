export type Item = {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  imageUrl?: string;
  contact?: string;
  additionalInfo?: string;
  status: "lost" | "found";
};

export const allItems: Item[] = [
  {
    id: "1",
    title: "Black Leather Wallet",
    description: "Black leather wallet with ID cards and credit cards inside",
    category: "Wallet",
    location: "Central Park, NYC",
    date: "2 hours ago",
    imageUrl: "/images/image1.jpg",
    contact: "john.doe@example.com",
    additionalInfo: "Contains important documents. Reward offered for return.",
    status: "lost",
  },
  {
    id: "2",
    title: "iPhone 13 Pro",
    description: "Blue iPhone 13 Pro with cracked screen protector",
    category: "Electronics",
    location: "Starbucks, 5th Ave",
    date: "5 hours ago",
     imageUrl: "/images/image2.jpg",
    status: "found",
  },
  {
    id: "3",
    title: "Silver Bracelet",
    description: "Silver charm bracelet with heart pendant",
    category: "Jewelry",
    location: "Brooklyn Bridge",
    date: "1 day ago",
     imageUrl: "/images/image3.jpg",
    status: "lost",
  },
  {
    id: "4",
    title: "Blue Backpack",
    description: "Nike blue backpack with laptop and textbooks",
    category: "Bag",
    location: "NYU Campus",
    date: "2 days ago",
     imageUrl: "/images/image4.jpg",
    status: "found",
  },
  {
    id: "5",
    title: "Car Keys - Toyota",
    description: "Toyota car keys with red keychain",
    category: "Keys",
    location: "Times Square",
    date: "3 hours ago",
    imageUrl: "/images/keys.svg",
    status: "found",
  },
  {
    id: "6",
    title: "Prescription Glasses",
    description: "Black framed prescription glasses in brown case",
    category: "Accessories",
    location: "Public Library",
    date: "1 day ago",
    imageUrl: "/images/glasses.svg",
    status: "lost",
  },
];

export default allItems;
