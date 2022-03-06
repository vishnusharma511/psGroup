import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/tables",
        name: "Tables",
        component: Tables,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/billing",
        name: "Billing",
        component: Billing,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignIn,
        meta: {
            isGuest: true,
        },
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp,
        meta: {
            isGuest: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "SignIn" });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});

export default router;
