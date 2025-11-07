<template>
    <div ref="header" class="header-top-bar"
        :style="{ backgroundColor: isBackgroundColor ? '#FFC7C8' : 'transparent' }">
        <div class="logo">
            KnockFish
        </div>
        <div class="bar">
            <Menu/>
        </div>
        <div class="parts">
            <div class="search">
                <Search />
            </div>
            <!-- <div class="theme">
                <Theme />
            </div> -->
            <div class="menu">
                <HamburgerMenu />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from "vue"
import HamburgerMenu from './HamburgerMenu.vue'
import Menu from './Menu.vue'
import Search from "./Search.vue"
// import Theme from "./Theme.vue"
const isBackgroundColor = ref(false)

// 闭包+节流，当滚动到一定距离时给头部导航栏添加背景颜色
const throttle_Scroll = () => {
    let timer: ReturnType<typeof setTimeout> | null = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                if (window.scrollY > 300) {
                    isBackgroundColor.value = true
                } else {
                    isBackgroundColor.value = false
                }
                timer = null
            }, 200)
        }
    }
}
onMounted(() => {
    document.addEventListener("scroll", throttle_Scroll())
    throttle_Scroll()
})
onBeforeUnmount(() => {
    document.addEventListener("scroll", throttle_Scroll())
})
</script>

<style lang="scss" scoped>
.header-top-bar {
    position: fixed;
    top: 0;
    z-index: 10000;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    transition: all .5s;

    .logo {
        font-family: "logo-font";
        font-weight: bold;
        font-size: 20px;
        color: transparent;
        background: linear-gradient(50deg, blue, rgb(208, 0, 255), orange, red, yellow);
        -webkit-background-clip: text;
        background-clip: text;
    }

    .parts {
        display: flex;
        align-items: center;
        .menu {
            display: none;
        }
    }
    @media screen and (max-width: $screen-medium) {
        justify-content: space-between;

        .parts {
            .menu {
                display: block;
            }
        }

        .bar {
            display: none;
        }
    }
}
</style>