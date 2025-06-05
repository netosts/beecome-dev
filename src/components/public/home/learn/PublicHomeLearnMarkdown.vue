<!-- <template>
  <div class="markdown-content" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {}
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true,
})

// Render markdown to HTML
const renderedContent = computed(() => {
  return marked(props.content)
})
</script>

<style lang="scss">
.markdown-content h1 {
  @apply text-3xl font-bold mt-8 mb-4;
}

.markdown-content h2 {
  @apply text-2xl font-bold mt-6 mb-3;
}

.markdown-content h3 {
  @apply text-xl font-bold mt-5 mb-2;
}

.markdown-content p {
  @apply my-4;
}

.markdown-content ul,
.markdown-content ol {
  @apply my-4 ml-6;
}

.markdown-content ul {
  @apply list-disc;
}

.markdown-content ol {
  @apply list-decimal;
}

.markdown-content li {
  @apply mb-2;
}

.markdown-content a {
  @apply text-yellow-600 hover:text-yellow-700 underline;
}

.markdown-content blockquote {
  @apply pl-4 border-l-4 border-gray-300 italic my-4 text-gray-700;
}

.markdown-content pre {
  @apply bg-gray-100 p-4 rounded-md overflow-x-auto my-4;
}

.markdown-content code {
  @apply font-mono text-sm;
}

.markdown-content :not(pre) > code {
  @apply bg-gray-100 px-1 py-0.5 rounded text-gray-800;
}

.markdown-content table {
  @apply w-full border-collapse my-4;
}

.markdown-content th,
.markdown-content td {
  @apply border border-gray-300 px-4 py-2;
}

.markdown-content th {
  @apply bg-gray-100;
}

.markdown-content img {
  @apply max-w-full my-4 rounded-md;
}

.markdown-content hr {
  @apply my-6 border-t border-gray-300;
}
</style> -->
<template>
  <div>a</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
