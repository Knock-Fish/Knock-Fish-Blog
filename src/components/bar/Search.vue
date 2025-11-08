<template>
  <div class="search-container">
    <!-- PC端搜索框 -->
    <div class="notebook">
      <div class="notebook-search" :class="{ active: pc_isActive }">
        <el-input ref="pc_inputRef" class="input" @blur="pc_toggle" v-model="input1" type="text" placeholder="搜索什么……" />
        <el-button class="icon" @click="pc_toggle"><svg-icon icon-class="search"
            :color="pc_isActive ? '#cecece' : '#fff'" /></el-button>
      </div>
    </div>
    <!-- 移动端搜索框 -->
    <div class="mobile">
      <el-button class="icon" @click.stop="mobile_isActive = !mobile_isActive"><svg-icon icon-class="search"
          :color="mobile_isActive ? '#cecece' : '#fff'" /></el-button>
      <div ref="cardRef">
        <el-card class="mobile-search" v-show="mobile_isActive">
          <el-input class="input" size="large" :prefix-icon="Search" v-model="input1" type="text"
            placeholder="搜索什么……" />
          <div class="search-result">
            <!-- <el-scrollbar class="scrollbar" max-height="400px">
            <div class="result">搜索结果：</div>
            <div class="item" v-for="v in 10" :key="v" style="width: 100%; height: 70px;">
              {{ v }}
            </div>
          </el-scrollbar> -->
          </div>
        </el-card>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Search } from "@element-plus/icons-vue"
/*-----------------------------Variable------------------------------ */
const input1 = ref()
const pc_isActive = ref(false)
const mobile_isActive = ref(false)
const pc_inputRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
/*-----------------------------Method--------------------------------- */
// 自动获取焦点，在失去焦点时搜索框隐藏（PC端）
const pc_toggle = () => {
  if (!pc_isActive.value) {
    if (pc_inputRef.value) {
      pc_inputRef?.value.focus(); // 调用 focus() 方法
    }
  }
  pc_isActive.value = !pc_isActive.value
}

// 点击其他区域关闭搜索框（移动端）
function handleOutsideClick(e: MouseEvent): void {
  if (cardRef.value && mobile_isActive.value) {
    if (!cardRef.value.contains(e.target as HTMLElement)) {
      mobile_isActive.value = false
    }
  }
}
onMounted(() => {
  document.addEventListener("click", handleOutsideClick)
})
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick)
})

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
      width: 480px;
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

      .search-result {
        .scrollbar {
          .result {
            font-size: 18px;
            color: #909090;
          }

          .item {
            transition: all .2s;
            border-radius: 15px;

            &:hover {
              background-color: #ffe8e8;
            }
          }
        }
      }
    }

    @media screen and (min-width: $screen-larger) {
      display: none;
    }

    @media screen and (max-width: $screen-medium) {
      .mobile-search {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        margin-top: 30px;
      }
    }
  }
}
</style>