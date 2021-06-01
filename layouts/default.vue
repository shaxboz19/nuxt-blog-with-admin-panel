<template>
 <el-container>
  <el-header><app-navbar></app-navbar></el-header>
  <el-main> <nuxt/> </el-main>
</el-container>
</template>

<script>
import appNavbar from '@/components/main/appNavbar'

export default {
  components : {
    appNavbar
    
  }
}
</script>
<style>
</style>
