<template>
    <el-card>
        <div class="avatar">
            <el-avatar :size="120" :src="url" />
            <div class="name">KnockFish</div>
            <div class="introduction">一位二次元爱好者</div>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { ref } from "vue"
const url = ref(new URL("@imgs/avatar.jpg", import.meta.url).href)
</script>

<style lang="scss" scoped>
.el-card {
    border-radius: 15px;
    .avatar {
        text-align: center;

        .name {
            font-family: "logo-font";
            font-weight: bold;
            margin: 15px 0;
        }
    }
}
</style>