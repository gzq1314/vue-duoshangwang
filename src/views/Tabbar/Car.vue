<template>
  <div>
    <!-- 头部 -->
    <div class="tb-header">
      <div class="tb-back" v-on:click="back">
        <van-icon name="arrow-left" size="19px" />
      </div>
      <h2>购物车</h2>
      <div class="tb-back1">
        <van-icon name="shopping-cart-o" size="19px" />
      </div>
    </div>
    <!-- 购物车商家 -->
    <div class="gwt">
      <div class="gw-contop">
        <p class="df-ct-ls">米兰圣</p>
      </div>
      <!-- 购物车信息 -->
      <div class="gw-contain" v-for="(itme,index) in shoplist" :key="index">
        <div class="df-containtg">
          <a href="/goods-3329783.html"><img class="gw-img" :src="itme.img" style="display: block;"></a>
          <div class="gw-cn-r">
            <p class="df-cn-rfg" v-text="itme.title"></p>
            <a href="javascript:;" class="df-ct-rg" data-id="895015" supplier-id="272937"></a>
            <p class="df-cn-rs">浅蓝色 S</p>
            <p class="gw-cn" v-text="itme.price"></p>
            <numbox></numbox>
          </div>
        </div>
      </div>
      <!-- 结算区域 -->
      <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>
<script>
import numbox from "../../components/Shopcar-numbox.vue";
export default {
  data() {
    return {
      goodslist: {}, //购物车的数据
      shoplist: []
    };
  },
  created() {
    this.shoplist = this.$store.state.car;
  },
  methods: {
    onSubmit() {},
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    numbox
  }
};
</script>
<style scoped>
.tb-header {
  background: #f9f9f9;
  border-bottom: 1px solid #e5e5e5;
  height: 38px;
  position: relative;
  z-index: 9999;
}
.tb-back {
  position: absolute;
  top: 11px;
  left: 11px;
  width: 40px;
  height: 15px;
}
.tb-back1 {
  position: absolute;
  top: 9px;
  right: 5px;
  width: 40px;
  height: 15px;
}
.tb-back img {
  border: 0 none;
  vertical-align: top;
}
.tb-header h2 {
  line-height: 38px;
  text-align: center;
  color: #fd7489;
  font-size: 15px;
}
.gwt {
  background: #f0f0f0;
  padding: 10px 0;
}
.gw-contop {
  background: #fff;
  line-height: 38px;
  height: 38px;
  color: #74777a;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.df-ct-ls {
  text-indent: 9px;
  float: left;
  width: 100%;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  font-size: 16px;
}
.gw-contain {
  background: #fff;
}
.df-containtg {
  width: 92%;
  height: 100px;
  margin: 0px auto;
  padding: 3px 0;
  font-size: 10px;
  border-bottom: 1px solid #eaeaea;
}
.gw-img {
  float: left;
  margin: 10px 10px 0 0;
  display: inline-block;
  width: 66px;
  border: 1px solid #e5e5e5;
}
.gw-cn-r {
  margin: 10px 0 0 66px;
  line-height: 17px;
  color: #b2b2b2;
  position: relative;
}
.df-cn-rfg {
  margin: 0 17px 2px 0;
  height: 32px;
  overflow: hidden;
}
.df-ct-rg {
  float: right;
  width: 14px;
  height: 17px;
  background: url(http://m.ecduo.cn/static/images/wap/mem_73.jpg) no-repeat left
    center;
  background-size: 14px 17px;
  position: absolute;
  top: 5px;
  right: 0px;
}
.df-cn-rs {
  font-size: 10px;
  line-height: 15px;
  height: 15px;
}
.gw-cn {
  color: #ff1e4c;
  margin-top: 5px;
  display: inline-block;
  float: left;
  width: 25%;
}
.van-submit-bar {
  position: relative;
  width: 100%;
  background-color: #fff;
  user-select: none;
}
.van-stepper {
  user-select: none;
  position: absolute;
  bottom: -9%;
  left: 29%;
}
</style>
