<template>
  <div>
    <div class="main">
      <Navbar />
      <div class="bg" data-aos="fade">
        <video
          v-lazy-load
          type="video/mp4"
          preload="auto"
          autoplay
          muted
          loop
          class="bg-video"
          src="@/assets/img/home/loop.mp4"
        ></video>
      </div>

      <div class="intro" data-aos="fade">
        <div class="intro-content">
          <div class="yt-box"></div>
        </div>
        <img
          v-lazy-load
          class="intro-bg"
          src="@/assets/img/home/bg.svg"
          alt=""
          srcset=""
        />
      </div>

      <div class="brands" data-aos="fade">
        <img
          v-lazy-load
          src="@/assets/img/home/brands.svg"
          alt=""
          srcset=""
        />
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
    width: 100%;
    border-bottom: 1px solid;
    .bg-video {
      width: 100%;
      vertical-align: bottom;
    }
  }

  .intro {
    position: relative;
    width: 100%;
    border-bottom: 1px solid;
    padding-top: 20vw;
    .intro-content {
      z-index: 1;
      position: relative;
      width: 70vw;
      text-align: center;
      margin: 0 auto;
      .yt-box {
        width: 100%;
        margin: 0 auto;
        height: 0;
        padding-bottom: 56.25%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("@/assets/img/home/intro-preview.jpg");
      }
    }
    .intro-bg {
      position: absolute;
      width: 90vw;
      top: 5vw;
      left: 5vw;
    }
  }

  .brands {
    max-width: 70vw;
    display: flex;
    flex-wrap: wrap;
    margin: 5vw auto 5vw auto;
    img {
      width: 100%;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() { },
};
</script>
