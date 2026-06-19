<template>
  <div>
    <h1 class="text-2xl font-extrabold text-slate-900 mb-8">الإحصائيات</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.visits }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">زيارات الموقع</div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.consultation }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">استشارة مجانية</div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.bookSite }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">احجز موقعك الآن</div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.whatsapp }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">واتساب</div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.contactExperts }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">تواصل مع خبراء</div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
        <div class="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>
        <div class="text-3xl font-extrabold text-slate-900">{{ stats.phoneCall }}</div>
        <div class="text-xs text-slate-500 mt-1 font-medium">الرقم الهاتف</div>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h2 class="text-lg font-extrabold text-slate-900 mb-4">آخر الأحداث</h2>
      <div class="space-y-3 max-h-96 overflow-y-auto">
        <div v-for="event in recentEvents" :key="event.id" class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl text-sm">
          <span class="px-2 py-1 rounded-lg text-xs font-bold" :class="eventBadge(event.event)">{{ eventLabel(event.event) }}</span>
          <span class="text-slate-500 text-xs flex-1">{{ formatTime(event.timestamp) }}</span>
        </div>
        <p v-if="recentEvents.length === 0" class="text-slate-400 text-sm text-center py-8">لا توجد أحداث حتى الآن</p>
      </div>
    </div>

    <div class="mt-8 bg-white rounded-2xl shadow-sm border border-red-100 p-6">
      <h2 class="text-lg font-extrabold text-red-600 mb-1">حذف جميع البيانات</h2>
      <p class="text-sm text-slate-500 mb-4">سيتم حذف جميع الأحداث والعملاء بشكل نهائي. لا يمكن التراجع عن هذا الإجراء.</p>
      <div class="flex items-center gap-3">
        <input v-model="deletePassword" type="password" placeholder="كلمة المرور" class="w-48 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm" />
        <button @click="handleDeleteAll" class="px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-md" :disabled="deleting">
          {{ deleting ? 'جاري الحذف...' : 'حذف الكل' }}
        </button>
        <span v-if="deleteMsg" class="text-sm" :class="deleteMsgType === 'success' ? 'text-emerald-600' : 'text-red-500'">{{ deleteMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { queryDocuments, deleteAllDocuments } from '../firebase/db'

const router = useRouter()
const stats = ref({ visits: 0, consultation: 0, bookSite: 0, whatsapp: 0, contactExperts: 0, phoneCall: 0 })
const recentEvents = ref([])
const deletePassword = ref('')
const deleteMsg = ref('')
const deleteMsgType = ref('')
const deleting = ref(false)

const eventLabels = {
  page_visit: 'زيارة',
  consultation_click: 'استشارة',
  book_site_click: 'حجز موقع',
  whatsapp_click: 'واتساب',
  contact_experts_click: 'خبراء',
  phone_click: 'هاتف',
  form_submit: 'نموذج',
}

const eventBadgeMap = {
  page_visit: 'bg-indigo-100 text-indigo-600',
  consultation_click: 'bg-sky-100 text-sky-600',
  book_site_click: 'bg-emerald-100 text-emerald-600',
  whatsapp_click: 'bg-green-100 text-green-600',
  contact_experts_click: 'bg-amber-100 text-amber-600',
  phone_click: 'bg-rose-100 text-rose-600',
  form_submit: 'bg-purple-100 text-purple-600',
}

function eventLabel(event) { return eventLabels[event] || event }
function eventBadge(event) { return eventBadgeMap[event] || 'bg-slate-100 text-slate-600' }

function formatTime(timestamp) {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleDateString('ar-EG', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

async function handleDeleteAll() {
  deleteMsg.value = ''
  if (deletePassword.value !== '1582009') {
    deleteMsg.value = 'كلمة المرور غير صحيحة'
    deleteMsgType.value = 'error'
    return
  }
  deleting.value = true
  const ok1 = await deleteAllDocuments('events')
  const ok2 = await deleteAllDocuments('clients')
  if (ok1 && ok2) {
    deleteMsg.value = 'تم حذف جميع البيانات بنجاح'
    deleteMsgType.value = 'success'
    stats.value = { visits: 0, consultation: 0, bookSite: 0, whatsapp: 0, contactExperts: 0, phoneCall: 0 }
    recentEvents.value = []
    deletePassword.value = ''
  } else {
    deleteMsg.value = 'حدث خطأ أثناء الحذف'
    deleteMsgType.value = 'error'
  }
  deleting.value = false
}

onMounted(async () => {
  if (!localStorage.getItem('admin_authenticated')) {
    router.push('/admin')
    return
  }
  const events = await queryDocuments('events', 'timestamp', 'desc')
  stats.value.visits = events.filter(e => e.event === 'page_visit').length
  stats.value.consultation = events.filter(e => e.event === 'consultation_click').length
  stats.value.bookSite = events.filter(e => e.event === 'book_site_click').length
  stats.value.whatsapp = events.filter(e => e.event === 'whatsapp_click').length
  stats.value.contactExperts = events.filter(e => e.event === 'contact_experts_click').length
  stats.value.phoneCall = events.filter(e => e.event === 'phone_click').length
  recentEvents.value = events.slice(0, 30)
})
</script>
