<template>
  <div class="details">
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      users: []
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.$http
      .get("http://localhost:3000/users/" + this.$route.params.id)
      .then(function(data) {
        this.users.push(data.body);
      });
  }
};
</script>
