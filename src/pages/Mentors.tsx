import MentorCard from "@/components/ui/mentor-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, MessageCircle } from "lucide-react";
import mentorPriya from "@/assets/mentor-priya.jpg";
import mentorRajesh from "@/assets/mentor-rajesh.jpg";

const Mentors = () => {
  const mentors = [
    {
      name: "Priya Sharma",
      image: mentorPriya,
      expertise: "Full-Stack Development & Python Expert",
      experience: "6+ years at Amazon, Microsoft & Flipkart",
      description: "Priya is a passionate educator with extensive experience in building scalable web applications. She has mentored over 2000+ students and helped them secure positions at top tech companies. Her expertise spans across modern web technologies, cloud computing, and software architecture.",
      skills: ["React", "Node.js", "Python", "Django", "AWS", "MongoDB", "Docker", "Kubernetes"],
      specializations: [
        "Full-Stack Web Development",
        "Cloud Architecture & Deployment",
        "API Design & Microservices",
        "Database Design & Optimization"
      ],
      achievements: [
        "Led development of 15+ enterprise applications",
        "Certified AWS Solutions Architect",
        "Speaker at 5+ tech conferences",
        "95% student placement success rate"
      ]
    },
    {
      name: "Rajesh Kumar",
      image: mentorRajesh,
      expertise: "Java & Data Structures Specialist",
      experience: "8+ years at Google, Oracle & TCS",
      description: "Rajesh is a seasoned software engineer with deep expertise in Java ecosystem and algorithmic problem solving. He has conducted 1000+ mock interviews and has an exceptional track record in placement preparation. His systematic approach to teaching DSA has helped hundreds crack top tech company interviews.",
      skills: ["Java", "Spring Boot", "Data Structures", "Algorithms", "System Design", "MySQL", "Redis", "Kafka"],
      specializations: [
        "Data Structures & Algorithms",
        "System Design & Architecture",
        "Interview Preparation & Coaching",
        "Enterprise Java Development"
      ],
      achievements: [
        "Designed systems handling 10M+ daily users",
        "Conducted 1000+ technical interviews",
        "Authored popular DSA course with 50K+ students",
        "98% interview success rate for students"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Learn from{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mentors are experienced professionals from top tech companies who are passionate about 
            teaching and helping students achieve their career goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">5000+</h3>
                <p className="text-sm text-muted-foreground">Students Mentored</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">95%</h3>
                <p className="text-sm text-muted-foreground">Placement Success</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">15+</h3>
                <p className="text-sm text-muted-foreground">Years Combined Experience</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">24/7</h3>
                <p className="text-sm text-muted-foreground">Mentor Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Expert Mentors
          </h2>
          <div className="space-y-16">
            {mentors.map((mentor, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
                {/* Mentor Card */}
                <div className="lg:sticky lg:top-8">
                  <MentorCard {...mentor} />
                </div>
                
                {/* Detailed Info */}
                <div className="space-y-8">
                  {/* Specializations */}
                  <Card className="shadow-soft">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-foreground">Teaching Specializations</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {mentor.specializations.map((spec, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievements */}
                  <Card className="shadow-soft">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-foreground">Key Achievements</h3>
                      <div className="space-y-3">
                        {mentor.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Badge className="gradient-accent text-white mt-1 px-2 py-1 text-xs">
                              {idx + 1}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="gradient-primary text-white hover:shadow-hover flex-1">
                      Book 1:1 Session
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Courses
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Approach */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Mentorship Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Personalized Learning Path</h3>
                <p className="text-muted-foreground">
                  We assess your current skill level and create a customized learning roadmap tailored to your career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Regular Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Weekly one-on-one sessions to track progress, address doubts, and adjust learning pace as needed.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Career Placement Support</h3>
                <p className="text-muted-foreground">
                  Resume review, mock interviews, and direct referrals to partner companies for job placements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation call with our mentors to discuss your goals and find the perfect learning path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-hover">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;