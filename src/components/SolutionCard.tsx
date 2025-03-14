
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  title: string;
  description: string;
  direction?: "left" | "right";
  imageUrl?: string;
  index: number;
}

const SolutionCard = ({ 
  title, 
  description, 
  direction = "left", 
  imageUrl = "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  index
}: SolutionCardProps) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center gap-8 lg:gap-16 my-16",
      direction === "right" && "lg:flex-row-reverse"
    )}>
      <div className={cn(
        "w-full lg:w-1/2 opacity-0",
        direction === "left" ? "animate-fadeInLeft" : "animate-fadeInRight"
      )}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={imageUrl} 
              alt={title} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className={cn(
            "absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t",
            direction === "left" ? "from-mining-accent/20 to-transparent" : "from-mining-800/20 to-transparent"
          )}></div>
        </div>
      </div>

      <div className={cn(
        "w-full lg:w-1/2 opacity-0",
        direction === "left" ? "animate-fadeInRight" : "animate-fadeInLeft"
      )}
      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
      >
        <h3 className="text-2xl font-display font-medium text-mining-800 mb-4">
          {title}
        </h3>
        <p className="text-mining-600">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
