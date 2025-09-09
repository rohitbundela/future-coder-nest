import { Card, CardContent } from "@/components/ui/card";
import MentorCard from "@/components/ui/mentor-card";
import { Target, Eye, Users, Award, BookOpen, Code } from "lucide-react";
import mentorPriya from "@/assets/mentor-priya.jpg";
import mentorRajesh from "@/assets/mentor-rajesh.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text">Focus CodeLabs</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            <span className="text-Base font-semibold text-yellow-400">
            Transforming coding education through personalized mentorship, practical projects, and industry-focused curriculum.
            </span>
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground">
                Focus CodeLabs was founded with a simple yet powerful vision: to bridge the gap between academic learning 
                and industry requirements. We noticed that many talented students struggled to transition from theoretical 
                knowledge to practical application in the real world.
              </p>
              <p className="text-muted-foreground">
                Our founders, experienced software engineers from top tech companies, decided to create a learning platform 
                that emphasizes hands-on experience, personalized mentorship, and career-focused education. Since our 
                inception, we've helped over 5,000+ students successfully transition into rewarding tech careers.
              </p>
              <p className="text-muted-foreground">
                Today, Focus CodeLabs stands as a beacon of excellence in coding education, with our graduates working 
                at leading companies like Google, Amazon, Microsoft, and numerous promising startups across the globe.
              </p>
            </div>
            <div className="relative">
              <Card className="shadow-soft">
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">100+</h3>
                      <p className="text-sm text-muted-foreground">Students Trained</p>
                    </div>
                    <div className="text-center">
                      <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">95%</h3>
                      <p className="text-sm text-muted-foreground">Placement Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">50+</h3>
                      <p className="text-sm text-muted-foreground">Courses Offered</p>
                    </div>
                    <div className="text-center">
                      <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Code className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">10+</h3>
                      <p className="text-sm text-muted-foreground">Programming Languages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-8 space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make coding simple, fun, and career-focused for every student. We believe that with the right 
                  guidance and practical approach, anyone can master programming and build a successful career in technology.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Provide industry-relevant education</li>
                  <li>• Offer personalized mentorship</li>
                  <li>• Bridge the skill gap in tech industry</li>
                  <li>• Make quality education accessible to all</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  Creating industry-ready professionals through practical coding education. We envision a future where 
                  every student has access to world-class coding education and can confidently pursue their dream career in technology.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Become the leading coding education platform</li>
                  <li>• Empower 100,000+ students by 2030</li>
                  <li>• Establish global presence in tech education</li>
                  <li>• Foster innovation and entrepreneurship</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MentorCard
              name="Dr. Ambika Gupta"
              image={mentorPriya}
              expertise="Co-Founder & Lead Full-Stack Instructor"
              experience="15+ years at Amazon & Microsoft"
              description="Priya leads our full-stack development programs and has mentored over 2000+ students. She specializes in modern web technologies and cloud architecture."
              skills={["React", "Node.js", "Python", "AWS", "System Design", "MongoDB"]}
            />
            <MentorCard
              name="Mr Akhilesh Chauhan"
              image={mentorRajesh}
              expertise="Co-Founder & Java/DSA Expert"
              experience="17+ years at Google & Oracle"
              description="Rajesh heads our placement preparation programs and has an exceptional track record in helping students crack top tech company interviews."
              skills={["Java", "Spring Boot", "Data Structures", "Algorithms", "System Design", "Interview Coaching"]}
            />
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Our Team Makes the Difference</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <Award className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold">Industry Experience</h4>
                  <p className="text-sm text-muted-foreground">Our mentors have worked at top tech companies and understand industry requirements</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold">Teaching Excellence</h4>
                  <p className="text-sm text-muted-foreground">Proven track record of successful student placements and career transformations</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">We stay updated with latest technologies and industry trends</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;