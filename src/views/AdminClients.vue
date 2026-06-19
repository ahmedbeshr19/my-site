<template>
  <div>
    <h1 class="text-2xl font-extrabold text-slate-900 mb-8">العملاء</h1>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-right">
          <thead>
            <tr class="border-b border-slate-100 bg-slate-50/50">
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">#</th>
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">الاسم</th>
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">رقم الهاتف</th>
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">نوع الموقع</th>
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">الرسالة</th>
              <th class="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">التوقيت</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client, i) in clients" :key="client.id" class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
              <td class="px-5 py-4 text-sm text-slate-500">{{ i + 1 }}</td>
              <td class="px-5 py-4 text-sm font-bold text-slate-900">{{ client.name }}</td>
              <td class="px-5 py-4 text-sm text-slate-600" dir="ltr">{{ client.phone }}</td>
              <td class="px-5 py-4"><span class="px-3 py-1 text-xs font-bold bg-indigo-50 text-indigo-600 rounded-full">{{ client.type }}</span></td>
              <td class="px-5 py-4 text-sm text-slate-600 max-w-[200px] truncate">{{ client.message || '—' }}</td>
              <td class="px-5 py-4 text-sm text-slate-400">{{ formatTime(client.timestamp) }}</td>
            </tr>
            <tr v-if="clients.length === 0">
              <td colspan="6" class="px-5 py-16 text-center text-slate-400">لا يوجد عملاء حتى الآن</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { queryDocuments } from '../firebase/db'

const router = useRouter()
const clients = ref([])

function formatTime(timestamp) {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

onMounted(async () => {
  if (!localStorage.getItem('admin_authenticated')) {
    router.push('/admin')
    return
  }
  clients.value = await queryDocuments('clients', 'timestamp', 'desc')
})
</script>
