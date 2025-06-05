<!-- <template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-50">
    <div
      class="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10"
    >
      <h1 class="text-xl font-bold text-gray-900">Resources</h1>
      <button @click="isSidebarOpen = !isSidebarOpen" class="text-gray-500 hover:text-yellow-500">
        <svg
          v-if="!isSidebarOpen"
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
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
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
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div
      :class="`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-64 lg:w-72 bg-white border-r border-gray-200 overflow-y-auto fixed md:sticky top-0 h-screen z-20`"
    >
      <div class="px-4 border-gray-200 flex items-center justify-between">
        <div class="md:hidden">
          <button @click="isSidebarOpen = false" class="text-gray-500 hover:text-yellow-500">
            <svg
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="p-4">
        <div class="relative mb-4">
          <input
            type="text"
            placeholder="Search documentation..."
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
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
            class="absolute right-3 top-2.5 text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <resources-sidebar
          :categories="categories"
          :activeCategory="activeCategory"
          :activeTutorial="activeTutorial"
          @select-category="selectCategory"
          @select-tutorial="selectTutorial"
        />
      </div>
    </div>

    <div class="flex-1 md:px-4">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div v-if="loading" class="flex justify-center items-center h-64">
          <div
            class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"
          ></div>
        </div>

        <template v-else>
          <div class="mb-6 flex items-center text-sm text-gray-500">
            <span>Resources</span>
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
              class="mx-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span class="text-gray-700">{{ activeCategory?.title || 'Loading...' }}</span>
            <template v-if="activeTutorial">
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
                class="mx-2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span class="text-gray-900">{{ activeTutorial.title }}</span>
            </template>
          </div>

          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ activeTutorial ? activeTutorial.title : activeCategory?.title }}
            </h1>
            <p class="text-gray-600">
              {{ activeTutorial ? activeTutorial.description : activeCategory?.description }}
            </p>
          </div>

          <div class="prose prose-yellow max-w-none">
            <markdown-content :content="currentContent" />
          </div>

          <div
            v-if="activeTutorial"
            class="mt-12 pt-6 border-t border-gray-200 flex justify-between"
          >
            <div
              v-if="prevTutorial"
              class="flex items-center text-yellow-600 hover:text-yellow-700"
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <button @click="selectTutorial(prevTutorial)" class="font-medium">
                {{ prevTutorial.title }}
              </button>
            </div>
            <div
              v-if="nextTutorial"
              class="flex items-center text-yellow-600 hover:text-yellow-700 ml-auto"
            >
              <button @click="selectTutorial(nextTutorial)" class="font-medium">
                {{ nextTutorial.title }}
              </button>
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
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ResourcesSidebar from '@/components/public/home/learn/PublicHomeLearnSidebar.vue'
import MarkdownContent from '@/components/public/home/learn/PublicHomeLearnMarkdown.vue'
import contentService from '@/services/learn-content'

// Router
const route = useRoute()
const router = useRouter()

// State
const isSidebarOpen = ref(false)
const loading = ref(true)
const categories = ref([])
const activeCategory = ref(null)
const activeTutorial = ref(null)
const currentContent = ref('')
const categoryTutorials = ref([])

// Navigation
const prevTutorial = computed(() => {
  if (!activeTutorial.value) return null

  const currentIndex = categoryTutorials.value.findIndex((t) => t.id === activeTutorial.value.id)

  if (currentIndex > 0) {
    return categoryTutorials.value[currentIndex - 1]
  }

  return null
})

const nextTutorial = computed(() => {
  if (!activeTutorial.value) return null

  const currentIndex = categoryTutorials.value.findIndex((t) => t.id === activeTutorial.value.id)

  if (currentIndex < categoryTutorials.value.length - 1) {
    return categoryTutorials.value[currentIndex + 1]
  }

  return null
})

// Methods
const loadCategories = async () => {
  try {
    categories.value = await contentService.getCategories()
  } catch (error) {
    console.error('Error loading categories:', error)
  }
}

const loadCategory = async (categoryId) => {
  try {
    loading.value = true
    activeCategory.value = await contentService.getCategory(categoryId)
    categoryTutorials.value = await contentService.getTutorials(categoryId)

    // If no tutorial is selected, select the first one
    if (categoryTutorials.value.length > 0 && !activeTutorial.value) {
      await loadTutorial(categoryId, categoryTutorials.value[0].id)
    } else {
      loading.value = false
    }
  } catch (error) {
    console.error('Error loading category:', error)
    loading.value = false
  }
}

const loadTutorial = async (categoryId, tutorialId) => {
  try {
    loading.value = true
    activeTutorial.value = await contentService.getTutorial(categoryId, tutorialId)
    currentContent.value = await contentService.getContent(categoryId, tutorialId)
    loading.value = false
  } catch (error) {
    console.error('Error loading tutorial:', error)
    loading.value = false
  }
}

const selectCategory = async (category) => {
  router.push({ name: 'ResourceCategory', params: { category: category.id } })
}

const selectTutorial = async (tutorial) => {
  if (activeCategory.value) {
    router.push({
      name: 'ResourceTutorial',
      params: {
        category: activeCategory.value.id,
        tutorial: tutorial.id,
      },
    })
  }
}

// Initialize from route
const initFromRoute = async () => {
  await loadCategories()

  const { category, tutorial } = route.params

  if (category) {
    await loadCategory(category)

    if (tutorial) {
      await loadTutorial(category, tutorial)
    }
  } else if (categories.value.length > 0) {
    // Default to first category if none specified
    await loadCategory(categories.value[0].id)
  }
}

// Watch for route changes
watch(
  () => route.params,
  async (newParams) => {
    const { category, tutorial } = newParams

    if (category && (!activeCategory.value || category !== activeCategory.value.id)) {
      await loadCategory(category)
    }

    if (tutorial && (!activeTutorial.value || tutorial !== activeTutorial.value.id)) {
      await loadTutorial(category, tutorial)
    }
  },
)

// Initialize
onMounted(async () => {
  await initFromRoute()
})
</script> -->
<template>
  <div>a</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
