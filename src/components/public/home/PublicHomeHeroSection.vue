<template>
  <section
    class="pt-12 pb-20 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-800"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 mb-16 md:mb-20 lg:mb-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-quantico">
            Level Up Your Software Engineering Career
          </h1>
          <p class="text-xl md:text-2xl mb-8">
            Structured fine articles and practice projects to help you reach mid-level engineer
            status and beyond.
          </p>
          <div class="flex flex-col lg:flex-row gap-4">
            <button
              class="bg-gray-800 text-yellow-300 cursor-pointer px-6 py-3 rounded-lg font-medium text-lg shadow-lg transition duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              Start Learning
            </button>
            <button
              class="bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-yellow-300 cursor-pointer px-6 py-3 rounded-lg font-medium text-lg transition duration-200 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m10 8 6 4-6 4V8z"></path>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-white opacity-10 rounded-lg transform rotate-6"></div>
            <div class="relative bg-gray-800 p-6 rounded-lg shadow-2xl">
              <div class="flex items-center mb-4">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="ml-4 text-xs text-gray-400">career-roadmap.js</div>
              </div>
              <pre class="hidden sm:block text-yellow-300 font-mono text-sm overflow-x-auto">
<code>const <span class="text-purple-400">careerPath</span> = {
  <span class="text-red-500">junior</span>: {
    skills: ['basics', 'coding', 'teamwork'],
    experience: '0-2 years'
  },
  <span class="text-red-500">midLevel</span>: {
    skills: [
      'system design', 
      'code quality',
      'mentoring',
      'technical leadership'
    ],
    experience: '2-5 years'
  },
  <span class="text-red-500">senior</span>: {
    skills: ['architecture', 'strategy'],
    experience: '5+ years'
  }
};</code>
              </pre>
              <pre class="block sm:hidden text-yellow-300 font-mono text-sm overflow-x-auto">
<code>const <span class="text-purple-400">careerPath</span> = {
  <span class="text-red-500">junior</span>: {
    skills: [
      'basics', 'coding', 'teamwork'
    ],
    experience: '0-2 years'
  },
  <span class="text-red-500">midLevel</span>: {
    skills: [
      'system design', 
      'code quality',
      'mentoring',
      'technical leadership'
    ],
    experience: '2-5 years'
  },
  <span class="text-red-500">senior</span>: {
    skills: [
      'architecture', 'strategy'
    ],
    experience: '5+ years'
  }
};</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
