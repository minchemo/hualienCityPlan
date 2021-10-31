<template>
  <div>
    <div class="main">
      <Navbar />
      <div class="bg">
        <video
          ref="video"
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

      <div class="intro">
        <div class="intro-content">
          <div class="yt-box" @click="ytOpen = !ytOpen"></div>
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

      <div class="brands">
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

    <div class="yt-popup" v-show="ytOpen" @click="ytOpen = !ytOpen">
      <iframe
        src="https://player.vimeo.com/video/640865953?h=a95e8ea666&autoplay=1&loop=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <div class="loading">Loading...</div>
    </div>
    <Rotate />
  </div>
</template>

<style lang="scss">
.yt-popup {
  iframe {
    position: relative;
    z-index: 1;
    width: 50vw;
    height: 28.2vw;
  }
}

@media screen and (max-width: 500px) {
  .yt-popup {
    iframe {
      width: 100vw;
      height: 56.49vw;
    }
  }
}
</style>

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
        &::after {
          content: "";
          width: 82pt;
          height: 82pt;
          background-image: url("@/assets/img/home/playbutton.svg");
          background-size: contain;
          background-repeat: no-repeat;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-top: -41pt;
          margin-left: -41pt;
          transition: all 0.2s;
        }
        &:hover {
          cursor: pointer;
          &:after {
            transform: scale(0.9);
          }
        }
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

.yt-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  transform: translateX(0%);
  cursor: pointer;
  .loading {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 16pt;
    color: #fff;
    z-index: 0;
    font-weight: 200;
    letter-spacing: 1px;
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
        .yt-box {
          border-bottom: 1px solid #262626;
          background-image: url("@/assets/img/home/intro-preview-mo.jpg");
          &::after {
            width: 30pt;
            height: 30pt;
            margin-top: -15pt;
            margin-left: -15pt;
          }
        }
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

  .yt-popup {
    &.active {
      transform: translateX(0%);
    }
  }
}
</style>
<script>
import Rotate from "@/components/rotate.vue";
export default {
  data() {
    return {
      ytOpen: false,
    };
  },
  mounted() {
  },
};
</script>
