<template>
  <div>
    <section class="py-12 bg-emerald-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ path.title }}</h1>
          <p class="text-xl text-emerald-100 mb-6">{{ path.description }}</p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
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
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
              <span>{{ path.courseCount }} Courses</span>
            </div>
            <div class="flex items-center">
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
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{{ path.duration }}</span>
            </div>
            <div class="flex items-center">
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span>{{ path.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Sidebar -->
          <div class="lg:w-1/4">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 class="text-lg font-bold mb-4">Path Progress</h3>
              <div class="mb-4">
                <div class="flex justify-between mb-2">
                  <span class="text-sm text-gray-600">Overall Completion</span>
                  <span class="text-sm font-medium">{{ path.progress }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-emerald-600 h-2.5 rounded-full"
                    :style="`width: ${path.progress}%`"
                  ></div>
                </div>
              </div>

              <h3 class="text-lg font-bold mb-4">Path Sections</h3>
              <ul class="space-y-2">
                <li
                  v-for="(section, index) in path.sections"
                  :key="index"
                  class="flex items-center"
                >
                  <div
                    :class="`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${section.completed ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`"
                  >
                    <svg
                      v-if="section.completed"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                  <span :class="`${section.completed ? 'text-gray-700' : 'text-gray-500'}`">{{
                    section.title
                  }}</span>
                </li>
              </ul>

              <div class="mt-6">
                <button
                  class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition duration-300"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:w-3/4">
            <div class="mb-8">
              <h2 class="text-2xl font-bold mb-4">About This Learning Path</h2>
              <p class="text-gray-700 mb-4">{{ path.longDescription }}</p>
              <div class="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                <h3 class="text-lg font-bold text-emerald-800 mb-2">What You'll Learn</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li
                    v-for="(outcome, index) in path.learningOutcomes"
                    :key="index"
                    class="flex items-start"
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
                      class="text-emerald-600 mr-2 mt-1"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>{{ outcome }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div v-for="(section, sectionIndex) in path.sections" :key="sectionIndex" class="mb-10">
              <h2 class="text-2xl font-bold mb-6 flex items-center">
                <span
                  class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mr-3 text-sm"
                >
                  {{ sectionIndex + 1 }}
                </span>
                {{ section.title }}
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <course-card v-for="course in section.courses" :key="course.id" :course="course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CourseCard from '@/components/public/home/shared/PublicHomeSharedCourseCard.vue'

// Sample data - in a real app, this would come from an API
const path = ref({
  title: 'Frontend Development Path',
  description:
    'Master modern frontend frameworks and advanced UI/UX principles to become a mid-level frontend developer',
  longDescription:
    "This comprehensive learning path will take you from basic frontend knowledge to the advanced skills required of a mid-level frontend developer. You'll learn modern frameworks, state management, performance optimization, testing strategies, and how to architect complex frontend applications.",
  courseCount: 12,
  duration: '4-6 months',
  level: 'Intermediate to Advanced',
  progress: 35,
  learningOutcomes: [
    'Design and implement complex component architectures',
    'Master state management patterns and best practices',
    'Implement advanced CSS techniques and animations',
    'Write comprehensive test suites for frontend applications',
    'Optimize application performance and loading times',
    'Lead code reviews and provide constructive feedback',
  ],
  sections: [
    {
      title: 'Advanced JavaScript Concepts',
      completed: true,
      courses: [
        {
          id: 1,
          title: 'JavaScript Patterns and Best Practices',
          description: 'Learn advanced JavaScript patterns used in professional applications',
          image: '/courses/js-patterns.jpg',
          category: 'JavaScript',
          level: 'Intermediate',
          rating: 4.8,
          reviewCount: 324,
          instructor: {
            name: 'Sarah Johnson',
            avatar: '/instructors/sarah.jpg',
          },
        },
        {
          id: 2,
          title: 'Asynchronous JavaScript Mastery',
          description: 'Deep dive into promises, async/await, and advanced asynchronous patterns',
          image: '/courses/async-js.jpg',
          category: 'JavaScript',
          level: 'Intermediate',
          rating: 4.9,
          reviewCount: 412,
          instructor: {
            name: 'Michael Chen',
            avatar: '/instructors/michael.jpg',
          },
        },
      ],
    },
    {
      title: 'Component Architecture',
      completed: false,
      courses: [
        {
          id: 3,
          title: 'Advanced Component Design Patterns',
          description: 'Learn to design flexible, reusable component systems',
          image: '/courses/component-design.jpg',
          category: 'Architecture',
          level: 'Advanced',
          rating: 4.7,
          reviewCount: 286,
          instructor: {
            name: 'Emma Rodriguez',
            avatar: '/instructors/emma.jpg',
          },
        },
        {
          id: 4,
          title: 'State Management Deep Dive',
          description: 'Master complex state management for large applications',
          image: '/courses/state-management.jpg',
          category: 'Architecture',
          level: 'Advanced',
          rating: 4.6,
          reviewCount: 198,
          instructor: {
            name: 'James Wilson',
            avatar: '/instructors/james.jpg',
          },
        },
      ],
    },
    {
      title: 'Performance Optimization',
      completed: false,
      courses: [
        {
          id: 5,
          title: 'Frontend Performance Optimization',
          description: 'Techniques to make your applications lightning fast',
          image: '/courses/performance.jpg',
          category: 'Performance',
          level: 'Advanced',
          rating: 4.9,
          reviewCount: 356,
          instructor: {
            name: 'David Kim',
            avatar: '/instructors/david.jpg',
          },
        },
        {
          id: 6,
          title: 'Advanced Browser Rendering',
          description: 'Understanding how browsers render applications and optimizing for it',
          image: '/courses/browser-rendering.jpg',
          category: 'Performance',
          level: 'Advanced',
          rating: 4.8,
          reviewCount: 274,
          instructor: {
            name: 'Lisa Patel',
            avatar: '/instructors/lisa.jpg',
          },
        },
      ],
    },
  ],
})
</script>
