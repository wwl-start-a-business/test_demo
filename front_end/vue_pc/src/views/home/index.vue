<template>
  <section class="layout_login">
    <div class="layout_test">123123123132</div>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <swiper :options="swiperOption" class="layout_swiper_box">
      <swiper-slide class="banner-slide">
        <img src="../../assets/logo.png" />
      </swiper-slide>
      <swiper-slide class="banner-slide">
        <img src="../../assets/logo.png" />
      </swiper-slide>
      <swiper-slide class="banner-slide">
        <img src="../../assets/logo.png" />
      </swiper-slide>
    </swiper>
    <section class="layout_bottom">2019-2020 © essaybot</section>
  </section>
</template>
<script>
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper: resolve => {
      require(["vue-awesome-swiper"], ({ swiper }) => resolve(swiper));
    },
    swiperSlide: resolve => {
      require(["vue-awesome-swiper"], ({ swiperSlide }) =>
        resolve(swiperSlide));
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    };
  },
  mounted() {},
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>
<style lang="less" scoped>
.layout_test {
  width: 100px;
  height: 100px;
  font-size: 30px;
  background-color: pink;
}
.layout_bottom {
  height: 62px;
  width: 100%;
  color: #cccccc;
  font-size: 14px;
  line-height: 62px;
  text-align: center;
  background-color: #edeef1;
  position: fixed;
  bottom: 0;
  left: 0;
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
