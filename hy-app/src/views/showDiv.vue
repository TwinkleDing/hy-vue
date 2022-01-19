<template>
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
</template>

<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    setup() {},
    data() {
        return {
            divX: 0,
            divY: 0,
        };
    },
    mounted() {
        this.$emit("showEle", this.$refs.showButton);
    },
    methods: {
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
    },
});
</script>

<style lang="scss" scoped>
</style>