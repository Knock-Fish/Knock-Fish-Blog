<template>
    <div class="container">
        <div class="card">
            <div class="title">
                实用工具
            </div>
            <div class="nav">
                <el-card class="nav-item" v-for="v in 14" :key="v" shadow="hover">
                    <div class="top-container">
                        <img class="ico" src="https://www.bilibili.com/favicon.ico" alt="哔哩哔哩">
                        <span class="name">哔哩哔哩</span>
                    </div>
                    <div class="bottom-container">
                        <span class="description">现代年轻人高度聚集的文化社区和视频平台</span>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { } from 'vue'

</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 100px auto 0;

    .card {
        .title {
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }

        .nav {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
            // grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
            gap: 15px;

            .nav-item {
                border-radius: 15px;
                max-height: 113px;
                &:hover {
                    transform: translateY(-5%);
                }

                .top-container {
                    .ico {
                        vertical-align: middle;
                    }

                    .name {
                        font-size: 20px;
                        font-weight: bold;
                        color: #767676;
                        vertical-align: middle;
                        margin-left: 20px;
                    }
                }

                .bottom-container {
                    margin-top: 5px;

                    .description {
                        font-size: 12px;
                        color: #808080;
                    }
                }
            }
        }

        // .nav {
        //     display: flex;
        //     flex-wrap: wrap;
        //     gap: 15px;
        //     // align-items: center;
        //     justify-content: space-between;

        //     .nav-item {
        //         max-width: 268px;
        //         height: 100px;
        //         border-radius: 15px;

        //         &:hover {
        //             transform: translateY(-5%);
        //         }

        //         .top-container {
        //             .ico {
        //                 vertical-align: middle;
        //             }

        //             .name {
        //                 font-size: 20px;
        //                 font-weight: bold;
        //                 color: #767676;
        //                 vertical-align: middle;
        //                 margin-left: 20px;
        //             }
        //         }

        //         .bottom-container {
        //             margin-top: 5px;

        //             .description {
        //                 font-size: 12px;
        //                 color: #808080;
        //             }
        //         }
        //     }
        // }
    }

    @media screen and (max-width: $screen-larger) {
        width: 100vw;

        // .card {
        //     .nav {
        //         .nav-item {
        //             width: 30%;
        //         }
        //     }
        // }
    }

    @media screen and (max-width: $screen-medium) {
        width: 100vw;

        .card {
            .nav {
                // grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
                .nav-item {
                    // width: 45%;
                }
            }
        }
    }

    @media screen and (max-width: $screen-small) {
        width: 100vw;

        .card {
            .nav {
                .nav-item {
                    // width: 90vw;
                }
            }
        }
    }
}
</style>