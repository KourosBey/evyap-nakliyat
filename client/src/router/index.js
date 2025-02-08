import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from '@unhead/vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: "Evyap - Anasayfa",
        description: "Evyap Nakliyat web sayfasına hoşgeldiniz.",
        keywords: "Anasayfa, Nakliyat, Ev, Taşımacılık"
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: "Evyap - Hizmetlerimiz",
        description: "Evyap Nakliyat Hizmetlerimiz.",
        keywords: "Hizmetlerimiz, Asonsörlü Taşıma, Eşya Paketleme, Eşya Depolama, Şehirler Arası Ofis Taşımacılığı, Kurumsal Taşımacılık, Moda Evden Eve Naklie, Villa Taşıma Nakliyesi, Banka Taşıma, Mağaza Taşıma, Askılı Tekstil Taşıma, Ofis Taşımna Büro Nakliyesi"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Evyap - Hakkımızda",
        description: "Evyap Nakliyat Hakkımızda.",
        keywords: "Hakkımızda, Biz, Vizyon, Misyon"
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: "Evyap - İletişim",
        description: "Bizimle iletişime geçin.",
        keywords: "İletişim, Telefon, E-posta, Adres, Nakliyat"
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: "Evyap - 404",
        description: "Aradığınız sayfa bulunamadı.",
        keywords: "404, Sayfa bulunamadı, Evyap, Nakliyat"
      }
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta) {
    const title = to.meta.title;
    const description = to.meta.description;
    const keywords = to.meta.keywords;
    useHead({
      title: title || 'Evyap Nakliyat',
      meta: [
        {
          name: 'description',
          content: description || 'Hedefinize% 100 güvenli ulaşın Zaman çizelgenizi ve bütçenizi karşılayan hızlı ve güvenilir teslimat hizmeti.',
        },
        {
          name: 'keywords',
          content: keywords || 'Nakliyat, Ev, Ofis, Taşımacılık, Evyap',
        },
      ],
    });
  }
  next();
});

export default router
