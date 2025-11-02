<template>
    <div class="drawer">
        <el-icon @click="drawer = true" :size="30">
            <Operation />
        </el-icon>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="60%">
            <span>Hi there!</span>
        </el-drawer>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style lang="scss" scoped>

</style>