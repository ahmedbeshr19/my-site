<template>
  <div class="min-h-screen bg-white">
    <!-- Section 2: Hero -->
    <section id="hero" class="relative pt-40 md:pt-48 pb-32 md:pb-40 overflow-hidden bg-gradient-to-b from-indigo-100/80 via-white to-white">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px]" />
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[120px]" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.04]" style="background-image: radial-gradient(circle, #6366f1 1px, transparent 1px); background-size: 32px 32px;" />
        <div class="md:hidden absolute inset-0 opacity-10" :style="{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }" />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          <div class="text-center lg:text-right order-2 lg:order-1 lg:pl-14 2xl:pl-20">
            <div class="inline-flex items-center gap-1.5 px-5 py-2 bg-indigo-50/80 text-indigo-600 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8">
              <span class="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse-soft" />
              خبراء في التحول الرقمي
            </div>
            <h1 class="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              <span class="block">نُشكّل المستقبل</span>
              <span class="block"><span class="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-sky-500">الرقمي</span> لأعمالك</span>
            </h1>
            <p class="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              نبني حلولاً برمجية عالمية المستوى – من تطبيقات الويب والموبايل إلى استراتيجيات التحول الرقمي المتكاملة – لننقل أعمالك إلى آفاق جديدة من النجاح.
            </p>
            <div class="mt-8 md:mt-12 flex flex-row items-center justify-center lg:justify-start gap-2 md:gap-5">
              <button
                class="inline-flex items-center gap-1.5 md:gap-2 bg-indigo-600 text-white px-5 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-2xl lg:text-3xl hover:bg-indigo-700 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-200"
                @click="showContactModal = true; trackEvent('book_site_click')"
              >
                <svg class="w-4 h-4 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                احجز موقعك الآن
              </button>
              <a href="https://wa.me/201070626890" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 md:gap-2 bg-[#25D366] text-white px-5 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-2xl lg:text-3xl hover:bg-[#22c35e] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-green-200" @click="trackEvent('whatsapp_click', { source: 'hero' }); ttq.track('Contact', { content_name: 'whatsapp', content_category: 'contact', source: 'hero' })">
                <svg class="w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                واتساب
              </a>
            </div>
            <div class="mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm md:text-base text-slate-500">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                </div>
                <span class="text-slate-600 font-medium">+50 عميل يثقون فينا</span>
              </div>
            </div>
          </div>
          <div class="hidden md:flex order-1 lg:order-2 relative items-center justify-center min-h-[450px] lg:min-h-0">
            <div class="hidden lg:block absolute top-4 -right-4 w-72 h-72 bg-indigo-300/15 rounded-full blur-3xl" />
            <div class="hidden lg:block absolute -bottom-4 -left-4 w-80 h-80 bg-sky-300/15 rounded-full blur-3xl" />

            <!-- Laptop -->
            <div class="relative w-80 lg:w-[340px] xl:w-[380px] animate-float">
              <div class="bg-slate-800 rounded-t-xl rounded-b-sm shadow-2xl overflow-hidden">
                <div class="flex items-center gap-1.5 px-4 py-2.5 bg-slate-700/80">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div class="mr-4 h-2 w-24 rounded-full bg-slate-600" />
                </div>
                <div class="aspect-[16/10] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-between">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center">
                        <span class="text-white font-black text-[10px]">&lt;/&gt;</span>
                      </div>
                      <span class="text-indigo-300 text-xs font-medium">Code Tech</span>
                    </div>
                    <div class="flex gap-1">
                      <div class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <div class="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="h-2 bg-gradient-to-r from-indigo-400/60 to-transparent rounded-full w-3/4" />
                    <div class="h-2 bg-gradient-to-r from-sky-400/40 to-transparent rounded-full w-1/2" />
                    <div class="h-2 bg-gradient-to-r from-indigo-400/30 to-transparent rounded-full w-5/6" />
                    <div class="flex gap-2 pt-2">
                      <div class="h-8 w-8 rounded-lg bg-indigo-500/30 flex items-center justify-center">
                        <span class="text-indigo-300 font-bold text-xs">85</span>
                      </div>
                      <div class="h-8 w-8 rounded-lg bg-sky-500/30 flex items-center justify-center">
                        <span class="text-sky-300 font-bold text-xs">92</span>
                      </div>
                      <div class="h-8 w-8 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                        <span class="text-emerald-300 font-bold text-xs">78</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-2.5 bg-slate-700 rounded-b-lg mx-auto w-[105%] -mb-1 relative z-10" />
            </div>

            <!-- Phone -->
            <div class="absolute -bottom-12 lg:-bottom-8 left-4 lg:-left-2 w-32 lg:w-[136px] animate-float-delayed z-20">
              <div class="bg-slate-900 rounded-[2rem] p-[5px] shadow-2xl shadow-indigo-300/20">
                <div class="bg-white rounded-[1.7rem] overflow-hidden flex flex-col min-h-[240px] lg:min-h-[270px]">
                  <div class="bg-slate-900 pt-2.5 pb-1.5 flex items-center justify-center">
                    <div class="w-12 h-1.5 bg-slate-800 rounded-full" />
                  </div>
                  <div class="flex-1 px-3 pb-6 space-y-2.5 flex flex-col justify-center">
                    <div class="flex items-center gap-1.5">
                      <div class="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                        <span class="text-white font-black text-[6px]">CT</span>
                      </div>
                      <div class="h-1.5 w-12 rounded-full bg-slate-200" />
                      <div class="h-1.5 w-8 rounded-full bg-slate-100 mr-auto" />
                    </div>
                    <div class="h-1.5 rounded-full bg-indigo-100 w-full" />
                    <div class="h-1.5 rounded-full bg-sky-100 w-3/4" />
                    <div class="h-1.5 rounded-full bg-indigo-50 w-5/6" />
                    <div class="grid grid-cols-2 gap-1.5 mt-1">
                      <div class="h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <span class="text-indigo-400 font-bold text-[8px]">85%</span>
                      </div>
                      <div class="h-8 rounded-xl bg-sky-50 flex items-center justify-center">
                        <span class="text-sky-400 font-bold text-[8px]">92%</span>
                      </div>
                    </div>
                    <div class="flex gap-1.5">
                      <div class="flex-1 h-12 rounded-xl bg-gradient-to-b from-indigo-100 to-indigo-50 flex items-end p-1.5">
                        <div class="w-full h-3/4 rounded bg-indigo-300/40" />
                      </div>
                      <div class="flex-1 h-12 rounded-xl bg-gradient-to-b from-sky-100 to-sky-50 flex items-end p-1.5">
                        <div class="w-full h-1/2 rounded bg-sky-300/40" />
                      </div>
                      <div class="flex-1 h-12 rounded-xl bg-gradient-to-b from-emerald-100 to-emerald-50 flex items-end p-1.5">
                        <div class="w-full h-5/6 rounded bg-emerald-300/40" />
                      </div>
                    </div>
                    <div class="h-1.5 rounded-full bg-slate-100 w-4/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Trust Metrics -->
    <section class="py-10 md:py-14 border-y-2 border-slate-100 bg-white shadow-inner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-4 gap-2 md:gap-10">
          <div class="text-center py-2">
            <div class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600">+50</div>
            <div class="text-xs md:text-sm lg:text-base text-slate-500 mt-0.5 md:mt-1 font-medium">مشروع منجز</div>
          </div>
          <div class="text-center py-2">
            <div class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600">+120</div>
            <div class="text-xs md:text-sm lg:text-base text-slate-500 mt-0.5 md:mt-1 font-medium">عميل حول العالم</div>
          </div>
          <div class="text-center py-2">
            <div class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600">98%</div>
            <div class="text-xs md:text-sm lg:text-base text-slate-500 mt-0.5 md:mt-1 font-medium">رضا العملاء</div>
          </div>
          <div class="text-center py-2">
            <div class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600">5</div>
            <div class="text-xs md:text-sm lg:text-base text-slate-500 mt-0.5 md:mt-1 font-medium">سنوات من الخبرة</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Services Bento Grid -->
    <section id="services" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="خدماتنا المتكاملة"
          subtitle="نقدم لك باقة متكاملة من الخدمات الرقمية المصممة خصيصاً لنقل أعمالك إلى المستوى التالي"
          badge="ما نقدمه"
        />
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <div class="md:col-span-2 group relative bg-white rounded-2xl lg:rounded-3xl border-2 md:border border-indigo-500 md:border-indigo-300/70 md:border-slate-200 shadow-2xl shadow-indigo-200/20 md:shadow-md -translate-y-1.5 md:-translate-y-0 md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-indigo-200/20 hover:border-indigo-500 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-indigo-500 to-sky-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div class="p-6 md:p-8 lg:p-10 flex flex-col items-center md:block md:text-right">
              <div class="flex flex-col md:flex-row items-center gap-4 mb-5 md:mb-5">
                <div class="w-14 h-14 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-indigo-600 md:bg-indigo-100 flex items-center justify-center md:group-hover:bg-indigo-600 transition-all duration-500 shadow-lg shadow-indigo-200/50 md:shadow-none md:group-hover:shadow-lg md:group-hover:shadow-indigo-200/50">
                  <svg class="w-7 h-7 lg:w-7 lg:h-7 text-white md:text-indigo-600 md:group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs md:text-sm font-bold text-indigo-600 bg-indigo-50 rounded-full">تطوير ويب</span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 text-center md:text-right">تطوير تطبيقات الويب</h3>
              <p class="text-slate-600 leading-relaxed mb-5 text-base lg:text-lg text-center md:text-right">نبني تطبيقات ويب متقدمة باستخدام React و Vue.js، من لوحات التحكم المؤسسية إلى منصات التجارة الإلكترونية المتكاملة، مع أداء استثنائي وتجربة مستخدم سلسة.</p>
              <button class="inline-flex items-center gap-2 text-indigo-600 font-bold text-base hover:text-indigo-700 transition-colors" @click="showContactModal = true">
                احجز هذه الخدمة
                <svg class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="group relative bg-white rounded-2xl lg:rounded-3xl border-2 md:border border-indigo-500 md:border-indigo-300/70 md:border-slate-200 shadow-2xl shadow-sky-200/20 md:shadow-md -translate-y-1.5 md:-translate-y-0 md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-sky-200/20 hover:border-indigo-500 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-sky-500 to-cyan-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div class="p-6 md:p-8 lg:p-10 flex flex-col items-center md:block md:text-right">
              <div class="flex flex-col md:flex-row items-center gap-4 mb-5 md:mb-5">
                <div class="w-14 h-14 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-sky-600 md:bg-sky-100 flex items-center justify-center md:group-hover:bg-sky-600 transition-all duration-500 shadow-lg shadow-sky-200/50 md:shadow-none md:group-hover:shadow-lg md:group-hover:shadow-sky-200/50">
                  <svg class="w-7 h-7 lg:w-7 lg:h-7 text-white md:text-sky-600 md:group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs md:text-sm font-bold text-sky-600 bg-sky-50 rounded-full">تطبيقات موبايل</span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 text-center md:text-right">تطبيقات الموبايل</h3>
              <p class="text-slate-600 leading-relaxed mb-5 text-base lg:text-lg text-center md:text-right">نطور تطبيقات موبايل عالية الأداء لنظامي iOS و Android باستخدام Flutter و React Native، مع تجربة مستخدم استثنائية.</p>
              <button class="inline-flex items-center gap-2 text-indigo-600 font-bold text-base hover:text-indigo-700 transition-colors" @click="showContactModal = true">
                احجز هذه الخدمة
                <svg class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="group relative bg-white rounded-2xl lg:rounded-3xl border-2 md:border border-indigo-500 md:border-indigo-300/70 md:border-slate-200 shadow-2xl shadow-emerald-200/20 md:shadow-md -translate-y-1.5 md:-translate-y-0 md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-emerald-200/20 hover:border-indigo-500 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-emerald-500 to-teal-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div class="p-6 md:p-8 lg:p-10 flex flex-col items-center md:block md:text-right">
              <div class="flex flex-col md:flex-row items-center gap-4 mb-5 md:mb-5">
                <div class="w-14 h-14 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-emerald-600 md:bg-emerald-100 flex items-center justify-center md:group-hover:bg-emerald-600 transition-all duration-500 shadow-lg shadow-emerald-200/50 md:shadow-none md:group-hover:shadow-lg md:group-hover:shadow-emerald-200/50">
                  <svg class="w-7 h-7 lg:w-7 lg:h-7 text-white md:text-emerald-600 md:group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 rounded-full">تصميم UX</span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 text-center md:text-right">استراتيجية UI/UX</h3>
              <p class="text-slate-600 leading-relaxed mb-5 text-base lg:text-lg text-center md:text-right">نصمم تجارب مستخدم استثنائية تجمع بين الجماليات البصرية وسهولة الاستخدام، مع نماذج أولية تفاعلية تضمن أفضل النتائج.</p>
              <button class="inline-flex items-center gap-2 text-indigo-600 font-bold text-base hover:text-indigo-700 transition-colors" @click="showContactModal = true">
                احجز هذه الخدمة
                <svg class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="md:col-span-2 group relative bg-white rounded-2xl lg:rounded-3xl border-2 md:border border-indigo-500 md:border-indigo-300/70 md:border-slate-200 shadow-2xl shadow-amber-200/20 md:shadow-md -translate-y-1.5 md:-translate-y-0 md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-amber-200/20 hover:border-indigo-500 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-amber-500 to-orange-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div class="p-6 md:p-8 lg:p-10 flex flex-col items-center md:block md:text-right">
              <div class="flex flex-col md:flex-row items-center gap-4 mb-5 md:mb-5">
                <div class="w-14 h-14 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-amber-600 md:bg-amber-100 flex items-center justify-center md:group-hover:bg-amber-600 transition-all duration-500 shadow-lg shadow-amber-200/50 md:shadow-none md:group-hover:shadow-lg md:group-hover:shadow-amber-200/50">
                  <svg class="w-7 h-7 lg:w-7 lg:h-7 text-white md:text-amber-600 md:group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs md:text-sm font-bold text-amber-600 bg-amber-50 rounded-full">تسويق رقمي</span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 text-center md:text-right">تحسين محركات البحث والتسويق الرقمي</h3>
              <p class="text-slate-600 leading-relaxed mb-5 text-base lg:text-lg text-center md:text-right">استراتيجيات متكاملة لتحسين محركات البحث (SEO) وإدارة الحملات التسويقية الرقمية لضمان وصول منتجك للجمهور المناسب وتحقيق أقصى عائد استثمار.</p>
              <button class="inline-flex items-center gap-2 text-indigo-600 font-bold text-base hover:text-indigo-700 transition-colors" @click="showContactModal = true">
                احجز هذه الخدمة
                <svg class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Portfolio -->
    <section id="portfolio" class="py-16 md:py-24 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="أعمالنا السابقة"
          subtitle="نفخر بشراكاتنا مع عملاء متميزين في مصر والسعودية والخليج"
          badge="المشاريع"
        />
        <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            v-for="(project, i) in visibleProjects"
            :key="i"
            :href="project.url"
            target="_blank"
            class="group bg-white rounded-2xl lg:rounded-3xl border border-2 md:border border-indigo-300/70 md:border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500 md:hover:border-slate-200 overflow-hidden"
          >
            <div class="aspect-[16/10] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br" :class="project.bg">
                <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;" />
              </div>
              <img
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                class="relative w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div class="absolute bottom-2 right-2">
                <span class="text-[10px] font-bold text-white/80 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">{{ project.domain }}</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl lg:text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{{ project.name }}</h3>
              <p class="text-sm lg:text-base text-slate-600 leading-relaxed line-clamp-2">{{ project.desc }}</p>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-xs lg:text-sm text-slate-400">{{ project.type }}</span>
                <span class="inline-flex items-center gap-1 text-indigo-600 font-bold text-sm group/link">
                  زيارة الموقع
                  <svg class="w-3 h-3 group-hover/link:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-8 text-center md:hidden">
          <button
            v-if="!showAllPortfolio"
            class="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold text-sm hover:bg-indigo-700 transition-all shadow-md"
            @click="showAllPortfolio = true"
          >
            المزيد من المشاريع
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Section 6: Process Timeline -->
    <section id="process" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="كيف نُبرمج?"
          subtitle="منهجية عملنا تعتمد على الشفافية والإتقان في كل خطوة"
          badge="آلية العمل"
        />
        <div class="mt-14 lg:mt-16 relative">
          <div class="hidden lg:block absolute top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-l from-indigo-200 via-sky-200 to-indigo-200" />
          <div class="grid lg:grid-cols-4 gap-6 lg:gap-4 relative">
            <div v-for="(step, i) in processSteps" :key="i" class="group relative lg:text-center">
              <div class="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-indigo-200 items-center justify-center z-10 group-hover:border-indigo-500 transition-all duration-300">
                <div class="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500" />
              </div>
              <div class="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div class="flex-col lg:flex-row items-center gap-4">
                  <div class="flex justify-center mb-3 lg:mb-4">
                    <div class="w-20 h-20 lg:w-16 lg:h-16 rounded-2xl lg:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300" :class="step.gradient">
                      <svg v-if="i === 0" class="w-9 h-9 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="16.5" y1="16.5" x2="22" y2="22" />
                      </svg>
                      <svg v-if="i === 1" class="w-9 h-9 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                      <svg v-if="i === 2" class="w-9 h-9 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <svg v-if="i === 3" class="w-9 h-9 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2l-2.5 2.5L12 7l2.5-2.5L12 2z" />
                        <path d="M5 15c0-4 3-7 7-7s7 3 7 7" />
                        <path d="M5 15c0 2 2 4 4 4" />
                        <path d="M19 15c0 2-2 4-4 4" />
                        <path d="M8 11s1-2 4-2 4 2 4 2" />
                      </svg>
                    </div>
                  </div>
                  <div class="text-center lg:text-right">
                    <h3 class="text-xl lg:text-2xl font-extrabold text-slate-900 mb-1.5">{{ step.title }}</h3>
                    <p class="text-base lg:text-lg text-slate-600 leading-relaxed">{{ step.desc }}</p>
                  </div>
                </div>
              </div>
              <!-- Mobile connecting line -->
              <div v-if="i < processSteps.length - 1" class="flex justify-center lg:hidden my-1">
                <svg class="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Tech Insights -->
    <section id="insights" class="py-16 md:py-24 bg-white hidden md:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="المدونة التقنية"
          subtitle="أحدث المقالات والرؤى التقنية من خبراء كود تك"
          badge="المقالات"
        />
        <div class="mt-12 grid md:grid-cols-3 gap-8">
          <article v-for="(post, i) in blogPosts" :key="i" class="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div class="h-48 overflow-hidden">
              <img :src="post.image" :alt="post.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-3 py-1 text-xs md:text-sm font-bold rounded-full" :class="post.badgeClass">{{ post.badge }}</span>
                <span class="text-xs md:text-sm text-slate-400">{{ post.readTime }} دقائق قراءة</span>
              </div>
              <h3 class="text-xl lg:text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">{{ post.title }}</h3>
              <p class="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-2 mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-full" :class="post.authorGradient" />
                  <span class="text-xs text-slate-500 font-medium">{{ post.author }}</span>
                </div>
                <span class="text-xs text-slate-400">{{ post.date }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 7: CTA -->
    <section id="cta" class="relative py-20 md:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80" />
      <div class="absolute top-10 -right-20 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl" />
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          مستعد لتسريع نموك الرقمي؟
        </h2>
        <p class="mt-4 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
          دعنا نحول رؤيتك إلى واقع رقمي ملموس. فريق خبراء كود تك على بعد نقرة واحدة.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg lg:text-xl shadow-2xl shadow-indigo-300/40 hover:from-indigo-700 hover:to-indigo-800 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
            @click="showContactModal = true; trackEvent('contact_experts_click')"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
            تواصل مع خبراء كود تك الآن
          </button>
          <a href="tel:+201070626890" class="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" @click="trackEvent('phone_click'); ttq.track('Contact', { content_name: 'phone', content_category: 'contact' })">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +201070626890
          </a>
        </div>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            رد فوري خلال 24 ساعة
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            استشارة مجانية بدون التزام
          </span>
        </div>
      </div>
    </section>

    <ContactModal v-model="showContactModal" />
  </div>
</template>

<script setup>
import { inject, ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ContactModal from '@/components/ContactModal.vue'
import heroBg from '@/assets/hero.png'
import { trackEvent } from '@/services/analytics'

const showContactModal = inject('contactModalOpen')

const showAllPortfolio = ref(false)
const visibleProjects = computed(() => {
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    return portfolioProjects
  }
  return showAllPortfolio.value ? portfolioProjects : portfolioProjects.slice(0, 3)
})

const portfolioProjects = [
  {
    name: 'HPrint Store',
    desc: 'متجر إلكتروني لطباعة التيشيرتات والهدايا – منصة تفاعلية لتصميم وطلب المطبوعات بسهولة.',
    url: 'https://hprint.store/',
    image: '/اتش برينت.png',
    domain: 'hprint.store',
    type: 'متجر إلكتروني',
    bg: 'from-violet-600 to-indigo-700',
  },
  {
    name: 'منصة أرشميدس (محمد ندا)',
    desc: 'منصة تعليمية متكاملة لشرح الفيزياء لطلاب الثانوي، مع كورسات مسجلة وبث مباشر ونظام اشتراكات.',
    url: 'https://mohamednada.com/',
    image: '/ارشميدس.png',
    domain: 'mohamednada.com',
    type: 'منصة تعليمية',
    bg: 'from-sky-600 to-cyan-700',
  },
  {
    name: 'بريق النظافة الشاملة',
    desc: 'شركة خدمات تنظيف في السعودية – موقع يعرض الخدمات، آراء العملاء، وحجز الخدمات أونلاين.',
    url: 'https://bariqclean.site/',
    image: '/بريق نظافه.png',
    domain: 'bariqclean.site',
    type: 'موقع شركة',
    bg: 'from-emerald-600 to-teal-700',
  },
  {
    name: 'نظافة برو',
    desc: 'شركة تنظيف متكاملة في حفر الباطن – أكثر من 20 عام خبرة في التنظيف ومكافحة الحشرات.',
    url: 'https://nazafapro.com/',
    image: '/نظافه برو.png',
    domain: 'nazafapro.com',
    type: 'موقع شركة',
    bg: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'نايس ون السعودية',
    desc: 'أكبر متجر إلكتروني سعودي للمكياج ومنتجات التجميل والعطور مع توصيل سريع في كل المملكة.',
    url: 'https://niceonesa.com/',
    image: '/نايس وان.png',
    domain: 'niceonesa.com',
    type: 'متجر إلكتروني',
    bg: 'from-rose-600 to-pink-700',
  },
  {
    name: 'أدسيلا للتسويق الرقمي',
    desc: 'وكالة تسويق رقمي رائدة في السعودية – Google Partner، تقدم حلول التجارة الإلكترونية والإعلانات.',
    url: 'https://adselams.com/',
    image: '/ادسيلا.png',
    domain: 'adselams.com',
    type: 'وكالة تسويق',
    bg: 'from-amber-600 to-orange-700',
  },
]

const processSteps = [
  {
    title: 'الاكتشاف والتحليل',
    desc: 'ندرس احتياجاتك ومتطلبات السوق لنصمم أفضل بنية تقنية لمشروعك.',
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
  {
    title: 'تصميم تجربة المستخدم',
    desc: 'نُبدع في تصميم واجهات وتجارب مستخدم تفاعلية تلبي تطلعات عملائك.',
    gradient: 'bg-gradient-to-br from-sky-500 to-sky-600',
  },
  {
    title: 'التطوير بإتقان',
    desc: 'نستخدم أحدث التقنيات في بناء تطبيقك بمعايير الجودة والأداء العالي.',
    gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  },
  {
    title: 'النشر والدعم المستمر',
    desc: 'نضمن إطلاقاً آمناً ودعماً فنياً على مدار الساعة لضمان نجاحك المستمر.',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-600',
  },
]

const blogPosts = [
  {
    title: 'لماذا Vue.js هو الخيار الأمثل لتطبيقات الويب الحديثة؟',
    excerpt: 'اكتشف كيف تُحدث Vue.js ثورة في عالم تطوير الويب بفضل أدائها العالي وسهولة تعلمها.',
    badge: 'تقنيات',
    badgeClass: 'bg-indigo-50 text-indigo-600',
    readTime: 8,
    author: 'أحمد سالم',
    authorGradient: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    date: '15 يونيو 2026',
    image: '/vue-article.svg',
  },
  {
    title: 'كيف يُضاعف تحسين محركات البحث مبيعات منتجك الرقمي؟',
    excerpt: 'استراتيجيات SEO متقدمة لضمان تصدر منتجك الرقمي في نتائج البحث وجذب العملاء المستهدفين.',
    badge: 'تسويق',
    badgeClass: 'bg-sky-50 text-sky-600',
    readTime: 6,
    author: 'نورا أحمد',
    authorGradient: 'bg-gradient-to-br from-sky-400 to-sky-600',
    date: '10 يونيو 2026',
    image: '/seo-article.svg',
  },
  {
    title: 'أهمية تجربة المستخدم في نجاح التحول الرقمي للشركات',
    excerpt: 'تعرف على كيف يمكن لتصميم تجربة المستخدم أن يكون عامل الفرق بين نجاح وفشل مشروعك الرقمي.',
    badge: 'تصميم',
    badgeClass: 'bg-emerald-50 text-emerald-600',
    readTime: 10,
    author: 'محمد كامل',
    authorGradient: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    date: '5 يونيو 2026',
    image: '/uiux-article.svg',
  },
]
</script>
