<template>
    <div>
        <van-popover
            v-model:show="showPopover"
            :actions="actions"
            @select="onSelect"
            @touchstart="showValue"
            @touchmove="changeValue"
            @touchend="hideValue"
        >
            <template #reference>
                <van-button
                    ref="border"
                    type="primary"
                    round
                    @touchstart="touchStart"
                    @touchend="touchEnd"
                    >{{ attr }}</van-button
                >
            </template>
        </van-popover>
    </div>
    <div class="set-box-slider" v-show="showValueSlider">
        <van-slider v-model="sliderValue" @change="sliderChange" />
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import attrList from "@/utils/attrList.js";

export default defineComponent({
    props: {
        attr: {
            require: true,
            type: String,
        },
        targetEle: {
            require: true,
            type: null || Object,
        },
    },
    setup(props) {
        let showPopover = ref(false);
        let touchStartTime = ref(null);
        let showValueSlider = ref(false);
        let sliderValue = ref(0);

        // 通过 actions 属性来定义菜单选项
        const attr = attrList[props.attr];
        const actions = [];
        for (const key in attr.children) {
            if (Object.hasOwnProperty.call(attr.children, key)) {
                actions.push(attr.children[key]);
            }
        }
        const onSelect = (action) => {
            console.log(action);
        };
        const showValue = () => {
            touchStartTime = setTimeout(() => {
                console.log(1);
                showValueSlider = true;
            }, 100);
        };
        const changeValue = (e) => {
            console.log(e);
        };
        const hideValue = (e) => {
            clearTimeout(touchStartTime);
            touchStartTime = null;
        };

        const sliderChange = (value) => {
            console.log(value);
        };

        return {
            actions,
            showPopover,
            onSelect,
            showValue,
            changeValue,
            hideValue,
            sliderChange,
            showValueSlider,
            sliderValue,
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
                    this.targetEle.$el.style.border = "1px solid #f00";
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
.set-box-slider {
    position: fixed;
    background: rgba($color: #000000, $alpha: 0.5);
    width: 80%;
    padding-top: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}
</style>