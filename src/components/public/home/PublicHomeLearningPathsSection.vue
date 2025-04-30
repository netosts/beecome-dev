<template>
  <section class="py-16 relative bg-white">
    <div class="absolute z-10 top-0 left-0 right-0 h-16 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="absolute bottom-0 w-full h-16 bg-gradient-to-l rotate-180 from-yellow-400 to-yellow-600 transform"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <div
      class="absolute z-0 inset-0 opacity-5 h-full bg-cover"
      style="
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==');
        background-size: 56px 100px;
      "
    ></div>
    <div class="container relative z-20 mx-auto px-4 mt-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Structured Learning Paths</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow our carefully designed learning paths to systematically build the skills needed for
          mid-level positions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="path in props.paths"
          :key="path.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
        >
          <div :class="`${path.color} h-2 w-full`"></div>
          <div class="p-6">
            <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <svg-icon :name="path.icon" class="w-6 h-6 text-gray-700" />
            </div>
            <h3 class="text-xl font-bold mb-2">{{ path.title }}</h3>
            <p class="text-gray-600 mb-4">{{ path.description }}</p>
            <button
              class="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors"
            >
              Explore Path
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
    </div>
  </section>

  <section class="py-16 bg-white"></section>
</template>

<script setup lang="ts">
const props = defineProps<{
  paths: {
    id: number
    title: string
    description: string
    icon: string
    color: string
  }[]
}>()
</script>
