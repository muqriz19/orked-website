import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // component: HomePage,
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/fragrances",
    name: "fragrances",
    component: () =>
      import(/* webpackChunkName: "fragrances" */ "../views/Fragrances.vue"),
  },
  {
    path: "/fragrances/:id",
    name: "fragrances-id",
    component: () =>
      import(
        /* webpackChunkName: "fragrancesId" */ "../views/FragranceById.vue"
      ),
  },
  {
    path: "/otherproducts",
    name: "otherproducts",
    component: () =>
      import(
        /* webpackChunkName: "otherproducts" */ "../views/OtherProducts.vue"
      ),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/ContactUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-exact-active",
});

export default router;
