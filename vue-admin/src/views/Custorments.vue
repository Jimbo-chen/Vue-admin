<template>
  <div class="custorments">
    <h3>这是首页用户列表</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Custorments",
  created() {
    this.$http.get("http://localhost:3000/users").then(function(data) {
      this.tableData = data.body;
    });
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>
