<template>
  <section class="layout_home">
    <i-header></i-header>
    <div class="layout_home_content">
      <!-- swiper -->
      <div class="layout_swiper_box">
        <!-- <div class="i_home_content_left"></div> -->
        <!-- swiper1 -->
        <swiper
          :options="swiperOption"
          class="gallery-top layout_swiper_box"
          ref="swiperTop"
        >
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper
          :options="swiperOptionThumbs"
          class="gallery-thumbs"
          ref="swiperThumbs"
        >
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
      </div>
      <!-- 三步下单 -->
      <div class="layout_sanbu_search">
        <div class="i_sanbu_search">
          <i class="iconfont icon-chaxun"></i> 三步查询
        </div>
        <div class="layout_sanbu_sel">
          <el-select
            class="layout_sanbu_sel_pingtai"
            v-model="order.sel1"
            clearable
            placeholder="请选择类型"
          >
            <el-option
              v-for="item in orderOptions1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            class="layout_sanbu_sel_type"
            v-model="order.sel2"
            clearable
            placeholder="企业/个人"
          >
            <el-option
              v-for="item in orderOptions2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            class="layout_sanbu_sel_price"
            v-model="order.sel3"
            clearable
            placeholder="请选择预算(元)"
          >
            <el-option
              v-for="item in orderOptions3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button
            type="primary"
            plain
            class="i_sanbu_btn"
            @click="orderFun(0)"
            >立即查看</el-button
          >
        </div>
      </div>
      <!-- 优惠/省心/保障 -->
      <div class="layout_sangeicon_box">
        <span>
          <i class="iconfont icon-youhui"></i> 优惠
          <span class="i_sangeicon_text">商家低价承诺</span>
        </span>
        <span>
          <i class="iconfont icon-shengxin"></i> 省心
          <span class="i_sangeicon_text">顾问一对一服务</span>
        </span>
        <span>
          <i class="iconfont icon-baozhang"></i> 有保障
          <span class="i_sangeicon_text">十大消费保障</span>
        </span>
      </div>
      <!-- 特别推荐 -->
      <div class="layout_tuijian_box">
        <div class="i_tuijian_header"></div>
        <div class="layout_tianmao_box" @click="orderFun(1)">
          <div class="i_tianmao_left"></div>
          <div class="i_tianmao_center">
            <div class="i_tianmao_center_1">
              <div class="i_tianmao_center_1_img"></div>
            </div>
            <div class="i_tianmao_center_2">
              <div class="i_tianmao_center_2_img"></div>
            </div>
            <div class="i_tianmao_center_3">
              <div class="i_tianmao_center_3_img"></div>
            </div>
            <div class="i_tianmao_center_4">
              <div class="i_tianmao_center_4_img"></div>
            </div>
            <div class="i_tianmao_center_5">
              <div class="i_tianmao_center_5_img"></div>
            </div>
          </div>
          <div class="i_tianmao_right">
            <h2>热门类目</h2>
            <ul>
              <li><span class="i_color_red">01/</span> 服饰鞋包</li>
              <li><span class="i_color_red">02/</span> 数码电器</li>
              <li><span class="i_color_red">03/</span> 食品/保健</li>
              <li><span class="i_color_red">04/</span> 母婴</li>
              <li><span class="i_color_red">05/</span> 运动户外</li>
              <li><span class="i_color_red">06/</span> 书籍音像</li>
              <li><span class="i_color_red">07/</span> 家装家饰</li>
              <li><span class="i_color_red">08/</span> 汽车配件</li>
              <li><span class="i_color_red">09/</span> 美容护理</li>
              <li><span class="i_color_red">10/</span> 家居饰品</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 商标业务 -->
      <div class="layout_shangbiao_box">
        <div class="i_shangbiao_header">
          <i class="iconfont icon-shangbiao"></i> 商标业务
        </div>
        <div class="layout_shangbiao_content" @click="orderFun(2)">
          <div class="i_shangbiao_left"></div>
          <div class="i_shangbiao_center">
            <div class="i_shangbiao_center_1">
              <div class="i_shangbiao_center_1_img"></div>
            </div>
            <div class="i_shangbiao_center_2">
              <div class="i_shangbiao_center_2_img"></div>
            </div>
            <div class="i_shangbiao_center_3">
              <div class="i_shangbiao_center_3_img"></div>
            </div>
            <div class="i_shangbiao_center_4">
              <div class="i_shangbiao_center_4_img"></div>
            </div>
            <div class="i_shangbiao_center_5">
              <div class="i_shangbiao_center_5_img"></div>
            </div>
          </div>
          <div class="i_shangbiao_right"></div>
        </div>
      </div>

      <!-- 公司业务 -->
      <div class="layout_gongsi_box">
        <div class="i_gongsi_header">
          <i class="iconfont icon-icon_"></i> 公司业务
        </div>
        <div class="layout_gongsi_content" @click="orderFun(3)">
          <div class="i_gongsi_left"></div>
          <div class="i_gongsi_center">
            <div class="i_gongsi_center_1">
              <div class="i_gongsi_center_1_img"></div>
            </div>
            <div class="i_gongsi_center_2">
              <div class="i_gongsi_center_2_img"></div>
            </div>
            <div class="i_gongsi_center_3">
              <div class="i_gongsi_center_3_img"></div>
            </div>
            <div class="i_gongsi_center_4">
              <div class="i_gongsi_center_4_img"></div>
            </div>
            <div class="i_gongsi_center_5">
              <div class="i_gongsi_center_5_img"></div>
            </div>
          </div>
          <div class="i_gongsi_right"></div>
        </div>
      </div>

      <!-- 专利业务 -->
      <div class="layout_zhuanli_box">
        <div class="i_zhuanli_header">
          <i class="iconfont icon-zhuanli"></i> 专利业务
        </div>
        <div class="layout_zhuanli_content" @click="orderFun(4)">
          <div class="i_zhuanli_left"></div>
          <div class="i_zhuanli_center">
            <div class="i_zhuanli_center_1">
              <div class="i_zhuanli_center_1_img"></div>
            </div>
            <div class="i_zhuanli_center_2">
              <div class="i_zhuanli_center_2_img"></div>
            </div>
            <div class="i_zhuanli_center_3">
              <div class="i_zhuanli_center_3_img"></div>
            </div>
            <div class="i_zhuanli_center_4">
              <div class="i_zhuanli_center_4_img"></div>
            </div>
            <div class="i_zhuanli_center_5">
              <div class="i_zhuanli_center_5_img"></div>
            </div>
          </div>
          <div class="i_zhuanli_right"></div>
        </div>
      </div>

      <!-- 高新业务 -->
      <div class="layout_gaoxin_box">
        <div class="i_gaoxin_header">
          <i class="iconfont icon-gaoxinqiyelogo"></i> 高新企业业务
        </div>
        <div class="layout_gaoxin_content" @click="orderFun(5)">
          <div class="i_gaoxin_left"></div>
          <div class="i_gaoxin_center">
            <div class="i_gaoxin_center_1">
              <div class="i_gaoxin_center_1_img"></div>
            </div>
            <div class="i_gaoxin_center_2">
              <div class="i_gaoxin_center_2_img"></div>
            </div>
            <div class="i_gaoxin_center_3">
              <div class="i_gaoxin_center_3_img"></div>
            </div>
            <div class="i_gaoxin_center_4">
              <div class="i_gaoxin_center_4_img"></div>
            </div>
            <div class="i_gaoxin_center_5">
              <div class="i_gaoxin_center_5_img"></div>
            </div>
          </div>
          <div class="i_gaoxin_right"></div>
        </div>
      </div>
    </div>

    <section class="layout_bottom">
      CopyRight 2019 武汉伟焰网络科技有限公司 All Rights Reserved
      沪ICP备0000000号 沪公网安备 00000000000号
      <i></i>武汉伟焰网络科技有限公司
    </section>
    <el-dialog
      title="意向需求"
      :visible.sync="moduleCenterDialogVisible"
      class="layout_module_box"
    >
      <el-form :model="order">
        <el-form-item label="服务项目：" label-width="120px">
          <span v-if="!orderType"
            >{{ order.sel1 }} / {{ order.sel2 }} / {{ order.sel3 }}元</span
          >
          <span v-if="orderType == 1">天猫业务</span>
          <span v-if="orderType == 2">商标业务</span>
          <span v-if="orderType == 3">公司业务</span>
          <span v-if="orderType == 4">专利业务</span>
          <span v-if="orderType == 5">高新业务</span>
        </el-form-item>
        <el-form-item label="姓名：" label-width="120px">
          <el-input
            v-model="order.name"
            autocomplete="off"
            class="layout_module_input"
            placeholder="请填写姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" label-width="120px">
          <el-input
            v-model="order.mobule"
            autocomplete="off"
            class="layout_module_input"
            placeholder="请填写手机号"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="orderClickFun(false)">取 消</el-button>
        <el-button type="primary" @click="orderClickFun(true)">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import "swiper/dist/css/swiper.css";
import iHeader from "@comp/header";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    iHeader,
    swiper,
    swiperSlide
  },
  data() {
    return {
      order: {
        sel1: "",
        sel2: "",
        sel3: "",
        name: "",
        mobule: ""
      },
      orderOptions1: [
        {
          value: "商标业务",
          label: "商标业务"
        },
        {
          value: "公司代理记账业务",
          label: "公司代理记账业务"
        },
        {
          value: "专利业务",
          label: "专利业务"
        },
        {
          value: "高新企业业务",
          label: "高新企业业务"
        },
        {
          value: "天猫相关业务",
          label: "天猫相关业务"
        }
      ],
      orderOptions2: [
        {
          value: "企业",
          label: "企业"
        },
        {
          value: "个体",
          label: "个体"
        }
      ],
      orderOptions3: [
        {
          value: "1 - 999",
          label: "1 - 999"
        },
        {
          value: "1000 - 5999",
          label: "1000 - 5999"
        },
        {
          value: "6000 - 49999",
          label: "6000 - 49999"
        },
        {
          value: "5万以上",
          label: "5万以上"
        }
      ],
      swiperOption: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      },

      moduleCenterDialogVisible: false, // 弹层
      orderType: 1 // 需求意向
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    orderFun(type) {
      if (!type) {
        if (!this.order.sel1) {
          return this.$message.error("请选择类型");
        }
        if (!this.order.sel2) {
          return this.$message.error("请选择主体类型");
        }
        if (!this.order.sel3) {
          return this.$message.error("请选择预算");
        }
      }
      this.orderType = type;
      this.moduleCenterDialogVisible = true;
    },
    orderClickFun(falg) {
      if (falg) {
        console.log("下单");
      }
      this.moduleCenterDialogVisible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.layout_home {
  > .layout_home_content {
    width: 1280px;
    margin: 0 auto;
    position: relative;
    > .layout_swiper_box {
      height: 500px;
      position: relative;
      margin-bottom: 50px;
      > .layout_swiper_box {
        width: 100%;
        height: 400px;
        position: absolute;
        left: 0;
      }
    }
    > .layout_sanbu_search {
      width: 1190px;
      height: 132px;
      background-color: #ffeaea;
      margin: 0 auto 40px;
      border-radius: 5px;
      display: flex;
      > .i_sanbu_search {
        width: 180px;
        text-align: right;
        font-size: 16px;
        line-height: 132px;
        color: #e73124;
        margin-right: 20px;
        > i {
          color: #e73124;
        }
      }
      > .layout_sanbu_sel {
        padding-top: 45px;
        > .layout_sanbu_sel_pingtai {
          width: 300px;
          margin-right: 20px;
        }
        > .layout_sanbu_sel_type {
          margin-right: 20px;
        }
        > .layout_sanbu_sel_price {
          margin-right: 20px;
        }
        > .i_sanbu_btn {
          cursor: pointer;
        }
      }
    }
    > .layout_sangeicon_box {
      width: 1190px;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      color: #000000;
      margin: 0 auto;
      > span {
        margin: 20px;
        > i {
          font-size: 20px;
        }
        > .i_sangeicon_text {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
    // 特别推荐
    > .layout_tuijian_box {
      margin-bottom: 40px;
      > .i_tuijian_header {
        height: 58px;
        background: url("../../assets/tuijian.png") left center no-repeat;
        border-bottom: 3px solid #333;
      }
      > .layout_tianmao_box {
        height: 500px;
        display: flex;
        cursor: pointer;
        > .i_tianmao_left {
          width: 260px;
          height: 100%;
          background: url("../../assets/tianmao4.jpg") left center no-repeat;
          background-size: 100%;
          overflow: hidden;
        }
        > .i_tianmao_center {
          flex: 1;
          overflow: hidden;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          > .i_tianmao_center_1 {
            float: left;
            height: 250px;
            width: 500px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > .i_tianmao_center_1_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/tianmao5.jpg) center center no-repeat;
              background-size: 100%;
            }
          }
          > .i_tianmao_center_2,
          > .i_tianmao_center_5 {
            float: left;
            height: 250px;
            width: 268px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            > .i_tianmao_center_2_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/tianmao1_3.jpg) center center
                no-repeat;
              background-size: 100%;
            }
            > .i_tianmao_center_5_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/tianmao6.jpg) center center no-repeat;
              background-size: cover;
            }
          }
          > .i_tianmao_center_3,
          > .i_tianmao_center_4 {
            float: left;
            height: 250px;
            width: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            > .i_tianmao_center_3_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/tianmao2.jpg) center center no-repeat;
              background-size: cover;
            }
            > .i_tianmao_center_4_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/tianmao3.jpeg) center center
                no-repeat;
              background-size: cover;
            }
          }
        }
        > .i_tianmao_right {
          width: 250px;
          height: 500px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          overflow: hidden;
          > h2 {
            height: 54px;
            width: 100%;
            text-indent: 52px;
            font-size: 18px;
            line-height: 54px;
            color: #ffffff;
            background: url(../../assets/fire.gif) 28px 18px no-repeat
              rgb(255, 96, 141);
          }
          > ul {
            padding-left: 20px;
            > li {
              height: 44px;
              line-height: 44px;
              color: #666;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              border-bottom: 1px solid #dddddd;
              > .i_color_red {
                color: #ff5384;
              }
            }
          }
        }
      }
    }

    // 商标注册
    > .layout_shangbiao_box {
      margin-bottom: 40px;
      > .i_shangbiao_header {
        height: 58px;
        font-size: 30px;
        font-weight: 700;
        line-height: 58px;
        // background: url('../../assets/tuijian.png') left center no-repeat;
        border-bottom: 3px solid #333;
        > i {
          color: #ff5384;
          font-size: 30px;
        }
      }
      > .layout_shangbiao_content {
        height: 500px;
        display: flex;
        cursor: pointer;
        > .i_shangbiao_left {
          width: 260px;
          height: 100%;
          background: url("../../assets/shangbiao3.png") left center no-repeat;
          background-size: 100%;
          overflow: hidden;
        }
        > .i_shangbiao_center {
          flex: 1;
          overflow: hidden;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          > .i_shangbiao_center_1 {
            float: left;
            height: 250px;
            width: 500px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > .i_shangbiao_center_1_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/shangbiao1.jpg) center center
                no-repeat;
              background-size: cover;
            }
          }
          > .i_shangbiao_center_2,
          > .i_shangbiao_center_5 {
            float: left;
            height: 250px;
            width: 268px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            > .i_shangbiao_center_2_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/shangbiao5.jpg) center center
                no-repeat;
              background-size: 100%;
            }
            > .i_shangbiao_center_5_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/shangbiao4.jpg) center center
                no-repeat;
              background-size: cover;
            }
          }
          > .i_shangbiao_center_3,
          > .i_shangbiao_center_4 {
            float: left;
            height: 250px;
            width: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            > .i_shangbiao_center_3_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/shangbiao6.jpg) center center
                no-repeat;
              background-size: cover;
            }
            > .i_shangbiao_center_4_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/shangbiao7.jpg) center center
                no-repeat;
              background-size: cover;
            }
          }
        }
        > .i_shangbiao_right {
          width: 250px;
          height: 500px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          overflow: hidden;
          background: url(../../assets/shangbiao2.png) center center no-repeat;
          background-size: cover;
        }
      }
    }

    // 公司业务
    > .layout_gongsi_box {
      margin-bottom: 40px;
      > .i_gongsi_header {
        height: 58px;
        font-size: 30px;
        font-weight: 700;
        line-height: 58px;
        // background: url('../../assets/tuijian.png') left center no-repeat;
        border-bottom: 3px solid #333;
        > i {
          color: #ff5384;
          font-size: 30px;
        }
      }
      > .layout_gongsi_content {
        height: 500px;
        display: flex;
        cursor: pointer;
        > .i_gongsi_left {
          width: 260px;
          height: 100%;
          background: url("../../assets/gongsi1.jpg") left center no-repeat;
          background-size: 100%;
          overflow: hidden;
        }
        > .i_gongsi_center {
          flex: 1;
          overflow: hidden;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          > .i_gongsi_center_1 {
            float: left;
            height: 250px;
            width: 500px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > .i_gongsi_center_1_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gongsi2.jpg) center center no-repeat;
              background-size: cover;
            }
          }
          > .i_gongsi_center_2,
          > .i_gongsi_center_5 {
            float: left;
            height: 250px;
            width: 268px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            > .i_gongsi_center_2_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gongsi3.jpg) center center no-repeat;
              background-size: 100%;
            }
            > .i_gongsi_center_5_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gongsi4.jpg) center center no-repeat;
              background-size: cover;
            }
          }
          > .i_gongsi_center_3,
          > .i_gongsi_center_4 {
            float: left;
            height: 250px;
            width: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            > .i_gongsi_center_3_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gongsi5.jpeg) center center no-repeat;
              background-size: cover;
            }
            > .i_gongsi_center_4_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gongsi6.jpg) center center no-repeat;
              background-size: cover;
            }
          }
        }
        > .i_gongsi_right {
          width: 250px;
          height: 500px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          overflow: hidden;
          background: url(../../assets/gongsi7.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    // 专利业务
    > .layout_zhuanli_box {
      margin-bottom: 40px;
      > .i_zhuanli_header {
        height: 58px;
        font-size: 30px;
        font-weight: 700;
        line-height: 58px;
        border-bottom: 3px solid #333;
        > i {
          color: #ff5384;
          font-size: 30px;
        }
      }
      > .layout_zhuanli_content {
        height: 500px;
        display: flex;
        cursor: pointer;
        > .i_zhuanli_left {
          width: 260px;
          height: 100%;
          background: url("../../assets/zhuanli1.jpeg") left center no-repeat;
          background-size: 100%;
          overflow: hidden;
        }
        > .i_zhuanli_center {
          flex: 1;
          overflow: hidden;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          > .i_zhuanli_center_1 {
            float: left;
            height: 250px;
            width: 500px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > .i_zhuanli_center_1_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/zhuanli2.jpeg) center center
                no-repeat;
              background-size: 100%;
            }
          }
          > .i_zhuanli_center_2,
          > .i_zhuanli_center_5 {
            float: left;
            height: 250px;
            width: 268px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            > .i_zhuanli_center_2_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/zhuanli7.jpg) center center no-repeat;
              background-size: 100%;
            }
            > .i_zhuanli_center_5_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/zhuanli4.jpg) center center no-repeat;
              background-size: cover;
            }
          }
          > .i_zhuanli_center_3,
          > .i_zhuanli_center_4 {
            float: left;
            height: 250px;
            width: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            > .i_zhuanli_center_3_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/zhuanli5.jpg) center center no-repeat;
              background-size: cover;
            }
            > .i_zhuanli_center_4_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/zhuanli6.jpg) center center no-repeat;
              background-size: cover;
            }
          }
        }
        > .i_zhuanli_right {
          width: 250px;
          height: 500px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          overflow: hidden;
          background: url(../../assets/zhuanli3.jpeg) center center no-repeat;
          background-size: cover;
        }
      }
    }

    // 高新企业业务
    > .layout_gaoxin_box {
      margin-bottom: 40px;
      > .i_gaoxin_header {
        height: 58px;
        font-size: 30px;
        font-weight: 700;
        line-height: 58px;
        border-bottom: 3px solid #333;
        > i {
          color: #ff5384;
          font-size: 30px;
        }
      }
      > .layout_gaoxin_content {
        height: 500px;
        display: flex;
        cursor: pointer;
        > .i_gaoxin_left {
          width: 260px;
          height: 100%;
          background: url("../../assets/gaoxin4.jpg") left center no-repeat;
          background-size: 100%;
          overflow: hidden;
        }
        > .i_gaoxin_center {
          flex: 1;
          overflow: hidden;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          > .i_gaoxin_center_1 {
            float: left;
            height: 250px;
            width: 500px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > .i_gaoxin_center_1_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gaoxin7.jpg) center center no-repeat;
              background-size: 100%;
            }
          }
          > .i_gaoxin_center_2,
          > .i_gaoxin_center_5 {
            float: left;
            height: 250px;
            width: 268px;
            padding: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            > .i_gaoxin_center_2_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gaoxin1.jpeg) center center no-repeat;
              background-size: 100%;
            }
            > .i_gaoxin_center_5_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gaoxin2.jpeg) center center no-repeat;
              background-size: cover;
            }
          }
          > .i_gaoxin_center_3,
          > .i_gaoxin_center_4 {
            float: left;
            height: 250px;
            width: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            > .i_gaoxin_center_3_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gaoxin5.jpeg) center center no-repeat;
              background-size: 80%;
            }
            > .i_gaoxin_center_4_img {
              width: 100%;
              height: 100%;
              background: url(../../assets/gaoxin6.jpeg) center center no-repeat;
              background-size: 80%;
            }
          }
        }
        > .i_gaoxin_right {
          width: 250px;
          height: 500px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          overflow: hidden;
          background: url(../../assets/gaoxin3.jpg) center center no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

.layout_module_box {
  .layout_module_input {
    width: 194px;
  }
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("../../assets/tianmao5.jpg");
  }
  &.slide-2 {
    background-image: url("../../assets/6_2.jpg");
  }
  &.slide-3 {
    background-image: url("../../assets/banner_02.png");
  }
  &.slide-4 {
    background-image: url("../../assets/tianmao6_2.png");
  }
  &.slide-5 {
    background-image: url("../../assets/tianmao1_2.png");
  }
}
.gallery-top {
  width: 100%;
}
.gallery-thumbs {
  width: 100%;
  height: 20% !important;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  left: 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
  cursor: pointer;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.layout_bottom {
  height: 62px;
  width: 100%;
  color: #7a7a7a;
  font-size: 14px;
  line-height: 62px;
  text-align: center;
  background-color: #f5f5f5;
  > i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../../assets/gh.png") center center no-repeat;
    vertical-align: middle;
  }
}

.clearfix::after {
  content: ".";
  clear: both;
  display: block;
  overflow: hidden;
  font-size: 0;
  height: 0;
}
.clearfix {
  zoom: 1;
}
</style>
