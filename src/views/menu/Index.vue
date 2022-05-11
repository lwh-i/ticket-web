<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  min-width: 1000px;
}

.layout-logo {
  float: left;
}

.layout-search {
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  left: 30px;
}

.layout-title {
  margin-left: 30px;
  height: inherit;
  float: left;
}

.layout-title .home-text{
  color: rebeccapurple;
  font-weight: bold;
}

.layout-title .home-text:hover{
  color: #2d8cf0;
}

.menu-layout {
  height:65px;
  width:100%;
}
.layout-nav {
  height: inherit;
  float: right;
}

.layout-footer-center {
  text-align: center;
  background: #fff;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

.avatar-badge-wrapper {
  position: relative;
  float: right;
  cursor: pointer;
}

.avatar-badge-wrapper .msg-num {
  position: absolute;
  top: 9px;
  right: -12px;
  color: #fff;
  background-color: #2db7f5;
  border-radius: 50%;
  padding: 2px 5px;
  line-height: 1;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header style="position: absolute;width: 100%;background:#fff;padding:0 0;z-index: 1000; ">
              <Menu mode="horizontal" theme="light" class="menu-layout" active-name="interest"
                >
                  <div style="width: 95%;margin: 0 auto">
                      <div class="layout-logo">
                          <a>
                              <img src="../../images/logo.jpg" style="width: 50px;height: 50px;" align="absmiddle" />
                          </a>
                      </div>
                      <div class="layout-title">
                          <MenuItem name="interest">
                            <span class="home-text">
                              主页
                            </span>
                          </MenuItem>
                          <MenuItem name="article">
                            <span class="home-text">
                              文章
                            </span>
                          </MenuItem>
                      </div>
                    
              

                  </div>
              </Menu>
            </Header>
            <Content :style="{margin: '80px 0 40px 0'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">
                <div>
                    <a href="https://github.com/smallsnail-wh" target="_blank">
                        <Icon style="color: rebeccapurple;" size="40" type="logo-github"></Icon>
                    </a>
                </div>
                <p>2018-2020 &copy; smallsail-wh</p>
            </Footer>
        </Layout>

<!-- 商品列表 -->
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>


    </div>
</template>
<script>
export default {
  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
