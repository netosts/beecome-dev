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
    <path
      d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
    />
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
