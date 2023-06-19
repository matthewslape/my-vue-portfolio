import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Success from "../views/Success.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/print",
    name: "Print",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "graphics" */ "../views/Print.vue"),
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
    path: "/motion",
    name: "Motion",
    component: () => import("../views/Motion.vue"),
  },
  {
    path: "/code",
    name: "Code",
    component: () => import("../views/Code.vue"),
    redirect: (to) => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: "/", query: { q: to.params.searchText } };
    },
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
    component: () => import("../views/JohnSoundboard.vue"),
  },
  {
    path: "/print/nikePoster",
    name: 'Nike "Iconic" Poster',
    component: () => import("../views/NikePoster.vue"),
  },
  {
    path: "/print/jbPoster",
    name: "Jordan Burroughs Poster",
    component: () => import("../views/JB.vue"),
  },
  {
    path: "/print/lockett",
    name: "Tyler Lockett Poster",
    component: () => import("../views/TL.vue"),
  },
  {
    path: "/print/manzanar",
    name: "Manzanar History Book",
    component: () => import("../views/Manzanar.vue"),
  },
  {
    path: "/print/boeing",
    name: "Boeing History Book",
    component: () => import("../views/Boeing.vue"),
  },
  {
    path: "/print/polaroid",
    name: "Polaroid Poster",
    component: () => import("../views/Polaroid.vue"),
    redirect: (to) => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: "/", query: { q: to.params.searchText } };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
