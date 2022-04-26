<template>
    <div class="set-box">
        <div
            :style="{ backgroundColor: color }"
            :class="['title', unfold ? 'title-unfold' : '']"
            @click="titleClick"
        >
            <span>{{ box.name }}</span>
            <span v-if="unfold">{{ box.desc }}</span>
        </div>
        <div :class="['content', unfold ? 'content-unfold' : '']">
            <div
                v-for="(item, index) in box.children"
                :key="index"
                class="content-item"
            >
                <div>{{ item.text }}</div>
                <div class="item-slider">
                    <van-slider
                        :min="0"
                        :step="1"
                        :max="item.preset.length - 1"
                        v-model="item.value"
                        @change="onChange(item)"
                    >
                        <template #button>
                            <div class="custom-button">
                                {{ item.preset[item.value] }}
                            </div>
                        </template>
                    </van-slider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from "vue";
import useStore from "@/store/index.js";
import { themeColor } from "@/utils/webview";
export default defineComponent({
    props: ["attr"],
    setup(props) {
        const store = useStore();
        const box = reactive(props.attr);
        const unfold = ref(false);
        const value = ref(0);
        const color = themeColor;
        const titleClick = () => {
            unfold.value = !unfold.value;
            console.log(unfold);
        };
        const onChange = (item) => {
            store.changeShowButton(item.name, item.preset[item.value]);
        };
        onMounted(() => {
            // setTimeout(() => {
            // console.log(store.showButton.$el.style);
            // }, 0);
        });
        return {
            box,
            unfold,
            value,
            color,
            onChange,
            titleClick,
        };
    },
});
// const style = this.targetEle.$el.style;
</script>

<style lang="scss" scoped>
.set-box {
    width: 100%;
    font-size: 0;
    display: flex;
    .title {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 10px;
        border-radius: 6px;
        background: #cccccc88;
        transition: 0.5s;
        font-size: 16px;
        color: #fff;
    }
    .title-unfold {
        flex-direction: column;
        justify-content: center;
        border-radius: 6px 0 0 6px;
        width: 60px;
        min-height: 100px;
        transition: 0.5s;
    }
    .content {
        display: none;
        font-size: 14px;
        overflow: hidden;
        flex: 1;
        color: var(--van-white);
        background: var(--van-primary-color);
        padding: 10px;
        &-item {
            display: flex;
            align-items: center;
            padding: 0 10px;
            .item-slider {
                padding: 0 10px;
                flex: 1;
            }
            .custom-button {
                min-width: 15px;
                padding: 0 4px;
                color: #fff;
                font-size: 10px;
                line-height: 18px;
                text-align: center;
                background-color: var(--van-success-color);
                border-radius: 30%;
            }
        }
    }
    .content-unfold {
        border-radius: 0 6px 6px 0;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>