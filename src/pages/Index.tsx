
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SolutionCard from "@/components/SolutionCard";
import { Shield, Activity, Cpu, LineChart, Settings, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Holistic Mining Expertise",
    description: "We deliver not just solutions but holistic mining expertise, uniquely positioned to offer comprehensive support in mining leadership, operations, and technical proficiency.",
    imageUrl: "https://images.unsplash.com/photo-1586161483024-7bfa98f3fe18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Autonomy Expertise",
    description: "Autonomy Expertise with Proven Results: Our team possesses extensive autonomy experience, with proven success in operating both CAT and Komatsu systems.",
    imageUrl: "https://images.unsplash.com/photo-1567789884554-0b844b5ba8a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Operational Brilliance",
    description: "Experience the benefits of our robust mining technical and operational prowess, fortified by extensive hands-on experience across various functions. We actively support operational teams in delivering heightened safety, production, and productivity.",
    imageUrl: "https://images.unsplash.com/photo-1493246318656-5bfd4256e04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Industry Insights and Collaboration",
    description: "Leveraging an extensive network in the industry, we draw on invaluable insights, resources, and solutions. We seamlessly integrate the work of operational and technical teams, fostering collaboration that enhances efficiency and effectiveness in your mining operations.",
    imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

const services = [
  {
    title: "Safety Culture Support",
    description: "Transform safety culture with specialized training for impactful interactions.",
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: "Operational Support",
    description: "Enhance mine operations with advanced analytics and coaching for sustainable improvements.",
    icon: <Activity className="h-8 w-8" />
  },
  {
    title: "Autonomy and Analytics Support",
    description: "Revolutionize fleet operations with expertise in autonomous hauling, optimizing efficiency and performance.",
    icon: <Cpu className="h-8 w-8" />
  },
  {
    title: "Pit Optimisation, Planning and Scheduling",
    description: "Maximize economic value through expert ore body comprehension, shaping practical mine designs aligned with business goals.",
    icon: <LineChart className="h-8 w-8" />
  },
  {
    title: "Process and System Design Support",
    description: "Ignite operational excellence with precise solutions, reshaping efficiency and innovation.",
    icon: <Settings className="h-8 w-8" />
  },
  {
    title: "Project Management",
    description: "Empower projects with end-to-end support for on-time, on-budget delivery and effective problem-solving.",
    icon: <ClipboardList className="h-8 w-8" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Extracting Efficiency, Maximising Results"
        subtitle="Endeavours to be at the forefront of the mining industry, offering comprehensive solutions. Our seasoned team of professionals brings forth a wealth of multidisciplinary experience in various commodities such as Coal, Iron Ore, Copper, and Gold."
        showCta={true}
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      {/* Services Section */}
      <section className="py-20 bg-mining-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mt-2">Our Services</h2>
            <div className="w-16 h-1 bg-mining-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">How We Help</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mt-2">Our Solution</h2>
            <div className="w-16 h-1 bg-mining-accent mx-auto mt-4"></div>
          </div>

          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.title}
              title={solution.title}
              description={solution.description}
              direction={index % 2 === 0 ? "left" : "right"}
              imageUrl={solution.imageUrl}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-mining-800 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">Our Difference</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">Why Choose Rubra Mining?</h2>
            <div className="w-16 h-1 bg-mining-accent mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-mining-100 text-center opacity-0 animate-fadeInUp">
              At Rubra Mining Services, we transcend the conventional, going beyond service provision to become your strategic partners in achieving operational excellence and unparalleled growth in the dynamic mining industry. Choose us to experience the seamless integration of expertise, innovation, and results-driven solutions that will propel your mining operations to new heights.
            </p>

            <div className="mt-12 text-center opacity-0 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Link to="/about" className="inline-flex items-center px-6 py-3 text-sm font-medium text-mining-900 bg-mining-accent rounded-md hover:bg-mining-accent/90 transition-colors duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
