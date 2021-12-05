<template>
    <div>
        {{getOrientation}}
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup (props) {
        const getOrientation = window.androidObject.getOrientation();
        return {
            getOrientation
        };
    },
});
</script>

<style lang="scss" scoped>

</style>