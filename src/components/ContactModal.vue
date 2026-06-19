<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="$emit('update:modelValue', false)">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div class="modal-content relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-indigo-500 to-sky-500" />
          <button class="absolute top-5 left-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors" @click="$emit('update:modelValue', false)">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900 mb-2">تواصل مع خبراء كود تك</h3>
            <p class="text-slate-600">فريقنا جاهز للرد على استفساراتك في أسرع وقت</p>
          </div>
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <input v-model="form.name" type="text" placeholder="الاسم بالكامل" class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required>
            </div>
            <div>
              <input v-model="form.phone" type="tel" placeholder="رقم الهاتف" class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required>
            </div>
            <div>
              <select v-model="form.type" class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer" required>
                <option value="" disabled selected>نوع الموقع</option>
                <option value="موقع شخصي">موقع شخصي</option>
                <option value="موقع خدمي">موقع خدمي</option>
                <option value="موقع لشركة">موقع لشركة</option>
                <option value="موقع سياحي">موقع سياحي</option>
                <option value="موقع نظافة">موقع نظافة</option>
                <option value="متجر إلكتروني">متجر إلكتروني</option>
                <option value="نظام إدارة">نظام إدارة</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>
            <div>
              <textarea v-model="form.message" rows="3" placeholder="رسالتك (اختياري)" class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" />
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white py-3.5 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-indigo-200">
              إرسال الطلب
            </button>
          </form>
          <div v-if="submitted" class="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center">
            <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900 mb-2">تم إرسال طلبك بنجاح!</h3>
            <p class="text-slate-600 mb-1">شكراً لك {{ form.name }}</p>
            <p class="text-slate-500 text-sm mb-6">نوع الموقع: {{ form.type }}</p>
            <button class="text-indigo-600 font-bold hover:text-indigo-700 transition-colors" @click="$emit('update:modelValue', false)">إغلاق</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { trackEvent } from '../services/analytics'
import { addDocument } from '../firebase/db'

defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])

const form = reactive({ name: '', phone: '', type: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  trackEvent('form_submit', { name: form.name, type: form.type })
  addDocument('clients', {
    name: form.name,
    phone: form.phone,
    type: form.type,
    message: form.message || '',
    timestamp: new Date().toISOString(),
  })
}
</script>
