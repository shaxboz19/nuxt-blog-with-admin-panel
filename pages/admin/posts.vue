<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column label="Название">
      <template slot-scope="{ row: { title } }">
        <span style="margin-left: 10px">{{ title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Дата">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{
          new Date(date).toLocaleString()
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотры">
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Комментарии">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Действия">
      <template slot-scope="{ row }">
        <el-tooltip effect="dark" content="Изменить пост" placement="top">
          <el-button circle type="primary" @click="editPost(row)"
            ><i class="el-icon-edit"></i
          ></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить пост" placement="top">
          <el-button circle type="danger" @click="removePost(row)"
            ><i class="el-icon-delete"></i
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "admin",
  async asyncData({ store }) {
    const posts = await store.dispatch("posts/fetchAdmin");
    return { posts };
  },
  methods: {
    editPost(row) {
      this.$router.push(`/admin/post/${row._id}`);
    },
    async removePost(row) {
      try {
        await this.$confirm("Удалить пост?", "Внимание", {
          confirmButtonText: "Да",
          cancelButtonText: "Отмена",
          type: "warning",
        });
        await this.$store.dispatch("posts/removePost", row);
        console.log("posts", this.posts);
        console.log("row", row);
        this.posts = this.posts.filter((p) => p._id != row._id);
        this.$message.success("Пост успешно удален");
      } catch (e) {}
    },
  },
};
</script>