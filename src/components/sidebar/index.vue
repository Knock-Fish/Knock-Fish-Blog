<template>
    <div class="left-bar">
        <Description />
        <Tags />
    </div>
</template>

<script setup lang='ts'>
import Description from "./Description.vue";
import Tags from "./Tags.vue"
</script>

<style lang="scss" scoped>
.left-bar {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>