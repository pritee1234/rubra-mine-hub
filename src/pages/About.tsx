
import Hero from "@/components/Hero";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "CAPABILITY FOCUS",
      description: "Crafting an optimized value proposition across all planning horizons for sustainable business goals."
    },
    {
      title: "INTEGRATED",
      description: "Providing a holistic suite of mining services under one roof."
    },
    {
      title: "AGILE & INNOVATIVE",
      description: "Embracing agility and prioritizing speed in innovation."
    },
    {
      title: "INTELLIGENT",
      description: "Infusing decision-making steps into operational routines for swift, optimized decisions."
    },
    {
      title: "CUSTOMER-CENTRIC",
      description: "Leveraging our expertise, tools, and resources for a meaningful impact and heightened customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="About Us"
        subtitle="Empowering Your Success Through Unmatched Efficiency"
        fullHeight={false}
        imageUrl="https://images.unsplash.com/photo-1622037022824-0c71d488dc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mt-2 mb-6">
                Leading the Way in Mining Excellence
              </h2>
              
              <div className="prose prose-slate max-w-none">
                <p>
                  Our commitment is to redefine the standard, offering tailor-made, comprehensive solutions 
                  driven by a seasoned team of professionals with unparalleled expertise in commodities 
                  such as Coal, Iron Ore, Copper, and Gold.
                </p>
                <p>
                  With decades of combined experience in the mining industry, our team brings deep 
                  expertise and practical knowledge to every project. We understand the unique challenges 
                  of mining operations and are dedicated to providing solutions that drive efficiency, 
                  safety, and profitability.
                </p>
                <p>
                  We take pride in our approach to problem-solving, combining technical excellence 
                  with operational practicality to deliver results that make a real difference to our clients.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="About Rubra Mining" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-mining-accent rounded-lg opacity-20"></div>
                <div className="absolute -top-8 -right-8 w-40 h-40 border-4 border-mining-accent rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-16 bg-mining-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mt-2 mb-8">
            Our Goal
          </h2>
          
          <p className="text-xl text-mining-700 max-w-3xl mx-auto">
            Supporting clients in making complex, value-chain-wide decisions at speed to deliver optimal outcomes.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-mining-accent text-sm font-medium uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mt-2">
              Guiding Values
            </h2>
            <div className="w-16 h-1 bg-mining-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-white border border-mining-200 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-mining-50 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-mining-accent" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-mining-800">
                    {value.title}
                  </h3>
                </div>
                <p className="text-mining-600 pl-11">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mining-800 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Ready to Transform Your Mining Operations?
          </h2>
          <p className="text-xl text-mining-100 max-w-3xl mx-auto mb-10">
            Partner with Rubra Mining to access our expertise and innovative solutions 
            that drive efficiency, safety, and productivity in your mining operations.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 text-sm font-medium text-mining-900 bg-mining-accent rounded-md hover:bg-mining-accent/90 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
