<template>
    <el-menu :default-active="1" class="el-menu-demo" :mode="menuMode" @select="handleSelect" :router="true"
        :ellipsis="false">
        <el-menu-item index="/home">
            <el-icon><House /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/link">
            <el-icon><Link /></el-icon>
            <span>友链</span>
        </el-menu-item>
        <el-menu-item index="/archive">
            <el-icon><Files /></el-icon>
            <span>归档</span>
        </el-menu-item>
        <el-menu-item index="/navigation">
            <el-icon><Position /></el-icon>
            <span>导航</span>
        </el-menu-item>
        <el-menu-item index="/about">
            <el-icon><WarningFilled /></el-icon>
            <span>关于</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter()
console.log(router)
const handleSelect = () => { }
const props = defineProps({
    menuMode:{
        type: String,
        default: "horizontal"
    }
})
</script>

<style lang="scss" scoped>
.el-menu-item {
    font-weight: bold;
    font-size: 20px;
    color: #414141;
    // padding: 0 30px;

    &:hover {
        // background-color: transparent !important;
        // color: #ad99ff !important;
    }
    
    @media screen and (max-width: $screen-medium){
        font-size: 13px;
        height: 37px;
        color: #000;
    }
}
</style>