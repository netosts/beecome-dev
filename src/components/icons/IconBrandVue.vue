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
    <path d="M16.5 4l-4.5 8l-4.5 -8" />
    <path d="M3 4l9 16l9 -16" />
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
