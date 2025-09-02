import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Globe, MapPin, Clock, MessageCircle, Send, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our courses? Need guidance on your learning path? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">8630539143</p>
                  <p className="text-sm text-muted-foreground">9557384195</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground break-all">focuscodelabs@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Website</h3>
                  <p className="text-sm text-muted-foreground">focuscodelab.in</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 8 PM</p>
                  <p className="text-sm text-muted-foreground">Sun: 10 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="mr-3 text-primary" size={28} />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your query..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-white hover:shadow-hover">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Quick Contact Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Call for Immediate Help</p>
                      <p className="text-sm text-muted-foreground">Best for urgent queries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Email for Detailed Queries</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Send className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Join Our Telegram Group</p>
                      <p className="text-sm text-muted-foreground">Connect with other students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Follow Us on Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a
                      href="https://www.instagram.com/focus_codelabs?igsh=Z3lmcXNwY3d6MzNx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-hover transition-all duration-300"
                    >
                      <Instagram size={24} />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <p className="text-sm opacity-90">Daily coding tips</p>
                      </div>
                    </a>

                    <a
                      href="https://youtube.com/@focuscodelabs?si=MqBo-e9B-hsaDCpF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-hover transition-all duration-300"
                    >
                      <Youtube size={24} />
                      <div>
                        <p className="font-medium">YouTube</p>
                        <p className="text-sm opacity-90">Free tutorials</p>
                      </div>
                    </a>

                    <a
                      href="https://t.me/+K7RZBun1LeQ5ZmY1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-hover transition-all duration-300"
                    >
                      <Send size={24} />
                      <div>
                        <p className="font-medium">Telegram</p>
                        <p className="text-sm opacity-90">Community chat</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you offer free trial classes?</h4>
                    <p className="text-sm text-muted-foreground">Yes! We offer a free demo class for all our courses. Contact us to book yours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What's the typical response time?</h4>
                    <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours, usually much faster.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you provide placement assistance?</h4>
                    <p className="text-sm text-muted-foreground">Absolutely! We have a 95% placement success rate with our comprehensive job support.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;