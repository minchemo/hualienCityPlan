<template>
  <div>
    <div class="main">
      <Navbar />
      <div class="bg">
        <video
          type="video/mp4"
          preload="auto"
          autoplay
          muted
          loop
          class="bg-video"
          src="@/assets/img/home/bg.mp4"
        ></video>
        <div class="bg-text">
          文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹<br />文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
        </div>
      </div>
      <div class="brands">
        <div
          class="brand-item"
          data-aos="fade-left"
          :data-aos-delay="i * 50"
          v-for="(brand, i) in brands"
          :key="i"
        >
          <img :src="brand.img" alt="" srcset="" />
          <p v-html="brand.name + (i + 1)"></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.main {
  position: relative;
  height: auto;
  padding-top: $pc_navbar_height;
  margin-top: -$pc_navbar_height;

  .bg {
    position: relative;
    height: 100vh;
    width: 100%;
    // background-size: cover;
    // background-attachment: fixed;
    // background-image: url("@/assets/img/home/bg.mp4");
    overflow: hidden;
    .bg-text {
      position: absolute;
      bottom: 10vw;
      width: 100%;
      text-align: center;
      font-size: 0.9vw;
      line-height: 2;
      z-index: 1;
    }
    .bg-video {
      position: absolute;
      left: 50%;
      top: 50%;
      min-width: 100%;
      min-height: 100%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 0;
    } 
  }

  .brands {
    display: flex;
    justify-content: center;
    padding-top: 5vw;
    box-sizing: border-box;
    .brand-item {
      margin: 0.5vw;
      &:hover {
        transform: translateY(-10%);
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
<script>
import { isMobile } from "@/utils";

export default {
  data() {
    return {
      isMobile,
      brands: [
        {
          name: 'logo',
          img: require('@/assets/img/home/brands/brand.png')
        },
        {
          name: 'logo',
          img: require('@/assets/img/home/brands/brand.png')
        },
        {
          name: 'logo',
          img: require('@/assets/img/home/brands/brand.png')
        },
        {
          name: 'logo',
          img: require('@/assets/img/home/brands/brand.png')
        },
        {
          name: 'logo',
          img: require('@/assets/img/home/brands/brand.png')
        },
      ]
    }
  },
  mounted() {
  }
}
</script>
