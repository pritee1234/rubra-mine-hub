
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  centerText?: boolean;
  imageUrl?: string;
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  showCta = false,
  ctaText = "Learn More",
  ctaLink = "/services",
  centerText = true,
  imageUrl = "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=90",
  fullHeight = true,
}: HeroProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        fullHeight ? "h-screen" : "py-32"
      } flex items-center`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mining-900/60 z-10"></div>
        <img
          src={imageUrl}
          alt="Hero Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div
          className={`max-w-4xl ${
            centerText ? "mx-auto text-center" : "text-left"
          }`}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-lg md:text-xl text-white/90 mb-8 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              {subtitle}
            </p>
          )}
          {showCta && (
            <div
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-mining-900 bg-mining-accent rounded-md hover:bg-mining-accent/90 transition-colors duration-300"
              >
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator for full height heroes */}
      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-pulse">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-[pulse_1.5s_infinite]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
