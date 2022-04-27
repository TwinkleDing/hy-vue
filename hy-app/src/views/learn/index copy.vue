<template>
    <div
        class="learn"
        :class="[
            getOrientation == 'portrait' ? 'learn-portrait' : 'learn-landscape',
        ]"
    >
        <div ref="learnShow" class="learn-show">
            <van-button
                ref="showButton"
                type="primary"
                round
                @touchstart="divStart"
                @touchmove="divMove"
                >展示按钮</van-button
            >
        </div>
        <span
            ref="learnLine"
            class="learn-line"
            @touchstart="lineStart"
            @touchmove="lineMove"
        ></span>
        <div ref="learnSet" class="learn-set">
            <set-box
                class="set-box"
                v-for="(item, index) in attrList"
                :attr="item"
                :key="index"
            />
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
} from "vue";
import { orientation } from "@/utils/webview";
import { PORTRAIT } from "@/utils/common";
import SetBox from "@components/SetBox.vue";
import ATTR_LIST from "@/utils/attrList.js";
import useStore from "@/store/index.js";

export default defineComponent({
    components: {
        SetBox,
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const getOrientation = orientation;
        const store = useStore();

        const showSize = ref(0);
        const setSize = ref(0);
        const lineSize = ref(0);
        const divX = ref(0);
        const divY = ref(0);
        const targetEle = ref(null);
        const attrList = reactive(ATTR_LIST);

        const divStart = (e) => {
            divX.value = e.targetTouches[0].clientX - e.target.offsetLeft;
            divY.value = e.targetTouches[0].clientY - e.target.offsetTop;
        };
        const divMove = (e) => {
            let x = e.targetTouches[0].clientX - divX.value;
            let y = e.targetTouches[0].clientY - divY.value;
            if (
                x > 0 &&
                x + e.target.clientWidth < proxy.$refs.learnShow.offsetWidth
            ) {
                e.target.style.left = x + "px";
            }
            if (
                y > 0 &&
                y + e.target.clientHeight < proxy.$refs.learnShow.offsetHeight
            ) {
                e.target.style.top = y + "px";
            }
        };
        const lineStart = (e) => {
            if (getOrientation === PORTRAIT) {
                showSize.value = proxy.$refs.learnShow.clientHeight;
                setSize.value = proxy.$refs.learnSet.clientHeight;
                lineSize.value = e.targetTouches[0].clientY;
            } else {
                showSize.value = proxy.$refs.learnShow.clientWidth;
                setSize.value = proxy.$refs.learnSet.clientWidth;
                lineSize.value = e.targetTouches[0].clientX;
            }
        };
        const lineMove = (e) => {
            if (getOrientation === PORTRAIT) {
                let y = e.targetTouches[0].clientY;
                proxy.$refs.learnShow.style.height =
                    showSize.value + (y - lineSize.value) + "px";
                proxy.$refs.learnSet.style.height =
                    setSize.value - (y - lineSize.value) + "px";
            } else {
                let y = e.targetTouches[0].clientX;
                proxy.$refs.learnShow.style.width =
                    showSize.value + (y - lineSize.value) + "px";
                proxy.$refs.learnSet.style.width =
                    setSize.value - (y - lineSize.value) + "px";
            }
        };

        onMounted(() => {
            targetEle.value = proxy.$refs.showButton;
            store.setShowButton(targetEle);
        });
        return {
            getOrientation,
            divStart,
            divMove,
            lineStart,
            lineMove,
            attrList,
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
    .learn-show {
        position: relative;
        button {
            position: absolute;
            top: 40%;
            left: 40%;
        }
    }
    &-portrait {
        flex-direction: column;
        .learn-show {
            min-height: 200px;
            button {
                position: absolute;
                top: 40%;
                left: 40%;
            }
        }
        .learn-set {
            box-sizing: border-box;
            padding: 20px;
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
            box-sizing: border-box;
            padding: 20px;
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
