// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Check, ArrowRight, Zap, Shield, Users, Star, Sparkles, Crown, Building, Code, Cpu, Globe } from "lucide-react"

// export default function Pricing() {
//   const [isAnnual, setIsAnnual] = useState(false)

//   const factoringPlans = [
//     {
//       name: "Freemium",
//       price: "Free",
//       description: "Perfect for exploring our platform",
//       icon: <Sparkles className="w-6 h-6" />,
//       features: [
//         "Limited access to core features",
//         "Basic code analysis tools",
//         "Community support",
//         "Perfect for evaluation projects",
//       ],
//       cta: "Start Free",
//       popular: false,
//       gradient: "from-gray-500 to-gray-600",
//     },
//     {
//       name: "Starter",
//       price: isAnnual ? "$79" : "$99",
//       originalPrice: isAnnual ? "$99" : null,
//       period: "per month / per user",
//       description: "Ideal for small teams or pilot projects",
//       icon: <Zap className="w-6 h-6" />,
//       features: [
//         "Basic assisted factoring capabilities",
//         "Code analysis and refactoring tools",
//         "Standard compliance frameworks",
//         "Email support",
//         "Up to 5 concurrent projects",
//       ],
//       cta: "Start Trial",
//       popular: false,
//       gradient: "from-blue-500 to-blue-600",
//     },
//     {
//       name: "Professional",
//       price: isAnnual ? "$399" : "$499",
//       originalPrice: isAnnual ? "$499" : null,
//       period: "per month / per user",
//       description: "Mid-sized teams with active modernization",
//       icon: <Star className="w-6 h-6" />,
//       features: [
//         "Advanced AI-powered refactoring",
//         "Digital twin simulation capabilities",
//         "Enhanced compliance and security",
//         "Priority support",
//         "Unlimited projects",
//         "Advanced analytics and reporting",
//       ],
//       cta: "Start Trial",
//       popular: true,
//       gradient: "from-purple-500 to-purple-600",
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       description: "Large enterprises with complex requirements",
//       icon: <Crown className="w-6 h-6" />,
//       features: [
//         "Unlimited usage and dedicated support",
//         "On-premise deployment options",
//         "Custom integrations and workflows",
//         "Advanced security and compliance",
//         "Dedicated customer success manager",
//         "24/7 enterprise support",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//       gradient: "from-gold-500 to-yellow-600",
//     },
//   ]

//   const codingPlans = [
//     {
//       name: "Freemium",
//       price: "Free",
//       description: "Perfect for individual developers",
//       icon: <Code className="w-6 h-6" />,
//       features: [
//         "Limited access to core features",
//         "Basic code generation capabilities",
//         "Community support",
//         "Perfect for individual developers",
//       ],
//       cta: "Start Free",
//       popular: false,
//       gradient: "from-gray-500 to-gray-600",
//     },
//     {
//       name: "Starter",
//       price: isAnnual ? "$20" : "$25",
//       originalPrice: isAnnual ? "$25" : null,
//       period: "per month / per user",
//       description: "Ideal for small teams or pilots",
//       icon: <Zap className="w-6 h-6" />,
//       features: [
//         "Enhanced code generation",
//         "Basic collaboration tools",
//         "Standard integrations",
//         "Email support",
//         "Up to 10 repositories",
//       ],
//       cta: "Start Trial",
//       popular: false,
//       gradient: "from-green-500 to-green-600",
//     },
//     {
//       name: "Professional",
//       price: isAnnual ? "$32" : "$40",
//       originalPrice: isAnnual ? "$40" : null,
//       period: "per month / per user",
//       description: "Growing development teams",
//       icon: <Star className="w-6 h-6" />,
//       features: [
//         "Advanced AI code generation",
//         "Real-time collaboration features",
//         "Multi-agent workflows",
//         "Priority support",
//         "Unlimited repositories",
//         "Advanced debugging tools",
//       ],
//       cta: "Start Trial",
//       popular: true,
//       gradient: "from-purple-500 to-purple-600",
//     },
//     {
//       name: "Teams",
//       price: "Custom",
//       description: "Large development teams",
//       icon: <Building className="w-6 h-6" />,
//       features: [
//         "Unlimited usage and dedicated support",
//         "On-premise deployment options",
//         "Custom AI model training",
//         "Advanced security features",
//         "Team management tools",
//         "Analytics and insights dashboard",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//       gradient: "from-indigo-500 to-indigo-600",
//     },
//   ]

//   const addOns = [
//     {
//       name: "Custom AI Training",
//       description: "Train AI models on your specific codebase",
//       icon: <Cpu className="w-6 h-6" />,
//       features: ["Improved accuracy", "Faster adaptation", "Enhanced context understanding"],
//     },
//     {
//       name: "SLA Support",
//       description: "Guaranteed response times and priority resolution",
//       icon: <Shield className="w-6 h-6" />,
//       features: ["Priority issue resolution", "Dedicated support channels", "Performance guarantees"],
//     },
//     {
//       name: "Compliance Packs",
//       description: "Industry-specific compliance frameworks",
//       icon: <Check className="w-6 h-6" />,
//       features: ["Automated compliance checking", "Regulatory reporting", "Audit trail capabilities"],
//     },
//     {
//       name: "White-Labeling",
//       description: "Custom branding and UI for your organization",
//       icon: <Globe className="w-6 h-6" />,
//       features: ["Custom branding", "Seamless integration", "Custom domain options"],
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
//       {/* Navigation */}
//       <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">N</span>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 nCoder.ai
//               </span>
//             </div>
//             <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="animate-fade-in-up">
//             <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100 animate-pulse">
//               Flexible Pricing Plans
//             </Badge>
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               Choose Your{" "}
//               <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 AI-Driven
//               </span>{" "}
//               Modernization Path
//             </h1>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
//               Transform your legacy systems with flexible pricing plans designed for every stage of your modernization
//               journey.
//             </p>
//           </div>

//           {/* Annual/Monthly Toggle */}
//           <div className="flex items-center justify-center mb-12 animate-fade-in-up animation-delay-200">
//             <span className={`mr-3 ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
//             <button
//               onClick={() => setIsAnnual(!isAnnual)}
//               className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                 isAnnual ? "bg-purple-600" : "bg-gray-300"
//               }`}
//             >
//               <span
//                 className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                   isAnnual ? "translate-x-6" : "translate-x-1"
//                 }`}
//               />
//             </button>
//             <span className={`ml-3 ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>
//               Annual
//               <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Plans */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <Tabs defaultValue="factoring" className="w-full">
//             <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
//               <TabsTrigger value="factoring" className="text-sm">
//                 Assisted Factoring
//               </TabsTrigger>
//               <TabsTrigger value="coding" className="text-sm">
//                 Assisted Coding
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="factoring" className="animate-fade-in">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Legacy Modernization</h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                   Transform outdated legacy applications into AI-native platforms with automated code analysis,
//                   refactoring, and digital twin simulation capabilities.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {factoringPlans.map((plan, index) => (
//                   <Card
//                     key={plan.name}
//                     className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
//                       plan.popular ? "ring-2 ring-purple-500 shadow-xl scale-105" : ""
//                     } animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {plan.popular && (
//                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                         <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
//                           Most Popular
//                         </Badge>
//                       </div>
//                     )}
//                     <CardHeader className="text-center pb-4">
//                       <div
//                         className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white`}
//                       >
//                         {plan.icon}
//                       </div>
//                       <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
//                       <div className="mt-4">
//                         <div className="flex items-center justify-center">
//                           {plan.originalPrice && (
//                             <span className="text-sm text-gray-500 line-through mr-2">{plan.originalPrice}</span>
//                           )}
//                           <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
//                         </div>
//                         {plan.period && <p className="text-sm text-gray-600 mt-1">{plan.period}</p>}
//                       </div>
//                       <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       <ul className="space-y-3 mb-6">
//                         {plan.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-start">
//                             <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-gray-600">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <Button
//                         className={`w-full ${
//                           plan.popular
//                             ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                             : "bg-gray-900 hover:bg-gray-800"
//                         }`}
//                       >
//                         {plan.cta}
//                         <ArrowRight className="w-4 h-4 ml-2" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="coding" className="animate-fade-in">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Augmented Development</h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                   Accelerate development with context-aware code generation, multi-agent workflows, and real-time
//                   collaboration tools.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {codingPlans.map((plan, index) => (
//                   <Card
//                     key={plan.name}
//                     className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
//                       plan.popular ? "ring-2 ring-purple-500 shadow-xl scale-105" : ""
//                     } animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {plan.popular && (
//                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                         <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
//                           Most Popular
//                         </Badge>
//                       </div>
//                     )}
//                     <CardHeader className="text-center pb-4">
//                       <div
//                         className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white`}
//                       >
//                         {plan.icon}
//                       </div>
//                       <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
//                       <div className="mt-4">
//                         <div className="flex items-center justify-center">
//                           {plan.originalPrice && (
//                             <span className="text-sm text-gray-500 line-through mr-2">{plan.originalPrice}</span>
//                           )}
//                           <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
//                         </div>
//                         {plan.period && <p className="text-sm text-gray-600 mt-1">{plan.period}</p>}
//                       </div>
//                       <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       <ul className="space-y-3 mb-6">
//                         {plan.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-start">
//                             <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-gray-600">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <Button
//                         className={`w-full ${
//                           plan.popular
//                             ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                             : "bg-gray-900 hover:bg-gray-800"
//                         }`}
//                       >
//                         {plan.cta}
//                         <ArrowRight className="w-4 h-4 ml-2" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Premium Add-ons */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Premium Add-Ons</h2>
//             <p className="text-xl text-gray-600">Available for All Plans</p>
//             <p className="text-lg text-gray-600 mt-2">
//               Enhance your modernization and development capabilities with specialized add-ons
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {addOns.map((addon, index) => (
//               <Card
//                 key={addon.name}
//                 className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader className="text-center">
//                   <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
//                     {addon.icon}
//                   </div>
//                   <CardTitle className="text-lg font-bold">{addon.name}</CardTitle>
//                   <p className="text-sm text-gray-600">{addon.description}</p>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     {addon.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-sm text-gray-600">
//                         <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Value Proposition */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose nCoder.ai?</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in-up">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
//                   <Zap className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible & Scalable</h3>
//                 <p className="text-gray-600 text-sm">
//                   Start with freemium plans and scale as your needs grow. No vendor lock-in.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in-up animation-delay-100">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
//                   <Star className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Value-Driven</h3>
//                 <p className="text-gray-600 text-sm">
//                   30-50% faster modernization, 3x faster development, 60% fewer bugs.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in-up animation-delay-200">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
//                   <Shield className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise-Ready</h3>
//                 <p className="text-gray-600 text-sm">
//                   Built for all sizes, from startups to Fortune 500, with security at every level.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in-up animation-delay-300">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
//                   <Check className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
//                 <p className="text-gray-600 text-sm">
//                   No hidden fees, clear structure, and predictable costs that scale with usage.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
//           </div>

//           <div className="space-y-8">
//             {[
//               {
//                 q: "What's included in the Freemium plans?",
//                 a: "Our freemium plans provide limited access to core features, allowing you to experience our platform's capabilities before committing to a paid plan. Perfect for evaluation and small proof-of-concept projects.",
//               },
//               {
//                 q: "Can I switch between plans?",
//                 a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
//               },
//               {
//                 q: "What's the difference between Assisted Factoring and Assisted Coding?",
//                 a: "Assisted Factoring focuses on modernizing existing legacy systems, while Assisted Coding accelerates new development with AI-augmented tools.",
//               },
//               {
//                 q: "Is on-premise deployment available?",
//                 a: "Yes, on-premise deployment is available for Enterprise and Teams plans. Contact us for specific requirements and pricing.",
//               },
//             ].map((faq, index) => (
//               <Card
//                 key={index}
//                 className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardContent className="p-0">
//                   <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
//                   <p className="text-gray-600">{faq.a}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//         <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-xl mb-12 opacity-90">
//             Transform your legacy systems today with nCoder.ai's AI-driven modernization platform
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-colors">
//               <CardContent className="p-0 text-center">
//                 <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
//                 <h3 className="text-lg font-bold mb-2">Start Your Free Trial</h3>
//                 <p className="text-sm opacity-90 mb-4">Experience AI-driven modernization with our freemium plans</p>
//                 <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full">Start Free Trial</Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-colors">
//               <CardContent className="p-0 text-center">
//                 <Users className="w-12 h-12 mx-auto mb-4 text-white" />
//                 <h3 className="text-lg font-bold mb-2">Schedule a Demo</h3>
//                 <p className="text-sm opacity-90 mb-4">See how nCoder.ai can transform your legacy systems</p>
//                 <Button
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-purple-600 w-full bg-transparent"
//                 >
//                   Book Demo
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-colors">
//               <CardContent className="p-0 text-center">
//                 <Building className="w-12 h-12 mx-auto mb-4 text-white" />
//                 <h3 className="text-lg font-bold mb-2">Enterprise Consultation</h3>
//                 <p className="text-sm opacity-90 mb-4">Get custom pricing and implementation strategies</p>
//                 <Button
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-purple-600 w-full bg-transparent"
//                 >
//                   Contact Sales
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

     
//     </div>
//   )
// }
















// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Check, ArrowRight, Zap, Shield, Users, Star, Sparkles, Crown, Building, Code, Cpu, Globe } from "lucide-react"

// const BorderBeam = ({ children, className = "", delay = 0 }) => {
//   return (
//     <div className={`relative overflow-hidden rounded-2xl ${className}`}>
//       <div 
//         className="absolute inset-0 rounded-2xl opacity-60"
//         style={{
//           background: `linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent), linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)`,
//           backgroundSize: '200% 100%',
//           animation: `borderBeam 3s linear infinite ${delay}s`,
//         }}
//       />
//       <div className="relative z-10 bg-white rounded-2xl p-[1px]">
//         <div className="bg-white rounded-2xl h-full">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }

// const FloatingElements = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-10 animate-float" />
//       <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-float-delayed" />
//       <div className="absolute bottom-20 left-20 w-16 h-16 bg-indigo-200 rounded-full opacity-10 animate-float" />
//       <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-10 animate-float-delayed" />
//     </div>
//   )
// }

// const GlowingOrb = ({ className, color }) => (
//   <div 
//     className={`absolute rounded-full opacity-20 blur-xl ${className}`} 
//     style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }} 
//   />
// )

// export default function Pricing() {
//   const [isAnnual, setIsAnnual] = useState(false)
//   const [activeTab, setActiveTab] = useState("factoring")
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   const factoringPlans = [
//     {
//       name: "Freemium",
//       price: "Free",
//       description: "Perfect for exploring our platform",
//       icon: <Sparkles className="w-6 h-6" />,
//       features: [
//         "Limited access to core features",
//         "Basic code analysis tools",
//         "Community support",
//         "Perfect for evaluation projects",
//       ],
//       cta: "Start Free",
//       popular: false,
//       gradient: "from-slate-600 to-slate-700",
//       glowColor: "#64748b",
//     },
//     {
//       name: "Starter",
//       price: isAnnual ? "$79" : "$99",
//       originalPrice: isAnnual ? "$99" : null,
//       period: "per month / per user",
//       description: "Ideal for small teams or pilot projects",
//       icon: <Zap className="w-6 h-6" />,
//       features: [
//         "Basic assisted factoring capabilities",
//         "Code analysis and refactoring tools",
//         "Standard compliance frameworks",
//         "Email support",
//         "Up to 5 concurrent projects",
//       ],
//       cta: "Start Trial",
//       popular: false,
//       gradient: "from-blue-600 to-cyan-600",
//       glowColor: "#3b82f6",
//     },
//     {
//       name: "Professional",
//       price: isAnnual ? "$399" : "$499",
//       originalPrice: isAnnual ? "$499" : null,
//       period: "per month / per user",
//       description: "Mid-sized teams with active modernization",
//       icon: <Star className="w-6 h-6" />,
//       features: [
//         "Advanced AI-powered refactoring",
//         "Digital twin simulation capabilities",
//         "Enhanced compliance and security",
//         "Priority support",
//         "Unlimited projects",
//         "Advanced analytics and reporting",
//       ],
//       cta: "Start Trial",
//       popular: true,
//       gradient: "from-purple-600 to-pink-600",
//       glowColor: "#a855f7",
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       description: "Large enterprises with complex requirements",
//       icon: <Crown className="w-6 h-6" />,
//       features: [
//         "Unlimited usage and dedicated support",
//         "On-premise deployment options",
//         "Custom integrations and workflows",
//         "Advanced security and compliance",
//         "Dedicated customer success manager",
//         "24/7 enterprise support",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//       gradient: "from-amber-500 to-orange-600",
//       glowColor: "#f59e0b",
//     },
//   ]

//   const codingPlans = [
//     {
//       name: "Freemium",
//       price: "Free",
//       description: "Perfect for individual developers",
//       icon: <Code className="w-6 h-6" />,
//       features: [
//         "Limited access to core features",
//         "Basic code generation capabilities",
//         "Community support",
//         "Perfect for individual developers",
//       ],
//       cta: "Start Free",
//       popular: false,
//       gradient: "from-slate-600 to-slate-700",
//       glowColor: "#64748b",
//     },
//     {
//       name: "Starter",
//       price: isAnnual ? "$20" : "$25",
//       originalPrice: isAnnual ? "$25" : null,
//       period: "per month / per user",
//       description: "Ideal for small teams or pilots",
//       icon: <Zap className="w-6 h-6" />,
//       features: [
//         "Enhanced code generation",
//         "Basic collaboration tools",
//         "Standard integrations",
//         "Email support",
//         "Up to 10 repositories",
//       ],
//       cta: "Start Trial",
//       popular: false,
//       gradient: "from-emerald-600 to-teal-600",
//       glowColor: "#059669",
//     },
//     {
//       name: "Professional",
//       price: isAnnual ? "$32" : "$40",
//       originalPrice: isAnnual ? "$40" : null,
//       period: "per month / per user",
//       description: "Growing development teams",
//       icon: <Star className="w-6 h-6" />,
//       features: [
//         "Advanced AI code generation",
//         "Real-time collaboration features",
//         "Multi-agent workflows",
//         "Priority support",
//         "Unlimited repositories",
//         "Advanced debugging tools",
//       ],
//       cta: "Start Trial",
//       popular: true,
//       gradient: "from-purple-600 to-pink-600",
//       glowColor: "#a855f7",
//     },
//     {
//       name: "Teams",
//       price: "Custom",
//       description: "Large development teams",
//       icon: <Building className="w-6 h-6" />,
//       features: [
//         "Unlimited usage and dedicated support",
//         "On-premise deployment options",
//         "Custom AI model training",
//         "Advanced security features",
//         "Team management tools",
//         "Analytics and insights dashboard",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//       gradient: "from-indigo-600 to-purple-600",
//       glowColor: "#6366f1",
//     },
//   ]

//   const addOns = [
//     {
//       name: "Custom AI Training",
//       description: "Train AI models on your specific codebase",
//       icon: <Cpu className="w-6 h-6" />,
//       features: ["Improved accuracy", "Faster adaptation", "Enhanced context understanding"],
//     },
//     {
//       name: "SLA Support",
//       description: "Guaranteed response times and priority resolution",
//       icon: <Shield className="w-6 h-6" />,
//       features: ["Priority issue resolution", "Dedicated support channels", "Performance guarantees"],
//     },
//     {
//       name: "Compliance Packs",
//       description: "Industry-specific compliance frameworks",
//       icon: <Check className="w-6 h-6" />,
//       features: ["Automated compliance checking", "Regulatory reporting", "Audit trail capabilities"],
//     },
//     {
//       name: "White-Labeling",
//       description: "Custom branding and UI for your organization",
//       icon: <Globe className="w-6 h-6" />,
//       features: ["Custom branding", "Seamless integration", "Custom domain options"],
//     },
//   ]

//   const PricingCard = ({ plan, index, delay = 0 }) => {
//     const CardWrapper = plan.popular ? BorderBeam : 'div'
    
//     return (
//       <CardWrapper delay={delay} className={plan.popular ? "" : ""}>
//         <Card
//           className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
//             plan.popular ? "scale-110 z-10" : "hover:scale-105"
//           } bg-white/80 backdrop-blur-xl border-0 overflow-hidden`}
//         >
//           <div 
//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
//             style={{ background: `radial-gradient(circle at center, ${plan.glowColor}20 0%, transparent 70%)` }}
//           />
          
//           {plan.popular && (
//             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//               <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-sm font-semibold shadow-lg animate-pulse">
//                 ⭐ Most Popular
//               </Badge>
//             </div>
//           )}

//           <div className="absolute inset-0 opacity-5">
//             <div 
//               className="absolute inset-0" 
//               style={{
//                 backgroundImage: `radial-gradient(circle at 20% 80%, ${plan.glowColor} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${plan.glowColor} 0%, transparent 50%)`
//               }} 
//             />
//           </div>

//           <CardHeader className="text-center pb-4 relative z-10">
//             <div
//               className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
//             >
//               {plan.icon}
//             </div>
//             <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               {plan.name}
//             </CardTitle>
//             <div className="mt-6">
//               <div className="flex items-center justify-center space-x-2">
//                 {plan.originalPrice && (
//                   <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
//                 )}
//                 <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   {plan.price}
//                 </span>
//               </div>
//               {plan.period && <p className="text-sm text-gray-500 mt-2">{plan.period}</p>}
//             </div>
//             <p className="text-gray-600 mt-4 leading-relaxed">{plan.description}</p>
//           </CardHeader>
          
//           <CardContent className="pt-0 relative z-10">
//             <ul className="space-y-4 mb-8">
//               {plan.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-start group/item">
//                   <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
//                     <Check className="w-3 h-3 text-white" />
//                   </div>
//                   <span className="text-gray-700 leading-relaxed">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//             <Button
//               className={`w-full h-12 font-semibold text-base transition-all duration-300 ${
//                 plan.popular
//                   ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl"
//                   : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 shadow-lg hover:shadow-xl"
//               } group relative overflow-hidden`}
//             >
//               <span className="relative z-10 flex items-center justify-center">
//                 {plan.cta}
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
//             </Button>
//           </CardContent>
//         </Card>
//       </CardWrapper>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes borderBeam {
//           0% { background-position: -200% 0, -200% 0; }
//           100% { background-position: 200% 0, 200% 0; }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
//       `}</style>

//       {/* Background effects */}
//       <FloatingElements />
//       <GlowingOrb className="top-20 left-20 w-96 h-96" color="#a855f7" />
//       <GlowingOrb className="bottom-20 right-20 w-80 h-80" color="#3b82f6" />
      
//       {/* Mouse follower */}
//       <div 
//         className="fixed w-96 h-96 rounded-full opacity-5 pointer-events-none z-0 transition-transform duration-1000 ease-out"
//         style={{
//           background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
//           transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
//         }}
//       />

//       {/* Navigation */}
//       <nav className="border-b bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-lg">N</span>
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 nCoder.ai
//               </span>
//             </div>
//             <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="space-y-8">
//             <Badge className="mb-8 bg-purple-100 text-purple-700 hover:bg-purple-100 px-6 py-2 text-sm font-semibold animate-pulse border-0">
//               ✨ Flexible Pricing Plans
//             </Badge>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
//               Choose Your{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
//                 AI-Driven
//               </span>{" "}
//               <br />
//               Modernization Path
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Transform your legacy systems with flexible pricing plans designed for every stage of your modernization journey.
//             </p>
//           </div>

//           {/* Annual/Monthly Toggle */}
//           <div className="flex items-center justify-center mt-16 p-1 bg-gray-100 rounded-full w-fit mx-auto">
//             <button
//               onClick={() => setIsAnnual(false)}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 !isAnnual 
//                   ? "bg-white text-gray-900 shadow-lg" 
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsAnnual(true)}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
//                 isAnnual 
//                   ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" 
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Annual
//               <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5">
//                 Save 20%
//               </Badge>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Plans */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto">
//           <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//             <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-20 bg-gray-100 p-1 rounded-2xl h-14">
//               <TabsTrigger 
//                 value="factoring" 
//                 className="text-base font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
//               >
//                 🔧 Assisted Factoring
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="coding" 
//                 className="text-base font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
//               >
//                 💻 Assisted Coding
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="factoring" className="space-y-12">
//               <div className="text-center space-y-6">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900">AI-Powered Legacy Modernization</h2>
//                 <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                   Transform outdated legacy applications into AI-native platforms with automated code analysis,
//                   refactoring, and digital twin simulation capabilities.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//                 {factoringPlans.map((plan, index) => (
//                   <PricingCard key={plan.name} plan={plan} index={index} delay={index * 0.1} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="coding" className="space-y-12">
//               <div className="text-center space-y-6">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900">AI-Augmented Development</h2>
//                 <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                   Accelerate development with context-aware code generation, multi-agent workflows, and real-time
//                   collaboration tools.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//                 {codingPlans.map((plan, index) => (
//                   <PricingCard key={plan.name} plan={plan} index={index} delay={index * 0.1} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Premium Add-ons */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20 space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Premium Add-Ons</h2>
//             <p className="text-xl text-gray-600">Available for All Plans</p>
//             <p className="text-lg text-gray-600">
//               Enhance your modernization and development capabilities with specialized add-ons
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {addOns.map((addon, index) => (
//               <Card
//                 key={addon.name}
//                 className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-xl border-0 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <CardHeader className="text-center relative z-10">
//                   <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                     {addon.icon}
//                   </div>
//                   <CardTitle className="text-xl font-bold text-gray-900">{addon.name}</CardTitle>
//                   <p className="text-gray-600 leading-relaxed">{addon.description}</p>
//                 </CardHeader>
                
//                 <CardContent className="relative z-10">
//                   <ul className="space-y-3">
//                     {addon.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-gray-700">
//                         <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
//                           <Check className="w-2.5 h-2.5 text-white" />
//                         </div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Value Proposition */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose nCoder.ai?</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Flexible & Scalable",
//                 description: "Start with freemium plans and scale as your needs grow. No vendor lock-in.",
//                 colorClass: "from-blue-100 to-blue-200 text-blue-600",
//               },
//               {
//                 icon: <Star className="w-8 h-8" />,
//                 title: "Value-Driven",
//                 description: "30-50% faster modernization, 3x faster development, 60% fewer bugs.",
//                 colorClass: "from-green-100 to-green-200 text-green-600",
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Enterprise-Ready",
//                 description: "Built for all sizes, from startups to Fortune 500, with security at every level.",
//                 colorClass: "from-purple-100 to-purple-200 text-purple-600",
//               },
//               {
//                 icon: <Check className="w-8 h-8" />,
//                 title: "Transparent Pricing",
//                 description: "No hidden fees, clear structure, and predictable costs that scale with usage.",
//                 colorClass: "from-orange-100 to-orange-200 text-orange-600",
//               },
//             ].map((item, index) => (
//               <Card
//                 key={item.title}
//                 className="group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-xl border-0 overflow-hidden"
//               >
//                 <CardContent className="p-0 relative z-10">
//                   <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${item.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
//           </div>

//           <div className="space-y-8">
//             {[
//               {
//                 q: "What's included in the Freemium plans?",
//                 a: "Our freemium plans provide limited access to core features, allowing you to experience our platform's capabilities before committing to a paid plan. Perfect for evaluation and small proof-of-concept projects.",
//               },
//               {
//                 q: "Can I switch between plans?",
//                 a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
//               },
//               {
//                 q: "What's the difference between Assisted Factoring and Assisted Coding?",
//                 a: "Assisted Factoring focuses on modernizing existing legacy systems, while Assisted Coding accelerates new development with AI-augmented tools.",
//               },
//               {
//                 q: "Is on-premise deployment available?",
//                 a: "Yes, on-premise deployment is available for Enterprise and Teams plans. Contact us for specific requirements and pricing.",
//               },
//             ].map((faq, index) => (
//               <Card
//                 key={index}
//                 className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-xl border-0"
//               >
//                 <CardContent className="p-0">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
//                   <p className="text-gray-600 leading-relaxed">{faq.a}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-30" style={{
//          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//        }} />
       
//        <div className="max-w-5xl mx-auto text-center relative z-10">
//          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Get Started?</h2>
//          <p className="text-xl md:text-2xl mb-16 opacity-90 leading-relaxed">
//            Transform your legacy systems today with nCoder.ai's AI-driven modernization platform
//          </p>

//          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//            {[
//              {
//                icon: <Sparkles className="w-12 h-12" />,
//                title: "Start Your Free Trial",
//                description: "Experience AI-driven modernization with our freemium plans",
//                buttonText: "Start Free Trial",
//                variant: "white",
//              },
//              {
//                icon: <Users className="w-12 h-12" />,
//                title: "Schedule a Demo",
//                description: "See how nCoder.ai can transform your legacy systems",
//                buttonText: "Book Demo",
//                variant: "outline",
//              },
//              {
//                icon: <Building className="w-12 h-12" />,
//                title: "Enterprise Consultation",
//                description: "Get custom pricing and implementation strategies",
//                buttonText: "Contact Sales",
//                variant: "outline",
//              },
//            ].map((item, index) => (
//              <Card
//                key={item.title}
//                className="bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
//              >
//                <CardContent className="p-0 text-center space-y-6">
//                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
//                    {item.icon}
//                  </div>
//                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                  <p className="text-white/90 mb-6 leading-relaxed">{item.description}</p>
//                  <Button
//                    className={`w-full h-12 font-semibold transition-all duration-300 ${
//                      item.variant === "white"
//                        ? "bg-white text-purple-600 hover:bg-gray-100"
//                        : "border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
//                    }`}
//                    variant={item.variant === "outline" ? "outline" : "default"}
//                  >
//                    {item.buttonText}
//                  </Button>
//                </CardContent>
//              </Card>
//            ))}
//          </div>
//        </div>
//      </section>

//      {/* Footer */}
//      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//        <div className="max-w-7xl mx-auto text-center">
//          <div className="flex items-center justify-center space-x-3 mb-6">
//            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//              <span className="text-white font-bold text-lg">N</span>
//            </div>
//            <span className="text-2xl font-bold">nCoder.ai</span>
//          </div>
//          <p className="text-gray-400 text-lg">Transforming Legacy Applications to AI-Native Systems</p>
//        </div>
//      </footer>
//    </div>
//  )
// }






"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Star,
  Sparkles,
  Crown,
  Building,
  Code,
  Cpu,
  Globe,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"


export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const factoringPlans = [
    {
      name: "Freemium",
      price: "Free",
      description: "Perfect for exploring our platform",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Limited access to core features",
        "Basic code analysis tools",
        "Community support",
        "Perfect for evaluation projects",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Starter",
      price: isAnnual ? "$79" : "$99",
      originalPrice: isAnnual ? "$99" : null,
      period: "per month / per user",
      description: "Ideal for small teams or pilot projects",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Basic assisted factoring capabilities",
        "Code analysis and refactoring tools",
        "Standard compliance frameworks",
        "Email support",
        "Up to 5 concurrent projects",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Professional",
      price: isAnnual ? "$399" : "$499",
      originalPrice: isAnnual ? "$499" : null,
      period: "per month / per user",
      description: "Mid-sized teams with active modernization",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Advanced AI-powered refactoring",
        "Digital twin simulation capabilities",
        "Enhanced compliance and security",
        "Priority support",
        "Unlimited projects",
        "Advanced analytics and reporting",
      ],
      cta: "Contact Sales",
      popular: true,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large enterprises with complex requirements",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Unlimited usage and dedicated support",
        "On-premise deployment options",
        "Custom integrations and workflows",
        "Advanced security and compliance",
        "Dedicated customer success manager",
        "24/7 enterprise support",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-yellow-400 to-yellow-600",
    },
  ]

  const codingPlans = [
    {
      name: "Freemium",
      price: "Free",
      description: "Perfect for individual developers",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Limited access to core features",
        "Basic code generation capabilities",
        "Community support",
        "Perfect for individual developers",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Starter",
      price: isAnnual ? "$20" : "$25",
      originalPrice: isAnnual ? "$25" : null,
      period: "per month / per user",
      description: "Ideal for small teams or pilots",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Enhanced code generation",
        "Basic collaboration tools",
        "Standard integrations",
        "Email support",
        "Up to 10 repositories",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "Professional",
      price: isAnnual ? "$32" : "$40",
      originalPrice: isAnnual ? "$40" : null,
      period: "per month / per user",
      description: "Growing development teams",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Advanced AI code generation",
        "Real-time collaboration features",
        "Multi-agent workflows",
        "Priority support",
        "Unlimited repositories",
        "Advanced debugging tools",
      ],
      cta: "Contact Sales",
      popular: true,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "Teams",
      price: "Custom",
      description: "Large development teams",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Unlimited usage and dedicated support",
        "On-premise deployment options",
        "Custom AI model training",
        "Advanced security features",
        "Team management tools",
        "Analytics and insights dashboard",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-indigo-400 to-indigo-600",
    },
  ]

  const addOns = [
    {
      name: "Custom AI Training",
      description: "Train AI models on your specific codebase",
      icon: <Cpu className="w-8 h-8" />,
      features: ["Improved accuracy", "Faster adaptation", "Enhanced context understanding"],
    },
    {
      name: "SLA Support",
      description: "Guaranteed response times and priority resolution",
      icon: <Shield className="w-8 h-8" />,
      features: ["Priority issue resolution", "Dedicated support channels", "Performance guarantees"],
    },
    {
      name: "Compliance Packs",
      description: "Industry-specific compliance frameworks",
      icon: <Check className="w-8 h-8" />,
      features: ["Automated compliance checking", "Regulatory reporting", "Audit trail capabilities"],
    },
    {
      name: "White-Labeling",
      description: "Custom branding and UI for your organization",
      icon: <Globe className="w-8 h-8" />,
      features: ["Custom branding", "Seamless integration", "Custom domain options"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-24">
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            {/* <div className="flex justify-center animate-float">
              <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full animate-bounce">
                <Star className="w-4 h-4 mr-2" />
                Pricing Plans
              </Badge>
            </div> */}

            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="block text-gray-900 animate-fade-in-up">Choose Your</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                AI-Driven Path
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-light">
              Transform your legacy systems with flexible pricing plans tailored for every stage of your modernization
              journey.
            </p>

            <div className="flex items-center justify-center mb-12 animate-fade-in-up animation-delay-600">
              <span className={`mr-3 ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-purple-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>
                Annual
                <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
              </span>
            </div>

            <div className="flex justify-center animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="max-w-7xl mx-auto relative">
          <Tabs defaultValue="factoring" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl">
              <TabsTrigger
                value="factoring"
                className="text-sm font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-xl"
              >
                Assisted Factoring
              </TabsTrigger>
              <TabsTrigger
                value="coding"
                className="text-sm font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-xl"
              >
                Assisted Coding
              </TabsTrigger>
            </TabsList>

            <TabsContent value="factoring" className="animate-fade-in">
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative group">
                    <Zap className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">AI-Powered Modernization</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                  Transform legacy applications into AI-native platforms with automated code analysis, refactoring, and
                  digital twin simulation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {factoringPlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                    <Card
                      className={`relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl ${
                        plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="text-center pb-4">
                        {/* <div
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white shadow-2xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {plan.icon}
                        </div> */}
                        <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                        <div className="mt-6">
                          <div className="flex items-center justify-center">
                            {plan.originalPrice && (
                              <span className="text-lg text-gray-500 line-through mr-3">{plan.originalPrice}</span>
                            )}
                            <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                          </div>
                          {plan.period && <p className="text-gray-600 mt-2">{plan.period}</p>}
                        </div>
                        <p className="text-gray-600 mt-4 font-light">{plan.description}</p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                            >
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-lg font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild>
  <Link
    href="https://form.typeform.com/to/oBvSWfqF"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full text-lg font-semibold py-6 rounded-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer ${
      plan.popular
        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        : "bg-gray-900 hover:bg-gray-800"
    }`}
  >
    {plan.cta}
    <ArrowRight className="w-5 h-5 ml-3" />
  </Link>
</Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coding" className="animate-fade-in">
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-8">
                  {/* <div className="relative group">
                    <Code className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  </div> */}
                  <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">AI-Augmented Development</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                  Accelerate development with context-aware code generation, multi-agent workflows, and real-time
                  collaboration tools.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {codingPlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                    <Card
                      className={`relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl ${
                        plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="text-center pb-4">
                        {/* <div
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white shadow-2xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {plan.icon}
                        </div> */}
                        <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                        <div className="mt-6">
                          <div className="flex items-center justify-center">
                            {plan.originalPrice && (
                              <span className="text-lg text-gray-500 line-through mr-3">{plan.originalPrice}</span>
                            )}
                            <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                          </div>
                          {plan.period && <p className="text-gray-600 mt-2">{plan.period}</p>}
                        </div>
                        <p className="text-gray-600 mt-4 font-light">{plan.description}</p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                            >
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-lg font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild>
  <Link
    href="https://form.typeform.com/to/oBvSWfqF"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full text-lg font-semibold py-6 rounded-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer ${
      plan.popular
        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        : "bg-gray-900 hover:bg-gray-800"
    }`}
  >
    {plan.cta}
    <ArrowRight className="w-5 h-5 ml-3" />
  </Link>
</Button>

                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Premium Add-ons */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              {/* <div className="relative group">
                <Sparkles className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div> */}
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Premium Add-Ons</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Enhance your modernization and development capabilities with specialized add-ons available for all plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                <Card className="relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                  <CardHeader className="text-center pb-4">
                    {/* <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300">
                      {addon.icon}
                    </div> */}
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {addon.name}
                    </CardTitle>
                    <p className="text-gray-600 font-light">{addon.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4">
                      {addon.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                        >
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              {/* <div className="relative group">
                <Star className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div> */}
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Why Choose nCoder.ai?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-blue-600" />,
                title: "Flexible & Scalable",
                description: "Start with freemium plans and scale as your needs grow. No vendor lock-in.",
                gradient: "from-blue-100 to-blue-200",
              },
              {
                icon: <Star className="w-10 h-10 text-green-600" />,
                title: "Value-Driven",
                description: "30-50% faster modernization, 3x faster development, 60% fewer bugs.",
                gradient: "from-green-100 to-green-200",
              },
              {
                icon: <Shield className="w-10 h-10 text-purple-600" />,
                title: "Enterprise-Ready",
                description: "Built for all sizes, from startups to Fortune 500, with security at every level.",
                gradient: "from-purple-100 to-purple-200",
              },
              {
                icon: <Check className="w-10 h-10 text-orange-600" />,
                title: "Transparent Pricing",
                description: "No hidden fees, clear structure, and predictable costs that scale with usage.",
                gradient: "from-orange-100 to-orange-200",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                <Card className="relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                  <CardContent className="p-0 text-center">
                    {/* <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-2xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div> */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              {/* <div className="relative group">
                <Sparkles className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div> */}
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "What's included in the Freemium plans?",
                a: "Our freemium plans provide limited access to core features, allowing you to experience our platform's capabilities before committing to a paid plan. Perfect for evaluation and small proof-of-concept projects.",
              },
              {
                q: "Can I switch between plans?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
              },
              {
                q: "What's the difference between Assisted Factoring and Assisted Coding?",
                a: "Assisted Factoring focuses on modernizing existing legacy systems, while Assisted Coding accelerates new development with AI-augmented tools.",
              },
              {
                q: "Is on-premise deployment available?",
                a: "Yes, on-premise deployment is available for Enterprise and Teams plans. Contact us for specific requirements and pricing.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                <Card className="relative p-10 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-12">
            <div className="flex items-center justify-center mb-10">
              <div className="relative group">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white ml-8">Ready to Transform?</h2>
            </div>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
              Join the future of legacy modernization with nCoder.ai's AI-native platform and experience transformation
              like never before.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Sparkles className="w-12 h-12 text-white" />,
                  title: "Start Your Free Trial",
                  description: "Experience AI-driven modernization with our freemium plans",
                  cta: "Start Free Trial",
                  buttonStyle:
                    "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
                },
                {
                  icon: <Users className="w-12 h-12 text-white" />,
                  title: "Schedule a Demo",
                  description: "See how nCoder.ai can transform your legacy systems",
                  cta: "Book Demo",
                  buttonStyle: "border-white text-white hover:bg-white hover:text-purple-600 bg-transparent",
                },
                {
                  icon: <Building className="w-12 h-12 text-white" />,
                  title: "Enterprise Consultation",
                  description: "Get custom pricing and implementation strategies",
                  cta: "Contact Sales",
                  buttonStyle: "border-white text-white hover:bg-white hover:text-purple-600 bg-transparent",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-white rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />
                  <Card className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl shadow-gray-900/50 hover:shadow-gray-800/50 rounded-3xl">
                    <CardContent className="p-0 text-center">
                      <div className="relative mx-auto mb-6">
                        {item.icon}
                        <div className="absolute inset-0 bg-white blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 font-light mb-6">{item.description}</p>
                      <Button
                        className={`w-full text-lg font-semibold ${item.buttonStyle} py-6 rounded-2xl transform hover:scale-105 transition-all duration-200`}
                        variant={item.buttonStyle.includes("border-white") ? "outline" : "default"}
                      >
                        {item.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50" />
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6">
            {/* <div className="relative group">
              <Sparkles className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </div> */}
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ready to Transform?
            </h2>
          </div>
          
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Join the future of legacy modernization with nCoder.ai's AI-native platform and experience transformation
            like never before.
          </p>
          
          {/* Two Card Grid - Optimized Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {[
    {
      icon: <Users className="w-14 h-14 text-white" />,
      title: "Schedule a Demo",
      description: "See how nCoder.ai can transform your legacy systems with personalized insights and real-world examples",
      cta: "Book A Call",
      buttonStyle: "border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent",
      highlight: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
      link: "https://calendly.com/fintunaidev/30min",
    },
    {
      icon: <Building className="w-14 h-14 text-white" />,
      title: "Enterprise Consultation",
      description: "Get custom pricing, implementation strategies, and dedicated support for your organization",
      cta: "Contact Sales",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg",
      highlight: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
      link: "https://form.typeform.com/to/oBvSWfqF",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white rounded-3xl blur-3xl opacity-0 group-hover:opacity-10 transition-all duration-700" />

      {/* Card */}
      <Card
        className={`relative p-10 ${item.highlight} backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 shadow-2xl shadow-gray-900/50 hover:shadow-gray-800/60 rounded-3xl h-full`}
      >
        <CardContent className="p-0 text-center flex flex-col h-full">
          {/* Icon */}
          <div className="relative mx-auto mb-8">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              {item.icon}
            </div>
            <div className="absolute inset-0 bg-white blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl" />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
          <p className="text-gray-300 font-light mb-8 leading-relaxed flex-grow text-lg">
            {item.description}
          </p>

          {/* Button with dynamic link */}
          <Button
            asChild
            className={`w-full text-lg font-semibold ${item.buttonStyle} py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            variant={item.buttonStyle.includes("border-") ? "outline" : "default"}
          >
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {item.cta}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  ))}
</div>

          
          {/* Bottom accent */}
          <div className="flex justify-center pt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      
    </section>

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  )
}
