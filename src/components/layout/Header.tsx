import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import kp from "@/assets/logo.jpeg";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Mentors", path: "/mentors" },
    { name: "Contact", path: "/contact" },
    { name: "Our Services", path: "/services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
  {/* Circular Logo */}
  <div className="relative w-12 h-12 rounded-full overflow-hidden
                  shadow-glow group-hover:shadow-hover
                  transition-all duration-300
                  bg-white border border-primary/30
                  flex items-center justify-center">
    <img
      src={kp}
      alt="Focus CodeLabs Logo"
      className="w-full h-full object-cover"
    />
    <Sparkles className="h-3 w-3 text-primary absolute top-0.5 right-0.5 animate-pulse" />
  </div>

  {/* Text */}
  <div className="flex flex-col">
    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
      Focus CodeLabs
    </span>
    <span className="text-xs text-muted-foreground -mt-1">
      Future-Ready Skills
    </span>
  </div>
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="gradient-primary text-white hover:shadow-glow transition-all duration-300 animate-pulse-glow">
              <Link to="/courses">
                <Sparkles className="mr-2 h-4 w-4" />
                Start Learning
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-gradient-card rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-secondary/30 ${
                    isActive(item.path) ? "text-primary bg-secondary/20" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="gradient-primary text-white w-full mx-4 animate-pulse-glow">
                <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Learning
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;