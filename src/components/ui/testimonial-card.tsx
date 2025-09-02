import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  rating: number;
  course: string;
}

const TestimonialCard = ({ name, image, text, rating, course }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-muted-foreground italic">"{text}"</p>

        {/* User Info */}
        <div className="flex items-center space-x-3">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{course}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;