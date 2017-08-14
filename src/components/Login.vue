<template>
 <div class="login">
   <img src="~@/assets/logo.png"> 
   <el-input size="large" v-model="mobile" placeholder="请输入手机号"></el-input>
   <el-button v-on:click='login' type="primary">验证</el-button>
 </div>
</template>

<script>
export default {
  data () {
    return {
      mobile:null,
    }
  },
  methods:{
    login(even){
      console.log('home');
      this.$router.push('home');
    },
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.login .el-button {
  margin-top: 10px;
}


</style>
