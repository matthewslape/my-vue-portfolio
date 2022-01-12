import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/graphics",
    name: "Graphics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "graphics" */ "../views/Graphics.vue"),
  },
  {
    path: "/ux",
    name: "UX",
    component: () => import("../views/UX.vue"),
  },
  {
    path: "/ph",
    name: "PH",
    component: () => import("../views/PH.vue"),
  },
  {
    path: "/illustration",
    name: "Illustration",
    component: () => import("../views/Illustration.vue"),
  },
  {
    path: "/branding",
    name: "Branding",
    component: () => import("../views/Branding.vue"),
  },
  {
    path: "/code",
    name: "Code",
    component: () => import("../views/Code.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
