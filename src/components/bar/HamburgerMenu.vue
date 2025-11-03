<template>
    <div class="Hamburger">
        <el-button class="icon" @click="isShow = !isShow">
            <svg-icon icon-class="hambutger-menu" color="#000" />
        </el-button>
        <div class="menu" v-show="isShow">
            <Menu menu-mode="vertical" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
import Menu from './Menu.vue';
const isShow = ref(false)

</script>

<style lang="scss" scoped>
.Hamburger {
    position: relative;
    .menu {
        width: 148px;
        border-radius: 15px;
        position: absolute;
        top: 50px;
        right: 0px;
        background-color: #ffffff;
    }
}
</style>