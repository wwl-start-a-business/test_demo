<template>
  <section class="layout_home_header">
    <div class="layout_logo">
      <img class="i_logo" src="@/logo.jpeg" alt />
      <span class="i_span">武汉</span>
      <span class="i_tel"> <i></i>tel : 15871747564 </span>
      <!-- <span class="iconfont icon-emali"></span> -->
    </div>
    <div class="layout_nav">
      <ul>
        <li class="active"><i class="iconfont icon-home"></i> 首页</li>
        <li><i class="iconfont icon-i-xm"></i> 服务项目</li>
        <li>
          <i class="iconfont icon-gerenzhongxin-chenggonganli"></i> 成功案例
        </li>
        <li><i class="iconfont icon-hezuo"></i> 合作加盟</li>
        <li><i class="iconfont icon-guanyu"></i> 关于我们</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.layout_home_header {
  width: 1280px;
  // height: 85px;
  margin: 0 auto;
  // background-color: pink;
  > .layout_logo {
    > .i_logo {
      width: 140px;
      height: 85px;
      vertical-align: middle;
      margin-right: 20px;
    }
    > .i_span {
      display: inline-block;
      width: 70px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      border-radius: 4px;
      color: #e73124;
      border: 1px solid #999999;
    }
    > .i_tel {
      float: right;
      line-height: 4px;
      font-size: 14px;
      padding-top: 45px;
      margin-right: 20px;
      > i {
        display: inline-block;
        width: 24px;
        height: 15px;
        background: url("../assets/service_tel.png") center center no-repeat;
        vertical-align: sub;
        margin-right: 4px;
      }
    }
  }
  > .layout_nav {
    height: 45px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    > ul {
      display: flex;
      height: 45px;
      line-height: 45px;
      > li {
        color: #000000;
        padding: 0 20px;
        font-size: 16px;
        line-height: 45px;
        cursor: pointer;
        > i {
          color: #e73124;
        }
      }
      > li.active {
        color: #e73124;
      }
      > li:hover {
        color: #e73124;
        text-decoration: underline;
      }
    }
  }
}
</style>
