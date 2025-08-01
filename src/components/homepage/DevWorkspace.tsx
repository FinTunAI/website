// "use client"

// import React from "react";

// export default function DevWorkspace() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//       {/* Hexagonal Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22/%3E%3C/svg%3E')] opacity-50" />

//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Section: Learn & Work Together */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
//               Learn & work
//               <br />
//               together
//             </h2>
//             <p className="text-gray-400 text-lg mb-6">
//               Devin is built for collaboration and can learn to fit into your unique workflow.
//             </p>
//             {/* Knowledge Card */}
//             <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
//               <div className="flex items-center space-x-2 mb-4">
//                 <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✔</span>
//                 <h3 className="text-lg font-semibold text-gray-300">Devin learns your codebase & picks up tribal knowledge</h3>
//               </div>
//               <div className="ml-7 space-y-2 text-gray-400 text-sm">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-4 h-4 bg-green-500 rounded-full"></span>
//                   <span>Add knowledge</span>
//                 </div>
//                 <p>Would you like Devin to remember this?</p>
//                 <div className="flex items-center space-x-2">
//                   <span>Use when</span>
//                   <span className="text-green-400">When working in the backend repo</span>
//                   <button className="ml-2 text-gray-500 hover:text-gray-400">✕</button>
//                 </div>
//                 <ul className="list-disc list-inside text-green-400">
//                   <li>The repo is cloned in ~/my_project_backend</li>
//                   <li>The main branch name is master</li>
//                   <li>Run 'poetry install' before you start</li>
//                   <li>Run ./lint.sh to check lint before making commits</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Code on the Go */}
//           <div className="space-y-6">
//             <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-300">Code on the go</h2>
//               <p className="mt-2 text-gray-400 text-lg">
//                 Write code using natural language instructions with Devin on mobile.
//               </p>
//               <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
//                 Collaborate
//               </button>
//             </div>
//             <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <span className="text-sm text-gray-400">9:41</span>
//                 <div className="w-6 h-6 bg-gray-700 rounded-tr-lg"></div>
//               </div>
//               <p className="text-gray-300 text-sm">
//                 Hey there! I'm Devin and I'm a software engineer. Enter a coding task below to get started.
//               </p>
//               <div className="mt-2 flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Give Devin a task to work on..."
//                   className="w-full bg-gray-700/50 text-white placeholder-gray-400 rounded-lg p-2 focus:outline-none"
//                 />
//                 <button className="text-gray-400 hover:text-gray-300">➤</button>
//               </div>
//             </div>
//           </div>

//           {/* Workspace Interface */}
//           <div className="col-span-2 mt-12">
//             <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-300">Devin's Workspace</h3>
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs"></div>
//               </div>
//               <div className="flex space-x-4 mb-4">
//                 <button className="text-cyan-400 hover:text-cyan-300 text-sm">Shell</button>
//                 <button className="text-gray-400 hover:text-gray-300 text-sm">Browser</button>
//                 <button className="text-gray-400 hover:text-gray-300 text-sm">Editor</button>
//                 <button className="text-gray-400 hover:text-gray-300 text-sm">Planner</button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import React from "react";
// import { BorderBeam } from "../magicui/border-beam";
// export default function DevinBentoExactLayout() {
//   return (
//     <section className="bg-[#0b0d13] text-white py-20 mt-30 px-4 md:px-8">
//       <div className="w-full p-[3vw]  gap-12">
//         <div className="grid grid-cols-12">
//           <div className="col-span-5 col-start-2">
//             <h2 className="text-5xl md:text-7xl  mb-4">
//               Learn & work <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
//                 together
//               </span>
//             </h2>
//             <p className="text-lg text-gray-400 max-w-[30ch]">
//               nCoder.ai is built for collaboration and can learn to fit into
//               your unique workflow.
//             </p>
//           </div>
//         </div>

//         {/* Right Column: 3 stacked cards */}
//         <div className="grid grid-cols-12 relative ">
//           {/* Card 1 */}
//           <div className=" absolute top-1/3 bg-gray-900 rounded-2xl pt-[4vw] pl-[4vw] flex flex-col gap-5 col-span-5 col-start-2 w-full right-4 ">
//             <div className=" w-full relative ">
//              <h3 className="text-xl md:text-3xl ">Smart Codebase Intelligence</h3>

//                   <p className="text-gray-400 text-sm mt-2 max-w-sm">
//                     AI analyzes your project structure, learns your patterns, and suggests context-aware solutions instantly.
//                   </p>
//               <Image
//                 src="/images/card01.png"
//                 alt="image1"
//                 width={90}
//                 height={60}
//                 className="absolute right-0 -top-20"
//               />
//             </div>
//             <div className="mt-13 ">
//               <Image
//                 src="/images/ncoder-1.jpg"
//                 alt="bento1"
//                 width={1200}
//                 height={600}
//                 className="w-full h-auto"
//               />
//             </div>

//             <BorderBeam duration={8} size={100} />
//           </div>

//           {/* Card 2 */}
//           <div className="col-span-5 col-start-7 space-y-4 ">
//             <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 relative">
//               <div>
//                 <Image
//                   src="/images/card02-line.png"
//                   alt="mage2 "
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="flex lg:flex-row flex-col item-start pl-[4vw]">
//                 <div className="mt-10">
//                   <h3 className="text-xl md:text-3xl ">Code on the go</h3>

//                   <p className="text-gray-400 text-sm mt-2 max-w-sm">
//                     Write code using natural language instructions with nCoder.ai on mobile.
//                   </p>
//                 </div>
//                 <div className="relative ">
//                   <Image
//                     src="/images/ncoder2.jpg"
//                     alt="bento2"
//                     width={200}
//                     height={200}
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//               <BorderBeam duration={8} size={100} />
//             </div>

//             {/* Card 3 */}

//             <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 pt-[4vw] pl-[4vw]  relative">
//               <div className="relative ">
//                 <span className="bg-gray-700 text-xs uppercase px-2 py-1 rounded">
//                   Collaborate
//                 </span>
//                 <Image
//                   src="/images/card03-line.png"
//                   alt="image1"
//                   width={100}
//                   height={50}
//                   className="absolute right-0 -top-20"
//                 />
//               </div>
//               <h3 className="text-xl md:text-3xl  max-w-md">
//                 Use nCoder.ai's editor, shell and browser
//               </h3>
//               <p className="text-gray-400 text-sm max-w-md">
//                 Full development environment with real-time editing, terminal access, and instant preview - all in one platform.
//               </p>
//               <div className="relative">
//                 <Image
//                   src="/images/ncoder-1.jpg"
//                   alt="bento2"
//                   width={200}
//                   height={200}
//                   className="w-full h-auto"
//                 />
//               </div>
//               <BorderBeam duration={8} size={100} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import React from "react";
import { BorderBeam } from "../magicui/border-beam";



export default function MobileResponsiveBento() {
  return (
    <section className="bg-[#0b0d13] text-white py-20 mt-30 px-4 md:px-8">
      <div className="w-full p-[3vw] gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <h2 className="text-4xl md:text-5xl lg:text-7xl mb-4">
              Learn & work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                together
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-[30ch]">
              nCoder.ai is built for collaboration and can learn to fit into
              your unique workflow.
            </p>
          </div>
        </div>

        {/* Cards Section - Mobile: Stack, Desktop: Original Layout */}
        <div className="mt-16">
          {/* Mobile Layout: Single Column Stack */}
          <div className="block md:hidden space-y-6">
            {/* Card 1 - Mobile */}
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-5 relative">
              <div className="w-full relative">
                <h3 className="text-xl md:text-3xl">Smart Codebase Intelligence</h3>
                <p className="text-gray-400 text-sm mt-2">
                  AI analyzes your project structure, learns your patterns, and suggests context-aware solutions instantly.
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/card01.png"
                    alt="Smart Codebase Intelligence"
                    width={90}
                    height={60}
                    className="ml-auto"
                  />
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src="/images/ncoder-1.jpg"
                  alt="Codebase visualization"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <BorderBeam duration={8} size={100} />
            </div>

            {/* Card 2 - Mobile */}
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 relative">
              <div>
                <Image
                  src="/images/card02-line.png"
                  alt="Mobile coding illustration"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl md:text-3xl">Code on the go</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Write code using natural language instructions with nCoder.ai on mobile.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/images/ncoder2.jpg"
                    alt="Mobile coding interface"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <BorderBeam duration={8} size={100} />
            </div>

            {/* Card 3 - Mobile */}
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 relative">
              <div className="relative">
                <span className="bg-gray-700 text-xs uppercase px-2 py-1 rounded">
                  Collaborate
                </span>
                <div className="mt-4">
                  <Image
                    src="/images/card03-line.png"
                    alt="Collaboration illustration"
                    width={100}
                    height={50}
                    className="ml-auto"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-3xl">
                Use nCoder.ai's editor, shell and browser
              </h3>
              <p className="text-gray-400 text-sm">
                Full development environment with real-time editing, terminal access, and instant preview - all in one platform.
              </p>
              <div className="relative mt-4">
                <Image
                  src="/images/ncoder-1.jpg"
                  alt="Development environment"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <BorderBeam duration={8} size={100} />
            </div>
          </div>

          {/* Desktop Layout: Original Complex Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-12 relative">
              {/* Card 1 - Desktop */}
              <div className="absolute top-1/3 bg-gray-900 rounded-2xl pt-[4vw] pl-[4vw] flex flex-col gap-5 col-span-5 col-start-2 w-full right-4">
                <div className="w-full relative">
                  <h3 className="text-xl md:text-3xl">Smart Codebase Intelligence</h3>
                  <p className="text-gray-400 text-sm mt-2 max-w-sm">
                    AI analyzes your project structure, learns your patterns, and suggests context-aware solutions instantly.
                  </p>
                  <Image
                    src="/images/card01.png"
                    alt="Smart Codebase Intelligence"
                    width={90}
                    height={60}
                    className="absolute right-0 -top-20"
                  />
                </div>
                <div className="mt-13">
                  <Image
                    src="/images/ncoder-1.jpg"
                    alt="Codebase visualization"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <BorderBeam duration={8} size={100} />
              </div>

              {/* Cards 2 & 3 - Desktop */}
              <div className="col-span-5 col-start-7 space-y-4">
                {/* Card 2 - Desktop */}
                <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 relative">
                  <div>
                    <Image
                      src="/images/card02-line.png"
                      alt="Mobile coding illustration"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col item-start pl-[4vw]">
                    <div className="mt-10">
                      <h3 className="text-xl md:text-3xl">Code on the go</h3>
                      <p className="text-gray-400 text-sm mt-2 max-w-sm">
                        Write code using natural language instructions with nCoder.ai on mobile.
                      </p>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/ncoder2.jpg"
                        alt="Mobile coding interface"
                        width={200}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <BorderBeam duration={8} size={100} />
                </div>

                {/* Card 3 - Desktop */}
                <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 pt-[4vw] pl-[4vw] relative">
                  <div className="relative">
                    <span className="bg-gray-700 text-xs uppercase px-2 py-1 rounded">
                      Collaborate
                    </span>
                    <Image
                      src="/images/card03-line.png"
                      alt="Collaboration illustration"
                      width={100}
                      height={50}
                      className="absolute right-0 -top-20"
                    />
                  </div>
                  <h3 className="text-xl md:text-3xl max-w-md">
                    Use nCoder.ai's editor, shell and browser
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    Full development environment with real-time editing, terminal access, and instant preview - all in one platform.
                  </p>
                  <div className="relative">
                    <Image
                      src="/images/ncoder-1.jpg"
                      alt="Development environment"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <BorderBeam duration={8} size={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}