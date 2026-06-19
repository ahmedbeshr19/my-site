<template>
  <div>
    <h1 class="text-2xl font-extrabold text-slate-900 mb-8">تغيير كلمة المرور</h1>
    <div class="max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <form @submit.prevent="handleChange" class="space-y-4">
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-1.5">كلمة المرور الحالية</label>
          <input v-model="currentPassword" type="password" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-1.5">كلمة المرور الجديدة</label>
          <input v-model="newPassword" type="password" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required minlength="6" />
        </div>
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-1.5">تأكيد كلمة المرور الجديدة</label>
          <input v-model="confirmPassword" type="password" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required minlength="6" />
        </div>
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <p v-if="success" class="text-emerald-600 text-sm font-bold">تم تغيير كلمة المرور بنجاح</p>
        <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-base hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200">
          حفظ التغييرات
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getDocument, updateDocument } from '../firebase/db'

const router = useRouter()
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref(false)

async function handleChange() {
  error.value = ''
  success.value = false
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'كلمة المرور الجديدة غير متطابقة'
    return
  }
  const settings = await getDocument('settings', 'admin')
  const storedPassword = settings?.password || 'admin123'
  if (currentPassword.value !== storedPassword) {
    error.value = 'كلمة المرور الحالية غير صحيحة'
    return
  }
  const ok = await updateDocument('settings', 'admin', { password: newPassword.value })
  if (ok) {
    success.value = true
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
  } else {
    error.value = 'حدث خطأ في حفظ كلمة المرور'
  }
}
</script>
