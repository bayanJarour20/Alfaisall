export default [
  {
    path: '/user-accounts',
    components: {
      default: () => import('@/views/setting/user-accounts/index.vue'),
      'bread-actions': () => import('@/views/setting/user-accounts/button-index.vue')
    },
    children: [
      {
        path: ':lang?',
        name: 'user accounts',
        components: {
          default: () => import('@/views/setting/user-accounts/pages/main.vue'),
          'actions': () => import('@/views/setting/user-accounts/components/button-create-user-account.vue')
        },
        props: true,
        meta: () => ({
          pageTitle: 'حسابات المستخدمين',
          breadcrumb: [
            {
              text: 'حسابات المستخدمين',
              icon: 'user-square',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'details/:id/:lang?',
        name: 'user accounts details',
        component: () => import('@/views/setting/user-accounts/pages/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'حسابات المستخدمين',
          breadcrumb: [
            {
              text: 'حسابات المستخدمين',
              icon: 'user-square',
              to: '/user-accounts',
              active: false,
            },
            {
              text: 'تفاصيل حساب المستخدم',
              active: true,
            }
          ],
        }),
      }
    ],
  },
  {
    path: '/catigories/:lang?',
    name: 'catigories',
    components: {
      default: () => import('@/views/setting/categories'),
      'bread-actions': () => import('@/views/setting/categories/components/button-create-categorie.vue')
    },
    props: {
      default: true
    },
    meta: () => ({
      pageTitle: 'التصنيفات',
      breadcrumb: [
        {
          text: 'التصنيفات',
          icon: 'vertical-distribution-center',
          active: true,
        },
      ],
    }),
  },
  {
    path: '/company-setting',
    name: 'company setting',
    components: {
      default: () => import('@/views/setting/company-setting'),
      'bread-actions': () => import('@/views/setting/company-setting/components/button-create-company-images.vue')
    },
    meta: () => ({
      pageTitle: 'إعدادات الشركة',
      breadcrumb: [
        {
          text: 'إعدادات الشركة',
          icon: 'setting',
          active: true,
        },
      ],
    }),
  },
  {
    path: '/product-setting',
    name: 'productSetting',
    components: {
      default: () => import('@/views/setting/page-setting/product-setting'),
      'bread-actions': () => import('@/views/setting/page-setting/product-setting/components/button-create-product-images.vue')
    },
    meta: () => ({
      pageTitle: 'إعداد المنتج',
      breadcrumb: [
        {
          text: 'إعداد المنتج',
          icon: 'vertical-distribution-center',
          active: true,
        },
      ],
    }),
  },
  {
    path: '/service-setting',
    name: 'serviceSetting',
    components: {
      default: () => import('@/views/setting/page-setting/service-setting'),
      'bread-actions': () => import('@/views/setting/page-setting/service-setting/components/button-create-service-images.vue')
    },
    meta: () => ({
      pageTitle: 'إعداد الخدمات',
      breadcrumb: [
        {
          text: 'إعداد الخدمات',
          icon: 'vertical-distribution-center',
          active: true,
        },
      ],
    }),
  },
]