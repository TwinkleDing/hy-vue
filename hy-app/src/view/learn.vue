<template>
    <div class="learn"
        :class="[getOrientation =='portrait' ? 'learn-portrait' : 'learn-landscape' ]">
        <div class="learn-show">
            <van-button type="primary" round>主要按钮</van-button>
        </div>
        <div class="learn-set">you</div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { orientation } from "../utils/webview";

export default defineComponent({
    setup (props) {
        const getOrientation = orientation;
        console.log(getOrientation, 16);
        return {
            getOrientation
        };
    },
});
</script>

<style lang="scss" scoped>
    .learn {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
            width: 100%;
            height: 100%;
        }
        &-portrait {
            flex-direction: column;
            .learn-show {
                border-bottom: 2px solid #6200EE;
            }
            .learn-set {
                border-top: 2px solid #ac0;
            }
        }
        &-landscape {
            flex-direction: row;
            .learn-show {
                border-right: 2px solid #6200EE;
            }
            .learn-set {
                border-left: 2px solid #ac0;
            }
        }
    }
</style>