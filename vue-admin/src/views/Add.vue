<template>
  <div class="add">
    <h3>添加用户</h3>
    <el-form label-position="left" label-width="80px" :model="users">
      <el-form-item label="名称">
        <el-input v-model="users.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="users.age"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="users.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="users.email"></el-input>
      </el-form-item>
      <el-form-item label="公司">
        <el-select v-model="users.companyId" placeholder="公司">
          <el-option label="apple" value="1"></el-option>
          <el-option label="google" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Add",
  data() {
    return {
      users: {
        name: "",
        age: "",
        phone: "",
        email: "",
        companyId: ""
      }
    };
  },
  methods: {
    submitForm() {
      if (
        !this.users.name ||
        !this.users.age ||
        !this.users.phone ||
        !this.users.email ||
        !this.users.companyId
      ) {
        this.$message.error("请确认填写了所有信息");
      } else {
        this.$http
          .post("http://localhost:3000/users", this.users)
          .then(function() {
            this.$router.push({ path: "/", query: { msg: "用户添加成功" } });
          });
      }
    }
  }
};
</script>
