<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="props.customClass ?? [classIconSize, 'icon-default']"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
    <path d="M7 13h8" />
    <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" />
    <path d="M15 3l6 6" />
  </svg>
</template>

<script setup lang="ts">
import type { TCustomClass, TIconSize } from '@/types/utils/icon'
import { getIconSize } from '@/utils/icon'
import { computed } from 'vue'

const props = defineProps<{
  customClass?: TCustomClass
  size?: TIconSize
}>()

const classIconSize = computed(() => getIconSize(props.size!))
</script>

<style scoped></style>
