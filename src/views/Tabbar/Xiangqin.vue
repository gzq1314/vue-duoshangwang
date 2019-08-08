<template>
    <div>
        <!-- 头部 -->
        <div class="stzg_header flexDirWarp">
            <a class="back flexCenter" v-on:click="back">
                <van-icon name="arrow-left" size="1.5em" color="#fff" />
            </a>
            <a class="search flex-1 flexDirWarp" href="/new_index.php?route=wap&amp;app=search">
                <div class="search_icon flexCenter">
                    <van-icon name="search" size="1.4em" />
                </div>
                <p class="search_text flex-1">请输入商品号,商品名称,商品关键字</p>
            </a>
            <div class="r_view"></div>
        </div>
        <div style="height:37.5px;"></div>
        <!-- 轮播图片 -->
        <ul>
            <li>
                <img class="img-responsive" src=" http://pic.ecduo.cn/Uploads/Picture/2019-05/5cd40aafee97c.jpg" alt="实体专供-女装爆款">
            </li>
        </ul>
        <!-- 选项卡 -->
        <van-tabs v-model="active" line-height="2px" title-active-color="#ff5459">
            <van-tab title="每周上新">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-07/5d35665f7028f.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">波点阔腿裤女高腰垂感夏雪纺高腰束脚花苞裤...</p>
                                <span class="virtual_seles">月销856件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        31.90
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="T恤">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/data/files/Uploads/picture/2019-07/201907261831494702.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">2019春新款一件代发韩版女装宽松甜美风娃娃衫女士衬衫上衣</p>
                                <span class="virtual_seles">月销283件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        26.30
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="连衣裙">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d0781899d168.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">花溪 少女复古玫瑰刺绣大方领露背纱裙连衣裙 </p>
                                <span class="virtual_seles">月销283件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        26.30
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="衬衣/雪纺">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-05/5cd9090c23f51.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">达奢 雪纺时尚衬衫</p>
                                <span class="virtual_seles">月销283件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        26.30
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="牛仔裤">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-05/5cd39c46a0d0e.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">普瑞施 个性牛仔短裤 </p>
                                <span class="virtual_seles">月销283件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        26.30
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="半身裙">
                <div class="product">
                    <ul class="clearfix">
                        <li>
                            <a href="###"><img class="default_image" src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-06/5d16e782ddb34.jpg" alt=""></a>
                            <div class="text">
                                <p class="goods_name">韩衣兔简约清爽运动百搭背心chic背心半身裙套装</p>
                                <span class="virtual_seles">月销283件</span>
                                <div class="bottom">
                                    <p class="fenxiao_price">
                                        <span style="font-size:12px">￥</span>
                                        26.30
                                    </p>
                                    <span class="nowbuy">下单</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.stzg_header {
  height: 37.5px;
  background: #f01d0d;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 640px;
  z-index: 9999;
}
.flexDirWarp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.stzg_header .back {
  height: 37.5px;
  width: 37.5px;
}
img {
  max-width: 100%;
  display: block;
}
.stzg_header .search {
  background: rgba(255, 255, 255, 0.4);
  height: 30px;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
}
.stzg_header .r_view {
  height: 37.5px;
  width: 37.5px;
}
.stzg_header .search_icon {
  width: 30px;
  height: 30px;
}
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-1 {
  flex: 1;
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.product ul {
  width: 100%;
}
.clearfix::before,
.clearfix::after {
  content: "";
  height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.product {
  width: 100%;
  margin-bottom: 5%;
}
.product ul li {
  float: left;
  width: 49%;
  margin-bottom: 2%;
  background: #fff;
}
.product ul li .text {
  padding: 4px;
}
.product ul li .goods_name {
  line-height: 18px;
  height: 37.5px;
  overflow: hidden;
  font-size: 14px;
  color: #000;
}
.product ul li .virtual_seles {
  padding: 7px 0;
  display: block;
}
.product ul li .bottom {
  overflow: hidden;
}
.product ul li .fenxiao_price {
  font-size: 15px;
  color: #000;
  float: left;
  line-height: 22.5px;
}
.product ul li .nowbuy {
  line-height: 22.5px;
  height: 22.5px;
  text-align: center;
  padding: 0 18px 0 9px;
  float: right;
  color: #fff;
  border-radius: 13px;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(252, 88, 22) 0%,
    rgb(255, 44, 50) 100%
  );
}
.product ul li .nowbuy:before {
  content: "";
  height: 6px;
  width: 6px;
  border-radius: 18px;
  position: absolute;
  top: 50%;
  right: 6px;
  background: #fff;
  margin-top: -3px;
}
</style>
