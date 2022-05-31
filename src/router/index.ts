import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/artist",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "artist",
        component: () => import("@/views/TabArtist.vue"),
      },
      {
        path: "playlist",
        component: () => import("@/views/TabPlaylist.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
