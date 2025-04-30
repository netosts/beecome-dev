<template>
  <footer class="bg-gray-900 text-white font-roboto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Beecome Dev</h3>
          <p class="text-gray-300">
            Helping developers reach the mid-level and beyond through structured learning paths and
            practical resources.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Learning Paths</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/learning-paths/frontend" class="text-gray-300 hover:text-yellow-400"
                >Frontend Development</router-link
              >
            </li>
            <li>
              <router-link to="/learning-paths/backend" class="text-gray-300 hover:text-yellow-400"
                >Backend Development</router-link
              >
            </li>
            <li>
              <router-link
                to="/learning-paths/fullstack"
                class="text-gray-300 hover:text-yellow-400"
                >Full Stack Development</router-link
              >
            </li>
            <li>
              <router-link to="/learning-paths/devops" class="text-gray-300 hover:text-yellow-400"
                >DevOps</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/resources/articles" class="text-gray-300 hover:text-yellow-400"
                >Articles</router-link
              >
            </li>
            <li>
              <router-link to="/resources/tutorials" class="text-gray-300 hover:text-yellow-400"
                >Tutorials</router-link
              >
            </li>
            <li>
              <router-link to="/resources/projects" class="text-gray-300 hover:text-yellow-400"
                >Practice Projects</router-link
              >
            </li>
            <li>
              <router-link to="/resources/interviews" class="text-gray-300 hover:text-yellow-400"
                >Interview Prep</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-yellow-400">
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
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-yellow-400">
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
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-yellow-400">
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
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-yellow-400">
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
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <div class="mt-4">
            <h4 class="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
            <div class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="px-3 py-2 text-gray-900 rounded-l-md w-full focus:outline-none bg-white"
              />
              <button
                class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-md cursor-pointer"
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
                >
                  <path d="m5 9 7 7 7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-6 text-center text-gray-300">
        <p>&copy; {{ currentYear }} Beecome Dev. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
