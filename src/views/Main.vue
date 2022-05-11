<template>

<div>
<ticketHeader/>


  <div class="main" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll; " >

<!-- 走马灯 -->
 <el-carousel class="zouma" indicator-position="outside">
    <el-carousel-item class="lb" v-for="item in lbimage" :key="item">
      <img class="lbimg" :src="item.url"/>
    </el-carousel-item>
  </el-carousel>


<!-- 中部 -->
  <div class="mid">
 <el-table
    :data="goodsList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="车票名称"
      prop="goodsName">
    </el-table-column>
  
     <el-table-column
      label="车票图片"
      >
     <template slot-scope="scope">  
        <img class="image" :src="scope.row.goodsImg" />
        <span style="margin-left: 10px"></span>
      </template>
     
    </el-table-column>
       <el-table-column
      label="车票价格"
     >  <template slot-scope="scope">  
        <p>{{scope.row.goodsPrice}}元</p>
      </template>
    </el-table-column>
       <el-table-column
      label="秒杀价格"
     >

      <template slot-scope="scope">  
        <p>{{scope.row.miaoshaPrice}}元</p>
      </template>
    </el-table-column>
    <el-table-column
      label="秒杀时间"
   ><template slot-scope="scope">  
        <p>{{scope.row.startDate}}</p>
      </template>
      
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleBuy(scope.$index, scope.row)">购买</el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>

  </div>
<ticketFooter/>
</div>


</template>
<script>
import ticketHeader from '../component/Header.vue';
import ticketFooter from '../component/Footer.vue';
import { doSeckill, listMenu } from '../api/goods/goodsApi';
export default {
  components: {ticketHeader,ticketFooter},
  props: [],
  data() {
    return {
      lbimage:[
        { url: require("../views/images/lb8.jpeg") },
        { url: require("../views/images/lb7.jpeg") },
        { url: require("../views/images/lb5.jpeg") },
      ],
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
      goodsList:[],
        search: ''
       
    }
  },
  computed: {},
  watch: {},
  created() { this.getList();},
  beforeCreate(){
   
  },
  mounted() {

     this.timeLineHeight = document.documentElement.clientHeight - 210;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 210;
    };


  },
  methods: {
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    },
    
    getList(){
          console.log("调用了")
          listMenu().then((res) => {
            let time;
                console.log("res="+res[0].startDate)
                for(let i=0; i<res.length;i++){
                    time= Date(parseInt(res[i].startDate) * 1000).toLocaleString().toLocaleString().replace(/:\d{1,2}$/,' ');
                  //  time= date('Y-m-d H:i:s',res[i].startDate);
                    time=this.timestampToTime(res[i].startDate)
                    res[i].startDate=time
                }
                console.log("time="+time)
               this.goodsList=res
            }
          );
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
      handleBuy(index, row) {
        console.log(index, row);
        

        window.location.href = "./detail?" + "goodsName=" + row.goodsName + "&goodsPrice=" + row.goodsPrice + "&miaoshaPrice=" + row.miaoshaPrice + "&startDate=" + row.startDate+
                    "&stockCount="+row.stockCount+"&endDate="+row.endDate+"&goodsImg="+row.goodsImg+"&goodsId="+row.id;
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
.image{
  height: 100px;
  width: 100px;
}
.lbimg{
  height: 800px;
  width: 100%;
}
.zouma{
  height: 500px;
  
}
.lb{
  margin-top: 0px;
  height: 500px;
}
</style>
