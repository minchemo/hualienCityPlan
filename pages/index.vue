<template>
  <div>
    <div class="main">
      <Navbar />
      <div class="bg" data-aos="fade">
        <video
          id="main-v"
          type="video/mp4"
          preload="auto"
          autoplay
          muted
          loop
          playsinline
          class="bg-video"
          src="@/assets/img/home/loop.mp4"
        ></video>
      </div>

      <div class="intro" data-aos="fade">
        <div class="intro-content">
          <div class="yt-box"></div>
        </div>
        <img
          class="intro-bg-first"
          src="@/assets/img/home/bg_0_mo.svg"
          alt=""
          srcset=""
          v-show="$device.isMobile"
        />
        <img
          class="intro-bg"
          src="@/assets/img/home/bg.svg"
          alt=""
          srcset=""
          v-if="!$device.isMobile"
        />
        <img
          v-else
          class="intro-bg"
          src="@/assets/img/home/bg_1_mo.svg"
          alt=""
          srcset=""
        />
        <img
          v-show="$device.isMobile"
          class="intro-bg2"
          src="@/assets/img/home/bg_2_mo.svg"
          alt=""
          srcset=""
        />
      </div>

      <div class="brands" data-aos="fade">
        <img
          v-if="!$device.isMobile"
          v-lazy-load
          src="@/assets/img/home/brands.png"
          alt=""
          srcset=""
        />
        <img
          v-else
          v-lazy-load
          src="@/assets/img/home/brands_mo.png"
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
        border: 1px solid #262626;
        border-bottom: 0;
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
    margin: 5vw auto 5vw auto;
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 500px) {
  .main {
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
      width: 100%;
      padding-top: 133vw;
      padding-bottom: 106pt;
      position: relative;
      .intro-content {
        z-index: 1;
        position: relative;
        width: 100vw;
        text-align: center;
        margin: 0 auto;
      }
      .intro-bg-first {
        position: absolute;
        width: 70vw;
        top: 10vw;
        left: 15vw;
      }
      .intro-bg {
        position: absolute;
        width: 90vw;
        top: 100vw;
        left: 5vw;
      }
      .intro-bg2 {
        position: absolute;
        width: 63vw;
        bottom: 5vw;
        left: 5vw;
      }
      &:after {
        content: "";
        width: 100vw;
        height: 1px;
        background: #262626;
        position: absolute;
        top: 95vw;
        left: 0;
      }
    }

    .brands {
      max-width: 80vw;
      margin: 15vw auto 15vw auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
};
</script>
