<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <PublicHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <PublicFooter />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import PublicHeader from './components/layouts/public/PublicHeader.vue'
import PublicFooter from './components/layouts/public/PublicFooter.vue'

// Provide global state if needed
provide('appName', 'DevLevelUp')
</script>
