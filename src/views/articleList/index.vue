<template>
    <el-card v-for="value in 10" :key="value">
        <div class="container">
            <div class="left-container">
                <span class="title">Java基础教程</span>
                <div class="text-block">
                    <div class="text">
                        <div class="icon"><svg-icon icon-class="date" size="1.2em" color="#FD4781" /></div>
                        <div class="date">2025-11-1</div>
                    </div>
                    <div class="text">
                        <div class="icon"><svg-icon icon-class="wordCount" size="1.2em" color="#FD4781" /></div>
                        <div class="date">114514 字</div>
                    </div>
                </div>
                <div class="description">
                    Java基础教程全面讲解Java核心语法，涵盖变量、数据类型、流程控制等基础，深入面向对象编程思想，介绍异常处理、常用类库等，助零基础学习者快速上手，为后续深入学习Java开发技术筑牢根基
                </div>
                <div class="tags">
                    <el-tag v-for="item in tags" :color="item.color" :effect="item.effect" :key="item.id">
                        {{ item.tag }}
                    </el-tag>
                </div>
            </div>
            <div class="right-container">
                <el-image :src="url" fit="cover" lazy>
                    <template #error>
                        <el-image :src="errorUrl" />
                    </template>
                </el-image>
            </div>
        </div>
    </el-card>
    <div ref="paginationRef" class="pagination">
        <el-pagination :size="paginationSize" background layout="prev, pager, next" :total="1000" />
    </div>  
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref } from "vue"
const url = new URL("@imgs/image1.webp", import.meta.url).href
const errorUrl = new URL("@imgs/error.webp", import.meta.url).href
const paginationSize = ref("large")
const paginationRef = ref<Element | null>(null)
import { reactive } from 'vue';
const tags = reactive([
    { id: 1, tag: "Java", color: "#5AB8F6", effect: "light" },
    { id: 2, tag: "JavaScript", color: "#F6D45A", effect: "light" },
    { id: 3, tag: "Nodejs", color: "#B6F65A", effect: "light" },
    { id: 4, tag: "HTML", color: "#2167AC", effect: "light" },
])
onMounted(()=>{
    // 开始监听
    resizeObserver.observe(paginationRef.value as Element)
})
onBeforeUnmount(()=>{
    // 移除监听
    resizeObserver.disconnect()
})
// 监听元素尺寸变化，根据窗口设置分页组件大小
const resizeObserver = new ResizeObserver((entries) => {
    for(const entry of entries){
        if(entry.contentRect.width < 400){
            paginationSize.value = "small"
        }else{
            paginationSize.value = "large"
        }
    }
})



</script>

<style lang="scss" scoped>
.el-card {
    height: auto;
    margin-bottom: 20px;
    border-radius: 15px;

    .container {
        display: flex;
        justify-content: space-between;
        gap: 40px;

        .left-container {
            flex: 2;
            height: 100%;

            .title {
                font-size: 24px;
                font-weight: bold;
                border-left: 5px solid #FF92B5;
                padding-left: 10px;
            }

            .text-block {
                display: flex;
                margin-top: 15px;

                .text {
                    display: flex;

                    .icon {
                        padding: 4px;
                        border-radius: 5px;
                        background-color: rgb(255, 215, 222);
                    }

                    .date {
                        color: rgb(164, 164, 164);
                        margin: auto 10px;
                    }
                }
            }

            .description {
                color: #515151;
                margin-top: 10px;
            }

            .tags {
                margin-top: 10px;

                .el-tag {
                    color: #fff;
                    margin-right: 10px;
                }
            }
        }

        .right-container {
            flex: 1;
            .el-image {
                width: 100%;
                height: 100%;
                border-radius: 15px;

            }
        }

        @media screen and (max-width: $screen-medium) {
            flex-direction: column-reverse;
            gap: 0px;

            .right-container {
                .el-image {
                    height: 150px;

                    :deep(.el-image__inner) {
                        object-position: center top;
                        mask-image: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.5) 30%, #000 100%);
                    }
                }
            }
        }
    }
}

.el-pagination {
    justify-content: center;
    margin-bottom: 20px;
}

</style>