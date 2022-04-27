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
  {
    path: "/ux/wikiHow",
    name: "wikiHow App Redesign",
    component: () => import("../views/wikiHow.vue"),
  },
  {
    path: "/ux/trade",
    name: "Trade Coffee App",
    component: () => import("../views/Trade.vue"),
  },
  {
    path: "/ux/dashboard",
    name: "Daily DashBoard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/branding/js",
    name: "JS Trucking and Excavation",
    component: () => import("../views/JS.vue"),
  },
  {
    path: "/branding/ecp",
    name: "Energy Conservation Program",
    component: () => import("../views/ECP.vue"),
  },
  {
    path: "/branding/sphoto",
    name: "Samantha Rhea Photography",
    component: () => import("../views/Sphoto.vue"),
  },
  {
    path: "/branding/keyconnect",
    name: "Key the Connect",
    component: () => import("../views/Key.vue"),
  },
  {
    path: "/code/14Four",
    name: "14Four Internship",
    component: () => import("../views/14Four.vue"),
  },
  {
    path: "/code/doogle",
    name: "Doodle Google",
    component: () => import("../views/Doogle.vue"),
  },
  {
    path: "/code/portfolio",
    name: "Portfolio Site",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/code/jsWebsite",
    name: "JS Website",
    component: () => import("../views/JsWebsite.vue"),
  },
  {
    path: "/code/johnSoundboard",
    name: "John's Soundboard",
    component: () => import("../views/Soundboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
