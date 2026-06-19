import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminLayout from '@/components/AdminSidebar.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import AdminClients from '@/views/AdminClients.vue'
import AdminChangePassword from '@/views/AdminChangePassword.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', redirect: '/#services' },
  { path: '/portfolio', redirect: '/#portfolio' },
  { path: '/about', redirect: '/#about' },
  { path: '/contact', redirect: '/#cta' },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'clients', name: 'AdminClients', component: AdminClients },
      { path: 'change-password', name: 'AdminChangePassword', component: AdminChangePassword },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash && to.name === 'Home') {
      const el = document.querySelector(to.hash)
      if (el) {
        return { el: to.hash, behavior: 'smooth', top: 80 }
      }
    }
    return { top: 0 }
  },
})

export default router
