import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import { canNavigate } from "@/libs/acl/routeProtection";
// import {
//   isUserLoggedIn
// } from "@/auth/utils";

// Routes
import mainSections from "./main-sections";
import setting from "./setting";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: () => ({
        pageTitle: 'الرئيسية',
        breadcrumb: [
          {
            text: 'الرئيسية',
            icon: 'estate',
            active: true,
          },
        ],
      }),
    },
    ...mainSections,
    ...setting,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: () => ({
        layout: 'full',
      }),
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: () => ({
        layout: 'full'
      }),
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})
router.beforeEach((to, _, next) => {
    // const isLoggedIn = isUserLoggedIn();
    document.title = ! to.meta(to).breadcrumb ? (!to.meta(to).pageTitle ? to.meta(to).title : to.meta(to).pageTitle) : to.meta(to).breadcrumb[0].text
    // canNavigate(to).then(data => {
    //     if (!data) {
    //         // Redirect to login if not logged in
    //         if (!isLoggedIn) return next("/login");
    //         // If logged in => not authorized
    //         return next("/access-denied");
    //     }
    // })
    // Redirect if logged in
    // if (to.meta(to).redirectIfLoggedIn && isLoggedIn) {
    //     const userData = getUserData();
    //     next(getHomeRouteForLoggedInUser(userData ? userData.role : null));
    // }

    return next();
});
export default router;
