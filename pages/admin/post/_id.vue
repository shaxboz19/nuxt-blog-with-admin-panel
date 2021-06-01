<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin/posts' }"
        >Список</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ post.title }} </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap">
      <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item label="Текст в формате .md или html" prop="text">
          <el-input
            type="textarea"
            resize="none"
            :rows="10"
            v-model="controls.text"
          ></el-input>
        </el-form-item>
        <div class="post-info mb">
          <small class="mr"
            ><span><i class="el-icon-date"></i></span>
            {{ new Date(post.date).toLocaleString() }}
          </small>
          <small>
            <i class="el-icon-view"></i>
            {{ post.views }}
          </small>
        </div>

        <el-form-item size="large">
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
            >Обновить</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  layout: "admin",
  middleware: ["auth"],
  validate({ params }) {
    return !!params.id;
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`,
    };
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("posts/fetchAdminById", params.id);
    return { post };
  },

  data() {
    return {
      loading: false,
      controls: {
        text: "",
      },

      rules: {
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
        if (valid) {
          this.loading = true;

          const formData = {
            text: this.controls.text,
            id: this.$route.params.id,
          };
          try {
            await this.$store.dispatch("posts/updatePost", formData);
            this.$message.success("Пост обновлен");
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.wrap {
  width: 600px;
}
</style>