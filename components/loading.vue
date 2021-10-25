<template>
  <div v-if="loading" class="loading-page" ref="loadingPage">
    <div class="info">
      <h1>花蓮<br />城市空間<br />藝術節</h1>
      <p>hualien performing<br />public space<br />festival</p>
      <div class="loader">
        <span ref="progress"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    progress: 0,
    timeout: 5000,
    timeoutInstance: null,
  }),
  methods: {
    start() {
      this.loading = true;

      this.load();
      this.$store.commit("forceCloseMobileMenu");
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    },
    finish() {
      this.loading = false;
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    },
    setProgress(value) {
      this.progress = this.progress + value;

      if (this.$refs.progress) {
        this.$refs.progress.style.width = this.progress + "%";
      }

      if (this.progress >= 100) {
        clearTimeout(this.timeoutInstance);
        setTimeout(() => {
          this.progress = 0;
          if (this.$refs.loadingPage)
            this.$refs.loadingPage.classList.add("fadeOut");
          setTimeout(() => {
            this.finish();
          }, 800);
        }, 500);
      }
    },
    load() {
      let elems = [];
      const images = document.getElementsByTagName("img");
      const video = document.getElementsByTagName("video");

      images.forEach((item) => {
        elems.push(item);
      });
      video.forEach((item) => {
        elems.push(item);
      });

      const eachPercentage = Math.ceil(100 / elems.length);

      const self = this;

      this.timeoutInstance = setTimeout(() => {
        if (this.progress < 80) {
          this.setProgress(100);
        }
      }, this.timeout);

      elems.forEach((element) => {
        let tagName = element.tagName;

        if (tagName == "IMG") {
          var img = new Image();
          img.onload = () => {
            self.setProgress(eachPercentage);
          };

          img.src = element.getAttribute("data-src");
        } else {
          let loopFilmUrl = require('@/assets/img/home/loop.mp4');
          var r = new XMLHttpRequest();
          r.onload = function () {
            document.getElementById("main-v").play();
            self.setProgress(eachPercentage);
          };
          r.open("GET", loopFilmUrl);
          r.responseType = "blob";
          r.send();
        }
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  transition: all 1s;
  backdrop-filter: blur(10px);
  overflow: hidden;
  .info {
    h1 {
      font-size: 3vw;
      line-height: 1.3;
      letter-spacing: 0.6vw;
      margin-top: 0;
      margin-bottom: 1vw;
    }
    p {
      text-transform: uppercase;
      font-size: 0.9vw;
    }
    .loader {
      position: relative;
      margin-top: 1.5vw;
      width: 100%;
      height: 2px;
      background: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 0%;
        max-width: 100%;
        background: #000;
        transition: all 0.3s;
      }
    }
  }

  &.fadeOut {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
}
@media screen and (max-width: 500px) {
  .loading-page {
    .info {
      h1 {
        font-size: 8vw;
        line-height: 1.3;
        letter-spacing: 4pt;
        margin-bottom: 4pt;
      }
      p {
        font-size: 12px;
        transform: scale(0.8);
        transform-origin: left top;
      }
      .loader {
        position: relative;
        margin-top: 1.5vw;
        width: 100%;
        height: 2px;
        background: rgba(0, 0, 0, 0.3);
        span {
          display: block;
          position: absolute;
          height: 2px;
          width: 0%;
          max-width: 100%;
          left: 0;
          top: 0;
          background: #000;
          transition: all 0.3s;
        }
      }
    }
  }
}
</style>
