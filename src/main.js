import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

router.afterEach((to) => {
  const titles = {
    Home: 'Code Tech | شركة برمجية مصرية - تصميم وتطوير تطبيقات الويب والموبايل',
    AdminLogin: 'تسجيل الدخول - Code Tech',
    AdminDashboard: 'الإحصائيات - Code Tech',
    AdminClients: 'العملاء - Code Tech',
    AdminChangePassword: 'تغيير كلمة المرور - Code Tech',
  }
  document.title = titles[to.name] || 'Code Tech'
})

const app = createApp(App)
app.use(router)
app.mount('#app')
