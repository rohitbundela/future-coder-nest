import { Link } from "react-router-dom";
import { Phone, Mail, Globe, Sparkles, Code } from "lucide-react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="gradient-card border-t border-border/50 relative overflow-hidden">
      {/* Decorative Background Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl">💻</div>
        <div className="absolute top-20 right-20 text-3xl">🚀</div>
        <div className="absolute bottom-20 left-20 text-4xl">⚡</div>
        <div className="absolute bottom-10 right-10 text-3xl">🎯</div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary p-3 rounded-xl shadow-glow relative">
                <Code className="h-6 w-6 text-white" />
                <Sparkles className="h-3 w-3 text-white/80 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Focus CodeLabs</h3>
                <p className="text-xs text-muted-foreground">Future-Ready Skills</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              Empowering students with cutting-edge coding skills from basics to advanced placement preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Mentors", path: "/mentors" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <div className="gradient-secondary p-2 rounded-lg">
                  <Phone size={16} className="text-white" />
                </div>
                <span>8630539143</span>
              </li>

              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <div className="gradient-accent p-2 rounded-lg">
                  <Mail size={16} className="text-white" />
                </div>
                <span>support@focuscodelabs.com</span>
              </li>

              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <div className="gradient-primary p-2 rounded-lg">
                  <Globe size={16} className="text-white" />
                </div>
                <span>focuscodelabs.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media (REALISTIC ICONS) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>

            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/focus_codelabs?igsh=Z3lmcXNwY3d6MzNx"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]
                  p-3 rounded-full text-white
                  hover:shadow-[0_0_20px_rgba(221,42,123,0.8)]
                  transition-all duration-300 group
                "
              >
                <FaInstagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@focuscodelabs?si=MqBo-e9B-hsaDCpF"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#FF0000]
                  p-3 rounded-full text-white
                  hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]
                  transition-all duration-300 group
                "
              >
                <FaYoutube size={22} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/+K7RZBun1LeQ5ZmY1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#0088cc]
                  p-3 rounded-full text-white
                  hover:shadow-[0_0_20px_rgba(0,136,204,0.8)]
                  transition-all duration-300 group
                "
              >
                <FaTelegramPlane size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Join our community for coding tips, updates, and exclusive content!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Focus CodeLabs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
