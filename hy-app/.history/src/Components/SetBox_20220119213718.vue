<!--
 * @Author       : Twinkle Ding
 * @Date         : 2022-01-19 20:37:32
 * @LastEditors  : Twinkle Ding
 * @LastEditTime : 2022-01-19 21:37:18
 * @FilePath     : \hy-app\src\Components\SetBox.vue
-->

<template>
    <div>
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
                    @touchstart="touchStart"
                    @touchend="touchEnd"
                    >border</van-button
                >
            </template>
        </van-popover>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Toast } from "vant";

export default defineComponent({
    props: {
        attr: {
            require: true,
            type: String,
        },
    },
    setup(props) {
        console.log(props.attr);
        const showPopover = ref(false);

        // 通过 actions 属性来定义菜单选项
        const actions = [
            { text: "border-width" },
            { text: "border-style" },
            { text: "border-color" },
            { text: "border-radius" },
        ];
        const onSelect = (action) => Toast(action.text);

        return {
            actions,
            showPopover,
            onSelect,
        };
    },
    data() {
        return {
            touchTime: 0,
        };
    },
    methods: {
        buttonSet(ele) {
            switch (ele) {
                case "border":
                    this.$refs.showButton.$el.style.border = "1px solid #f00";
                    break;

                default:
                    break;
            }
        },
        touchStart() {
            this.touchStartTime = new Date().getTime();
        },
        touchEnd() {
            let touchEndTime = new Date().getTime();
            if (touchEndTime - this.touchStartTime > 500) {
                this.buttonSet(this.attr);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
</style>