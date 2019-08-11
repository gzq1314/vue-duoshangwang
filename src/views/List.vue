<template>
  <div class="mm-page mm-slideout">
    <!-- 头部 -->
    <div id="page-header">
      <ul>
        <li>
          <a href="javascript:history.back();" title="返回" v-on:click="back">
            <i class="ic i-back"></i>返回</a>
        </li>
        <li class="a-login">
          <form id="sear_form" action="/">
            <input id="search_val" type="search" placeholder="搜索分销商品" name="mobile_keyword" value="">
          </form>
        </li>
        <li>
          <a href="http://m.ecduo.cn/category.html" title="分类" target="_self">
            <i class="gcatebg"></i>
          </a>
        </li>
      </ul>
    </div>

    <!-- 分类 -->
    <div class="gcatefix">
      <a href="javascript:;" class="mui-tabs-btn"></a>
      <div class="mui-tabs-iscroll">
        <ul class="mui-tabs-inner" style="">
          <li>
            <a href="###">全部</a>
          </li>

        </ul>
      </div>
    </div>

    <!-- 商品数据 -->
    <List />

    <!-- 排序导航 -->
    <div class="pronav">
      <div class="pronav-h clearfix">
        <ul class="ecd-search-tab">
          <li id="sales-volume-order" class="sort-by-integrative " style="width:50%;">
            <a href="###">销量</a>
          </li>
          <li id="prcie-order" class="sort-by-price " style="width:50%;">
            <a href="###">价格</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import List from "../components/list-box.vue";
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    List
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: gray;
}
#page-header {
  margin-bottom: 0;
  overflow: hidden;
  padding: 0 3.3%;
  height: 38px;
  border-bottom: 1px solid #e1e1e1;
  line-height: 38px;
  background: #f3f3f4;
  position: relative;
}
#page-header li:first-child {
  width: 18%;
}
#page-header li {
  float: left;
}
#page-header a {
  color: #696969;
  font-size: 12px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#page-header .i-back {
  background: url(http://m.ecduo.cn/static/images/wap/icon2b.png) no-repeat
    center 5px;
  background-size: 8px 11px;
}
#page-header .ic {
  display: inline-block;
  position: relative;
  top: 1px;
  margin-right: 12%;
  width: 16px;
  height: 15.5px;
}
#page-header li.a-login {
  width: 66%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#page-header li.a-login input {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  height: 30px;
  padding-left: 33px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 5px;
  background: url(http://m.ecduo.cn/static/images/wap/search.png) no-repeat 10px
    6px;
  background-color: #fff;
  font-size: 14px;
  line-height: 30px;
}
#page-header .gcatebg {
  background: url(http://m.ecduo.cn/static/images/wap/index_06.png) no-repeat
    center 3px;
  background-size: 23px auto;
  width: 28px;
  height: 31px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 13px;
}
.gcatefix {
  width: 100%;
  height: 31px;
  background: #fafafa;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: relative;
  z-index: 99;
}
.gcatefix .mui-tabs-btn {
  width: 20%;
  height: 31px;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 0;
  border: 0 none;
  background: #fff;
  text-align: center;
  color: #9e9e9e;
}
.gcatefix .mui-tabs-iscroll {
  position: absolute;
  height: 31px;
  left: 0;
  top: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  background: #fff;
  width: 80%;
}
.gcatefix ul {
  letter-spacing: -4px;
  float: left;
  padding: 0 0px 0 12px;
}
.gcatefix li {
  display: inline-block;
  box-sizing: border-box;
  letter-spacing: 0;
  height: 31px;
  line-height: 31px;
  text-align: center;
  font-size: 12px;
  padding: 0 11px 0px;
  color: #757575;
  float: left;
}
.gcatefix .mui-tabs-btn:after {
  content: " ";
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  transform: rotate(180deg);
  background: url(http://m.ecduo.cn/static/images/wap/gcatetop.png);
  background-size: 16px 16px;
  margin-top: 8px;
  margin-right: 10px;
}
.pronav-h {
  background-color: #fff;
  padding: 0;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.clearfix {
  zoom: 1;
  clear: both;
}
.ecd-search-tab {
  display: inline-block;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #d8d8d8;
}
.ecd-search-tab li {
  display: inline-block;
  width: 22.2%;
  text-align: center;
  position: relative;
  float: left;
  height: 31px;
}
.ecd-search-tab li a {
  display: block;
  height: 17px;
  line-height: 17px;
  margin: 0 auto;
  padding: 7px 0;
  color: #9a9a9a;
  font-size: 12px;
  text-decoration: none;
}
.ecd-search-tab li:after {
  content: "";
  position: absolute;
  top: 7px;
  right: 0;
  width: 0;
  height: 17px;
  border-left: 1px #e5e5e5 solid;
}
.pronav {
  text-align: center;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
  float: left;
  display: inline-block;
  height: 32px;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: gray;
}
</style>
