<template>
  <div
    class="detail-popup"
    v-bind:class="$store.state.detailOpen ? 'active' : ''"
  >
    <div class="detail-content-box" ref="detail">
      <div class="tab" ref="tab">
        <div
          class="tab-title"
          v-bind:class="{ single: $store.state.detailTab.length == 1 }"
        >
          {{ $store.state.currentDetailTitle }}
        </div>
        <template v-if="$store.state.detailTab.length > 1">
          <div class="tabs">
            <div
              class="item tabs-item"
              :id="`tabs-item-${i}`"
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
          <img
            v-if="!$device.isMobile"
            src="@/assets/img/program/close.svg"
            alt=""
            srcset=""
          />
          <img
            v-else
            src="@/assets/img/program/close_mo.svg"
            alt=""
            srcset=""
          />
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
            :data-tab-key="i"
          >
            <div class="info" v-show="!$device.isMobile">
              <div class="name">{{ data.name }}</div>
              <div class="enname">{{ data.enname }}</div>
              <div class="creator" v-if="data.creator">
                {{ data.creator }}
              </div>
              <div class="time" v-html="data.info"></div>
              <div class="warn" v-html="data.warn"></div>

              <div
                class="social-link"
                v-if="data.links.length > 0"
                v-show="!$device.isMobile"
              >
                <p></p>
                <template v-for="(link, i) in data.links">
                  <a :key="i" :href="link.link" target="_blank">
                    <img
                      :src="require(`@/assets/img/${link.type}.svg`)"
                      alt=""
                      srcset=""
                    />
                  </a>
                </template>
              </div>
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
                class="info"
                v-show="$device.isMobile"
                v-bind:class="{
                  'has-status': data.status > 0,
                  'right-social':
                    $nuxt.$route.fullPath == '/program#1' ||
                    $nuxt.$route.fullPath == '/program#3',
                }"
              >
                <div class="name">{{ data.name }}</div>
                <div class="enname">{{ data.enname }}</div>
                <div class="creator" v-if="data.creator">
                  {{ data.creator }}
                </div>
                <div class="time" v-html="data.info"></div>
                <div class="warn" v-html="data.warn"></div>

                <div class="social-link" v-if="data.links.length > 0">
                  <template v-for="(link, i) in data.links">
                    <a :key="i" :href="link.link" target="_blank">
                      <img
                        :src="require(`@/assets/img/${link.type}.svg`)"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </template>
                </div>

                <div
                  class="other-title"
                  v-show="$nuxt.$route.fullPath == '/program#4'"
                >
                  品牌故事
                </div>

                <div
                  class="question"
                  v-if="data.status > 0"
                  v-show="$device.isMobile"
                >
                  <div v-if="data.status == 2">問－答</div>
                  <div v-else-if="data.status == 1">問</div>
                </div>
              </div>
              <div
                ref="content"
                class="content"
                :key="data.name"
                v-html="data.content"
              ></div>
            </div>
            <div
              class="question"
              v-if="data.status > 0"
              v-show="!$device.isMobile"
            >
              <div v-if="data.status == 2">問-答</div>
              <div v-else-if="data.status == 1">問</div>
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
          background: #fff;
          width: 100%;
          height: 1px;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          opacity: 0.8;
          z-index: 1;
        }
        &.slick-active {
          &:after {
            opacity: 0.8;
            background: #000;
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

@media screen and (max-width: 500px) {
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
          width: 20pt;
          height: 20pt;
          left: 10pt;
        }
        &.slick-next {
          width: 20pt;
          height: 20pt;
          right: 10pt;
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
        bottom: 12pt;
        li {
          list-style: none;
          font-size: 0;
          width: 24pt;
          height: 1px;
          margin: 0 2pt;
          padding: 0.3vw 0;
          cursor: pointer;
          position: relative;
          &:after {
            content: "";
            background: #fff;
            width: 100%;
            height: 1px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            opacity: 0.8;
            z-index: 1;
          }
          &.slick-active {
            &:after {
              opacity: 0.8;
              background: #000;
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
        &.single {
          padding: 2vw 2vw 0.5vw 2vw;
        }
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
        margin-bottom: 0;
        border-top: 1px solid #262626;
        .info {
          padding: 2vw 1.5vw 0 2vw;
          box-sizing: border-box;
          width: 35%;
          height: 47vw;
          overflow-y: hidden;
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
            padding-bottom: 5vw;
            &::-webkit-scrollbar {
              width: 1px;
            }
          }
        }

        .question {
          position: absolute;
          left: 2vw;
          font-size: 7vw;
          top: 23vw;
          div {
            color: #c8e6fa !important;
            font-weight: 200;
          }
        }

        .social-link {
          display: flex;
          position: absolute;
          align-items: center;
          left: 2vw;
          bottom: 0vw;
          font-size: 1vw;
          p {
            margin: 0;
          }
          a {
            margin-left: 0.5vw;
            img {
              height: 1.5vw;
            }
            &:hover {
              opacity: 0.7;
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
              padding-right: 1.5vw;
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
      &.multi {
        .detail-item {
          padding-bottom: 2vw;
          .info {
            height: auto;
          }
          .social-link {
            display: flex;
            position: absolute;
            align-items: center;
            left: 2vw;
            bottom: 2vw;
            font-size: 1vw;
            p {
              margin: 0;
            }
            a {
              margin-left: 0.5vw;
              img {
                height: 1.5vw;
              }
              &:hover {
                opacity: 0.7;
              }
            }
          }

          .slide {
            .content {
              padding-bottom: 0vw;
            }
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

@media screen and (max-width: 500px) {
  .detail-popup {
    position: relative;
    overscroll-behavior: contain;
    .detail-content-box {
      position: fixed;
      width: 100vw;
      height: 100%;
      right: 0;
      top: 0;
      z-index: 1000;
      transform: translateX(100%);
      transition: all 0.3s;
      background: #fff;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 1px;
      }

      .tab {
        position: sticky;
        top: 0;
        width: 100%;
        min-height: 4vw;
        background: #fff;
        z-index: 10;
        .tab-title {
          font-weight: 900;
          font-size: 12pt;
          letter-spacing: 0.1vw;
          padding: 12pt 0;
          text-align: center;
          &.single {
            padding: 12pt 0;
          }
        }
        .tabs {
          flex-wrap: nowrap;
          padding: 0;
          max-width: 100%;
          overflow-y: hidden;
          overflow-x: scroll;
          justify-content: flex-start;
          .item {
            letter-spacing: 0.1vw;
            padding: 12pt;
            text-align: center;
            flex: 1;
            font-size: 10pt;
            margin-top: 0;
            white-space: nowrap;
            &:last-child {
              border-right: 0;
            }
            &:hover {
              color: unset;
            }

            &.active {
              color: $primaryColor;
            }
          }
          &::-webkit-scrollbar {
            display: none;
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
          display: none;
        }
        .close {
          position: absolute;
          right: unset;
          top: 12pt;
          left: 15pt;
          width: 8pt;
          height: 8pt;
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
          border-top: 1px solid #262626;
          .info {
            position: relative;
            padding: 5vw 10vw;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 5vw;
            height: auto;
            .name {
              font-size: 18pt;
            }
            .enname {
              font-size: 12pt;
              margin-bottom: 8pt 0;
            }
            .creator {
              font-size: 12pt;
              margin: 8pt 0;
              border-bottom: 0;
              padding-bottom: 2vw;
            }
            .time {
              font-size: 9pt;
            }
            .warn {
              font-size: 9pt;
              margin-top: 0.5vw;
            }

            .social-link {
              position: relative;
              left: 0;
              padding: 2vw 0;
              a {
                margin-left: 0;
                img {
                  height: 20pt;
                }
              }
            }

            .other-title {
              font-size: 10pt;
              margin-top: 16pt;
            }
            .question {
              position: absolute;
              right: 10vw;
              font-size: 30pt;
              top: 6vw;
              left: unset;
              writing-mode: vertical-rl;
              div {
                color: #c8e6fa !important;
                font-weight: 200;
              }
            }
            &:after {
              content: "";
              width: 80vw;
              height: 1px;
              background: #262626;
              position: absolute;
              bottom: 0;
              left: 10vw;
            }

            &.has-status {
              padding-right: 20vw;
              margin-bottom: 5vw;
            }
            &.right-social {
              padding-right: 20vw;
              margin-bottom: 10vw;
              .social-link {
                position: absolute;
                right: 10vw;
                left: unset;
                top: 4pt;
                padding: 5vw 0;
                align-items: flex-start;
                flex-direction: column;
                a {
                  margin-bottom: 7pt;
                  margin-left: 0;
                  img {
                    height: 20pt;
                    max-width: 20pt;
                  }
                }
              }
            }
          }
          .slide {
            //padding-right: 3vw;
            width: 100%;
            padding: 0;
            box-sizing: border-box;
            .content {
              margin-top: 0;
              font-size: 10pt;
              padding: 0 10vw 10vw 10vw;
              &::-webkit-scrollbar {
                width: 1px;
              }
            }
          }

          .social-link {
            display: flex;
            position: absolute;
            align-items: center;
            left: 2vw;
            bottom: 0vw;
            font-size: 1vw;
            p {
              margin: 0;
            }
            a {
              margin-left: 0.5vw;
              img {
                height: 1.5vw;
              }
              &:hover {
                opacity: 0.7;
              }
            }
          }

          &:first-child {
            border-top: 0;
          }
          &.multiple {
            .slide {
              .content {
                max-height: unset;
                padding: 10vw;
                padding-top: 0;
              }
            }
          }
          &.single {
            .info {
              position: relative;
              top: 4vw;
            }
          }
        }
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
      tabScrollOptions: {
        container: ".tabs",
        offset: 0,
        x: true,
        y: false,
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
        const tabKey = entry.target.getAttribute("data-tab-key");

        if (this.$device.isMobile) {
          this.$scrollTo(
            document.getElementById("tabs-item-" + tabKey),
            100,
            this.tabScrollOptions
          );
        }
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