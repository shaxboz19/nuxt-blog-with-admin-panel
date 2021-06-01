<template>
  <div>
    <h2>Logout Page</h2>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "admin",
  beforeCreate() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/admin/login?message=logout');
  }
};
</script>