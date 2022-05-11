<template>
<div>

<ticketHeader/> 

  <div class="main" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll; " >
   <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">车票名称</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">{{goodsName}}</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">车票图片</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><img class="image" v-bind:src="imgUrl"></div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">抢购开始时间</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">{{startDate}}</div></el-col>

</el-row>

  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">车票原价</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">{{goodsPrice}}元</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">抢购价</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">{{miaoshaPrice}}元</div></el-col>
 
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">库存数量</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">{{stockCount}}</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple"> <img id="captchaImg" width="130" height="32" style="display: none"
                 onclick="refreshCaptcha()"/> </div></el-col>
     <el-button  type="primary" @click="buy()">开始抢购</el-button>
     
</el-row>
  </div>
  <!-- <div>
        <footer>
        <p>更多信息：wwww.gitee.com/lwh-i/ticket</p>
        <p>&copy;仁者乐山 智者乐水 欢迎访问我的个人博客：www.csdn.com/java-cch</p>
      </footer>
</div> -->
 <ticketFooter/>
  </div>
  

 



  


    <!-- <footer>
        <p>特别鸣谢：理想汽车设计团队提供视觉支持</p>
        <p>&copy;理想汽车企业系统部研发团队</p>
      </footer> -->




</template>
<script>
import ticketHeader from '@/component/Header.vue';
import ticketFooter from '@/component/Footer.vue';
import { doSeckill } from '../api/goods/goodsApi';
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
                this.goodsId=params.goodsId
              
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
        console.log("点击了"+this.goodsId)
         var that=this
         doSeckill(this.goodsId).then((res) => {
               console.log("res="+res.code) 
               if(res.code==200){
              window.location.href = "./order?" + "goodsName=" + that.goodsName + "&goodsPrice=" + that.goodsPrice + "&miaoshaPrice=" + that.miaoshaPrice + "&startDate=" + new Date()+
           "&stockCount="+that.stockCount+"&endDate="+that.endDate+"&goodsImg="+that.imgUrl;
      
              messageInfo({message: "抢购成功"});
               }
               else{
                  messageInfo({message: "抢购失败！"});
               }
               
            }
          );
        
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
