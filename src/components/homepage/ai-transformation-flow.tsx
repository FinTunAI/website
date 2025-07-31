"use client" // Keep this to ensure client-side rendering

import { ArrowRight, Zap, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react" // Keep useState/useEffect for basic mobile check

const transformationModules = [
  {
    id: 1,
    legacy: { title: "S-Controls", icon: "⚡" },
    modern: { title: "Lightning", icon: "⚡" },
    pathD:
      "M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5",
    color: "#446dcd",
    legacyY: 663,
    modernY: 662.5,
  },
  {
    id: 2,
    legacy: { title: "VF pages", icon: "📄" },
    modern: { title: "LWC", icon: "⚛️" },
    pathD:
      "M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588",
    color: "#4bb6d3",
    legacyY: 587.5,
    modernY: 588,
  },
  {
    id: 3,
    legacy: { title: "Workflow Rules", icon: "🔄" },
    modern: { title: "Process Builders", icon: "🏗️" },
    pathD:
      "M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235",
    color: "#6ef2cc",
    legacyY: 514,
    modernY: 513.235,
  },
  {
    id: 4,
    legacy: { title: "Error Messages", icon: "⚠️" },
    modern: { title: "Trigger Frameworks", icon: "🎯" },
    pathD:
      "M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439",
    color: "#4bb6d3",
    legacyY: 438.5,
    modernY: 439,
  },
  {
    id: 5,
    legacy: { title: "Formula Errors", icon: "🧮" },
    modern: { title: "Documentation", icon: "📚" },
    pathD:
      "M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364",
    color: "#446dcd",
    legacyY: 364,
    modernY: 364,
  },
  {
    id: 6,
    legacy: { title: "Custom Objects", icon: "📦" },
    modern: { title: "Optimized Schema", icon: "✨" },
    pathD: "M0 290 L1440 290", // A new, simpler path for the 6th module
    color: "#6ef2cc",
    legacyY: 290,
    modernY: 290,
  },
]

export const AITransformationFlow = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className=" bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip min-h-screen ">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center top-20">
        {/* Header */}
        <div className="mb-6">
          <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 text-base font-medium shadow-2xl rounded-full">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Transformation
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white mb-6">
          <span className="block text-white mb-4">Transform Legacy Systems</span>
          <span className="block bg-gradient-to-r from-[#446dcd] via-[#4bb6d3] to-[#6ef2cc] bg-clip-text text-transparent">
            with AI-Driven Modernization
          </span>
        </h1>

        <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto mb-12">
          From Salesforce to Enterprise Applications - Unlock the Future of Your Business
        </p>

        {/* Main Transformation Flow SVG (Static) */}
       

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Salesforce?</h3>
            <p className="text-gray-300 mb-6">
              Let our AI analyze your org and create a custom transformation plan in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start AI Analysis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full bg-transparent backdrop-blur-sm"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
