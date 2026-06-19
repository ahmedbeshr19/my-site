<template>
  <div :class="['text-center', align === 'right' ? 'text-right' : '']">
    <div v-if="badge" class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm md:text-base font-bold mb-4">
      <span class="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse-soft" />
      {{ badge }}
    </div>
    <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  badge: String,
  align: { type: String, default: 'center' },
})
</script>
