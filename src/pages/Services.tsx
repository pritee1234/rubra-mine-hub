
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Activity, Cpu, LineChart, Settings, ClipboardList, CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: React.ReactNode;
  achievements: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceDetail = ({ title, description, achievements, icon, imageUrl }: ServiceDetailProps) => {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-mining-100 p-3 rounded-full mr-4 text-mining-accent">
              {icon}
            </div>
            <h3 className="text-2xl font-display font-medium text-mining-800">{title}</h3>
          </div>
          
          <div className="prose prose-slate max-w-none">
            {description}
          </div>
        </div>
        
        <div className="order-first lg:order-last">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-mining-900/10"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h4 className="text-xl font-display font-medium text-mining-800 mb-6">Proven Success</h4>
        <div className="bg-mining-50 p-6 rounded-lg">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mining-accent mr-3 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services: ServiceDetailProps[] = [
    {
      title: "Safety Culture Support",
      description: (
        <>
          <p className="mb-4">
            At Rubra Mining, we are dedicated to fostering a robust safety culture within your operations. 
            Our comprehensive Safety Culture Support services encompass:
          </p>
          <h4 className="text-lg font-medium mb-2">On-the-Ground Support, Training, and Coaching:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Effective Safety Interactions</li>
            <li>Critical Control Verifications</li>
            <li>Successful Pre-Start Meetings</li>
            <li>Leaders' Engagement in the Field</li>
            <li>Risk Assessments and Development of Controls</li>
          </ul>
          <h4 className="text-lg font-medium mb-2">Incident Management and Safety Plan Implementation:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Conducting/supporting incident investigations with follow-up actions</li>
            <li>Supporting the development and implementation of safety management plans</li>
          </ul>
          <h4 className="text-lg font-medium mb-2">Statutory Support Coverage</h4>
          <p>Providing coverage for mine leadership as Quarry Manager/Senior Site Executive</p>
        </>
      ),
      achievements: [
        "Achieved improved safety performance (AIFR, LTI) at a Large Gold Mine",
        "Recorded significant reduction in significant potential incidents for managed operations",
        "Achieved an impressive 900+ days lost time injury-free days as Ops Manager at a Large Iron Ore Mine",
        "Key member of two leadership teams managing large operations, both honored with CEO Safety Awards (Copper/Gold Mine, Port Operations)",
        "Valuable member of the Critical Risk Management deployment team at operational sites",
        "Significantly improved Employee Net Promoter Score (eNPS) for managed teams and operations"
      ],
      icon: <Shield className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Operational Support",
      description: (
        <>
          <p className="mb-4">
            At Rubra Mining, our Operational Support services employ advanced analytics and technical expertise 
            to thoroughly examine every facet of mine operations throughout the value chain. We leverage these 
            insights to pinpoint real improvements, achieving excellence in performance.
          </p>
          <h4 className="text-lg font-medium mb-2">Key Offerings:</h4>
          <h5 className="text-base font-medium mb-1">Coaching Operations Leaders</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Provide coaching to operations leaders for a deeper technical understanding of mine operations</li>
            <li>Ensure mine plan conformance through targeted guidance</li>
          </ul>
          <h5 className="text-base font-medium mb-1">On-Site Partnering Process</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Undertake on-site partnering to unlock significant value for the mine</li>
            <li>Implement cost reduction or volume uplift programs for tangible results</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Design Sustainable Improvement Programs</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Design processes and key performance indicators for a sustainable improvement program</li>
            <li>Ensure continual enhancement of operational efficiency</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Project Management Resources</h5>
          <ul className="list-disc pl-6">
            <li>Provide coverage and project management resources for mine operations engineering and leadership roles</li>
          </ul>
        </>
      ),
      achievements: [
        "Successfully designed and implemented daily, weekly, and monthly reconciliation processes for the mine value stream at a Tier A Gold Mine",
        "Improved asset capacity utilization, achieving the best production records through debottlenecking and strategy alignment",
        "Introduced "Theory of Constraints" at the operational level for enhanced efficiency",
        "Successfully led the Transformation workstream for the open pit mine, HME maintenance, Mine Technical Services, and Asset and Material Management at a Large-Scale Copper/Gold Mine"
      ],
      icon: <Activity className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1586161483024-7bfa98f3fe18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Autonomy and Analytics Support",
      description: (
        <>
          <p className="mb-4">
            At Rubra Mining, we leverage extensive expertise in autonomous hauling fleet operations, 
            particularly with CAT MineStar and Komatsu Frontrunner systems. Our Autonomy and Analytics 
            Support services are designed to enhance your mining operations by:
          </p>
          <h4 className="text-lg font-medium mb-2">System Optimization</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Identify constraints within autonomous hauling systems</li>
            <li>Develop improvement plans to address constraints</li>
          </ul>
          <h4 className="text-lg font-medium mb-2">Fleet Utilization and Efficiency Improvement</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Enhance concurrent hang/queue management</li>
            <li>Minimize on-haul stoppages due to obstructions</li>
            <li>Reduce truck interchange delays</li>
            <li>Optimize hauling speed</li>
            <li>Minimize bunching and queuing</li>
            <li>Improve overall system productivity</li>
          </ul>
          <h4 className="text-lg font-medium mb-2">Mine Control System Enhancement</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Improve efficiencies of Mine Control systems and processes</li>
          </ul>
          <h4 className="text-lg font-medium mb-2">Asset Performance Improvement</h4>
          <ul className="list-disc pl-6">
            <li>Incorporate autonomous operational data for asset maintenance and defect elimination processes</li>
          </ul>
        </>
      ),
      achievements: [
        "Successfully managed leading utilization and productivity site with the Komatsu Frontrunner system at a Large-Scale Iron Ore Mine",
        "Managed one of the fastest implementations and ramp-ups of the CAT MineStar system at a Large-Scale Deep Pit Gold Mine, achieving the quickest 100Mt moved milestone",
        "Achieved a significant improvement (10%+) in CAT MineStar utilization and productivity within 12 months through debottlenecking and system improvement",
        "Built strong connections with Autonomy OEMs development and Ops support senior leadership team through collaboration, product feature enhancement, and continuous improvement"
      ],
      icon: <Cpu className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Pit Optimisation, Planning and Scheduling",
      description: (
        <>
          <p className="mb-4">
            Welcome to Rubra Mining, where we specialize in optimizing pit design, planning, 
            and scheduling to maximize the economic value of your resources.
          </p>
          <h4 className="text-lg font-medium mb-2">Our Approach</h4>
          <h5 className="text-base font-medium mb-1">Ore Body Understanding</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Thoroughly understand the ore body</li>
            <li>Articulate uncertainty to develop a range of pit limits</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Practical Mine Designs and Sequencing</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Support the development of practical mine designs and sequencing</li>
            <li>Ensure safe and executable mine plans</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Production Plan Development</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Develop production plans at all horizons</li>
            <li>Ensure alignment between the plan and business objectives</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Plan Reviews and Due Diligence</h5>
          <ul className="list-disc pl-6">
            <li>Conduct plan reviews and due diligence</li>
            <li>Articulate risks and opportunities from both operational and technical viewpoints</li>
          </ul>
        </>
      ),
      achievements: [
        "Led the development of process flow-driven mine planning models for short to long term planning to ensure scheduling is user-friendly and supports audits of mine plans",
        "Implemented across short-term and life-of-mine plan horizons across all Pilbara operations of a large iron ore miner (14+ mine operations)",
        "Developed a simulation model to analyze grade conformance for a group of iron ore mines blend",
        "Ascertained the impact of non-conformances on individual mine sites on combined grade conformance",
        "Collaborated with the marketing team on final product conformance and variability analysis",
        "Successfully managed the transition of the long-term planning process from Resource Development to the Technical Services team",
        "Developed and implemented a mine planning framework for 0 to 5-year planning for a group of mines in Pilbara"
      ],
      icon: <LineChart className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1589481169978-f24207db367e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Process and System Design Support",
      description: (
        <>
          <p className="mb-4">
            Our services are designed to drive operational excellence through tailored process and system design solutions.
          </p>
          <h4 className="text-lg font-medium mb-2">Our Services</h4>
          <h5 className="text-base font-medium mb-1">All-Inclusive Process Design</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Utilize operational and technical expertise to design processes that comprehensively deliver business objectives</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Bottleneck Analysis and De-bottlenecking</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Review and analyze existing processes</li>
            <li>Articulate bottlenecks and assist in developing de-bottlenecking processes</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Advanced Data Analytics</h5>
          <ul className="list-disc pl-6">
            <li>Use advanced data analytics to spotlight areas of concern</li>
            <li>Support in designing key performance indicators (KPIs) and subordinate steps to enhance performance</li>
          </ul>
        </>
      ),
      achievements: [
        "Conceptualized and developed a web-based Mine Design Approval System in use across Pilbara operations, which streamlines workflow-managed documentation and approval of mine designs",
        "Managed mine planning tools, processes, and systems for Pilbara operations of a large multi-mine company to provide crucial support to operations and planning deliverables",
        "Developed and embedded processes and systems for technical teams in greenfield operations in India, Australia, and Mongolia",
        "Covered areas such as Mine and Resource Geology, Geotechnical, Mine Planning, Drill & Blast, and Tailings Storage Facility"
      ],
      icon: <Settings className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1563543781-fc865b124677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Project Management",
      description: (
        <>
          <p className="mb-4">
            At Rubra Mining, we are your dedicated partner for a diverse range of projects, 
            whether they are new initiatives, improvement projects, debottlenecking endeavours, 
            or straight problem-solving projects.
          </p>
          <h4 className="text-lg font-medium mb-2">Our Comprehensive Project Management Services:</h4>
          <h5 className="text-base font-medium mb-1">End-to-End Project Management</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Take full responsibility for project management, from ideation/initiation to successful conclusion</li>
            <li>Provide a complete end-to-end, outcome-based project delivery service</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Schedule and Budget Management</h5>
          <ul className="list-disc pl-6 mb-3">
            <li>Ensure projects stay on schedule and on budget</li>
            <li>Identify business opportunities, review feasibilities, and mitigate risks throughout the project lifecycle</li>
          </ul>
          <h5 className="text-base font-medium mb-1">Problem-Solving Support</h5>
          <ul className="list-disc pl-6">
            <li>Provide support for problem-solving at any stage</li>
            <li>Assure clients that potential major issues can be controlled and mitigated</li>
          </ul>
        </>
      ),
      achievements: [
        "Managed the Mine Design Approval System project from ideation to implementation, engaging internal and external stakeholders and vendors for seamless execution",
        "Oversaw the development of mine planning software and process-driven workflows for short and medium-term goals",
        "Managed a technical and operational joint project at a geotechnically challenging copper/gold mine, successfully and safely recovering ore from geotechnically sensitive zones",
        "Facilitated projects as a Transformation lead across the mining value stream for a large mining operation"
      ],
      icon: <ClipboardList className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Our Services"
        subtitle="Comprehensive mining solutions delivered by industry experts"
        fullHeight={false}
        imageUrl="https://images.unsplash.com/photo-1578323851363-1545d114bea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mining-800 mb-6">
              Specialized Services for the Mining Industry
            </h2>
            <p className="text-lg text-mining-600 max-w-3xl">
              At Rubra Mining, we offer a comprehensive suite of specialized services designed to optimize your mining operations and drive sustainable growth. Explore our service offerings below.
            </p>
          </div>

          <Tabs defaultValue="service1" className="w-full">
            <TabsList className="flex flex-wrap mb-8 gap-2">
              <TabsTrigger value="service1" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Safety Culture</span>
              </TabsTrigger>
              <TabsTrigger value="service2" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden md:inline">Operational Support</span>
              </TabsTrigger>
              <TabsTrigger value="service3" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="hidden md:inline">Autonomy & Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="service4" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden md:inline">Pit Optimisation</span>
              </TabsTrigger>
              <TabsTrigger value="service5" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden md:inline">Process Design</span>
              </TabsTrigger>
              <TabsTrigger value="service6" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                <span className="hidden md:inline">Project Management</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="service1">
              <ServiceDetail {...services[0]} />
            </TabsContent>
            <TabsContent value="service2">
              <ServiceDetail {...services[1]} />
            </TabsContent>
            <TabsContent value="service3">
              <ServiceDetail {...services[2]} />
            </TabsContent>
            <TabsContent value="service4">
              <ServiceDetail {...services[3]} />
            </TabsContent>
            <TabsContent value="service5">
              <ServiceDetail {...services[4]} />
            </TabsContent>
            <TabsContent value="service6">
              <ServiceDetail {...services[5]} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Services;
