<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div class="sm:col-span-2 lg:col-span-1 text-center md:text-right">
          <div class="flex items-center justify-center md:justify-start gap-2.5 mb-4">
            <div class="w-9 h-9 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center shadow-md">
              <span class="text-white font-extrabold text-sm">&lt;/&gt;</span>
            </div>
            <span class="text-xl font-extrabold text-white tracking-tight">Code Tech</span>
          </div>
          <p class="text-slate-400 leading-relaxed text-sm lg:text-base mb-6">
            شركة مصرية رائدة في تطوير البرمجيات والحلول الرقمية. نُبدع في بناء تطبيقات الويب والموبايل باستخدام أحدث التقنيات لتحقيق التحول الرقمي لأعمالك.
          </p>
          <div class="flex items-center justify-center md:justify-start gap-3">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all duration-300" :aria-label="social.label" @click="trackSocialClick(social.label)">
              <span v-html="social.icon" />
            </a>
          </div>
        </div>

        <div class="text-center md:text-right">
          <h4 class="text-white font-bold mb-5 text-sm tracking-wider uppercase">الخدمات</h4>
          <ul class="space-y-3">
            <li v-for="item in serviceLinks" :key="item.label">
              <router-link :to="item.to" class="text-slate-400 hover:text-white transition-colors text-sm">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-right">
          <h4 class="text-white font-bold mb-5 text-sm tracking-wider uppercase">روابط سريعة</h4>
          <ul class="space-y-3">
            <li v-for="item in quickLinks" :key="item.label">
              <router-link :to="item.to" class="text-slate-400 hover:text-white transition-colors text-sm">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-right">
          <h4 class="text-white font-bold mb-5 text-sm tracking-wider uppercase">تواصل معنا</h4>
          <ul class="space-y-4">
            <li class="flex items-center justify-center md:justify-start gap-3 text-sm">
              <a href="https://wa.me/201070626890" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors" @click="trackWhatsApp">
                <svg class="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +201070626890
              </a>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-3 text-sm">
              <a href="mailto:info@code-tech.com" class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors" @click="trackEmail">
                <svg class="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@code-tech.com
              </a>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-3 text-sm">
              <svg class="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span class="text-slate-400">القاهرة، مصر</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-sm">© 2026 Code Tech. جميع الحقوق محفوظة.</p>
        <div class="flex items-center gap-6 text-sm">
          <router-link to="/#hero" class="text-slate-500 hover:text-slate-300 transition-colors">سياسة الخصوصية</router-link>
          <router-link to="/#hero" class="text-slate-500 hover:text-slate-300 transition-colors">الشروط والأحكام</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { trackEvent } from '../services/analytics'

function trackWhatsApp() {
  trackEvent('whatsapp_click', { source: 'footer_contact' })
  ttq.track('Contact', { content_name: 'whatsapp', content_category: 'contact', source: 'footer_contact' })
}

function trackEmail() {
  trackEvent('email_click')
  ttq.track('Contact', { content_name: 'email', content_category: 'contact' })
}

function trackSocialClick(label) {
  if (label === 'WhatsApp') {
    trackEvent('whatsapp_click', { source: 'footer_social' })
    ttq.track('Contact', { content_name: 'whatsapp', content_category: 'contact', source: 'footer_social' })
  }
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/codetech',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/codetech',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/codetech',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201070626890',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  },
]

const serviceLinks = [
  { label: 'تطوير تطبيقات الويب', to: '/#services' },
  { label: 'تطوير تطبيقات الموبايل', to: '/#services' },
  { label: 'تصميم تجربة المستخدم', to: '/#services' },
  { label: 'تحسين محركات البحث', to: '/#services' },
]

const quickLinks = [
  { label: 'الخدمات', to: '/#services' },
  { label: 'أعمالنا', to: '/#portfolio' },
  { label: 'المدونة', to: '/#insights' },
  { label: 'اتصل بنا', to: '/#cta' },
]
</script>
