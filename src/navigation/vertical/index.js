export default [
  {
    title: 'الرئيسية',
    route: '/home',
    icon: 'estate',
  },
  {
    header: 'الأقسام الرئيسية'
  },
  {
    title: 'الخدمات',
    route: '/main/services',
    icon: 'briefcase-alt',
  },
  {
    title: 'المنتجات',
    route: '/main/products',
    icon: 'bookmark',
  },
  {
    title: 'النشاطات',
    route: '/main/activites',
    icon: 'server',
  },
  {
    title: 'الموظفين',
    route: '/main/employees',
    icon: 'users-alt',
  },
  {
    title: 'بريد الشركة',
    route: '/main/inbox',
    icon: 'archive-alt',
  },
  {
    title: 'الزبائن',
    route: '/main/customers',
    icon: 'user-circle',
  },
  {
    header: 'الإعدادات'
  },
  {
    title: 'حسابات المستخدمين',
    route: '/user-accounts',
    icon: 'user-square',
  },
  {
    title: 'التصنيفات',
    route: '/catigories',
    icon: 'vertical-distribution-center',
  },
  {
    icon:'setting',
    title: 'إعداد الصفحات',
    children: [
      {
        title: 'إعدادات الشركة',
        route: '/company-setting',
        icon: 'shopping-bag',
      },
      {
        title: 'إعدادات الخدمة ',
        route: '/service-setting',
        icon: 'briefcase',
      },
      {
        title: 'إعدادات المنتج',
        route:'/product-setting',
        icon: 'wrench',
      },
    ]
  }
]
