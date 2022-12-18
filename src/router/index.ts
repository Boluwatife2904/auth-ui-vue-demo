import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/change-password",
            name: "change-password",
            component: () => import("../views/ChangePasswordView.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/DashboardView.vue"),
        },
    ],
});

export default router;

