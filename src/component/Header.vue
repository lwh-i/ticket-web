<template>
<div>
  <div class="main" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll; " >
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <header>
        <el-row type="flex" class="header">
          <li-fe-col :span="12" class="main-container">
            <a to="/" class="logo">
         
              <img
                src="../views/images/logo.png">
                     <span class="sp">好利来购票系统</span>
            </a>
            <nav> 
              <a href="/main">首页</a>
              <a href="/login" class="hiddenInSmallScreen">登录</a>
              <a href="/register">注册</a>
              <a href="/login">帮助</a>
            </nav>
          </li-fe-col>
        </el-row>
      </header>
    </el-form>
  </div>
</div>
</template>
<script>
export default {
   name:'ticketHeader',
  components: {},
  props: [],
  data() {
    return {
      timeLineHeight: "",
      renderData: {},
      formData: {},
      rules: {},
      header: {
        aaa: 11
      },
      footer: {
        aaa: 11
      },
    
       
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {


  }
}

</script>
<style>
header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
  color: #000;
}

.header {
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.08);
}

.header .main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.header .main-container a {
  text-decoration: none;
  color: #000;
}

@media only screen and (max-width:719px) {
  .header .main-container .logo {
    width: 55px;
    overflow: hidden;
  }
}

.header .main-container .logo img {
  width: 50px;
}

.header .main-container .logo span {
  margin-left: 10px;
}

@media only screen and (max-width:719px) {
  .header .main-container .logo span {
    display: none;
  }
}

.header .main-container nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1050px;
}

.header .main-container nav a {
  margin: 5px 30px 5px 0;
  font-size: 14px;
}
.sp{
 font-size: 90%;
}
@media only screen and (max-width:719px) {
  .header .main-container nav .hiddenInSmallScreen {
    display: none;
  }
}



</style>
