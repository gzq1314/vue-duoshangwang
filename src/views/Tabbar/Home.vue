<template>
  <div>
    <!-- 头部 -->
    <div class="ecduo_header flex" style="top: 0px;" id="header">
      <a href="###">
        <h1><img class="ecduo_logo" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bc198f4ce5cf.png" alt=""></h1>
      </a>
      <a class="search_view flex-1" href="###">
        <img class="search_img" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bc198f747a3d.jpg" alt="">
      </a>
    </div>
    <!-- 导航栏 -->
    <van-tabbar :fixed="false">
      <van-tabbar-item :to="`/list`" v-for="(n,index) in title" :key="index" v-text="n"></van-tabbar-item>
    </van-tabbar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <div class="special">
      <router-link class="special_item" href="###" v-for="(item,index) in img" :key="index" :to="`/xiangqin`">
        <img class="pic" :src="item" alt="">
      </router-link>
    </div>
    <!-- 标题 -->
    <div class="zhibo_title">
      <h2 v-text="h2"></h2>
      <a class="more" href="###" v-text="a"></a>
    </div>
    <div id="zt_list" class="zt_list">
      <a class="zt_item" href="###" v-for="(k,index) in randen" :key="index">
        <img style="width:100%;" :src="k" alt="">
      </a>
    </div>
    <!-- 商品列表 -->
    <List />
  </div>
</template>

<script>
import List from "../../components/list-box.vue";

export default {
  data() {
    return {
      active: 0,
      h2: "精选专题",
      a: "更多",
      //底部按钮数据
      footer: [
        {
          title: "首页",
          icon:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bc198f3b1461.png"
        }
      ],
      //导航数据
      title: [
        "推荐",
        "女装",
        "男装",
        "鞋包",
        "母婴",
        "饰品",
        "美妆",
        "内衣",
        "家电",
        "家居",
        "食品"
      ],
      //轮播图
      images: [
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-02/5c6e1c5aa9af1.jpg",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-04/5ca57098190e7.jpg",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d09f574e2685.jpg"
      ],
      img: [
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfeb9164169.png",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfebb393a81.png",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfec1ad5f38.png",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/5c9f421f79745.png",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfedd95871e.png"
      ],
      randen: [
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/5c8604687f5db.jpg",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/5c8604cdd1cb3.jpg",
        "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/5c8604e7b8abb.jpg"
      ]
    };
  },
  components: {
    List
  }
};
</script>
<style scoped>
div,
ul,
ol,
h1,
h2,
h3,
button,
input,
a,
select,
dl,
dt,
dd,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
button,
input {
  font-weight: normal;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: gray;
  outline: none;
  display: block;
}

li {
  display: block;
}

ul,
ol,
dl,
li,
dt,
dd {
  list-style-type: none;
  padding-left: 0;
}

img {
  max-width: 100%;
  display: block;
}

body {
  background: #fff;
  max-width: 640px;
  margin: 0 auto;
}

input {
  border: none;
}
.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  font-size: 0;
  line-height: 0;
  height: 0;
}

.clearfix {
  *zoom: 1;
}

.xd_title {
  text-align: center;
  font-size: 0.42rem;
  line-height: 1.14rem;
  height: 1.14rem;
  background: #fff;
}

.xd_left {
  float: left;
}

.back .backImg {
  height: 100%;
}

.xd_right {
  float: right;
}

.TextCent {
  text-align: center;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.ecduo_header {
  background: #f01d0d;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  max-width: 640px;
  box-sizing: border-box;
  z-index: 1;
}

.ecduo_header .ecduo_logo {
  height: 18px;
  margin-right: 6px;
  margin-top: 6px;
}

.search_img {
  height: 30px;
  width: 100%;
}
.van-hairline--top-bottom {
  position: fixed;
  top: 52px;
  height: 30px;
}
.van-tabbar-item {
  font-size: 16px;
  width: 50px;
  height: 100%;
  color: black;
}
.van-tabbar {
  width: auto;
}
.van-swipe {
  width: 100%;
  height: 200px;
  margin-top: 83px;
}
.van-grid {
  background: #eff4ee;
}
.zhibo_title {
  overflow: hidden;
  line-height: 33px;
  padding: 0 10px;
  background: rgb(235, 235, 235);
}
.zhibo_title h2 {
  float: left;
  font-size: 16px;
  font-weight: bold;
}
.zhibo_title .more {
  font-size: 12px;
  float: right;
}
.zt_list .zt_item {
  margin-bottom: 10px;
}

.special {
  background: #eff4ee;
  padding: 0 2% 3%;
}
.special .special_item {
  display: inline-block;
  width: 14.5%;
  margin-right: 6.7%;
  margin-top: 3%;
  text-decoration: none;
  cursor: pointer;
  color: gray;
  outline: none;
}
.special a:nth-child(5) {
  margin-right: 0;
}
</style>
