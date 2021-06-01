<template>
  <el-row type ='flex' justify='center'>
    <el-col :xs='24' :sm='18' :md='12' :lg='10' >
      <app-blog v-for="post in 3" :key="post" ></app-blog>
    </el-col>
  </el-row>
</template>

<script>
import AppBlog from '../components/main/appBlog.vue'

export default {
  head : {
    title : 'Главная'
  },
  components : {
    AppBlog
  }
}
</script>

<style>

</style>
