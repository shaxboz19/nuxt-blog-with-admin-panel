<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person Name</span>
      <small
        ><span><i class="el-icon-date"></i></span>
        {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment-text">Lorem ipsum dolor sit amet.</div>
  </el-card>
</template>

<script>
export default {
  props: ["comment"],
};
</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: .8rem;
}
.comment-text {
  white-space: pre-line;
}
</style>