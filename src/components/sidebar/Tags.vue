<template>
    <el-card>
        <template #header>
            <span class="title">标签</span>
        </template>
        <div class="tags">
            <el-tag v-for="item in tags" 
            :color="item.color" 
            :effect="item.effect" 
            :key="item.id">
                {{item.tag}}
            </el-tag>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
const tags = reactive([
    {id:1, tag:"Java", color:"#5AB8F6", effect:"light"},
    {id:2, tag:"JavaScript", color:"#F6D45A", effect:"light"},
    {id:3, tag:"Nodejs", color:"#B6F65A", effect:"light"},
    {id:4, tag:"HTML", color:"#2167AC", effect:"light"},
    {id:5, tag:"CSS", color:"#C04CF8", effect:"light"},
    {id:6, tag:"MySQL", color:"#F84C74", effect:"light"},
    {id:7, tag:"PHP", color:"#1D99AF", effect:"light"},
    {id:8, tag:"Vue", color:"#EAA101", effect:"light"},
    {id:9, tag:"Redis", color:"#9DEA01", effect:"light"},
])
</script>

<style lang="scss" scoped>
    .el-card{
        border-radius: 15px;
        :deep(.el-card__header){
            padding: 10px;
        }
        .title{
            padding-left: 5px;
            border-left: 5px solid #01EAA1;
        }
        .tags{
            .el-tag{
                color: #fff;
                margin: 5px 5px;
            }
        }
    }
</style>