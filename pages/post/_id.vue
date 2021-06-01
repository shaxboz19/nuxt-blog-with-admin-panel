<template>
  <div class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
      </div>
      <div class="post-info">
        <small
          ><span><i class="el-icon-date"></i></span>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://reloadvisor.org/wp-content/uploads/2019/10/Canada-ReloAdvisor.org_-1024x512.jpg"
          alt="post image"
          class="post-img"
        />
      </div>
    </header>
    <main>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum rerum
        molestias maxime iusto et praesentium laudantium beatae id qui at, sunt
        velit iste provident incidunt eaque voluptatem est, nulla sequi Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus
        delectus perferendis minima non deserunt voluptas rerum, totam molestiae
        voluptate fugiat. Eveniet autem suscipit blanditiis reiciendis earum
        laboriosam dicta enim?
      </p>
    </main>
    <footer class="footer">
      <app-form @created="addComment" v-if="addIsComment"></app-form>
      <div class="comments" v-if="true">
        <app-comments v-for="item of 3" :key="item"></app-comments>
      </div>
      <p v-else class="no-comment">Комментариев не найдено</p>
    </footer>
  </div>
</template>

<script>
import appComments from "../../components/main/appComments.vue";
import AppForm from "../../components/main/appForm.vue";
export default {

  components: { appComments, AppForm },
  validate({ params }) {
    return !!params.id;
  },
  data() {
      return {
          addIsComment : true
      }
  },
  methods: {
      addComment() {
          this.addIsComment =false
      }
  },
};
</script>

<style lang="css" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}
.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-img {
  width: 100%;
  height: auto;
}
.post-image {
  margin-bottom: 1rem;
}
.footer {
  margin-top: 1rem;
}
.no-comment {
  text-align: center;
}
</style>