<template>
  <div class="admin-layout-wrap">
    <el-container class="container">
      <el-aside width="200px">
        <app-navbar></app-navbar>
      </el-aside>
      <el-main><nuxt /> </el-main>
    </el-container>
  </div>
</template>

<script>
import appNavbar from '@/components/admin/appNavbar'

export default {
  components: {
      appNavbar
  },
};
</script>



<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>