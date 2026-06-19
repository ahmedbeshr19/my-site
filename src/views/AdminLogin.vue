<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-indigo-500 to-sky-500" />
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <h1 class="text-2xl font-extrabold text-slate-900">لوحة التحكم</h1>
        <p class="text-slate-500 mt-1">Code Tech</p>
      </div>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="كلمة المرور"
            class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            autofocus
          />
        </div>
        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-3.5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200"
        >
          دخول
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')
const checkAdminPassword = inject('checkAdminPassword')

async function handleLogin() {
  error.value = ''
  const valid = await checkAdminPassword(password.value)
  if (valid) {
    localStorage.setItem('admin_authenticated', 'true')
    router.push('/admin/dashboard')
  } else {
    error.value = 'كلمة المرور غير صحيحة'
  }
}
</script>
