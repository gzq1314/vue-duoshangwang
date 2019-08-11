import Vue from 'vue'
//第三方组件
import {
    Tabbar,
    TabbarItem,
    Swipe, //轮播图
    SwipeItem, //图片加载
    Lazyload,
    Grid, //宫格
    GridItem,
    List, //列表
    Cell, //单元格
    CellGroup,
    Search, //搜索
    Sidebar, //侧面导航
    SidebarItem,
    Icon, //图标
    Tab, //标签页
    Tabs,
    GoodsAction, //购物车
    GoodsActionIcon,
    GoodsActionButton,
    Sku, //弹出购物车
    SubmitBar, //提交订单
    Stepper, //加减按钮
    Field //输入框
} from 'vant';

export default () => {
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Grid).use(GridItem);
    Vue.use(List);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Search);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(Icon);
    Vue.use(Tab).use(Tabs);
    Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
    Vue.use(Sku);
    Vue.use(SubmitBar);
    Vue.use(Stepper);
    Vue.use(Field);
}