<template>
  <div class="wrap">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h1 class="mb">Создать пост</h1>
      <el-form-item label="Название поста" prop="title">
        <el-input v-model="controls.title"></el-input>
      </el-form-item>
      <el-form-item label="Текст в формате .md или html" prop="text">
        <el-input
          type="textarea"
          resize="none"
          :rows="10"
          v-model="controls.text"
        ></el-input>
      </el-form-item>

      <el-button type="success" class="mb" plain @click="previewClick"
        >Предпросмотр</el-button
      >
      <el-dialog
        title="Предпросмотр"
        :key="controls.text"
        :visible.sync="previewDialog"
      >
        <mark-down>{{ controls.text }}</mark-down>
      </el-dialog>

      <el-upload
      class="mb"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="uploadImage"
        :auto-upload="false"
        ref="upload"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Перетащите картинку <em>или нажмите</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          файлы с расширениями jpg/png
        </div>
      </el-upload>

      <el-form-item size="large">
        <el-button type="primary" round native-type="submit" :loading="loading"
          >Создать пост</el-button
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
      previewDialog: false,
      loading: false,
      image : null,
      controls: {
        text: "",
        title: "",
        
      },

      rules: {
        title: [
          {
            required: true,
            message: "Пожалуйста введите название ",
            trigger: "blur",
          },
        ],
        text: [
          {
            required: true,
            message: "Пожалуйста введите текст ",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.image) {
          this.loading = true;

          const formData = {
            text: this.controls.text,
            title: this.controls.title,
            image : this.image
            
          };
          try {
            await this.$store.dispatch("posts/createPost", formData);
            this.controls.text = '';
            this.controls.title = '';
            this.image = '';
            this.$refs.upload.clearFiles();
            this.$message.success("Пост успешно создан");
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      });
    },
    previewClick() {
      this.previewDialog = true;
    },
    uploadImage(file, fileList) {
      this.image = file.raw
    }
  },
};
</script>

<style scoped>
.wrap {
  width: 600px;
}
</style>