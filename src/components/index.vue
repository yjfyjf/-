<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <el-carousel height="431px">
                <el-carousel-item v-for="(item,index) in sliderlist" :key="index">
                  <!-- <h3>{{ item }}</h3> -->
                  <a href="" class="silder-a">
                      <img :src="item.img_url" alt="" class="silder-img">
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item,index) in toplist">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | globalFormatTime}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="item in goodslist">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a href="/goods/43.html" v-for="it in item.level2catelist">{{it.subcatetitle}}</a>
          <!-- <a href="/goods/43.html">摄影摄像</a> -->
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="it in item.datas">
              <router-link :to="'/detail/'+it.artID">
                <!-- <a href="#/site/goodsinfo/87" class=""> -->
                <div class="img-box">
                  <img :src="it.img_url">
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
                <!-- </a> -->
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios"
// 导入 moment
// import moment from "moment"

export default {
  name: "index",
  data() {
    return {
      // 分类数据
      catelist: [],
      // 轮播图数据
      sliderlist: [],
      // 热卖数据
      toplist: [],
      // 商品数据
      goodslist: []
    };
  },
  // 本地过滤器
  // filters:{
  //     fotmeaTime(){
  //         return  moment().format('YYYY-MM-DD')
  //     }
  // },
  // 在页面打开之后发请求渲染的钩子
  created() {
    this.$axios.get("site/goods/gettopdata/goods").then(res => {
      console.log(res);
      // 赋值
      this.catelist = res.data.message.catelist;
      this.sliderlist = res.data.message.sliderlist;
      this.toplist = res.data.message.toplist;
    });
    this.$axios
      .get("http://111.230.232.110:8899/site/goods/getgoodsgroup")
      .then(res => {
        console.log(res);
        this.goodslist = res.data.message;
      });
  }
};
</script>

<style>
.silder-a{
    display: block;
    width: 100%;
    height: 100%;
}
.silder-img{
    display: block;
    width: 100%;
    height: 100%;
}
</style>
