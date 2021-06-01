<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Ваше Имя" prop="name">
      <el-input v-model.trim="controls.name"></el-input>
    </el-form-item>
    <el-form-item label="Текст комментария" prop="text">
      <el-input
        type="textarea"
        resize="none"
        :rows="2"
        v-model="controls.text"
      ></el-input>
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" round native-type="submit"
      :loading='loading'
        >Добавить комментарий</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
        loading : false,
      controls: {
        name: "",
        text: "",
        
      },

      rules: {
        name: [
          {
            required: true,
            message: "Пожалуйста введите свое имя",
            trigger: "blur",
          },
        ],
        text: [
          {
            required: true,
            message: "Пожалуйста введите текст комментаряи",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
              name : this.controls.name,
              text : this.controls.text,
              postId : '',

          }
          try{
              this.$message.success('Комментарий добавлен')
              this.$emit('created')
          }catch(e){
              this.loading = false
          }

        }
      });
    },
  },
};
</script>