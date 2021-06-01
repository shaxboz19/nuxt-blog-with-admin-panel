<template>
  <div class="form-wrap">
    <h2>Создать пользователя</h2>
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Логин пользоателя" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>
      <el-form-item label="Пароль пользователя" prop="password">
        <el-input type="password" v-model="controls.password"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" round native-type="submit" :loading="loading"
          >Создать пользователя</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "admin",

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

            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success("Пользователь успешно добавлен!");
            (this.controls.login = ""), (this.controls.password = "");
            this.loading = false;
            tihs;
          } catch (e) {
            this.login = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.form-wrap {
  width: 600px;
}
</style>