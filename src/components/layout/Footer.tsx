import { Link } from "react-router-dom";
import { Code, Instagram, Youtube, Send, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Focus CodeLabs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering students with future-ready coding skills through expert mentorship and practical projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link to="/mentors" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentors
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>8630539143 / 9557384195</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>focuscodelabs@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Globe size={16} />
                <span>focuscodelab.in</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/focus_codelabs?igsh=Z3lmcXNwY3d6MzNx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@focuscodelabs?si=MqBo-e9B-hsaDCpF"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://t.me/+K7RZBun1LeQ5ZmY1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Focus CodeLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;