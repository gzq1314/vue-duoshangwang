<template>
  <div style="background:#fff">
    <!-- 头部 -->
    <div class="box">
      <div class="ListSearch">
        <form id="sear_form" action="/">
          <input id="search_val" type="search" placeholder="请输入搜索词" name="mobile_keyword" value="">
          <a href="###" class="messages_css"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-04/5cb02b8168a49.png?x-oss-process=image/resize,m_fill,h_30,w_30"></a>
        </form>
      </div>
    </div>
    <!-- 选项卡 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="(itme,index) in biaoti" :key="itme.id" v-text="itme" :class="{active:num==index}" @click="getNum(index)" />
    </van-sidebar>
    <div class="ListAboutRight">
      <div class="tabdiv" v-for="(itme,index) in shopList" :key="index" v-show="index==num">
        <dl class="catedl clear" v-for="(t,value) in itme.data" :key="value">
          <dt v-text="t.title"></dt>
          <dd v-for="(imgs,value) in t.list" :key="value">
            <a href="###">
              <router-link class="pic-wrap" :to="`/list`">
                <img :src="imgs.img">
              </router-link>
              <span class="list-tt" v-text="imgs.nei"></span>
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      activeKey: 0,
      //选项卡
      biaoti: [
        "时尚女装",
        "箱包配饰",
        "精品男装",
        "美容美妆",
        "母婴童装",
        "性感内衣",
        "数码电器",
        "食品零食",
        "家居日用",
        "饰品配件"
      ],
      //选项卡数据
      shopList: []
    };
  },
  async created() {
    // 首次加载
    this.getshopLsit();
  },
  methods: {
    getNum(index) {
      this.num = index;
    },
    async getshopLsit() {
      let shopList = await this.$axios.get(
        "https://www.easy-mock.com/mock/5d40257feda3776c6f9bf2da/example/shopsList"
      );
      // 拿到相同的数据赋值
      this.shopList = shopList.data.data;
    }
  }
};
</script>

<style scoped>
.box {
  height: 39px;
  background: #fff;
}
.ListSearch {
  height: 39px;
  background-color: #fff;
  position: fixed;
  top: 0px;
  z-index: 999;
  max-width: 640px;
  width: 90%;
}
#sear_form {
  position: relative;
}
.ListSearch form {
  padding: 0 10px;
  display: -webkit-box;
  box-sizing: border-box;
}
.ListSearch form input {
  -webkit-box-flex: 1;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  height: 30px;
  padding-left: 33px;
  box-sizing: border-box;
  border-radius: 41px;
  background-color: #fff;
  font-size: 14px;
  line-height: 30px;
  display: block;
  background: url(http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-04/5cb02dd275ffb.png)
    no-repeat 10px 4px;
  background-size: 20px;
}
.ListSearch form a {
  color: #007aff;
  font-size: 14px;
  position: absolute;
  display: block;
  width: 30px;
  z-index: 9999999999;
  right: -30px;
  top: 6px;
}
.van-sidebar-item {
  display: block;
  box-sizing: border-box;
  padding: 12px;
  color: #7d7e80;
  font-size: 14px;
  line-height: 1.4;
  word-break: break-all;
  background-color: #f8f8f8;
  -webkit-user-select: none;
  user-select: none;
  border-bottom: 1px solid #ebebeb;
}
.van-sidebar-item--select {
  font-weight: 500;
  color: #fe4e20;
  background-color: #fff;
}
.ListAboutRight {
  /* padding-right: 5px; */
  display: inline-block;
  background: #fff;
  width: 75%;
}
.ListAboutRight .tabdiv {
  padding-bottom: 20px;
}
.ListAboutRight .catedl {
  display: block;
  clear: both;
  overflow: hidden;
}
.ListAboutRight dt {
  margin-left: 3%;
  margin-top: 10px;
  font-size: 13px;
  width: 80%;
  text-align: left;
}
.ListAboutRight dd {
  float: left;
  width: 30%;
  margin: 10px 0 0 3%;
  background: #fff;
}
.ListAboutRight dd a {
  width: 100%;
  display: block;
  text-decoration: none;
  color: #333;
}
.ListAboutRight dd .pic-wrap {
  width: 100%;
  display: block;
}
.ListAboutRight .list-tt {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #333;
  width: 100%;
  overflow: hidden;
  height: 20px;
}
.van-sidebar {
  display: inline-block;
  width: 24%;
  float: left;
  border-right: 1px solid #e6e6e6;
}
.ListAboutRight dd img {
  width: 100%;
}
</style>
