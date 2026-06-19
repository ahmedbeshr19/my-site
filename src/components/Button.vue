<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :class="[
      'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300',
      variantClasses,
      sizeClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer',
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  href: String,
  to: [String, Object],
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: Boolean,
})

defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300',
    secondary: 'bg-white text-slate-700 border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg',
    ghost: 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg',
    accent: 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:from-indigo-600 hover:to-sky-600',
  }
  return variants[props.variant] || variants.primary
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
    xl: 'px-10 py-4 text-lg',
  }
  return sizes[props.size] || sizes.md
})
</script>
