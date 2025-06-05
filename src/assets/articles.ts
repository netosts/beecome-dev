import IconBrandDocker from '@/components/icons/IconBrandDocker.vue'
import IconBrandLaravel from '@/components/icons/IconBrandLaravel.vue'
import IconBrandVue from '@/components/icons/IconBrandVue.vue'
import IconTestOutline from '@/components/icons/IconTestOutline.vue'
import { ref } from 'vue'

export const articleModels = ref([
  {
    id: 1,
    title: 'Vue.js',
    description: 'Master the Vue.js Framework by learning advanced concepts and features',
    icon: IconBrandVue,
    path: '',
  },
  {
    id: 2,
    title: 'Laravel',
    description: 'Build scalable APIs and learn queues, design patterns and much more',
    icon: IconBrandLaravel,
    path: '',
  },
  {
    id: 3,
    title: 'Testing',
    description: 'Learn Software Testing, TDD and Unit Testing using Laravel and Vue.js',
    icon: IconTestOutline,
    path: '',
  },
  {
    id: 4,
    title: 'DevOps',
    description: 'Learn CI/CD, containerization, and cloud infrastructure',
    icon: IconBrandDocker,
    path: '',
  },
])
