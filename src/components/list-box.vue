<template>
  <!-- 商品数据 -->
  <van-list style="margin-bottom:50px" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getShopList">
    <div class="new-searcha proseabg">
      <ul class="new-mu_l2w clearfix">
        <router-link class="new-mu_l2" v-for="(itme,index) in shopList" :key="index" :to="`/photoinfo/${index}`">
          <div class="prolibor">
            <span class="new-mu_tmb">
              <a href="###" class="new-mu_l2a">
                <img :src="itme.img">
              </a>
            </span>
            <span class="new-mu_l2cw">
              <b class="new-mu_l2h">
                <a href="###" class="new-mu_l2a" v-text="itme.title"></a>
              </b>
              <span class="new-mu_l2c new-p-re">
                <span class="new-txt" v-text="itme.price">
                </span>
                <span class="new-sale-icon">
                  <span class="new-add" v-text="itme.num"></span>
                </span>
              </span>
            </span>
          </div>
        </router-link>
      </ul>
    </div>
  </van-list>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      shopList: [] //商品数据
    };
  },
  async created() {
    // 首次加载
    this.getShopList();
    
  },
  methods: {
    async getShopList() {
      // 获取商店信息
      let poilist = await this.$axios.get(
        "https://www.easy-mock.com/mock/5d40257feda3776c6f9bf2da/example/goodList"
      );
      this.shopList = [...this.shopList, ...poilist.data.data];
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.shopList.length >= 40) {
        this.finished = true;
      }
    }
  }
};
</script>

<style scoped>
.new-searcha {
  padding: 0px 7px 0px;
}
.new-mu_l2w clearfix {
  zoom: 1;
  clear: both;
}
.new-searcha .new-mu_l2 {
  width: 50%;
  margin: 7px 0 0 0;
  padding: 0px 0px;
  display: inline-block;
  float: left;
}
.new-searcha .prolibor {
  clear: both;
  display: block;
  overflow: hidden;
  padding: 5px;
  margin: 0px 3px;
  border: 1px solid #e4e4e4;
  background: #fff;
  position: relative;
}
.new-searcha .new-mu_l2 .new-mu_tmb {
  height: 100%;
  width: 100%;
  text-align: center;
  clear: both;
  float: left;
  margin-bottom: 5px;
}
.new-searcha .new-mu_l2 .new-mu_tmb img {
  max-width: 100%;
  height: 162px;
  display: inline-block;
}
.new-searcha .new-mu_l2h {
  max-height: 33px;
  height: 32px;
  overflow: hidden;
  color: #6e6e6e;
  display: block;
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 0.3em;
  width: 90%;
  line-height: 16px;
}
.new-searcha .new-p-re {
  position: relative;
}
.new-searcha .new-mu_l2c {
  display: block;
  color: #6e6e6e;
  font-size: 16px;
  margin-top: 7px;
  border-top: 1px dashed #efefef;
  line-height: 28px;
}
.new-searcha .new-mu_l2c .new-txt {
  color: #e4393c;
  font-size: 16px;
  font-weight: normal;
}
.new-searcha .new-sale-icon {
  position: absolute;
  bottom: 4px;
  right: 0px;
}
.new-searcha .new-mu_l2c .new-txt a {
  display: block;
  text-align: center;
  color: #e4393c;
  font-size: 14px;
}
.new-searcha .new-mu_l2c .new-txt b {
  background: #d30000;
  color: #fff;
  font-size: 12px;
  padding: 0px 9px;
  margin-left: 6px;
  display: none;
}
.new-searcha .new-add {
  color: #a2a2a2;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  margin-left: 0px;
  text-align: left;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: gray;
}
</style>
