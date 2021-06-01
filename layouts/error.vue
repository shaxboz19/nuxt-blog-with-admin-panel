<template>
    <div class="error-layout">
        <div class="error-content">
            <h1 class="error-title"> Ошибка! </h1>
            <nuxt-link to="/">Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>


<style scoped>
    .error-title {
        color: rgb(223, 21, 21);
        text-align: center;

    }
    .error-layout{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .error-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;
        
    }
</style>