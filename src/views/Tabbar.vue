<template>
  <div>
    <!-- 把路由组件缓存到内存里面 -->
    <router-view></router-view>
    <!-- 标签栏 -->
    <van-tabbar v-model="active" active-color="#f01d0d"  :replace="true">
      <van-tabbar-item icon="wap-home" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" to="fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-circle-o" to="car">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="geren">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0
    };
  }
};
</script>
