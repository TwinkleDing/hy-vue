import { createRouter, createWebHashHistory } from "vue-router";

const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/baseCss",
        },
        {
            path: "/baseCss",
            name: "baseCss",
            component: () =>
                import(
                    /* webpackChunkName: 'dashboard' */ "@/views/learn/baseCss.vue"
                ),
        },
        {
            path: "/baseHtml",
            name: "baseHtml",
            component: () =>
                import(
                    /* webpackChunkName: 'dashboard' */ "@/views/learn/baseHtml.vue"
                ),
        },
    ],
});

export default router;
