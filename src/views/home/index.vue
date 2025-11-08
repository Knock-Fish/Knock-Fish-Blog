<template>
    <div class="container">
        <div class="m-s">
            <div class="message">
                KnockFish's blog
            </div>
            <span class="slogan" ref="typedElement"></span>
        </div>
        <div class="wave">
            <Wave />
        </div>
    </div>
    <div class="area">
        <Sidebar class="sidebar"/>
        <div class="articleList">
            <ArticleList />
        </div>
    </div>
</template>

<script setup lang='ts'>

import Wave from "@comps/wave/index.vue"
import Sidebar from "@comps/sidebar/index.vue"
import ArticleList from "../articleList/index.vue"
import Typed from 'typed.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const typedElement = ref(null)
let typed: null | Typed = null
onMounted(() => {
    typed = new Typed(typedElement.value, {
        strings: ['你好，欢迎来到鱼的博客', '在此记录自己的所遇'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    })
})

onBeforeUnmount(() => {
    typed?.destroy()
})
</script>

<style lang="scss" scoped>
.container {
    height: 70vh;
    overflow: hidden;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    background-image: url("@/assets/img/bg.webp");
    background-size: cover;
    background-position: center;

    .m-s {
        margin-top: 120px;
        opacity: 0.9;

        .message {
            font-family: "logo-fonts";
            font-size: 60px;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 5px #a2a2a2;
            white-space: nowrap;
        }

        .slogan {
            font-size: 25px;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 5px #a2a2a2;
            white-space: nowrap;
        }
    }

    .wave {
        width: 100%;
        position: absolute;
        bottom: -5px;
        left: 0;
    }
}

.area {
    display: flex;
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: #ffffff;

    .articleList {
        width: 90%;
        margin-left: 20px;
    }
}

@media screen and (max-width: $screen-medium) {
    .container {
        height: 80vh;
        background-image: url("@/assets/img/bg2.webp");

        .m-s {
            margin-top: 200px;

            .message {
                font-size: 40px;
            }

            .slogan {
                font-size: 18px;
            }
        }
    }

    .area {
        width: 100vw;
        flex-direction: column-reverse;
        .sidebar{
            width: 90%;
            margin: 0 auto;
        }
        .articleList {
            margin: 0 auto;
        }
    }
}
</style>