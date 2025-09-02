import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MentorCardProps {
  name: string;
  image: string;
  expertise: string;
  experience: string;
  description: string;
  skills: string[];
}

const MentorCard = ({ name, image, expertise, experience, description, skills }: MentorCardProps) => {
  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 group">
      <CardContent className="p-6 space-y-4">
        {/* Profile Image */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
          />
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-primary font-medium">{expertise}</p>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm text-center">{description}</p>

        {/* Skills */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Specializations:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MentorCard;