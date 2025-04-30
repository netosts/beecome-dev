<template>
  <section class="py-16 relative bg-gray-800">
    <!-- <div
      class="absolute z-0 inset-0 opacity-5 h-full bg-cover"
      style="
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==');
        background-size: 56px 100px;
      "
    ></div> -->
    <div class="container relative z-10 mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl text-white md:text-4xl font-bold mb-4">
          Key Skills for Mid-Level Engineers
        </h2>
        <p class="text-xl text-white max-w-3xl mx-auto">
          Master these essential skills to stand out as a mid-level software engineer and prepare
          for senior roles.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="skill in props.skills"
          :key="skill.id"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 rounded-full bg-gray-800 text-yellow-300 flex items-center justify-center mb-4"
          >
            <component :is="skill.icon" custom-class="w-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">{{ skill.title }}</h3>
          <p class="text-gray-600">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  skills: {
    id: number
    title: string
    description: string
    icon: unknown
  }[]
}>()
</script>
