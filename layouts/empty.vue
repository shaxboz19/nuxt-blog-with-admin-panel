<template>
    <div class="wrap">
        <nuxt/>
    </div>
</template>

<script>
export default {
    computed : {
        error() {
           return this.$store.getters.error 
        }
    },
    watch : {
    error(val) {
        this.$message.error(val)
    } 
    }
}
</script>

<style scoped>
.wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
}
</style>