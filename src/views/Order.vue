<template>
<div>
   <ticketHeader/>
  <div class="main" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll; " >


  <el-row :gutter="20">
<el-col :span="6"><div class="grid-content bg-purple">抢购商品订单详情</div></el-col>
</el-row>
   <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">车票名称</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">{{goodsName}}</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">车票图片</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><img class="image" v-bind:src="imgUrl"></div></el-col>
</el-row>


  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">抢购价</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">{{miaoshaPrice}}</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">下单时间</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">{{startDate}}</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">下单地址</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">洛阳市涧西区西苑路48号</div></el-col>

     <el-button  type="primary" @click="buy()">开始支付</el-button>
     
</el-row>


  



  </div>
<ticketFooter/>

</div>


</template>
<script>
import ticketHeader from '../component/Header.vue';
import ticketFooter from '../component/Footer.vue';
import { listMenu } from '../api/goods/goodsApi';
export default {
  components: {ticketHeader,ticketFooter},
  props: [],
  data() {
    return {

      

//    imgUrl:require("./beijing.png"),
      imgUrl:'',
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
  created() {

       let params = this.$route.query;
               
                console.log('请求参数:', params);
                this.goodsName = params.goodsName;
                this.goodsPrice = params.goodsPrice;
                this.miaoshaPrice = params.miaoshaPrice;
                this.stockCount = params.stockCount;
                this.startDate=params.startDate;
                this.imgUrl=params.goodsImg;
                this.startDate=params.startDate;
              
  },
  mounted() {

     this.timeLineHeight = document.documentElement.clientHeight - 210;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 210;
    };
  },
  methods: {
     //验证码
    refreshCaptcha() {
    $("#captchaImg").attr("src", "/secKill/captcha?goodsId=" +
        $("#goodsId").val() + "&time=" + new Date())
  }
    
,

    submitForm() {
      this.$refs['elForm'].vaeldate(vaeld => {
        if (!vaeld) return
        // TODO 提交表单
      })
    },
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
,
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    con() {
      console.log(this.header.aaa)
    },
    confooter() {
      console.log(this.footer.aaa)
    },

    buy(){
        console.log("点击了")
        
    }
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

@media only screen and (max-width:719px) {
  .header .main-container nav .hiddenInSmallScreen {
    display: none;
  }
}

footer {
    line-height: 20px;
    text-align: center;
    font-size: 13px;
    margin-top: 60%;
     
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .main{
    height: inherit;
  }
  element.style {
    overflow-y: scroll;
    max-height: 100%;
}

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .image{
      height: 400px;
      width: 400px;
  }


</style>
