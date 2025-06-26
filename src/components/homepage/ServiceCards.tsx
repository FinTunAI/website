import { Sparkles } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Application development",
    icon: "sparkles",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    items: ["Frontend bugs and edge cases", "Unit and E2E testing", "Building SaaS integrations"],
  },
  {
    id: 2,
    title: "Bug & issue triage",
    icon: "sparkles",
    iconColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    items: ["Automated on-call response", "Ticket resolution", "CI/CD autotriage"],
  },
  {
    id: 3,
    title: "And many others",
    icon: "sparkles",
    iconColor: "text-emerald-500",
    dotColor: "bg-emerald-500",
    items: [
      "Technical debt",
      "Performance optimization",
      "Scraping",
      "New repo onboarding",
      "Maintaining documentation",
    ],
  },
]

export default function ServiceCards() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-50 rounded-2xl p-6 relative">
            {/* Icon */}
            <div className="absolute top-6 right-6">
              <div
                className={`w-10 h-10 ${service.iconColor} bg-white rounded-lg flex items-center justify-center shadow-sm`}
              >
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-medium text-gray-900 mb-6 pr-16">{service.title}</h3>

            {/* Items List */}
            <ul className="space-y-3">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 ${service.dotColor} rounded-full flex-shrink-0 mt-2`} />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
