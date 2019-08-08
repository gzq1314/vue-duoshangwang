<template>
  <div>
    <!-- 头部 -->
    <div class="member_header">
      <div class="set-warpper">
        <a class="" href="###">
          <van-icon name="setting-o" size="23px" color="#fff" />
        </a>
      </div>
      <div class="user-warpper go_login">
        <div class="pic">
          <img src="http://m.ecduo.cn/static/images/newwap/yc_04.png">
        </div>
        <a href="/login.html" class="user-name">登录/注册</a>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="member_content">
      <!-- 订单 -->
      <div class="goOrd">
        <a class="warpper">
          <p class="left-text">我的订单</p>
          <p class="right-text look_all">查看全部&gt;</p>
        </a>
      </div>
      <div class="ordCate-warpper">
        <ul class="flex">
          <li class="ordCate-item flex-1" v-for="(itme,index) in gouwu" :key="index">
            <a href="/orders_11.html" class="warpper">
              <span class="pic"><img :src="itme.img"></span>
              <p class="text" v-text="itme.title"></p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 宫格 -->
      <div class="wdCate-warpper">
        <ul class="">
          <li class="ordCate-item  borderBottom ">
            <a href="" class="warpper ">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b69aa8858.png"></span>
              <p class="text">所有订单</p>
            </a>
          </li>
          <li class="ordCate-item  borderBottom ">
            <a href="/collect_goods.html" class="warpper ">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b7f07f044.png"></span>
              <p class="text">收藏</p>
            </a>
          </li>
          <li class="ordCate-item  borderBottom ">
            <a href="/new_index.php?route=newweidian&amp;app=default" class="warpper ">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b6a752924.png"></span>
              <p class="text">开微店</p>
            </a>
          </li>
          <li class="ordCate-item  borderBottom ">
            <a href="/new_index.php?route=wap&amp;app=order&amp;act=address_list&amp;is_manager=1" class="warpper ">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b689cdf64.png"></span>
              <p class="text">收货地址</p>
            </a>
          </li>
          <li class="ordCate-item  borderBottom ">
            <a href="#" class="warpper cart-add">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b8005c207.png"></span>
              <p class="text">联系客服</p>
            </a>
          </li>
          <li class="ordCate-item  borderBottom ">
            <a href="/new_index.php?route=wap&amp;app=workman&amp;act=chat_session" class="warpper ">
              <span class="pic"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b86667b29b18.png"></span>
              <p class="text">客服消息</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="goods-warpper">
        <div class="tip-wapper">
          <p class="text">看过的款</p>
        </div>
        <div class="no-goods">
          <img class="noGoodsPic" src="http://m.ecduo.cn/static/images/newwap/yc_19.png">
          <div class="warpper">
            <a class="goGood">您还没有浏览过商品哦~快去逛逛</a>
          </div>
          <div class="warpper">
            <a class="goHome" href="/">去首页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //小图片
      gouwu: [
        {
          title: "待付款",
          img:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b86309abb.png"
        },
        {
          title: "待发货",
          img:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b88c2021d.png"
        },
        {
          title: "已发货",
          img:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b8740f515.png"
        },
        {
          title: "已完成",
          img:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b880de843.png"
        },
        {
          title: "退换货",
          img:
            "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d01b897a1cd4.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: gray;
  outline: none;
}
.member_header {
  background: url(http://m.ecduo.cn/static/images/newwap/yc_05.jpg) no-repeat;
  background-size: 100% auto;
  padding: 10px 10px 30px;
}
.member_header .set-warpper {
  text-align: right;
}
.member_header .user-warpper {
  overflow: hidden;
}
.member_header .user-warpper .pic {
  float: left;
  width: 66px;
  height: 66px;
  margin-right: 20px;
  overflow: hidden;
}
.member_header .user-warpper .user-name {
  line-height: 35px;
  color: #fff;
  font-size: 15px;
}
img {
  max-width: 100%;
  display: block;
}
.goOrd .warpper {
  overflow: hidden;
  padding: 12px;
  display: block;
  background: #fff;
}
.goOrd .warpper .left-text {
  float: left;
  color: #404040;
  font-size: 14px;
  line-height: 19px;
}
.goOrd .warpper .right-text {
  float: right;
  color: #bcbdbf;
  font-size: 12px;
  line-height: 19px;
}
.ordCate-warpper {
  background: #fff;
  margin-top: 1px;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
  position: relative;
}
.ordCate-warpper ul .ordCate-item .warpper {
  display: block;
  padding: 15px 0;
}
.ordCate-warpper ul .ordCate-item .pic {
  width: 18.75px;
  display: block;
  margin: 0 auto;
}
.ordCate-warpper ul .ordCate-item .text {
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
.wdCate-warpper {
  background: #fff;
  margin-top: 8px;
}
.wdCate-warpper ul {
  overflow: hidden;
}
.wdCate-warpper ul .ordCate-item {
  float: left;
  width: 25%;
}
.borderBottom {
  border-bottom: 1px solid rgb(235, 235, 235);
}
.wdCate-warpper ul .ordCate-item .warpper {
  display: block;
  padding: 15px 0;
}
.wdCate-warpper ul .ordCate-item .pic {
  width: 33px;
  display: block;
  margin: 0 auto;
}
.wdCate-warpper ul .ordCate-item .text {
  font-size: 13px;
  text-align: center;
  margin-top: 6px;
}
.member_content .goods-warpper .tip-wapper {
  text-align: center;
  padding: 25px;
}
.member_content .goods-warpper .tip-wapper .text {
  display: inline-block;
  line-height: 19px;
  padding-left: 25px;
  background: url(http://m.ecduo.cn/static/images/newwap/yc_18.png) no-repeat
    left center;
  background-size: auto 100%;
  font-size: 14px;
  letter-spacing: 6px;
}
.no-goods {
  text-align: center;
}
.no-goods .noGoodsPic {
  display: inline-block;
  width: 18.6%;
}
.no-goods .warpper {
  font-size: 14px;
}
.no-goods .warpper .goGood {
  color: #757575;
  line-height: 48.8px;
}
.no-goods .warpper .goHome {
  border: 1px solid #8f8f8f;
  color: #8f8f8f;
  text-align: center;
  padding: 0 37px;
  font-size: 14px;
  display: inline-block;
  line-height: 35px;
  border-radius: 8px;
}
</style>
