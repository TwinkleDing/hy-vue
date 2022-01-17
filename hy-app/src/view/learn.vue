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
            <van-popover
                v-model:show="showPopover"
                :actions="actions"
                @select="onSelect"
            >
                <template #reference>
                    <van-button
                        ref="border"
                        type="primary"
                        round
                        @dblclick="buttonSet('border')"
                        >border</van-button
                    >
                </template>
            </van-popover>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { orientation } from "../utils/webview";
import { PORTRAIT } from "../utils/common";
import { Toast } from "vant";

export default defineComponent({
    setup() {
        const getOrientation = orientation;
        const showPopover = ref(false);

        // 通过 actions 属性来定义菜单选项
        const actions = [
            { text: "border-width" },
            { text: "border-style" },
            { text: "border-color" },
        ];
        const onSelect = (action) => Toast(action.text);

        return {
            getOrientation,
            actions,
            showPopover,
            onSelect,
        };
    },
    data() {
        return {
            showSize: 0,
            setSize: 0,
            lineSize: 0,
            divX: 0,
            divY: 0,
        };
    },
    methods: {
        lineStart(e) {
            if (this.getOrientation === PORTRAIT) {
                this.showSize = this.$refs.learnShow.clientHeight;
                this.setSize = this.$refs.learnSet.clientHeight;
                this.lineSize = e.targetTouches[0].clientY;
            } else {
                this.showSize = this.$refs.learnShow.clientWidth;
                this.setSize = this.$refs.learnSet.clientWidth;
                this.lineSize = e.targetTouches[0].clientX;
            }
        },
        lineMove(e) {
            if (this.getOrientation === PORTRAIT) {
                let y = e.targetTouches[0].clientY;
                this.$refs.learnShow.style.height =
                    this.showSize + (y - this.lineSize) + "px";
                this.$refs.learnSet.style.height =
                    this.setSize - (y - this.lineSize) + "px";
            } else {
                let y = e.targetTouches[0].clientX;
                this.$refs.learnShow.style.width =
                    this.showSize + (y - this.lineSize) + "px";
                this.$refs.learnSet.style.width =
                    this.setSize - (y - this.lineSize) + "px";
            }
        },
        divStart(e) {
            this.divX = e.targetTouches[0].clientX - e.target.offsetLeft;
            this.divY = e.targetTouches[0].clientY - e.target.offsetTop;
        },
        divMove(e) {
            let x = e.targetTouches[0].clientX - this.divX;
            let y = e.targetTouches[0].clientY - this.divY;
            if (
                x > 0 &&
                x + e.target.clientWidth < this.$refs.learnShow.offsetWidth
            ) {
                e.target.style.left = x + "px";
            }
            if (
                y > 0 &&
                y + e.target.clientHeight < this.$refs.learnShow.offsetHeight
            ) {
                e.target.style.top = y + "px";
            }
        },
        buttonSet(ele) {
            switch (ele) {
                case "border":
                    this.$refs.showButton.$el.style.border = "1px solid #f00";
                    break;

                default:
                    break;
            }
        },
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
    &-portrait {
        flex-direction: column;
        .learn-show {
            min-height: 200px;
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
}
</style>
