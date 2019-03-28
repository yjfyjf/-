<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                 <el-carousel>
                    <el-carousel-item v-for="(item,index) in imglist" :key="index">
                      <!-- <h3>{{ item }}</h3> -->
                      <!-- <a href="" class="silder-a"> -->
                      <!-- <router-link :to="'/detail/'+item.id"> -->
                        <img :src="item.thumb_path" alt="">
                      <!-- </a> -->
                      <!-- </router-link> -->
                    </el-carousel-item>
                  </el-carousel>  
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click="index=1" :class="{selected:index==1}">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="index=2" :class="{selected:index==2}">商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" style="display: block;" v-show="index==1" v-html="goodsinfo.content"></div>
              <div class="tab-content" style="display: block;" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComments"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="item in commentList">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.add_time | globalFormatTime('YYYY-MM-DDThh:mm:sss')}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                   
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                      </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="item in hotgoodslist">
                    <div class="img-box">
                      <router-link :to="'/detail/'+item.id">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                        <img
                          :src="item.img_url"
                        >
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <router-link :to="'/detail/'+item.id">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      {{item.title}}
                      <!-- </a> -->
                      </router-link>
                      <span>{{item.add_time | globalFormatTime('YYYY年MM年DD日')}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 传入axios
// import axios from "axios"

export default {
  // 可写可不写 标记
    name:"detail",
    // 用return的方式返回数据 所以data是个函数对象
  data(){
      return{
        // 详情页的中间数据
        goodsinfo:{},
        // 索引默认是1
        index:1,
        // 详情页右侧的数据
        hotgoodslist:[],
        // 购买数量
        num1:1,
        // 左侧轮播图
        imglist:[],
        // 提交评论
        comment:'',
        // 页码
        pageIndex:1,
        // 页容量
        pageSize:10,
        // 总条数
        totalcount:0,
        // 评论的数组
        commentList:[],
      };
    },
    // 写逻辑的地方
  methods: {
    // 把常用的axios请求用函数封装  方便多处使用
    getDetail(){
      // 调用接口发请求
      this.$axios.get(`site/goods/getgoodsinfo/${this.$route.params.id}`).then(res=>{
      console.log(res);
      // 赋值中间的数据
      this.goodsinfo = res.data.message.goodsinfo
      // 赋值右侧的数据
      this.hotgoodslist = res.data.message.hotgoodslist
      // 详情轮播图
      this.imglist = res.data.message.imglist
      })
    },
    // 添加购物数量的计算器
    handleChange(){
      console.log('加');
      
    },
    
    // 提交评论
    postComments(){
      // 判断是否为空
      if (this.comment === "") {
        // 为空就提示
        this.$message.error('老铁,写点东西呀')
      }else{
        // 不为空就发请求
        this.$axios.post(`site/validate/comment/post/goods/${this.$route.params.id}`,{commenttxt:'this.comment'}).then(res=>{
          console.log(res);
          // 如果评论成功提示用户成功
          if (res.data.status === 0) {
            this.$message.success(res.data.message);
            // 清空输入框
            this.comment = ""
            this.pageSize = 10
            this.pageIndex = 1
          }
        })
      }
    },
    getComments(){
    this.$axios.get(`site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=>{
      console.log(res);
      this.totalcount = res.data.message.totalcount
      this.commentList = res.data.message
      })
    },
     // 总页数
    handleSizeChange(size){
      console.log(size);
      this.pageSize = size
      this.getComments()
    },
    // 页码
    handleCurrentChange(current){
      console.log(current);
      this.pageIndex = current
      this.getComments()
    },
  },
 
  // 这是中间数据的请求 
  created() {
    this.getDetail();
    this.getComments()
  },
  
  
  // 用监听请求数据渲染右侧
  watch: {
    $route(value,oldValue){
      this.getDetail()
    }
  },
}


</script>

<style>
.pic-box{
  width: 395px;
  height: 320px;
}
.pic-box .el-carousel{
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container{
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
