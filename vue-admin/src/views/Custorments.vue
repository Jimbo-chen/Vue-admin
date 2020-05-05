<template>
  <div class="custorments">
    <h3>这是首页用户列表</h3>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <router-link :to="'/details/'+ users[scope.$index].id">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </router-link>
          <router-link :to="'/details/'+ users[scope.$index].id">
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Custorments",
  created() {
    this.$http.get("http://localhost:3000/users").then(function(data) {
      this.users = data.body;
      console.log(this.users);
    });
  },
  updated() {
    if (this.$route.query.msg) {
      this.$message({
        message: "恭喜你，添加成功",
        type: "success"
      });
    }
  },
  data() {
    return {
      users: []
    };
  }
};
</script>
