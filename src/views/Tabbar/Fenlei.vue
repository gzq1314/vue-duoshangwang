<template>
  <div style="background:#fff">
    <!-- 头部 -->
    <div class="box">
      <div class="ListSearch">
        <form id="sear_form" action="/">
          <input id="search_val" type="search" placeholder="请输入搜索词" name="mobile_keyword" value="">
          <a href="/messages.html" class="messages_css"><img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2019-04/5cb02b8168a49.png?x-oss-process=image/resize,m_fill,h_30,w_30"></a>
        </form>
      </div>
    </div>
    <!-- 选项卡 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="(itme,index) in biaoti" :key="itme.id" v-text="itme" :class="{active:num==index}" @click="getNum(index)" />
    </van-sidebar>
    <div class="ListAboutRight">
      <div class="tabdiv" v-for="(itme,index) in navList" :key="index" v-show="index==num">
        <dl class="catedl clear">
          <dt v-text="itme.title"></dt>
          <dd v-for="(imgs,value) in itme.list" :key="value">
            <a href="###">
              <span class="pic-wrap">
                <img :src="imgs.img">
              </span>
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
      //选项卡内容
      navList: [
        {
          title: "女装",
          list: [
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9f1aede3235.jpg",
              nei: "t恤"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9f1c7d72d6a.jpg",
              nei: "卫衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bbfbdb9059e.jpg",
              nei: "衬衫"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9ded88a5bcb.jpg",
              nei: "雪纺/蕾丝衫"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9f1b8312498.jpg",
              nei: "连衣裙"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dc88061bc7.jpg",
              nei: "套装裙"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bbfc5a03f7a.jpg",
              nei: "毛衫外套"
            }
          ]
        },
        {
          title: "女包",
          list: [
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9defb256c56.jpg",
              nei: "单肩包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9defc1de6c0.jpg",
              nei: "女士钱包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9defe47adc1.jpg",
              nei: "手提包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9deff5224cf.jpg",
              nei: "小方包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9df00088555.jpg",
              nei: "斜挎包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-07-13/57860ca585930.jpg",
              nei: "晚宴包"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9df01a7e31c.jpg",
              nei: "手拿包"
            }
          ]
        },
        {
          title: "运动",
          list: [
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bc114380722.jpg",
              nei: "t恤"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dedd5be2e8.jpg",
              nei: "衬衫"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bbf141348a4.jpg",
              nei: "卫衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dede070628.jpg",
              nei: "POLO衫"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bbf2697503b.jpg",
              nei: "针织衫/毛衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2018-12/5c1b5dccde409.png",
              nei: "棉服/风衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dee337dcba.jpg",
              nei: "西装"
            }
          ]
        },
        {
          title: "美容护肤",
          list: [
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-07-13/57859beced668.jpg",
              nei: "防晒"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-07-13/5785ac934eab6.jpg",
              nei: "化妆水"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-07-13/57859d3bbd4bc.jpg",
              nei: "精油皂"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dede070628.jpg",
              nei: "POLO衫"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2016-08-23/57bbf2697503b.jpg",
              nei: "针织衫/毛衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2018-12/5c1b5dccde409.png",
              nei: "棉服/风衣"
            },
            {
              img:
                "http://pic.ecduo.cn/Uploads/Picture/2019-03/5c9dee337dcba.jpg",
              nei: "西装"
            }
          ]
        }
      ]
    };
  },
  methods: {
    getNum(index) {
      this.num = index;
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
