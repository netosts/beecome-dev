<template>
  <div class="resources-sidebar">
    <div v-for="category in categories" :key="category.id" class="mb-6">
      <div
        class="flex items-center justify-between mb-2 cursor-pointer"
        @click="toggleCategory(category.id)"
      >
        <h3
          :class="[
            'text-sm font-semibold',
            activeCategory && activeCategory.id === category.id
              ? 'text-yellow-600'
              : 'text-gray-700',
          ]"
          @click.stop="$emit('select-category', category)"
        >
          {{ category.title }}
        </h3>
        <button class="text-gray-500 hover:text-yellow-600">
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
            :class="expandedCategories[category.id] ? 'transform rotate-180' : ''"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <div
        v-if="
          expandedCategories[category.id] || (activeCategory && activeCategory.id === category.id)
        "
        class="ml-2"
      >
        <div v-if="loadingTutorials[category.id]" class="py-2 px-2">
          <div class="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
        <ul v-else class="space-y-1">
          <li v-for="tutorial in categoryTutorials[category.id] || []" :key="tutorial.id">
            <a
              href="#"
              @click.prevent="$emit('select-tutorial', tutorial)"
              :class="[
                'block py-1 px-2 text-sm rounded-md transition-colors',
                activeTutorial && activeTutorial.id === tutorial.id
                  ? 'bg-yellow-100 text-yellow-800 font-medium'
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-gray-100',
              ]"
            >
              {{ tutorial.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import contentService from '@/services/learn-content'

const props = defineProps<{
  categories: unknown[]
  activeCategory: unknown
  activeTutorial: unknown
}>()

defineEmits(['select-category', 'select-tutorial'])

// Track which categories are expanded
const expandedCategories = ref({})
// Track tutorials for each category
const categoryTutorials = ref({})
// Track loading state for tutorials
const loadingTutorials = ref({})

// Initialize expanded state
onMounted(() => {
  props.categories.forEach((category) => {
    expandedCategories.value[category.id] =
      props.activeCategory && category.id === props.activeCategory.id

    // If this category is active or expanded, load its tutorials
    if (expandedCategories.value[category.id]) {
      loadTutorials(category.id)
    }
  })
})

// Watch for category changes
watch(
  () => props.categories,
  (newCategories) => {
    newCategories.forEach((category) => {
      if (!(category.id in expandedCategories.value)) {
        expandedCategories.value[category.id] =
          props.activeCategory && category.id === props.activeCategory.id
      }
    })
  },
  { deep: true },
)

// Watch for active category changes
watch(
  () => props.activeCategory,
  (newCategory) => {
    if (newCategory) {
      expandedCategories.value[newCategory.id] = true
      loadTutorials(newCategory.id)
    }
  },
)

// Toggle category expansion
const toggleCategory = async (categoryId) => {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]

  // If expanding and tutorials not loaded yet, load them
  if (expandedCategories.value[categoryId] && !categoryTutorials.value[categoryId]) {
    await loadTutorials(categoryId)
  }
}

// Load tutorials for a category
const loadTutorials = async (categoryId) => {
  if (categoryTutorials.value[categoryId]) return

  loadingTutorials.value[categoryId] = true

  try {
    const tutorials = await contentService.getTutorials(categoryId)
    categoryTutorials.value[categoryId] = tutorials
  } catch (error) {
    console.error(`Error loading tutorials for category ${categoryId}:`, error)
  } finally {
    loadingTutorials.value[categoryId] = false
  }
}
</script>
