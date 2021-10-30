<template>
  <div class="screen-rotate-warning" v-bind:class="{ active: showWarn }">
    <div class="demo-screen"></div>
    <p v-html="this.warnText"></p>
    <div class="close" @click="showWarn = false">關閉</div>
  </div>
</template>

<style lang="scss" scoped>
.screen-rotate-warning {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999998;
  background: #fff;
  left: 0;
  top: 0;
  transform: translateX(100%);
  transition: all 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .demo-screen {
    width: 20vw;
    height: 15vw;
    border: 4px solid;
    border-radius: 10px;
    margin-bottom: 50px;
    animation: rotate 2s infinite alternate-reverse;
  }
  p {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 200;
  }
  &.active {
    transform: translateX(0%);
  }
  .close {
    letter-spacing: 2px;
    color: gray;
  }

  @keyframes rotate {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
}

@media (orientation: landscape) {
  .screen-rotate-warning {
    .demo-screen {
      width: 10vw;
      height: 20vw;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      warnText: '',
      showWarn: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.check();
      window.addEventListener('resize', this.check);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.check);
  },

  methods: {
    check() {
      if (this.$device.isTablet) { //平板只能橫式
        if (window.innerHeight > window.innerWidth) {
          this.warnText = '為確保最佳視覺體驗，請調整您的螢幕方向'
          this.showWarn = true
        } else {
          this.showWarn = false
        }
      } else if (this.$device.isMobile) { //手機板只能直式

        if (window.innerHeight < window.innerWidth) {
          this.warnText = '為確保最佳視覺體驗，請調整您的螢幕方向'
          this.showWarn = true
        } else {
          this.showWarn = false
        }
      }
    }
  },
}
</script>
