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
      </div>

      <div class="intro">
        <div class="intro-content">
          <div class="yt-box">
            <img src="@/assets/img/home/intro-preview.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div class="brands">
        <img src="@/assets/img/home/brands/groups.svg" alt="" srcset="" />
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
    overflow: hidden;
    .bg-video {
      width: 100%;
    }
  }

  .intro {
    width: 100%;
    border-bottom: 1px solid ;
    padding-top: 10vw;
    .intro-content {
      width: 80vw;
      text-align: center;
      margin: 0 auto;
      .yt-box {
        width: 70%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }
  }

  .brands {
    max-width: 80vw;
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
  mounted() {},
};
</script>
