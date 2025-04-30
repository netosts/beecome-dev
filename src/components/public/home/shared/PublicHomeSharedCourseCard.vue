<template>
  <div
    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
  >
    <div class="relative">
      <img
        :src="course.image || '/placeholder.svg'"
        :alt="course.title"
        class="w-full h-48 object-cover"
      />
      <div
        class="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-medium text-gray-700"
      >
        {{ course.level }}
      </div>
    </div>
    <div class="p-5">
      <div class="flex items-center mb-2">
        <div class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
          {{ course.category }}
        </div>
        <div class="ml-2 flex items-center text-yellow-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <span class="ml-1">{{ course.rating }}</span>
          <span class="ml-1 text-gray-500">({{ course.reviewCount }})</span>
        </div>
      </div>
      <h3 class="text-lg font-bold mb-2">{{ course.title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ course.description }}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img
            :src="course.instructor.avatar || '/placeholder.svg'"
            :alt="course.instructor.name"
            class="w-8 h-8 rounded-full mr-2"
          />
          <span class="text-sm text-gray-700">{{ course.instructor.name }}</span>
        </div>
        <button
          class="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center"
        >
          View Course
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>
