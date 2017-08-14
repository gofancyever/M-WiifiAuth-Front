<template>
  <div>
    <el-row>
      <div class="block">
        <el-carousel height="250px">
          <el-carousel-item v-for="item in items" :key="item">
            <img v-bind:src='item'>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
    <el-row class="sudoku">
      <el-col :span="8"><img src='http://www.bticec.org.cn/data/upload/image/20141226/1419580627928635.jpg'></el-col>
      <el-col :span="8"><img src='http://www.btdjy.cn/Public/Uploads/image/20170731/20170731100022_10052_small.jpg'></el-col>
      <el-col :span="8"><img src='http://www.btdjy.cn/Public/Uploads/image/20170609/20170609112835_32357_small.jpg'></el-col>
    </el-row>
    <el-row class="sudoku">
      <el-col :span="8"><img src='http://www.btdjy.cn/Public/Uploads/image/20170711/20170711092439_58010_small.jpg'></el-col>
      <el-col :span="8"><img src='http://www.btdjy.cn/Public/Uploads/image/20170602/20170602152502_69468_small.jpg'></el-col>
      <el-col :span="8"><img src='http://www.btdjy.cn/Public/Uploads/image/20170726/20170726162120_26462_small.jpg'></el-col>
    </el-row>
    <el-row class="flow">
        <img src='http://www.btdjy.cn/Public/Uploads/image/20161227/20161227155309_94619_small.jpg'>
    </el-row>
    <el-row class="flow">
        <img src='http://www.btdjy.cn/Public/Uploads/image/links/221.jpg'>
    </el-row>
    <el-row class="flow">
        <el-button v-on:click='login'>免费上网</el-button>
    </el-row>
      
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[
        'http://www.btdjy.cn/Public/Uploads/image/slide/9.jpg',
        'http://www.btdjy.cn/Public/Uploads/image/slide/10.jpg',
        'http://www.btdjy.cn/Public/Uploads/image/slide/12.jpg',
      ],
    }
  },
  methods:{
    login(even){
      console.log('login');
      this.$router.push('login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
    width: 100%;
    height: 100%;
}

</style>
