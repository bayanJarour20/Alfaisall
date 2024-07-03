export default [
  {
    path: '/main',
    components: {
      default: () => import('@/views/main-sections/index.vue'),
      'bread-actions': () => import('@/views/main-sections/button-index.vue'),
    },
    children: [
      {
        path: '',
        name: 'main',
        redirect: '/main/services'
      },
      {
        path: 'services/:lang?',
        name: 'services',
        components: {
          default: () => import('@/views/main-sections/pages/services-products-activites-customers/index.vue'),
          'actions': () => import('@/views/main-sections/pages/services-products-activites-customers/services/components/button-create-service.vue'),
        },
        props: {
          default: true
        },
        meta: () => ({
          pageTitle: 'الخدمات',
          breadcrumb: [
            {
              text: 'الخدمات',
              icon: 'briefcase-alt',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'services/details/:id/:lang?',
        name: 'service details',
        component: () => import('@/views/main-sections/pages/services-products-activites-customers/services/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'الخدمات',
          breadcrumb: [
            {
              text: 'الخدمات',
              to: "/main/services",
              icon: 'briefcase-alt',
              active: false,
            },
            {
              text: 'تفاصيل الخدمة',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'products/:lang?',
        name: 'products',
        components: {
          default: () => import('@/views/main-sections/pages/services-products-activites-customers/index.vue'),
          'actions': () => import('@/views/main-sections/pages/services-products-activites-customers/products/components/button-create-product.vue'),
        },
        props: {
          default: true
        },
        meta: () => ({
          pageTitle: 'المنتجات',
          breadcrumb: [
            {
              text: 'المنتجات',
              icon: 'bookmark',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'products/details/:id/:lang?',
        name: 'product details',
        component: () => import('@/views/main-sections/pages/services-products-activites-customers/products/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'المنتجات',
          breadcrumb: [
            {
              text: 'المنتجات',
              to: "/main/products",
              icon: 'bookmark',
              active: false,
            },
            {
              text: 'تفاصيل المنتج',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'activites/:lang?',
        name: 'activites',
        components: {
          default: () => import('@/views/main-sections/pages/services-products-activites-customers/index.vue'),
          'actions': () => import('@/views/main-sections/pages/services-products-activites-customers/activites/components/button-create-activite.vue'),
        },
        props: {
          default: true
        },
        meta: () => ({
          pageTitle: 'النشاطات',
          breadcrumb: [
            {
              text: 'النشاطات',
              icon: 'server',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'activites/details/:id/:lang?',
        name: 'activite details',
        component: () => import('@/views/main-sections/pages/services-products-activites-customers/activites/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'النشاطات',
          breadcrumb: [
            {
              text: 'النشاطات',
              to: "/main/activites",
              icon: 'server',
              active: false,
            },
            {
              text: 'تفاصيل النشاط',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'employees/:lang?',
        name: 'employees',
        components: {
          default: () => import('@/views/main-sections/pages/employees'),
          'actions': () => import('@/views/main-sections/pages/employees/components/button-create-employee.vue'),
        },
        props: {
          default: true
        },
        meta: () => ({
          pageTitle: 'الموظفين',
          breadcrumb: [
            {
              text: 'الموظفين',
              icon: 'users-alt',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'employees/details/:id/:lang?',
        name: 'employees details',
        component: () => import('@/views/main-sections/pages/employees/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'الموظفين',
          breadcrumb: [
            {
              text: 'الموظفين',
              active: false,
              icon: 'users-alt',
              to: '/main/employees'
            },
            {
              text: 'تفاصيل الموظف',
              active: true,
            }
          ],
        }),
      },
      {
        path: 'inbox',
        name: 'inbox',
        components: {
          default: () => import('@/views/main-sections/pages/inbox'),
          'actions': () => import('@/views/main-sections/pages/inbox/components/button-create-inbox.vue'),
        },
        meta: () => ({
          pageTitle: 'بريد الشركة',
          breadcrumb: [
            {
              text: 'بريد الشركة',
              icon: 'archive-alt',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'inbox/details/:id',
        name: 'inbox details',
        component: () => import('@/views/main-sections/pages/inbox/details'),
        props: true,
        meta: (route) => {
          if(route.params && +route.params.id) {
            return {
              pageTitle: 'بريد الشركة',
              breadcrumb: [
                {
                  text: 'بريد الشركة',
                  icon: 'archive-alt',
                  to: '/main/inbox',
                  active: false,
                },
                {
                  text: 'تفاصيل البريد',
                  active: true,
                },
              ],
            }
          } else {
            return {
              pageTitle: 'بريد الشركة',
              breadcrumb: [
                {
                  text: 'بريد الشركة',
                  icon: 'archive-alt',
                  to: '/main/inbox',
                  active: false,
                },
                {
                  text: 'إضافة بريد',
                  active: true,
                },
              ],
            }
          }
        }
      },
      {
        path: 'customers',
        name: 'customers',
        components: {
          default: () => import('@/views/main-sections/pages/services-products-activites-customers/index.vue'),
          'actions': () => import('@/views/main-sections/pages/services-products-activites-customers/customers/components/button-create-customer.vue')
        },
        meta: () => ({
          pageTitle: 'الزبائن',
          breadcrumb: [
            {
              text: 'الزبائن',
              icon: 'user-circle',
              active: true,
            },
          ],
        }),
      },
      {
        path: 'customers/details/:id/:lang?',
        name: 'customer details',
        component: () => import('@/views/main-sections/pages/services-products-activites-customers/customers/details.vue'),
        props: true,
        meta: () => ({
          pageTitle: 'الزبائن',
          breadcrumb: [
            {
              text: 'الزبائن',
              to: "/main/customers",
              icon: 'user-circle',
              active: false,
            },
            {
              text: 'تفاصيل الزبون',
              active: true,
            },
          ],
        }),
      },
    ]
  }
]