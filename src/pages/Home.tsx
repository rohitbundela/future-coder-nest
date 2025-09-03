import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/ui/testimonial-card";
import MentorCard from "@/components/ui/mentor-card";
import { ArrowRight, BookOpen, Users, Award, MessageCircle, UserPlus, Gift, Calendar, Zap, Star, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import mentorPriya from "@/assets/mentor-priya.jpg";
import mentorRajesh from "@/assets/mentor-rajesh.jpg";
import studentArjun from "@/assets/student-arjun.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="gradient-accent px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <Gift className="h-4 w-4" />
                  <span>🎄 Festive Sale - Up to 70% OFF!</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Empowering Students with{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Future-Ready
                </span>{" "}
                Coding Skills
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn coding from school level to placements with expert mentors and real-world projects.
                Join thousands of successful students who transformed their careers with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300 group">
                  <Link to="/courses">
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Explore Courses <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  <Link to="/contact">
                    <MessageCircle className="mr-2" size={20} />
                    Ask a Question
                  </Link>
                </Button>
                <Button asChild className="gradient-secondary text-white hover:shadow-glow" size="lg">
                  <a href="https://t.me/+K7RZBun1LeQ5ZmY1" target="_blank" rel="noopener noreferrer">
                    <UserPlus className="mr-2" size={20} />
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={heroImage}
                alt="Students learning to code"
                className="rounded-2xl shadow-glow relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Festive Offers Section */}
      <section className="py-16 px-4 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🎄</div>
          <div className="absolute top-20 right-20 text-4xl">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl">🎁</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎊</div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6 flex items-center justify-center space-x-3">
            <Calendar className="text-accent" />
            <span>🎄 New Year Special Offers 🎊</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Ring in the New Year with amazing discounts on our premium courses! Limited time offer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="gradient-card border-accent/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-accent">AI & Machine Learning Mastery</h3>
                <div className="space-y-2">
                  <span className="text-3xl font-bold text-foreground">₹2,999</span>
                  <span className="text-lg line-through text-muted-foreground ml-2">₹9,999</span>
                  <div className="gradient-accent text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">70% OFF</div>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Python for AI/ML</li>
                  <li>• TensorFlow & PyTorch</li>
                  <li>• Real-world Projects</li>
                  <li>• Career Guidance</li>
                </ul>
                <Button asChild className="gradient-primary text-white w-full">
                  <Link to="/courses">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-primary/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-primary">Cloud Computing & DevOps</h3>
                <div className="space-y-2">
                  <span className="text-3xl font-bold text-foreground">₹3,499</span>
                  <span className="text-lg line-through text-muted-foreground ml-2">₹11,999</span>
                  <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">71% OFF</div>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AWS & Azure</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Industry Certification</li>
                </ul>
                <Button asChild className="gradient-secondary text-white w-full">
                  <Link to="/courses">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-accent/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-accent">Mobile App Development Pro</h3>
                <div className="space-y-2">
                  <span className="text-3xl font-bold text-foreground">₹2,499</span>
                  <span className="text-lg line-through text-muted-foreground ml-2">₹8,999</span>
                  <div className="gradient-accent text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">72% OFF</div>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React Native & Flutter</li>
                  <li>• iOS & Android</li>
                  <li>• App Store Publishing</li>
                  <li>• Monetization Strategies</li>
                </ul>
                <Button asChild className="gradient-primary text-white w-full">
                  <Link to="/courses">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center space-x-3">
            <Trophy className="text-accent" />
            <span>Why Choose Focus CodeLabs?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            At Focus CodeLabs, we help school students, college students, and graduates master coding skills — 
            from fundamentals to advanced placement preparation. Our proven methodology has helped thousands 
            land their dream jobs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="gradient-card border-primary/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Expert Curriculum</h3>
                <p className="text-muted-foreground">Industry-aligned courses designed by experienced professionals</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-accent/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Personalized Mentoring</h3>
                <p className="text-muted-foreground">One-on-one guidance from industry experts and senior developers</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-primary/30 shadow-glow card-hover">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Placement Success</h3>
                <p className="text-muted-foreground">95% placement rate with top companies like Google, Amazon & more</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 flex items-center justify-center space-x-3">
            <Star className="text-accent" />
            <span>Courses for Every Learning Stage</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* School Students */}
            <Card className="gradient-card border-primary/30 shadow-glow card-hover group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-glow">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">School Students</h3>
                  <p className="text-muted-foreground">Build strong foundations early</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Java Programming Fundamentals</li>
                  <li>• Python for Beginners</li>
                  <li>• Web Development Basics</li>
                  <li>• Mobile App Development</li>
                  <li>• Game Development with Unity</li>
                </ul>
                <Button asChild className="w-full gradient-primary text-white">
                  <Link to="/courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* College Students */}
            <Card className="gradient-card border-accent/30 shadow-glow card-hover group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-glow">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">College Students</h3>
                  <p className="text-muted-foreground">Master advanced concepts</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Advanced Programming Languages</li>
                  <li>• Frontend Technologies (React, Vue)</li>
                  <li>• Backend Development (Node.js, Django)</li>
                  <li>• Full-Stack Development Mastery</li>
                </ul>
                <Button asChild className="w-full gradient-secondary text-white">
                  <Link to="/courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pass-outs & Job Seekers */}
            <Card className="gradient-card border-primary/30 shadow-glow card-hover group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-glow">
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Job Seekers</h3>
                  <p className="text-muted-foreground">Get placement ready</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technical Interview Preparation</li>
                  <li>• System Design Fundamentals</li>
                  <li>• Mock Interview Sessions</li>
                  <li>• Resume Building & LinkedIn Optimization</li>
                  <li>• Soft Skills for Corporate Success</li>
                </ul>
                <Button asChild className="w-full gradient-accent text-white">
                  <Link to="/courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Arjun Sharma"
              image={studentArjun}
              text="Focus CodeLabs helped me crack my coding interviews with confidence. The DSA course was exceptional!"
              rating={5}
              course="Data Structures & Algorithms Pro"
            />
            <TestimonialCard
              name="Priya Patel"
              image={mentorPriya}
              text="The mentors explain every concept with clarity and give real-world examples. Highly recommended!"
              rating={5}
              course="Full-Stack Development Mastery"
            />
            <TestimonialCard
              name="Rohit Kumar"
              image={mentorRajesh}
              text="Best place to learn coding for beginners — I started from zero and now I'm a frontend developer!"
              rating={5}
              course="Complete Web Development Bootcamp"
            />
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Learn from Industry Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MentorCard
              name="Priya Sharma"
              image={mentorPriya}
              expertise="Full-Stack Development & Python"
              experience="6+ years in software development"
              description="Former senior developer at Amazon, passionate about teaching clean code practices and modern web technologies."
              skills={["React", "Python", "Django", "AWS", "MongoDB"]}
            />
            <MentorCard
              name="Rajesh Kumar"
              image={mentorRajesh}
              expertise="Java & Data Structures"
              experience="8+ years in enterprise development"
              description="Ex-Google engineer specializing in scalable systems and algorithm optimization. Expert in placement preparation."
              skills={["Java", "Spring Boot", "DSA", "System Design", "Microservices"]}
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/mentors">
                Meet All Mentors <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;