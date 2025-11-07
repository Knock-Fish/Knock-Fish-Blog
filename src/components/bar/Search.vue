<template>
  <div class="search-container">
    <!-- PC端搜索框 -->
    <div class="notebook">
      <div class="notebook-search" :class="{ active: isActive }">
        <el-input ref="inputRef" class="input" @blur="toggle" v-model="input1" type="text" placeholder="搜索什么……" />
        <el-button class="icon" @click="toggle"><svg-icon icon-class="search"
            :color="isActive ? '#cecece' : '#fff'" /></el-button>
      </div>
    </div>
    <!-- 移动端搜索框 -->
    <div class="mobile">
      <el-button class="icon" @click="toggle"><svg-icon icon-class="search"
          :color="isActive ? '#cecece' : '#fff'" /></el-button>
      <el-card class="mobile-search" style="width: 480px">
        <el-input ref="inputRef" class="input" size="large" :prefix-icon="Search" @blur="toggle" v-model="input1"
          type="text" placeholder="搜索什么……" />
        <div class="search-result">
          <div v-for="v in 10" :key="v" style="width: 100%; height: 60px;">
            {{v}}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
const input1 = ref()
const isActive = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const toggle = () => {
  if (!isActive.value) {
    focusInput()
  }
  isActive.value = !isActive.value
}
const focusInput = () => {
  if (inputRef.value) {
    inputRef?.value.focus(); // 调用 focus() 方法
  }
};


</script>

<style lang="scss" scoped>
.search-container {

  /* pc端的搜索框样式 */
  .notebook {
    display: flex;
    width: 220px;
    height: 50px;
    flex-direction: row-reverse;

    .notebook-search {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      border-radius: 8px;
      transition: all .3s;

      &.active {
        background-color: white;

        .input {
          width: 160px;
        }
      }

      .input {
        width: 0;
        transition: all .5s;
      }
    }

    @media screen and (max-width: $screen-larger) {
      display: none;
    }
  }

  /* 移动端的搜索框样式 */
  .mobile {
    position: relative;

    .mobile-search {
      position: absolute;
      top: 50px;
      right: 0px;
      border-radius: 15px;
      background-color: rgba($color: #ffffff, $alpha: 0.9);

      :deep(.el-card__body) {
        padding: 10px;
      }

      .input {
        height: 44px;
        background-color: rgba($color: #f1f1f1, $alpha: 0.9);
        border-radius: 8px;
        padding: 0 10px;
      }

      .search-result{
        margin-top: 30px;
        height: 300px;
        // display: flex;
      }
    }

    @media screen and (min-width: $screen-larger) {
      display: none;
    }
  }
}
</style>