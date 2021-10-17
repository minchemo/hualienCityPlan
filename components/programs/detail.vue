<template>
  <div
    class="detail-popup"
    v-bind:class="$store.state.detailOpen ? 'active' : ''"
  >
    <div class="detail-content-box">
      <div class="close" @click="$store.commit('closeDetail')">
        <img src="@/assets/img/program/close.svg" alt="" srcset="" />
      </div>
      <div class="tab">
        <div class="tab-title" v-html="$store.state.currentDetailTitle"></div>
        <div class="tabs">
          <template v-if="$store.state.detailTab.length > 1">
            <div
              class="item"
              v-for="(tab, i) in $store.state.detailTab"
              :key="i"
              @click="$store.commit('setCurrentDetailTab', tab)"
            >
              {{ tab.name }}
            </div>
          </template>
        </div>
      </div>
      <div
        class="program-carousel-wrapper"
        v-if="$store.state.currentDetailTab.name != ''"
      >
        <VueSlickCarousel
          v-bind="slickOptions"
          :key="$store.state.currentDetailTab.name"
        >
          <div
            v-for="(img, i) in $store.state.currentDetailTab.slides"
            :key="i"
            class="img-wrapper"
            v-bind:style="{ 'background-image': 'url(' + img + ')' }"
          ></div>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="overlay" @click="$store.commit('closeDetail')"></div>
  </div>
</template>

<style lang="scss">
.program-carousel-wrapper {
  padding: 0 2vw;
  .img-wrapper {
    height: 0;
    padding-bottom: 75%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .slick-arrow {
    cursor: pointer;
    &.slick-prev {
      z-index: 1;
      width: 2vw;
      height: 2vw;
      position: absolute;
      left: 1vw;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0;
      background-image: url("@/assets/img/program/prev.svg");
      background-size: cover;
    }
    &.slick-next {
      z-index: 1;
      width: 2vw;
      height: 2vw;
      position: absolute;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0;
      background-image: url("@/assets/img/program/next.svg");
      background-size: cover;
    }
    &.slick-disabled {
      opacity: 0 !important;
      pointer-events: none;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .slick-dots {
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 2vw;
    left: 0;
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      font-size: 0;
      width: 2vw;
      height: 1px;
      margin: 0 0.3vw;
      padding: 0.3vw 0;
      cursor: pointer;
      position: relative;
      &:after {
        content: "";
        background: #000;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        opacity: 0.3;
        z-index: 1;
      }
      &.slick-active {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.detail-popup {
  position: relative;
  overscroll-behavior: contain;
  .detail-content-box {
    position: fixed;
    width: 60vw;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 1000;
    transform: translateX(100%);
    transition: all 0.3s;
    background: #fff;
    overflow-y: scroll;
    overflow-x: hidden;

    .tab {
      position: relative;
      width: 94%;
      margin: 2vw auto;
      .tab-title {
        font-weight: 900;
        font-size: 0.7vw;
        letter-spacing: 0.1vw;
        padding-bottom: 0.5vw;
      }
      .tabs {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .item {
          letter-spacing: 0.1vw;
          padding: 0.5vw;
          text-align: center;
          flex: auto;
          border-top: 1px solid #262626;
          border-right: 1px solid #262626;
          font-size: 0.7vw;
          margin-top: 0.5vw;
          &:last-child {
            border-right: 0;
          }
          &:hover {
            cursor: pointer;
            color: $primaryColor;
          }
        }
      }
      &::after {
        content: "";
        width: 110%;
        height: 1px;
        background: #262626;
        position: absolute;
        bottom: -1.5vw;
        left: -5%;
      }
      &::before {
        content: "";
        width: 1px;
        height: 100%;
        background: #fff;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        pointer-events: none;
      }
    }
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.1s;
    transform: translateX(-100%);
    opacity: 0;
  }
  .close {
    position: absolute;
    right: 0.9vw;
    top: 0.9vw;
    width: 1vw;
    height: 1vw;
    img {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  &.active {
    .detail-content-box {
      transform: translateX(0%);
    }
    .overlay {
      transform: translateX(0%);
      opacity: 1;
      backdrop-filter: blur(10px);
      &:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        backdrop-filter: blur(0px);
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        dots: true,
        infinite: false,
        waitForAnimate: false,
        speed: 200
      }
    }
  },
  methods: {
  }
}
</script>