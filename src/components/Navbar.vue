<template>
  <header class="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-4">
    <div
      class="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-indigo-200/60 hover:border-indigo-300/80 transition-all duration-300 px-4 sm:px-6"
      :class="{ 'shadow-lg shadow-slate-200/50': scrolled }"
    >
      <div class="flex items-center justify-between h-14 md:h-16">
        <router-link to="/" class="flex items-center gap-2.5 flex-shrink-0">
          <div class="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center shadow-md">
            <span class="text-white font-extrabold text-xs md:text-sm">&lt;/&gt;</span>
          </div>
          <span class="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Code Tech</span>
        </router-link>

        <nav class="hidden lg:flex items-center gap-0.5">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="px-3 xl:px-4 py-2 text-base xl:text-lg text-slate-600 hover:text-indigo-600 font-bold rounded-xl hover:bg-indigo-50/60 transition-all duration-200"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="hidden lg:block">
          <button
            class="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 xl:px-6 py-2.5 rounded-full font-bold text-base hover:bg-indigo-700 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-200"
            @click="trackConsultation(); contactModalOpen = true"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            استشارة مجانية
          </button>
        </div>

        <button
          class="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-700"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition name="mobile-menu">
        <div v-if="mobileOpen" class="lg:hidden border-t border-slate-100 pb-4">
          <div class="pt-3 space-y-0.5">
            <router-link
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              class="block px-4 py-3 text-slate-600 hover:text-indigo-600 font-bold rounded-xl hover:bg-indigo-50/60 transition-all text-base"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </router-link>
            <button
              class="flex items-center justify-center gap-2 mt-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-indigo-700 transition-all w-full"
              @click="mobileOpen = false; trackConsultation(); contactModalOpen = true"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              استشارة مجانية
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import { trackEvent } from '../services/analytics'

const mobileOpen = ref(false)
const scrolled = ref(false)
const contactModalOpen = inject('contactModalOpen')

function trackConsultation() {
  trackEvent('consultation_click')
}

const navLinks = [
  { label: 'الرئيسية', to: '/#hero' },
  { label: 'الخدمات', to: '/#services' },
  { label: 'آلية العمل', to: '/#process' },
  { label: 'المشاريع', to: '/#portfolio' },
  { label: 'المدونة', to: '/#insights' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
