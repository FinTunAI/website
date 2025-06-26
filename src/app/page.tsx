// "use client"

// import {
//   ArrowRight,
//   Code,
//   Zap,
//   Brain,
//   Users,
//   Shield,
//   Sparkles,
//   Play,
//   Check,
//   Github,
//   Twitter,
//   Linkedin,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="border-b border-white/20 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Brain className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 FinTun AI
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 Features
//               </a>
//               <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 Pricing
//               </a>
//               <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 About
//               </a>
//               <a href="#docs" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 Docs
//               </a>
//               <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 Community
//               </a>
//             </div>

//             <div className="flex items-center space-x-4">
//               <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
//                 Sign In
//               </Button>
//               <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden pt-20 pb-32 animate-fade-in-up">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Introducing AI-Powered Business Development
//             </Badge>

//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
//               The Future of
//               <br />
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Business AI
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Supercharge your business applications with AI that understands your code, accelerates development, and
//               transforms how your team builds software.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
//               >
//                 <Play className="w-5 h-5 mr-2" />
//                 Start Free Trial
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg"
//               >
//                 Watch Demo
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//             </div>

//             <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
//               <div className="flex items-center">
//                 <Check className="w-4 h-4 text-green-500 mr-2" />
//                 Free 14-day trial
//               </div>
//               <div className="flex items-center">
//                 <Check className="w-4 h-4 text-green-500 mr-2" />
//                 No credit card required
//               </div>
//               <div className="flex items-center">
//                 <Check className="w-4 h-4 text-green-500 mr-2" />
//                 Cancel anytime
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Showcase */}
//       <section className="py-20 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience AI-Powered Development</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               See how our intelligent code assistant transforms your development workflow
//             </p>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
//             <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
//               <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                   <span className="ml-4 text-sm text-gray-600">FinTun AI - Business Dashboard</span>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div className="space-y-4">
//                     <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
//                       <div className="flex items-center mb-2">
//                         <Brain className="w-5 h-5 text-blue-600 mr-2" />
//                         <span className="font-semibold text-blue-800">AI Assistant</span>
//                       </div>
//                       <p className="text-sm text-gray-600">
//                         &quot;Generate a React component for user authentication with form validation&quot;
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
//                       <div className="text-green-600">{/* AI Generated Code '

// */}</div>
//                       <div className="text-blue-600">import {"{ useState }"} from &apos;react&apos;</div>
//                       <div className="text-purple-600">export default function AuthForm() {"{"}</div>
//                       <div className="ml-4 text-gray-700">const [email, setEmail] = useState(&apos;&apos;)</div>
//                       <div className="ml-4 text-gray-700">{/* ... validation logic */}</div>
//                       <div className="text-purple-600">{"}"}</div>
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                       <div className="flex items-center mb-2">
//                         <Zap className="w-5 h-5 text-green-600 mr-2" />
//                         <span className="font-semibold text-green-800">Performance Insights</span>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4 mt-3">
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-green-600">85%</div>
//                           <div className="text-xs text-gray-600">Faster Development</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-blue-600">92%</div>
//                           <div className="text-xs text-gray-600">Code Quality</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
//                       <div className="flex items-center mb-2">
//                         <Users className="w-5 h-5 text-purple-600 mr-2" />
//                         <span className="font-semibold text-purple-800">Team Collaboration</span>
//                       </div>
//                       <div className="flex -space-x-2">
//                         <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
//                         <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
//                         <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
//                         <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs">
//                           +5
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Build Software Faster Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Build software faster</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our AI understands your codebase and accelerates every part of your development workflow
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 animate-slide-in-left">
//             <div>
//               <div className="space-y-8">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Zap className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">10x Faster Development</h3>
//                     <p className="text-gray-600 text-lg">
//                       Generate entire functions, components, and modules from simple descriptions. Our AI writes
//                       production-ready code that follows your team&apos;s patterns.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Brain className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Context-Aware Intelligence</h3>
//                     <p className="text-gray-600 text-lg">
//                       Unlike generic AI tools, our system understands your entire codebase, dependencies, and coding
//                       standards to provide relevant suggestions.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Shield className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
//                     <p className="text-gray-600 text-lg">
//                       Your code never leaves your environment. All AI processing happens locally with optional cloud
//                       sync for team collaboration.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
//               <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
//                 <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     <span className="ml-4 text-sm text-gray-400">main.tsx</span>
//                   </div>
//                 </div>
//                 <div className="p-6 font-mono text-sm">
//                   <div className="space-y-2">
//                     <div className="text-gray-500">{/* AI: Generate a user dashboard component */}</div>
//                     <div className="text-blue-400">import {"{ useState, useEffect }"} from &apos;react&apos;</div>
//                     <div className="text-purple-400">import {"{ Card, Button }"} from &apos;@/components&apos;</div>
//                     <div className="text-yellow-400">export default function UserDashboard() {"{"}</div>
//                     <div className="ml-4 text-gray-300">const [user, setUser] = useState(null)</div>
//                     <div className="ml-4 text-gray-300">const [analytics, setAnalytics] = useState([])</div>
//                     <div className="ml-4 text-green-400">{/* ✨ AI generated 47 lines of code */}</div>
//                     <div className="text-yellow-400">{"}"}</div>
//                   </div>
//                   <div className="mt-4 flex items-center space-x-2 text-xs">
//                     <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Generated in 2.3s</div>
//                     <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">100% test coverage</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                 85%
//               </div>
//               <div className="text-gray-600">Faster Development</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
//                 92%
//               </div>
//               <div className="text-gray-600">Code Quality Score</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//                 50K+
//               </div>
//               <div className="text-gray-600">Developers</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
//                 99.9%
//               </div>
//               <div className="text-gray-600">Uptime</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Features Section */}
//       <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features for Modern Teams</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Everything you need to transform your development workflow with AI-powered tools designed for enterprise
//               teams
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//             {/* Feature 1 */}
//             <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <Brain className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Code Generation</h3>
//                   <p className="text-gray-600 mb-4 text-lg">
//                     Generate entire functions, classes, and modules from natural language descriptions. Our AI
//                     understands your codebase context and follows your team&apos;s coding standards.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Multi-language support (50+ languages)
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Context-aware suggestions
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Custom coding standards
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Card>

//             {/* Feature 2 */}
//             <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Collaboration</h3>
//                   <p className="text-gray-600 mb-4 text-lg">
//                     Work seamlessly with your team using AI-powered code reviews, suggestions, and real-time
//                     collaboration features that keep everyone in sync.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Live code sharing
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       AI-powered code reviews
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Team synchronization
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Card>

//             {/* Feature 3 */}
//             <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
//                   <p className="text-gray-600 mb-4 text-lg">
//                     Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls. Your
//                     code stays secure and private.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       SOC 2 Type II certified
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       End-to-end encryption
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       SSO integration
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Card>

//             {/* Feature 4 */}
//             <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <Sparkles className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Analytics</h3>
//                   <p className="text-gray-600 mb-4 text-lg">
//                     Get deep insights into your development process with AI-driven analytics, performance metrics, and
//                     actionable recommendations for improvement.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Development velocity tracking
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Code quality metrics
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       Performance optimization
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Additional Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
//               <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Code className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Language Support</h3>
//               <p className="text-gray-600">
//                 Support for 50+ programming languages with intelligent syntax highlighting and completion
//               </p>
//             </Card>

//             <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
//               <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Team Management</h3>
//               <p className="text-gray-600">
//                 Advanced team management with role-based permissions and project organization
//               </p>
//             </Card>

//             <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
//               <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
//               <p className="text-gray-600">
//                 Optimized for speed with sub-second response times and intelligent caching
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* TRY Now Section */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
//             TRY
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> now</span>
//           </h2>
//           <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
//             Start building with AI in seconds. No setup required.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <Button
//               size="lg"
//               className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-xl font-medium rounded-xl"
//             >
//               Try for free
//             </Button>
//             <div className="flex items-center space-x-4 text-gray-500">
//               <div className="flex items-center">
//                 <Check className="w-5 h-5 text-green-500 mr-2" />
//                 <span>No credit card</span>
//               </div>
//               <div className="flex items-center">
//                 <Check className="w-5 h-5 text-green-500 mr-2" />
//                 <span>14-day trial</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Brain className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   FinTun AI
//                 </span>
//               </div>
//               <p className="text-gray-600 mb-4 max-w-md">
//                 Empowering businesses with AI-driven development tools that accelerate innovation and enhance
//                 productivity.
//               </p>
//               <div className="flex space-x-4">
//                 <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
//                   <Twitter className="w-5 h-5" />
//                 </Button>
//                 <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
//                   <Github className="w-5 h-5" />
//                 </Button>
//                 <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
//                   <Linkedin className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Enterprise
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Changelog
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600 transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-600 text-sm">© 2024 FinTun AI. All rights reserved.</p>
//             <div className="flex space-x-6 text-sm text-gray-600 mt-4 md:mt-0">
//               <a href="#" className="hover:text-blue-600 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-blue-600 transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="hover:text-blue-600 transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }



"use client"

import {
  Code,
  Zap,
  Brain,
  Users,
  Shield,
  Sparkles,
  Check,
  Github,
  Twitter,
  Linkedin,
  Download,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SalesforceHero from "@/components/homepage/salesforce-hero"
import NavBar from "@/components/homepage/Navbar"
import Footer from "@/components/homepage/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Warp Style */}
      {/* <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FinTun AI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="#docs" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Docs
              </a>
              <a href="#community" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Community
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact sales
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium">Join the Waitlist </Button>
            </div>
          </div>
        </div>
      </nav> */}
      <NavBar />

      {/* Hero Section - Warp Style with Light Theme */}
      {/* <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                The intelligent
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  code assistant.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Become a 10x developer on day one. FinTun AI combines AI and your dev team\'s knowledge in one fast,
                intuitive coding environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Mac
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                >
                  Try in Browser
                </Button>
              </div>

              
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-700 border border-gray-200">
                <span className="text-gray-500">$</span>{" "}
                <span className="text-blue-600">npm install -g codeai-pro</span>
              </div>
            </div>

            
            <div className="relative animate-slide-in-right">
              
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-600">~/work-env/my-project</span>
                    <div className="ml-auto flex items-center space-x-2">
                      <span className="text-xs text-gray-500">Share</span>
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>

               
                <div className="p-6 font-mono text-sm space-y-4">
                  
                  <div className="space-y-2">
                    <div className="text-gray-500">
                      <span className="text-blue-600">~/my-project</span> <span className="text-gray-400">(main)</span>
                    </div>
                    <div className="text-gray-800">
                      <span className="text-gray-500">$</span> codeai generate component
                    </div>
                  </div>

                 
                  <div className="space-y-2">
                    <div className="text-green-600">✨ AI: What component would you like me to create?</div>
                    <div className="text-gray-800"> user authentication form with validation</div>
                  </div>

                  
                  <div className="bg-gray-50 rounded-lg p-4 space-y-1 border border-gray-200">
                    <div className="text-gray-500">{'// Generated AuthForm.tsx'}</div>
                    <div className="text-blue-600">import {'{ useState }'} from {'react'}</div>
                    <div className="text-purple-600">import {'{ validateEmail }'} from {'../utils'}</div>
                    <div className="text-orange-600">export default function AuthForm() {'{'}</div>
                    <div className="ml-4 text-gray-700">const [email, setEmail] = useState('')</div>
                    <div className="ml-4 text-gray-700">const [password, setPassword] = useState('')</div>
                    <div className="ml-4 text-gray-700">const [errors, setErrors] = useState({})</div>
                    <div className="ml-4 text-green-600">{'// ✨ 47 more lines generated...'}</div>
                    <div className="text-orange-600">{'}'}</div>
                  </div>

                 
                  <div className="space-y-1">
                    <div className="text-green-600">✅ Component created successfully!</div>
                    <div className="text-gray-500 text-xs">
                      Generated in 2.3s • 100% test coverage • TypeScript ready
                    </div>
                  </div>

                  
                  <div className="flex items-center">
                    <span className="text-blue-600">~/my-project</span>
                    <span className="text-gray-400"> (main)</span>
                    <span className="text-gray-500 ml-2">$</span>
                    <div className="w-2 h-5 bg-gray-900 ml-1 animate-pulse"></div>
                  </div>
                </div>
              </div>

              
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce-subtle">
                Generated in 2.3s
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse-subtle">
                100% test coverage
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <SalesforceHero />

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-lg">Trusted by over half a million developers at leading companies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-40">
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">VMware</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">GitHub</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">DoorDash</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">Amazon</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">Netflix</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-gray-600 font-bold text-xl">Docker</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Build Software Faster Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Build software faster</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands your codebase and accelerates every part of your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 animate-slide-in-left">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">10x Faster Development</h3>
                    <p className="text-gray-600 text-lg">
                      Generate entire functions, components, and modules from simple descriptions. Our AI writes
                      production-ready code that follows your team\'s patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Context-Aware Intelligence</h3>
                    <p className="text-gray-600 text-lg">
                      Unlike generic AI tools, our system understands your entire codebase, dependencies, and coding
                      standards to provide relevant suggestions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600 text-lg">
                      Your code never leaves your environment. All AI processing happens locally with optional cloud
                      sync for team collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-400">main.tsx</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-gray-500">{'// AI: Generate a user dashboard component'}</div>
                    <div className="text-blue-400">import {'{ useState, useEffect }'} from {'react'}</div>
                    <div className="text-purple-400">import {'{ Card, Button }'} from {'@/components'}</div>
                    <div className="text-yellow-400">export default function UserDashboard() {'{'}</div>
                    <div className="ml-4 text-gray-300">const [user, setUser] = useState(null)</div>
                    <div className="ml-4 text-gray-300">const [analytics, setAnalytics] = useState([])</div>
                    <div className="ml-4 text-green-400">{'// ✨ AI generated 47 lines of code'}</div>
                    <div className="text-yellow-400">{'}'}</div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2 text-xs">
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Generated in 2.3s</div>
                    <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">100% test coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-gray-600">Faster Development</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                92%
              </div>
              <div className="text-gray-600">Code Quality Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-600">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features for Modern Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your development workflow with AI-powered tools designed for enterprise
              teams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Feature 1 */}
            <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Code Generation</h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    Generate entire functions, classes, and modules from natural language descriptions. Our AI
                    understands your codebase context and follows your team\'s coding standards.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Multi-language support (50+ languages)
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Context-aware suggestions
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Custom coding standards
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Collaboration</h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    Work seamlessly with your team using AI-powered code reviews, suggestions, and real-time
                    collaboration features that keep everyone in sync.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Live code sharing
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      AI-powered code reviews
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Team synchronization
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls. Your
                    code stays secure and private.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      SSO integration
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Analytics</h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    Get deep insights into your development process with AI-driven analytics, performance metrics, and
                    actionable recommendations for improvement.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Development velocity tracking
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Code quality metrics
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Performance optimization
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">
                Support for 50+ programming languages with intelligent syntax highlighting and completion
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team Management</h3>
              <p className="text-gray-600">
                Advanced team management with role-based permissions and project organization
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/60 backdrop-blur-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for speed with sub-second response times and intelligent caching
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">Loved by developers worldwide</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what developers are saying about FinTun AI</p>
    </div>

    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] overflow-hidden">
      {/* Column 1 */}
      <div className="space-y-6 flex flex-col">
        <div className="animate-continuous-scroll flex flex-col space-y-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"FinTun AI has completely transformed how I write code. The AI suggestions are incredibly accurate and save me hours every day."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                SJ
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Senior Developer at Stripe</p>
              </div>
            </div>
          </Card>
          {/* Duplicate cards for seamless looping */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The context awareness is mind-blowing. It understands our entire codebase and generates code that fits perfectly with our patterns."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                MR
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                <p className="text-sm text-gray-600">Tech Lead at Airbnb</p>
              </div>
            </div>
          </Card>
          {/* Add more cards as needed */}
        </div>
        {/* Duplicate the content for infinite scroll */}
        <div className="animate-continuous-scroll flex flex-col space-y-6" aria-hidden="true">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"FinTun AI has completely transformed how I write code. The AI suggestions are incredibly accurate and save me hours every day."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                SJ
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Senior Developer at Stripe</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The context awareness is mind-blowing. It understands our entire codebase and generates code that fits perfectly with our patterns."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                MR
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                <p className="text-sm text-gray-600">Tech Lead at Airbnb</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Column 2 */}
      <div className="space-y-6 flex flex-col">
        <div className="animate-continuous-scroll flex flex-col space-y-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"Our team's productivity has increased by 85% since adopting FinTun AI. It's like having a senior developer pair programming with you."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                EP
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Emily Parker</p>
                <p className="text-sm text-gray-600">Engineering Manager at Uber</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The AI-powered code reviews have caught so many potential bugs before they made it to production. It's a game-changer."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                DK
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">David Kim</p>
                <p className="text-sm text-gray-600">Senior Engineer at Netflix</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="animate-continuous-scroll flex flex-col space-y-6" aria-hidden="true">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"Our team's productivity has increased by 85% since adopting FinTun AI. It's like having a senior developer pair programming with you."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                EP
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Emily Parker</p>
                <p className="text-sm text-gray-600">Engineering Manager at Uber</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The AI-powered code reviews have caught so many potential bugs before they made it to production. It's a game-changer."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                DK
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">David Kim</p>
                <p className="text-sm text-gray-600">Senior Engineer at Netflix</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Column 3 */}
      <div className="space-y-6 flex flex-col">
        <div className="animate-continuous-scroll flex flex-col space-y-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The security features give us peace of mind. Our code never leaves our environment, yet we get all the AI benefits."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                JW
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">James Wilson</p>
                <p className="text-sm text-gray-600">Security Engineer at GitHub</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"From junior to senior developers, everyone on our team loves FinTun AI. It adapts to each person's skill level perfectly."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                LM
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Lisa Martinez</p>
                <p className="text-sm text-gray-600">VP Engineering at Slack</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="animate-continuous-scroll flex flex-col space-y-6" aria-hidden="true">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"The security features give us peace of mind. Our code never leaves our environment, yet we get all the AI benefits."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                JW
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">James Wilson</p>
                <p className="text-sm text-gray-600">Security Engineer at GitHub</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {"From junior to senior developers, everyone on our team loves FinTun AI. It adapts to each person's skill level perfectly."}
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                LM
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Lisa Martinez</p>
                <p className="text-sm text-gray-600">VP Engineering at Slack</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">FinTun AI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering businesses with AI-driven development tools that accelerate innovation and enhance
                productivity.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 FinTun AI. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  )
}