<template>
  <div>
    <h1>Welcome to Admin Panel</h1>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "admin",
  
};
</script>

<style scoped>
</style>