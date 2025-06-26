"use client"

import React from "react";

export default function DevWorkspace() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22/%3E%3C/svg%3E')] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Learn & Work Together */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
              Learn & work
              <br />
              together
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Devin is built for collaboration and can learn to fit into your unique workflow.
            </p>
            {/* Knowledge Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✔</span>
                <h3 className="text-lg font-semibold text-gray-300">Devin learns your codebase & picks up tribal knowledge</h3>
              </div>
              <div className="ml-7 space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Add knowledge</span>
                </div>
                <p>Would you like Devin to remember this?</p>
                <div className="flex items-center space-x-2">
                  <span>Use when</span>
                  <span className="text-green-400">When working in the backend repo</span>
                  <button className="ml-2 text-gray-500 hover:text-gray-400">✕</button>
                </div>
                <ul className="list-disc list-inside text-green-400">
                  <li>The repo is cloned in ~/my_project_backend</li>
                  <li>The main branch name is master</li>
                  <li>Run 'poetry install' before you start</li>
                  <li>Run ./lint.sh to check lint before making commits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section: Code on the Go */}
          <div className="space-y-6">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-300">Code on the go</h2>
              <p className="mt-2 text-gray-400 text-lg">
                Write code using natural language instructions with Devin on mobile.
              </p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Collaborate
              </button>
            </div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className="text-sm text-gray-400">9:41</span>
                <div className="w-6 h-6 bg-gray-700 rounded-tr-lg"></div>
              </div>
              <p className="text-gray-300 text-sm">
                Hey there! I'm Devin and I'm a software engineer. Enter a coding task below to get started.
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Give Devin a task to work on..."
                  className="w-full bg-gray-700/50 text-white placeholder-gray-400 rounded-lg p-2 focus:outline-none"
                />
                <button className="text-gray-400 hover:text-gray-300">➤</button>
              </div>
            </div>
          </div>

          {/* Workspace Interface */}
          <div className="col-span-2 mt-12">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-300">Devin's Workspace</h3>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs"></div>
              </div>
              <div className="flex space-x-4 mb-4">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm">Shell</button>
                <button className="text-gray-400 hover:text-gray-300 text-sm">Browser</button>
                <button className="text-gray-400 hover:text-gray-300 text-sm">Editor</button>
                <button className="text-gray-400 hover:text-gray-300 text-sm">Planner</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}