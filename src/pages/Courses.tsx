import { useState } from "react";
import CourseCard from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const technicalCourses = [
    {
      title: "Complete Java Programming Mastery",
      description: "Master Java from basics to advanced concepts with real-world projects and interview preparation.",
      duration: "3-4 months",
      students: 2500,
      rating: 4.9,
      originalPrice: 15000,
      discountedPrice: 7500,
      level: "Beginner" as const,
      category: "Technical" as const,
    },
    {
      title: "Python Programming Complete Bootcamp",
      description: "Learn Python programming with hands-on projects, web scraping, automation, and data analysis.",
      duration: "2-3 months",
      students: 1800,
      rating: 4.8,
      originalPrice: 12000,
      discountedPrice: 6000,
      level: "Beginner" as const,
      category: "Technical" as const,
    },
    {
      title: "Full-Stack Web Development Mastery",
      description: "Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      duration: "4-6 months",
      students: 3200,
      rating: 4.9,
      originalPrice: 25000,
      discountedPrice: 12500,
      level: "Intermediate" as const,
      category: "Technical" as const,
    },
    {
      title: "Mobile App Development Pro",
      description: "Build mobile apps using React Native and Flutter with real-world projects and deployment.",
      duration: "3-4 months",
      students: 1200,
      rating: 4.7,
      originalPrice: 20000,
      discountedPrice: 10000,
      level: "Intermediate" as const,
      category: "Technical" as const,
    },
    {
      title: "Game Development with Unity",
      description: "Create 2D and 3D games using Unity engine with C# programming and game design principles.",
      duration: "3-4 months",
      students: 800,
      rating: 4.6,
      originalPrice: 18000,
      discountedPrice: 9000,
      level: "Intermediate" as const,
      category: "Technical" as const,
    },
    {
      title: "Data Structures & Algorithms Pro",
      description: "Master DSA concepts with 500+ problems, system design basics, and placement preparation.",
      duration: "2-3 months",
      students: 2800,
      rating: 4.9,
      originalPrice: 16000,
      discountedPrice: 8000,
      level: "Advanced" as const,
      category: "Technical" as const,
    },
    {
      title: "Frontend Technologies Specialization",
      description: "Advanced React, Vue.js, Angular with TypeScript, testing, and modern development practices.",
      duration: "3-4 months",
      students: 1500,
      rating: 4.8,
      originalPrice: 22000,
      discountedPrice: 11000,
      level: "Advanced" as const,
      category: "Technical" as const,
    },
    {
      title: "Backend Development Expertise",
      description: "Master Node.js, Express, Django, microservices architecture, and cloud deployment.",
      duration: "3-4 months",
      students: 1300,
      rating: 4.8,
      originalPrice: 22000,
      discountedPrice: 11000,
      level: "Advanced" as const,
      category: "Technical" as const,
    },
  ];

  const nonTechnicalCourses = [
    {
      title: "Technical Interview Mastery",
      description: "Comprehensive interview preparation with mock interviews, coding challenges, and HR tips.",
      duration: "1-2 months",
      students: 3500,
      rating: 4.9,
      originalPrice: 8000,
      discountedPrice: 4000,
      level: "Intermediate" as const,
      category: "Non-Technical" as const,
    },
    {
      title: "Soft Skills for Tech Professionals",
      description: "Communication, leadership, teamwork, and presentation skills for career advancement.",
      duration: "1 month",
      students: 2200,
      rating: 4.7,
      originalPrice: 6000,
      discountedPrice: 3000,
      level: "Beginner" as const,
      category: "Non-Technical" as const,
    },
    {
      title: "Resume Building & Career Guidance",
      description: "Create ATS-friendly resumes, optimize LinkedIn profiles, and develop job search strategies.",
      duration: "2-3 weeks",
      students: 4000,
      rating: 4.8,
      originalPrice: 5000,
      discountedPrice: 2500,
      level: "Beginner" as const,
      category: "Non-Technical" as const,
    },
    {
      title: "Mock Interview Sessions Pro",
      description: "One-on-one mock interviews with detailed feedback from industry professionals.",
      duration: "Flexible",
      students: 1800,
      rating: 4.9,
      originalPrice: 10000,
      discountedPrice: 5000,
      level: "Advanced" as const,
      category: "Non-Technical" as const,
    },
  ];

  const allCourses = [...technicalCourses, ...nonTechnicalCourses];

  const getFilteredCourses = () => {
    if (selectedCategory === "all") return allCourses;
    if (selectedCategory === "technical") return technicalCourses;
    if (selectedCategory === "non-technical") return nonTechnicalCourses;
    return allCourses;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transform Your Career with Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Expert Courses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner-friendly courses to advanced specializations, we have everything you need to succeed in tech.
          </p>
          <div className="mt-8">
            <Badge className="gradient-accent text-white text-lg px-6 py-2">
              🎉 New Year Special: 50% OFF on All Courses!
            </Badge>
          </div>
        </div>
      </section>

      {/* Course Filters */}
      <section className="py-8 px-4 bg-card border-b">
        <div className="container mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="non-technical">Non-Technical</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredCourses().map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Limited Time Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="gradient-primary p-8 rounded-2xl text-white space-y-4">
              <h3 className="text-2xl font-bold">Bundle Deal</h3>
              <p className="text-lg">Get any 3 courses for just ₹20,000</p>
              <p className="text-sm opacity-90">Save up to ₹15,000 with this combo offer</p>
              <Button variant="secondary" size="lg" className="text-primary">
                Claim Bundle Offer
              </Button>
            </div>
            <div className="gradient-accent p-8 rounded-2xl text-white space-y-4">
              <h3 className="text-2xl font-bold">Student Discount</h3>
              <p className="text-lg">Additional 20% OFF for students</p>
              <p className="text-sm opacity-90">Show your student ID to get extra discount</p>
              <Button variant="secondary" size="lg" className="text-accent">
                Get Student Discount
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Our Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-bold">1:1</span>
              </div>
              <h3 className="font-semibold">Personal Mentoring</h3>
              <p className="text-sm text-muted-foreground">Get individual attention from experienced mentors</p>
            </div>
            <div className="text-center space-y-3">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-bold">∞</span>
              </div>
              <h3 className="font-semibold">Lifetime Access</h3>
              <p className="text-sm text-muted-foreground">Access course materials and updates forever</p>
            </div>
            <div className="text-center space-y-3">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-bold">📜</span>
              </div>
              <h3 className="font-semibold">Certification</h3>
              <p className="text-sm text-muted-foreground">Industry-recognized certificates upon completion</p>
            </div>
            <div className="text-center space-y-3">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-bold">🚀</span>
              </div>
              <h3 className="font-semibold">Job Placement</h3>
              <p className="text-sm text-muted-foreground">95% placement assistance and career support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;