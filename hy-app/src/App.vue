<template>
    <template v-if="!isShow">
        <van-loading
            class="loading"
            :color="store.getters.themeColor"
            vertical
            size="60"
            type="spinner"
        >
            加载中...
        </van-loading>
        <van-overlay :show="true" />
    </template>
    <router-view />
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { BASE_CSS } from "@/utils/common.js";
export default {
    name: "App",
    setup() {
        const store = useStore();
        const router = useRouter();
        const isShow = ref(false);
        if (store.getters.routerPage === BASE_CSS || !store.isAndroid) {
            router.push("/baseCss");
            isShow.value = true;
        }
        return {
            store,
            isShow,
        };
    },
};
</script>

<style lang="scss" scoped>
.loading {
    height: 100%;
    width: 100%;
    justify-content: center;
}
</style>
