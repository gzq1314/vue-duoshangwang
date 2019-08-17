<template>
  <div>
    <!-- 头部 -->
    <div class="box" v-on:click="back">
      <van-icon name="arrow-left" size="22px" />
    </div>
    <!-- 选项卡 -->
    <div class="nav">
      <van-tabs v-model="active" title-active-color="red" line-height="2.5px">
        <van-tab title="商品" id="btn"></van-tab>
        <van-tab title="素材" id="nav"></van-tab>
      </van-tabs>
    </div>
    <div class="box1" @click="shopcar">
      <van-icon name="shopping-cart-o" size="25px" />
    </div>
    <!-- 商品图片 -->
    <div class="tupian">
      <img :src="photoinfo.img" alt="">
    </div>
    <!-- 商品详情 -->
    <div class="zc-top">
      <div class="zc-one">
        <div class="left-warpper">
          <p class="title" v-text="photoinfo.title"></p>
          <p class="oriPrice" id="fenxiao_price_copy">
            <span class="value_bot" style="">
              <b style="font-size:16px;" v-text="photoinfo.price"></b>
            </span>
          </p>
          <div class="warpper">
            <span class="textLeft">运费 6.00</span>
            <span class="textCenter" v-text="photoinfo.num"></span>
            <span class="textRight">库存: 800件</span>
          </div>
        </div>
        <div class="right-warpper">
          <a class="zm-sell" href="#">转卖</a>
          <div class="like-warpper">
            <a href="javascript:;" item="2043877" data-id="3329783">
              <van-icon name="like-o" size="22px" color="gray" />
              <p class="text liketext">喜欢</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="zc-two">
      <div class="cur-warpper">
        <a class="warpper" href="###">
          <p class="left-text">产品参数</p>
          <p class="right-text"> &gt;</p>
        </a>
      </div>
      <div class="cur-warpper">
        <a class="warpper" href="###">
          <p class="left-text">
            <span class="yc-text">已选</span>
            <span class="gg-text">浅蓝色</span>
            <span class="num-text">1件</span>
          </p>
          <p class="right-text">
            <van-icon name="ellipsis" size="22px" color="gray" />
          </p>
        </a>
      </div>
      <!-- 商家信息 -->
      <div class="cur-warpper">
        <div class="warpper">
          <p class="left-text">
            <span>
              <van-icon name="shop-o" size="22px" />
              <b>米兰圣</b>
            </span>
          </p>
          <p class="right-text">
            <span class="dp-text">店铺评分</span>
            <span class="num">4.8</span>
            <span class="pf-text">高</span>
          </p>
        </div>
        <div class="warpper">
          <p class="left-text">
            <span class="allGoodText">所有商品 </span>
            <span class="allGoodNum"> 122</span>
          </p>
          <p class="right-text">
            <a class="gotoHome" href="###">进店看看</a>
          </p>
        </div>
      </div>
      <!-- 商品推荐 -->
      <div class="zc-thr">
        <p class="title">为你推荐</p>
        <ul class="goodslist">
          <li class="item">
            <a href="###"><img src=" http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-01/20190122064415319.jpg" alt=""></a>
            <div class="txt">
              <span class="title">米兰圣 2019新款时尚半身裙春季牛仔裙不规则裙 O58</span>
              <p class="price">¥72.00</p>
              <p class="num">已团576件</p>
            </div>
          </li>
          <li class="item">
            <a href="###"><img src=" http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-01/20190122064337100.jpg" alt=""></a>
            <div class="txt">
              <span class="title">米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O18</span>
              <p class="price">¥79.00</p>
              <p class="num">已团676件</p>
            </div>
          </li>
          <li class="item">
            <a href="###"><img src=" http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-01/20190122064355430.jpg" alt=""></a>
            <div class="txt">
              <span class="title">米兰圣 2019新款时尚半身裙春季牛仔裙 O31</span>
              <p class="price">¥69.00</p>
              <p class="num">已团748件</p>
            </div>
          </li>
          <li class="item">
            <a href="###"><img src=" http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-02/20190219072110246.jpg" alt=""></a>
            <div class="txt">
              <span class="title">米兰圣 新款时尚个性开衩半身裙 O69</span>
              <p class="price">¥77.00</p>
              <p class="num">已团422件</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 商品详细图片 -->
      <div class="zc-four">
        <img src="http://m.ecduo.cn/static/images/newwap/yc_26.jpg">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011624989.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011625564.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011626470.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011627686.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011628789.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011629122.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011629427.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011630726.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011631502.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011631167.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011632355.png">
        <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011632510.png">
      </div>
      <!-- 购物车 -->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即下单" @click="onClickButton" />
      </van-goods-action>
      <van-sku v-model="show" :sku="sku" :goods="goods" :quota="0" :quota-used="quotaUsed" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 存下当前商品的id
      id: this.$route.params.id,
      // 商品数据
      photoinfo: {},
      quotaUsed: 1,
      active: 0,
      //购物车
      show: false,
      sku: {
        // 数据结构见下方文档
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl:
                  "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011635342.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "黄色",
                imgUrl:
                  "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-01/20190122064355430.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 4800, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "50.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture:
          "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-03/20190329011635342.jpg"
      },
      messageConfig: {
        // 数据结构见下方文档
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        }
      }
    };
  },
  async created() {
    // 首次加载
    this.getPhotoinfo();
  },
  methods: {
    async getPhotoinfo() {
      //根据列表页的id获取想要的数据
      let photoinfo = await this.$axios.get(
        "https://www.easy-mock.com/mock/5d40257feda3776c6f9bf2da/example/goodList/"
      );
      // 拿到相同的数据赋值
      this.photoinfo = photoinfo.data.data[this.id];
    },
    //购物车点击
    onClickIcon() {
      // Toast("点击图标");
      alert("暂时还不能跳转");
    },
    onClickButton() {
      //显示购物车
      this.show = true;
    },
    back() {
      this.$router.go(-1);
    },
    onBuyClicked() {},
    // 购物按钮
    onAddCartClicked() {
      //拼接出一个商品数据
      var potoinfo = {
        id: this.id,
        img: this.photoinfo.img,
        title: this.photoinfo.title,
        count: this.quotaUsed,
        price: this.photoinfo.price,
        selected: true
      };

      //调用store中的mutations来将商品加入购物车
      this.$store.commit("addToCar", potoinfo);
      alert("已添加到购物车");
    },
    shopcar() {
      this.$router.push({
        name: "car"
      });
    }
  }
};
</script>
<style scoped>
.box {
  position: absolute;
  top: 13px;
  left: 13px;
  z-index: 999;
}
.box1 {
  position: absolute;
  top: 9px;
  right: 13px;
  z-index: 999;
}
.van-tabs {
  width: 50%;
  margin: auto;
}
.nav {
  background: #fff;
}
.tupian {
  width: 375px;
  height: 375px;
}
.tupian img {
  max-width: 100%;
}
.zc-one {
  background: #fff;
  padding: 9px;
  overflow: hidden;
}
.zc-one .left-warpper {
  width: 72%;
  float: left;
}
.zc-one .right-warpper {
  text-align: center;
  width: 21%;
  float: right;
}
.zc-one .left-warpper .title {
  font-size: 16px;
  line-height: 22.5px;
  height: 45px;
  overflow: hidden;
  margin: 10px 0 0;
}
.zc-one .left-warpper .oriPrice {
  color: #df2027;
  font-size: 18px;
  line-height: 15.5px;
  margin-top: 15px;
}
.value_bot {
  white-space: nowrap;
  display: block;
  font-size: 16px;
  line-height: 19px;
}
.zc-one .left-warpper .warpper {
  display: flex;
}
.zc-one .left-warpper .warpper span {
  color: #828282;
  flex: 1;
  justify-content: space-between;
  line-height: 27.5px;
  font-size: 12px;
}
.textLeft {
  text-align: left;
}
.textCenter {
  text-align: center;
}
.textRight {
  text-align: right;
}
.zc-one .right-warpper .zm-sell {
  background: #df2027;
  color: #fff;
  padding: 0 22px;
  line-height: 30px;
  display: inline-block;
  font-size: 13px;
  border-radius: 6px;
  margin: 6px 0 20px;
}
.zc-one .right-warpper .like-warpper .text {
  line-height: 5px;
  font-size: 12px;
  margin-top: 8px;
  color: gray;
}
.zc-two .cur-warpper {
  margin-top: 10px;
}
.cur-warpper .warpper {
  overflow: hidden;
  padding: 9px;
  display: block;
  background: #fff;
  margin-bottom: 1px;
}
.cur-warpper .warpper .left-text {
  float: left;
  color: #404040;
  font-size: 15px;
}
.cur-warpper .warpper .right-text {
  float: right;
  color: #bcbdbf;
  font-size: 15px;
}
.zc-two .cur-warpper .warpper .left-text .yc-text {
  color: #acacac;
}
.zc-two .cur-warpper .warpper .left-text .gg-text {
  margin: 0 20px;
}
.zc-two .cur-warpper .right-text .num {
  color: #df2027;
  margin: 0 5px 0 5px;
}
.zc-two .cur-warpper .right-text .pf-text {
  color: #fff;
  background: #df2027;
  padding: 3px;
  border-radius: 6px;
}
.cur-warpper .warpper .right-text {
  float: right;
  color: #bcbdbf;
  font-size: 12px;
  line-height: 18px;
}
.cur-warpper .warpper .left-text span {
  position: relative;
}
.cur-warpper .warpper .left-text b {
  position: absolute;
  top: -4px;
  left: 30px;
  width: 50px;
}
.zc-two .cur-warpper .left-text .allGoodText {
  line-height: 26.8px;
  color: #828282;
}
.zc-two .cur-warpper .right-text .gotoHome {
  border: 1px solid #df2027;
  color: #df2027;
  border-radius: 6px;
  line-height: 26.8px;
  padding: 0 19px;
  display: inline-block;
}
.zc-thr {
  margin-top: 0.32rem;
  padding: 16px 10px;
  background: #fff;
}
.zc-thr .title {
  font-size: 15px;
  color: #333;
  margin-bottom: 9px;
}
.zc-thr .goodslist {
  white-space: nowrap;
  overflow-x: scroll;
}
.zc-thr .goodslist .item {
  width: 32%;
  border: 1px solid #efefef;
  display: inline-block;
  vertical-align: top;
  margin-right: 3%;
  box-sizing: border-box;
}
#picList li {
  overflow-y: scroll;
}
img {
  max-width: 100%;
  display: block;
}
.zc-thr .goodslist .txt {
  padding: 4px;
  overflow: hidden;
}
.zc-thr .goodslist .txt .title {
  line-height: 16px;
  font-size: 11px;
  overflow: hidden;
  height: 30px;
  display: block;
  margin-bottom: 6px;
  white-space: normal;
}
.zc-thr .goodslist .txt .price {
  color: #df2027;
  font-size: 13px;
  float: left;
}
.zc-thr .goodslist .txt .num {
  color: #999;
  font-size: 10px;
  float: right;
  margin-top: 2px;
}
.zc-four img {
  width: 100%;
}
</style>
