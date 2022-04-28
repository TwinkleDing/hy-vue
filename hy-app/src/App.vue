<template>
    <template v-if="!isShow">
        <van-overlay :show="true">
            <van-loading
                class="loading"
                :color="store.getters.themeColor"
                vertical
                size="60"
                type="spinner"
            >
                加载中...
            </van-loading>
        </van-overlay>
    </template>
    <router-view />
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { BASE_CSS } from "@/utils/common.js";
export default {
    name: "App",
    setup() {
        const store = useStore();
        const router = useRouter();
        const isShow = ref(false);
        if (store.getters.isAndroid && store.getters.routerPage === BASE_CSS) {
            router.push("/baseCss");
        }

        onMounted(() => {
            isShow.value = true;
            if (window.androidObject) {
                window.androidObject.stopLoading();
            }
        });

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
