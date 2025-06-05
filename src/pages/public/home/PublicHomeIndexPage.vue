<template>
  <div>
    <PublicHomeHeroSection />

    <PublicHomeLearningPathsSection :paths="articleModels" />

    <PublicHomeSkillsSection :skills="keySkills" />

    <!-- <PublicHomeTestimonialsSection :testimonials="testimonials" /> -->

    <PublicHomeCtaSection />
  </div>
</template>

<script setup lang="ts">
import { articleModels } from '@/assets/articles'
import IconBookOutline from '@/components/icons/IconBookOutline.vue'
import IconCheckCircleOutline from '@/components/icons/IconCheckCircleOutline.vue'
import IconCompassOutline from '@/components/icons/IconCompassOutline.vue'
import IconPuzzleOutline from '@/components/icons/IconPuzzleOutline.vue'
import IconStarOutline from '@/components/icons/IconStarOutline.vue'
import IconUsersGroup from '@/components/icons/IconUsersGroup.vue'
import PublicHomeCtaSection from '@/components/public/home/PublicHomeCtaSection.vue'
import PublicHomeHeroSection from '@/components/public/home/PublicHomeHeroSection.vue'
import PublicHomeLearningPathsSection from '@/components/public/home/PublicHomeLearningPathsSection.vue'
import PublicHomeSkillsSection from '@/components/public/home/PublicHomeSkillsSection.vue'
// import PublicHomeTestimonialsSection from '@/components/public/home/PublicHomeTestimonialsSection.vue'
import { ref } from 'vue'

const keySkills = ref([
  {
    id: 1,
    title: 'System Design',
    description: 'Learn to design scalable and maintainable software architectures',
    icon: IconCompassOutline,
  },
  {
    id: 2,
    title: 'Code Quality',
    description: 'Master clean code principles, testing, and code reviews',
    icon: IconCheckCircleOutline,
  },
  {
    id: 3,
    title: 'Problem Solving',
    description: 'Develop advanced algorithmic thinking and debugging skills',
    icon: IconPuzzleOutline,
  },
  {
    id: 4,
    title: 'Team Collaboration',
    description: 'Effective communication and collaboration in development teams',
    icon: IconUsersGroup,
  },
  {
    id: 5,
    title: 'Technical Leadership',
    description: 'Mentor junior developers and lead technical initiatives',
    icon: IconStarOutline,
  },
  {
    id: 6,
    title: 'Continuous Learning',
    description: 'Stay updated with industry trends and new technologies',
    icon: IconBookOutline,
  },
])

// const testimonials = ref([
//   {
//     id: 1,
//     name: 'Alex Johnson',
//     role: 'Frontend Developer at TechCorp',
//     content:
//       'This platform helped me transition from junior to mid-level in just 6 months. The structured learning paths and practical projects made all the difference.',
//     avatar: '/avatars/alex.jpg',
//   },
//   {
//     id: 2,
//     name: 'Maria Garcia',
//     role: 'Full Stack Developer at StartupX',
//     content:
//       'The system design and architecture sections were exactly what I needed to level up my skills. I now confidently lead technical discussions in my team.',
//     avatar: '/avatars/maria.jpg',
//   },
//   {
//     id: 3,
//     name: 'David Kim',
//     role: 'Backend Developer at FinTech Inc',
//     content:
//       'The focus on both technical skills and soft skills like code reviews and mentoring prepared me perfectly for my mid-level role.',
//     avatar: '/avatars/david.jpg',
//   },
// ])
</script>
