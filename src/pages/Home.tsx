import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/ui/testimonial-card";
import MentorCard from "@/components/ui/mentor-card";
import { ArrowRight, BookOpen, Users, Award, MessageCircle, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import mentorPriya from "@/assets/mentor-priya.jpg";
import mentorRajesh from "@/assets/mentor-rajesh.jpg";
import studentArjun from "@/assets/student-arjun.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
                <Button asChild size="lg" className="gradient-primary text-white hover:shadow-hover">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <MessageCircle className="mr-2" size={20} />
                    Ask a Question
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="https://t.me/+K7RZBun1LeQ5ZmY1" target="_blank" rel="noopener noreferrer">
                    <UserPlus className="mr-2" size={20} />
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning to code"
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Choose Focus CodeLabs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            At Focus CodeLabs, we help school students, college students, and graduates master coding skills — 
            from fundamentals to advanced placement preparation. Our proven methodology has helped thousands 
            land their dream jobs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Expert Curriculum</h3>
                <p className="text-muted-foreground">Industry-aligned courses designed by experienced professionals</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Personalized Mentoring</h3>
                <p className="text-muted-foreground">One-on-one guidance from industry experts and senior developers</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Placement Success</h3>
                <p className="text-muted-foreground">95% placement rate with top companies like Google, Amazon & more</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Courses for Every Learning Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* School Students */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">School Students</h3>
                  <p className="text-muted-foreground">Build strong foundations early</p>
                </div>
                <ul className="space-y-2 text-sm">
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
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">College Students</h3>
                  <p className="text-muted-foreground">Master advanced concepts</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Advanced Programming Languages</li>
                  <li>• Frontend Technologies (React, Vue)</li>
                  <li>• Backend Development (Node.js, Django)</li>
                  <li>• Full-Stack Development Mastery</li>
                </ul>
                <Button asChild className="w-full gradient-primary text-white">
                  <Link to="/courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pass-outs & Job Seekers */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="text-center space-y-3">
                  <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Job Seekers</h3>
                  <p className="text-muted-foreground">Get placement ready</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Technical Interview Preparation</li>
                  <li>• System Design Fundamentals</li>
                  <li>• Mock Interview Sessions</li>
                  <li>• Resume Building & LinkedIn Optimization</li>
                  <li>• Soft Skills for Corporate Success</li>
                </ul>
                <Button asChild className="w-full gradient-primary text-white">
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