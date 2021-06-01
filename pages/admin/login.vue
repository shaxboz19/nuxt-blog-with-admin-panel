<template>
  <div class="form-wrap">
    <el-card shadow="always">
      <h2>Вход в админ панель</h2>
      <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item label="Ваш логин" prop="login">
          <el-input v-model.trim="controls.login"></el-input>
        </el-form-item>
        <el-form-item label="Ваш пароль" prop="password">
          <el-input type="password" v-model="controls.password"></el-input>
        </el-form-item>

        <el-form-item size="large">
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
            >Войти</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      controls: {
        login: "",
        password: "",
      },

      rules: {
        login: [
          {
            required: true,
            message: "Пожалуйста введите ваш логин",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Пожалуйста введите ваш пароль",
            trigger: "blur",
          },
          { min: 6, message: "Минимальная длина символов 6", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            };

            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
          } catch (e) {
            this.login = false;
          }
        }
      });
    },
  },
  mounted() {
    const { message } = this.$route.query;
    if (message === "login") {
    }
    switch (message) {
      case "login":
        this.$message.info("Для начала войдите в систему!");
        break;
      case "logout":
        this.$message.success("Вы успешно вышли из системы");
        break;
    }
  },
};
</script>




<style lang="css" scoped>
.form-wrap {
  width: 600px;
}
</style>