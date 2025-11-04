<template>
    <div class="Hamburger">
        <el-button @click.stop="isShow = !isShow">
            <svg-icon icon-class="hambutger-menu" color="#000" />
        </el-button>
        <div ref="menuRef" class="menu" v-show="isShow">
            <Menu menu-mode="vertical" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, onBeforeUnmount } from "vue"
import Menu from './Menu.vue';
const isShow = ref(false)
const menuRef = ref<HTMLElement | null>(null)
onMounted(() => {
    document.addEventListener("click", handleOutsideClick)
})
onBeforeUnmount(()=>{
    document.removeEventListener("click", handleOutsideClick)
})
// 点击其他区域关闭菜单弹窗
function handleOutsideClick(e: MouseEvent): void {
    console.log(e.target)
    if (menuRef.value) {
        if (!menuRef.value.contains(e.target as HTMLElement)) {
            isShow.value = false
        }
    }
}
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

    .el-button {
        background-color: transparent;
        border: none;
    }
}
</style>