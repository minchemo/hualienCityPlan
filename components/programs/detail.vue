<template>
  <div
    class="detail-popup"
    v-bind:class="$store.state.detailOpen ? 'active' : ''"
  >
    <div class="detail-content-box" ref="detail">
      <div class="tab" ref="tab">
        <template v-if="$store.state.detailTab.length > 1">
          <div class="tab-title" v-html="$store.state.currentDetailTitle"></div>
          <div class="tabs">
            <div
              class="item tabs-item"
              v-for="(tab, i) in $store.state.detailTab"
              :key="i"
              v-bind:class="activeTabName == tab.name ? 'active' : ''"
              @click="scroll(`detail-item-${i}`)"
            >
              {{ tab.name }}
            </div>
          </div>
        </template>
        <div class="close" @click="$store.commit('closeDetail')">
          <img src="@/assets/img/program/close.svg" alt="" srcset="" />
        </div>
      </div>
      <div
        class="detail-content"
        v-bind:class="$store.state.detailTab.length > 1 ? 'multi' : 'single'"
      >
        <template v-for="(data, i) in $store.state.detailTab">
          <div
            class="detail-item"
            :id="`detail-item-${i}`"
            :key="i"
            v-bind:class="
              $store.state.detailTab.length > 1 ? 'multiple' : 'single'
            "
            v-observe-visibility="{
              callback: visibilityChanged,
              intersection: intersection,
            }"
            :data-tab-name="data.name"
          >
            <div class="info">
              <div class="name">{{ data.name }}</div>
              <div class="enname">{{ data.enname }}</div>
              <div class="creator" v-if="data.creator">
                {{ data.creator }}
              </div>
              <div class="time" v-html="data.info"></div>
              <div class="warn" v-html="data.warn"></div>
            </div>
            <div class="slide">
              <div class="program-carousel-wrapper" v-if="data.name != ''">
                <VueSlickCarousel v-bind="slickOptions" :key="data.name">
                  <div
                    v-for="(img, i) in data.slides"
                    :key="i"
                    class="img-wrapper"
                    v-bind:style="{ 'background-image': 'url(' + img + ')' }"
                  ></div>
                </VueSlickCarousel>
              </div>
              <div
                ref="content"
                class="content"
                :key="data.name"
                v-html="data.content"
              ></div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="overlay" @click="$store.commit('closeDetail')"></div>
  </div>
</template>


<style lang="scss">
@import "@/assets/css/variable.scss";
.slide {
  .program-carousel-wrapper {
    padding: 0;
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
  .content {
    text-align: justify;
    a {
      color: $primaryColor;
    }
    .en {
      color: #8c8c8c;
      text-align: left;
    }
    .highlight {
      color: rgb(211, 168, 26);
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
    width: 70vw;
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
      position: sticky;
      top: 0;
      width: 100%;
      min-height: 4vw;
      background: #fff;
      z-index: 10;
      .tab-title {
        font-weight: 900;
        font-size: 0.7vw;
        letter-spacing: 0.1vw;
        padding: 2vw 3vw 0.5vw 3vw;
      }
      .tabs {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0vw 3vw 1vw 3vw;
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

          &.active {
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
        bottom: 0;
        left: -5%;
      }
      &::before {
        content: "";
        width: 1px;
        height: 99%;
        background: #fff;
        position: absolute;
        right: 3vw;
        top: 0;
        z-index: 1;
        pointer-events: none;
      }
      .close {
        position: absolute;
        right: 0.9vw;
        top: 0.9vw;
        width: 1vw;
        height: 1vw;
        z-index: 11;
        img {
          width: 100%;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }

    .detail-content {
      .detail-item {
        display: flex;
        width: 100%;
        position: relative;
        align-items: flex-start;
        margin-bottom: 3vw;
        border-top: 1px solid #262626;
        .info {
          padding: 2vw 1.5vw 0 2vw;
          box-sizing: border-box;
          width: 35%;
          .name {
            font-size: 1.8vw;
            font-weight: 900;
            line-height: 1.5;
          }
          .enname {
            font-size: 1.2vw;
            font-weight: 700;
            margin-top: 0.5vw;
          }
          .creator {
            font-size: 1vw;
            margin: 1vw 0 2vw 0;
            border-bottom: 1px solid #262626;
            padding-bottom: 2vw;
          }
          .time {
            font-size: 1vw;
            line-height: 2;
            letter-spacing: 1px;
          }
          .warn {
            color: #8c8c8c;
            font-size: 1vw;
            line-height: 2;
            margin-top: 0.5vw;
          }
        }
        .slide {
          //padding-right: 3vw;
          width: 65%;
          padding: 0 3vw 0 1.5vw;
          box-sizing: border-box;
          .content {
            margin-top: 2vw;
            font-size: 1vw;
            font-weight: 400;
            line-height: 2;
            letter-spacing: 0.1vw;
            &::-webkit-scrollbar {
              width: 2px;
            }
          }
        }

        &:first-child {
          border-top: 0;
        }
        &.multiple {
          .slide {
            .content {
              max-height: 10.6vw;
              overflow: auto;
            }
          }
        }
        &.single {
          .info {
            position: sticky;
            top: 4vw;
          }
        }
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

  &.active {
    .detail-content-box {
      transform: translateX(0%);
    }
    .overlay {
      transform: translateX(0%);
      opacity: 1;
      backdrop-filter: blur(10px);
      &:hover {
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        backdrop-filter: blur(5px);
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      intersection: {
        threshold: 0.6,
      },
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        dots: true,
        infinite: false,
        waitForAnimate: false,
        speed: 200,
      },
      activeTabName: "",
      scrollOptions: {
        container: ".detail-content-box",
        offset: 0,
        x: false,
      },
    };
  },
  computed: {
    detailOpen() {
      return this.$store.state.detailOpen;
    },
  },
  watch: {
    detailOpen(newState, oldState) {
      this.$refs.detail.scrollTop = 0;
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.activeTabName = entry.target.getAttribute("data-tab-name");
      }
    },
    scroll(id) {
      this.$scrollTo(document.getElementById(id), 300, this.scrollOptions);
    },
  },
  updated() {
    this.scrollOptions.offset = -this.$refs.tab.clientHeight + 1;
  },
};
</script>