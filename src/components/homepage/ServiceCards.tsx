import { Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Zero-Friction Developer Experience",
    icon: "sparkles",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    items: [
      "Seamless integration with existing workflows",
      "Intuitive AI-powered interfaces",
    ],
  },
  {
    id: 2,
    title: "Advanced Agentic AI Architecture",
    icon: "sparkles",
    iconColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    items: [
      "Multi-agent systems for complex modernization tasks",
      "Intelligent automation across the development lifecycle",
    ],
  },
  {
    id: 3,
    title: "Deep Domain Expertise",
    icon: "sparkles",
    iconColor: "text-emerald-500",
    dotColor: "bg-emerald-500",
    items: [
      "20+ years of Salesforce and enterprise system experience",
      "Proven track record with 600+ successful project deliveries",
    ],
  },
  {
    id: 4,
    title: "Digital Twin Simulation Capability",
    icon: "sparkles",
    iconColor: "text-purple-500",
    dotColor: "bg-purple-500",
    items: [
      "Risk-free testing of modernization strategies",
      "Predictive analysis for system performance",
    ],
  },
  {
    id: 5,
    title: "Enterprise Design Philosophy",
    icon: "sparkles",
    iconColor: "text-yellow-500",
    dotColor: "bg-yellow-500",
    items: [
      "Built for Fortune 500 compliance requirements",
      "Scalable architecture for global deployments",
    ],
  },
  {
    id: 6,
    title: "Enterprise-Grade Compliance Foundation",
    icon: "sparkles",
    iconColor: "text-red-500",
    dotColor: "bg-red-500",
    items: [
      "Security-first approach to AI modernization",
      "Industry-standard compliance frameworks",
    ],
  },
];

export default function ServiceCards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-10 py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-50 rounded-md p-10 relative">
            {/* Icon */}
            <div className="absolute top-6 right-6">
              <div
                className={`w-10 h-10 ${service.iconColor} bg-white rounded-lg flex items-center justify-center shadow-sm`}
              >
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl text-gray-900  pr-16 w-4/5">
              {service.title}
            </h3>

            {/* Items List */}
            <ul className="space-y-3 mt-20">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div
                    className={`w-2 h-2 ${service.dotColor} rounded-full flex-shrink-0 mt-2`}
                  />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
