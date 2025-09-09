import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Technical" | "Non-Technical";
}

const CourseCard = ({
  title,
  description,
  duration,
  students,
  rating,
  originalPrice,
  discountedPrice,
  level,
  category,
}: CourseCardProps) => {
  const discount = Math.round((1 - discountedPrice / originalPrice) * 100);

  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <Badge variant="outline" className={level === "Beginner" ? "text-green-600" : level === "Intermediate" ? "text-yellow-600" : "text-red-600"}>
            {level}
          </Badge>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{students}+ students</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">₹{discountedPrice.toLocaleString()}</span>
            <span className="text-lg text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
            <Badge className="gradient-accent text-white">{discount}% OFF</Badge>
          </div>
          <p className="text-sm text-accent font-medium">🎉 Diwali Special Offer!</p>
        </div>

        <Button className="w-full gradient-primary text-white">
          <a href="https://chat.whatsapp.com/HAlCzJTdPkGFzG0qBys8r6" target="_blank" rel="noopener noreferrer">Enroll Now</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;