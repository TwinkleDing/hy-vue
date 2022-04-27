import { createRouter, createWebHashHistory } from "vue-router";

const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/baseCss",
            name: "baseCss",
            component: () =>
                import(
                    /* webpackChunkName: 'dashboard' */ "@/views/learn/baseCss.vue"
                ),
        },
    ],
});

export default router;
