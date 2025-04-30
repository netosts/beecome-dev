<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from developers who have successfully leveled up their careers using our platform.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in props.testimonials"
          :key="testimonial.id"
          class="bg-white p-6 rounded-lg shadow-md border border-gray-100"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
              <img
                :src="testimonial.avatar || '/placeholder.svg'"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-bold">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="text-gray-700 italic">{{ testimonial.content }}</p>
          <div class="mt-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-yellow-400"
              v-for="i in 5"
              :key="i"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  testimonials: {
    id: number
    name: string
    role: string
    content: string
    avatar?: string
  }[]
}>()
</script>
