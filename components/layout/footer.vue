<template>
  <div>
    <div class="footer">
      <div class="footer-item">
        <h2>contact us</h2>
        <div class="footer-content">
          <p>文字文字文字 文字文字文字</p>
          <p>文字文字文字 文字文字文字</p>
        </div>
      </div>
      <div class="footer-item">
        <h2>online service</h2>
        <div class="footer-content">
          <p>文字文字文字 文字文字文字</p>
          <p>文字文字文字 文字文字文字</p>
        </div>
      </div>
      <div class="footer-item">
        <h2>link</h2>
        <div class="footer-content">
          <p>文字文字文字 文字文字文字</p>
          <p>文字文字文字 文字文字文字</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.footer {
  position: relative;
  background: #fff;
  padding: 2vw 20vw 5vw 20vw;
  margin-top: 5vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .footer-item {
    h2 {
      font-size: 1vw;
      text-transform: uppercase;
    }
    .footer-content{
      font-size: .7vw;
    }
  }
  &::before {
    content: "";
    height: 2px;
    width: 60vw;
    position: absolute;
    top: 0;
    z-index: 1;
    background: #808080;
  }
}
</style>
<script>
import { isMobile } from "@/utils";

export default {
  data() {
    return {
      isMobile
    }
  },
  mounted() {
  }
}
</script>
