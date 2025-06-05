import { createRouter, createWebHistory } from 'vue-router'
import PublicHomeIndexPage from '@/pages/public/home/PublicHomeIndexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PublicHomeIndexPage,
    },
    // {
    //   path: '/learning-paths',
    //   name: 'LearningPaths',
    //   component: () => import('@/pages/public/home/PublicHomeLearningPage.vue'),
    //   props: true,
    // },
    // {
    //   path: '/resources',
    //   name: 'Resources',
    //   component: () => import('@/pages/public/home/PublicHomeLearnPage.vue'),
    // },
    // {
    //   path: '/resources/:category',
    //   name: 'ResourceCategory',
    //   component: () => import('@/pages/public/home/PublicHomeLearnPage.vue'),
    //   props: true,
    // },
  ],
})

export default router
