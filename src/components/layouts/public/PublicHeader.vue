<template>
  <header class="bg-gray-800 shadow font-roboto">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center transition-all duration-200">
            <img src="/logo.png" alt="Logo" class="w-32" />
            <!-- <div class="text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C10.21 6.04 10 5.53 10 5c0-.53.21-1.04.59-1.41C10.96 3.21 11.47 3 12 3z"
                ></path>
                <path
                  d="M19 12c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z"
                ></path>
                <path
                  d="M5 12c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C3.21 14.04 3 13.53 3 13c0-.53.21-1.04.59-1.41C3.96 12.21 4.47 12 5 12z"
                ></path>
                <path
                  d="M12 19c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z"
                ></path>
                <path d="M12 10a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0v-6a3 3 0 0 1 3-3z"></path>
                <path d="M9.5 9.5 7 7"></path>
                <path d="m14.5 9.5 2.5-2.5"></path>
                <path d="M12 12v-2"></path>
              </svg>
            </div> -->
            <span
              class="ml-2 text-2xl font-bold font-dynapuff text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700"
              >{{ appLabel }}</span
            >
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link
            v-for="(item, itemId) in menuItems"
            :key="itemId"
            :to="item.path"
            class="text-yellow-300 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >{{ item.label }}</router-link
          >
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="cursor-pointer text-yellow-300 hover:text-yellow-600 transition-all duration-200"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden py-2">
        <div class="flex flex-col space-y-2">
          <router-link
            v-for="(item, itemId) in menuItems"
            :key="itemId"
            :to="item.path"
            class="text-yellow-300 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >{{ item.label }}</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { label as appLabel } from '../../../../package.json'

const isMenuOpen = ref(false)

const menuItems = ref([
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Articles',
    path: '/articles',
  },
  {
    label: 'Practice Projects',
    path: '/practice',
  },
  {
    label: 'About',
    path: '/about',
  },
])
</script>
