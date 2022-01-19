<template>
    <div
        class="learn"
        :class="[
            getOrientation == 'portrait' ? 'learn-portrait' : 'learn-landscape',
        ]"
    >
        <show-div @show-ele="showEle" />
        <div ref="learnSet" class="learn-set">
            <set-box attr="border" targetEle />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { orientation } from "@/utils/webview";
import { PORTRAIT } from "@/utils/common";
import SetBox from "@components/SetBox.vue";
import ShowDiv from "../showDiv.vue";

export default defineComponent({
    components: {
        SetBox,
        ShowDiv,
    },
    setup() {
        const getOrientation = orientation;

        return {
            getOrientation,
        };
    },
    data() {
        return {
            showSize: 0,
            setSize: 0,
            lineSize: 0,
        };
    },
    methods: {
        showEle(e) {
            console.log(e)
        },
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
    },
});
</script>

<style lang="scss">
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
