
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  serviceId?: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, serviceId }: ServiceCardProps) => {
  const navigate = useNavigate();
  
  const handleServiceClick = () => {
    if (serviceId) {
      navigate(`/services?tab=${serviceId}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <div 
      className="service-card opacity-0 animate-fadeInUp cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onClick={handleServiceClick}
    >
      {icon && <div className="text-mining-600 mb-4">{icon}</div>}
      <h3 className="text-xl font-display font-medium text-mining-800 mb-3">
        {title}
      </h3>
      <p className="text-mining-600 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="learn-more-link group text-mining-600">
        LEARN MORE
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default ServiceCard;
