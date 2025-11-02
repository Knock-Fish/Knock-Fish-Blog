<template>
  <div class="search">
    <div class="container" :class="{ active: isActive }">
      <el-input ref="inputRef" class="input" @blur="toggle" v-model="input1" type="text" placeholder="搜索什么……" />
      <div class="icon" @click="toggle"><svg-icon icon-class="search" :color="isActive ? '#cecece' : '#fff'" /></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
const input1 = ref()
const isActive = ref(false)
const inputRef = ref()
const toggle = () => {
  if (!isActive.value) {
    focusInput()
  }
  isActive.value = !isActive.value
}
const focusInput = () => {
  inputRef.value.focus(); // 调用 focus() 方法
};


</script>

<style lang="scss" scoped>
.search {
  display: flex;
  width: 220px;
  height: 50px;
  flex-direction: row-reverse;

  .container {
    display: flex;
    flex-direction: row-reverse;
    border-radius: 8px;
    transition: all .3s;

    &.active {
      background-color: white;

      .input {
        width: 160px;
      }
    }

    .icon {
      padding: 0 10px;
      margin: auto 0;
    }

    .input {
      width: 0;
      font-size: 16px;
      transition: all .5s;

      :deep(.el-input__wrapper) {
        background-color: transparent;
        box-shadow: none;
        padding: 0;
      }
    }
  }
}
</style>