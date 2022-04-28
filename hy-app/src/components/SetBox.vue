<template>
    <div class="set-box">
        <div
            :style="{ backgroundColor: color }"
            :class="['title', unfold ? 'title-unfold' : '']"
            @click="titleClick"
        >
            <span>{{ box.name }}</span>
            <van-icon v-if="!unfold" name="arrow" />
            <span v-if="unfold">{{ box.zh }}</span>
        </div>
        <div :class="['right', unfold ? 'right-unfold' : '']">
            <div class="content">
                <template v-for="(item, index) in box.children" :key="index">
                    <div class="content-item">
                        <div>{{ item.text }}</div>
                        <div class="item-slider">
                            <van-slider
                                :min="0"
                                :step="1"
                                :max="item.preset.length - 1"
                                v-model="item.value"
                                active-color="#6200ee"
                                @update:model-value="onChange(item)"
                            >
                                <template #button>
                                    <div class="custom-button">
                                        {{ item.preset[item.value] }}
                                    </div>
                                </template>
                            </van-slider>
                        </div>
                    </div>
                    <div
                        v-if="item.presetDesc"
                        class="content-item"
                        style="overflow-x: auto; overflow-y: hidden"
                    >
                        {{ item.presetDesc[item.value] }}
                    </div>
                    <i
                        v-if="item.desc"
                        class="content-item"
                        style="overflow-x: auto; overflow-y: hidden"
                        >{{ item.desc }}</i
                    >
                </template>
            </div>
            <div v-if="box.desc && unfold" class="box-desc">
                {{ box.desc }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    props: ["attr"],
    setup(props) {
        const store = useStore();
        const box = reactive(props.attr);
        const unfold = ref(false);
        const value = ref(0);
        const color = store.getters.themeColor;
        const titleClick = () => {
            unfold.value = !unfold.value;
        };
        const onChange = (item) => {
            store.commit("CHANGE_SHOW_BUTTON", {
                name: item.name,
                value: item.preset[item.value],
            });
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
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    display: flex;
    // flex-wrap: wrap;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        background: #cccccc88;
        transition: 0.5s;
        font-size: 16px;
        color: #fff;
        border-radius: 6px;
    }
    .title-unfold {
        flex-direction: column;
        justify-content: center;
        width: 60px;
        transition: 0.5s;
        border-radius: 0;
    }
    .right {
        display: none;
        font-size: 14px;
        overflow: hidden;
        flex: 1;
        color: var(--van-white);
        .content {
            background: var(--van-primary-color);
            padding: 10px;
            &-item {
                display: flex;
                align-items: center;
                padding: 0 10px;
                margin: 5px 0;
                :first-child {
                    padding-right: 10px;
                }
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
                    background-color: #6200ee;
                    border-radius: 30%;
                }
            }
        }
        .box-desc {
            background: var(--van-success-color);
            color: #fff;
            padding: 2px 10px;
            overflow: auto;
        }
    }
    .right-unfold {
        white-space: nowrap;
        display: flex;
        flex-direction: column;
    }
}
</style>