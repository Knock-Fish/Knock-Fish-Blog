<template>
    <el-affix @scroll="updateHeader">
        <div ref="header" class="header-top-bar">
            <div class="logo">
                KnockFish
            </div>
            <div class="bar">
                <HeaderBar />
            </div>
            <div class="search">
                <Search />
            </div>
            <div class="menu">
                <HamburgerMenu />
            </div>
        </div>
    </el-affix>
</template>

<script setup lang='ts'>
import { ref } from "vue"
import HamburgerMenu from './HamburgerMenu.vue';
import HeaderBar from './HeaderBar.vue';
import Search from "./Search.vue";
const header = ref()

// 闭包+节流，当滚动到一定距离时给头部导航栏添加背景颜色
const throttle_Scroll = () => {
    let timer: ReturnType<typeof setTimeout> | null = null
    return function (e: HTMLElement) {
        if (!timer) {
            timer = setTimeout(() => {
                if (e.scrollTop >= 325) {
                    header.value.style.backgroundColor = "rgba(102,152,242, .8)"
                } else {
                    header.value.style.backgroundColor = "transparent"
                }
                timer = null
            }, 100)
        }
    }
}
const updateHeader = throttle_Scroll()
</script>

<style lang="scss" scoped>
.header-top-bar {
    display: flex;
    justify-content: space-around;
    height: 80px;
    transition: all .3s;

    .menu {
        display: none;
        margin: auto 10px;
    }

    .search {
        margin: auto 0;
    }

    .logo {
        font-family: "logo-font";
        font-weight: bold;
        font-size: 20px;
        margin: auto 0;
        color: transparent;
        background: linear-gradient(50deg, blue, rgb(208, 0, 255), orange, red, yellow);
        -webkit-background-clip: text;
        background-clip: text;
    }
    .bar{
        margin: auto 0;
    }

    @media screen and (max-width: 770px) {
        .menu {
            display: block;
        }

        .logo {
            margin: auto;
            transform: translateX(25%);
        }

        .bar,
        .search {
            display: none;
        }
    }
}
</style>