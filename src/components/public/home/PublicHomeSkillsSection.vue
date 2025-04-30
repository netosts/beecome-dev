<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Key Skills for Mid-Level Engineers</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <svg-icon :name="skill.icon" />
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
    icon: string
  }[]
}>()
</script>
