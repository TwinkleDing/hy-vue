<template>
    <div
        class="learn"
        :class="[
            store.getters.orientation == 'portrait'
                ? 'learn-portrait'
                : 'learn-landscape',
        ]"
    >
        <div ref="learnShow" class="learn-show">
            <div class="learn-show-box1">
                <div style="position: absolute; left: 0; top: -24px">
                    祖父元素
                </div>
                <div class="learn-show-box2">
                    <div style="position: absolute; left: 50px; top: 28px">
                        父元素
                    </div>
                    <div
                        ref="showButton"
                        class="learn-show-box3"
                        :style="{ backgroundColor: color }"
                    >
                        展示按钮
                    </div>
                </div>
            </div>
        </div>
        <span
            ref="learnLine"
            class="learn-line"
            @touchstart="lineStart"
            @touchmove="lineMove"
        ></span>
        <div ref="learnSet" class="learn-set">
            <div class="overflow-y">
                <set-box
                    class="set-box"
                    v-for="(item, index) in attrList"
                    :attr="item"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {
    defineComponent,
    getCurrentInstance,
    ref,
    onMounted,
    reactive,
    computed,
} from "vue";
import { PORTRAIT } from "@/utils/common";
import SetBox from "@components/SetBox.vue";
import ATTR_LIST from "@/utils/attrList.js";
import { useStore } from "vuex";

export default defineComponent({
    components: {
        SetBox,
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const store = useStore();

        const color = ref(store.getters.themeColor);
        const showSize = ref(0);
        const setSize = ref(0);
        const lineSize = ref(0);
        const targetEle = ref(null);
        const attrList = reactive(ATTR_LIST);
        const getOrientation = computed(() => {
            const orientation = store.getters.orientation;
            console.log(orientation);
            return orientation;
        });
        const lineStart = (e) => {
            if (getOrientation.value === PORTRAIT) {
                proxy.$refs.learnShow.style.width = "100%";
                proxy.$refs.learnSet.style.width = "100%";
                showSize.value = proxy.$refs.learnShow.clientHeight;
                setSize.value = proxy.$refs.learnSet.clientHeight;
                lineSize.value = e.targetTouches[0].clientY;
            } else {
                proxy.$refs.learnShow.style.height = "100%";
                proxy.$refs.learnSet.style.height = "100%";
                showSize.value = proxy.$refs.learnShow.clientWidth;
                setSize.value = proxy.$refs.learnSet.clientWidth;
                lineSize.value = e.targetTouches[0].clientX;
            }
        };
        const lineMove = (e) => {
            if (getOrientation.value === PORTRAIT) {
                proxy.$refs.learnShow.style.width = "100%";
                proxy.$refs.learnSet.style.width = "100%";
                let y = e.targetTouches[0].clientY;
                proxy.$refs.learnShow.style.height =
                    showSize.value + (y - lineSize.value) + "px";
                proxy.$refs.learnSet.style.height =
                    setSize.value - (y - lineSize.value) + "px";
            } else {
                proxy.$refs.learnShow.style.height = "100%";
                proxy.$refs.learnSet.style.height = "100%";
                let y = e.targetTouches[0].clientX;
                proxy.$refs.learnShow.style.width =
                    showSize.value + (y - lineSize.value) + "px";
                proxy.$refs.learnSet.style.width =
                    setSize.value - (y - lineSize.value) + "px";
            }
        };

        onMounted(() => {
            targetEle.value = proxy.$refs.showButton;
            store.commit("SET_SHOW_BUTTON", targetEle);
        });
        return {
            store,
            getOrientation,
            lineStart,
            lineMove,
            attrList,
            color,
        };
    },
});
</script>

<style lang="scss" scoped>
.learn {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    &-show {
        position: relative;
        &-box1 {
            width: 300px;
            height: 300px;
            border: 2px solid #ac0;
            position: relative;
            top: 50px;
            left: 50px;
        }
        &-box2 {
            width: 200px;
            height: 200px;
            border: 2px solid #ac0;
            margin: 50px;
        }
        &-box3 {
            width: 80px;
            height: 80px;
            color: #fff;
        }
    }
    .learn-set {
        box-sizing: border-box;
        padding: 20px;
        .overflow-y {
            height: 100%;
            overflow-y: auto;
        }
    }
    &-portrait {
        flex-direction: column;
        .learn-show {
            min-height: 200px;
        }
        .learn-set {
            min-height: 200px;
        }
        .learn-line {
            height: 10px;
            width: 100%;
        }
    }
    &-landscape {
        flex-direction: row;
        .learn-show {
            min-width: 200px;
        }
        .learn-set {
            min-width: 200px;
        }
        .learn-line {
            height: 100%;
            width: 10px;
        }
    }
    &-line {
        display: inline-block;
        background-color: #6200ee;
    }
    .set-box {
        margin-bottom: 10px;
    }
}
</style>
