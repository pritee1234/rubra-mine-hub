
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <span className="text-2xl font-display font-bold text-mining-800">
            Rubra
            <span className="text-mining-accent">Mining</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors hover:text-mining-accent",
                location.pathname === link.path
                  ? "text-mining-accent"
                  : "text-mining-700"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-mining-accent transform transition-transform duration-300",
                  location.pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                )}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-mining-800" />
          ) : (
            <Menu className="h-6 w-6 text-mining-800" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-0 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-out-expo md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xl font-medium transition-colors hover:text-mining-accent",
                location.pathname === link.path
                  ? "text-mining-accent"
                  : "text-mining-800"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
