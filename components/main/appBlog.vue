<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post Title</h3>
      <small
        ><span><i class="el-icon-date"></i></span>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://reloadvisor.org/wp-content/uploads/2019/10/Canada-ReloAdvisor.org_-1024x512.jpg"
        alt="post imager"
        class="post-img"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span><i class="el-icon-message"></i>12</span>
    </footer>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openPost() {
        const id = 1
        this.$router.push(`/post/${id}`)
      console.log("openPost");
    },
  },
};
</script>

<style scoped>
.post {
  margin-bottom: 2rem;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-img {
  width: 100%;
  height: auto;
}
.post-body {
  /* padding-bottom: 1rem; */
}
.post-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>