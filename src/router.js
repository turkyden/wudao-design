import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("@/pages/Dashboard/index.vue"),
    redirect: "/dashboard/gpt",
    children: [
      {
        path: "/dashboard/gpt",
        component: () => import("@/pages/Dashboard/GPT.vue"),
      },
      {
        path: "/dashboard/sd",
        component: () => import("@/pages/Dashboard/SD.vue"),
      },
      {
        path: "/dashboard/model",
        component: () => import("@/pages/Dashboard/Model.vue"),
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
