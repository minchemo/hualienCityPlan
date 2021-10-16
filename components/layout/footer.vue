<template>
  <div>
    <div class="footer">
      <div class="footer-item">
        <div class="left">
          <div class="link">
            <h2>contact us</h2>
            <p>
              花蓮縣政府文化局 ｜ (+886)-3-8227121 #131 ｜ hccc8227121@gmail.com
            </p>
          </div>
        </div>
        <div class="right">
          <div class="link">
            <h2>LINK</h2>
            <a class="item">
              <img src="@/assets/img/fb.svg" alt="" srcset="" />
            </a>
            <a class="item">
              <img src="@/assets/img/ig.svg" alt="" srcset=""
            /></a>
            <a class="item">
              <img src="@/assets/img/yt.svg" alt="" srcset=""
            /></a>
          </div>
          <div class="link">
            <h2>google map</h2>
            <a class="item">
              <img src="@/assets/img/gmap.svg" alt="" srcset=""
            /></a>
          </div>
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
  padding: 2vw 15vw 2vw 15vw;
  .footer-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7vw;
    font-weight: 400;

    .right {
      display: flex;
      .link {
        &:first-child {
          margin-right: 2vw;
        }
      }
      
    }

    .link {
      display: flex;
      align-items: center;

      h2 {
        font-size: 1vw;
        text-transform: uppercase;
        margin-right: 1vw;
        font-weight: 700;
      }
      .item {
        margin-right: 0.5vw;
        img {
          height: 18px;
        }
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  }
  &::before {
    content: "";
    height: 1px;
    width: 70vw;
    position: absolute;
    top: 0;
    z-index: 1;
    background: #808080;
    left: 15vw;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
