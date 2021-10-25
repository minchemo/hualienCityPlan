<template>
  <div>
    <div class="info2">
      <div class="info-download">
        <span @click="download">下載展區地圖</span>
      </div>
      <div class="info-map">
        <div class="map">
          <img
            v-if="!$device.isMobile"
            src="@/assets/img/info/map.png"
            alt=""
            srcset=""
          />
          <img v-else src="@/assets/img/info/map_mo.png" alt="" srcset="" />
        </div>
        <div class="tag1" v-show="!$device.isMobile">
          <img src="@/assets/img/info/map_tag.svg" alt="" srcset="" />
        </div>
      </div>
      <div class="info-map-control" v-show="$device.isMobile">
        <div
          class="arrow prev"
          @click="mapPrev"
          v-bind:class="{ disabled: scrollPos <= 10 }"
        >
          <img src="@/assets/img/info/arrow.svg" alt="" srcset="" />
        </div>

        <span>地圖索引</span>
        <div
          class="arrow next"
          @click="mapNext"
          v-bind:class="{ disabled: scrollPos >= 80 }"
        >
          <img src="@/assets/img/info/arrow.svg" alt="" srcset="" />
        </div>
      </div>
      <div class="info-map-progress" v-show="$device.isMobile">
        <span ref="scrollProgress"></span>
      </div>
      <div class="info-map-detail" ref="mapDetail">
        <img
          v-if="!$device.isMobile"
          src="@/assets/img/info/map_tag_2.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          src="@/assets/img/info/map_detail_mo.svg"
          alt=""
          srcset=""
        />
      </div>
      <div class="info-warning">
        ＊主辦單位保留活動異動權<br />
        ＊參加本活動者須配合政府防疫公告相關措施
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.info2 {
  position: relative;
  width: 100vw;
  margin: 0 auto;
  padding-top: 5vw;
  .info-download {
    font-size: 1.7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3vw 0;
    span {
      border: 1px solid #dcc8eb;
      color: #e8c6ee;
      font-weight: bold;
      padding: 1.5vw;
      border-radius: 100%;
      letter-spacing: 0.2vw;
      &:hover {
        color: #fff;
        background: #dcc8eb;
        cursor: pointer;
      }
    }
  }
  .info-map {
    width: 80%;
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    flex-wrap: nowrap;
    .map {
      width: 45%;
      padding-right: 5vw;
      img {
        width: 100%;
      }
    }
    .tag1 {
      width: 55%;
      img {
        width: 100%;
      }
    }
  }
  .info-map-detail {
    width: 80%;
    margin: 5vw auto;
    img {
      width: 100%;
    }
  }
  .info-warning {
    font-size: 1vw;
    text-align: center;
    margin: 5vw 0;
    line-height: 1.8;
  }
}

@media screen and (max-width: 500px) {
  .info2 {
    position: relative;
    width: 100vw;
    margin: 0 auto;
    padding-top: 5vw;
    .info-download {
      font-size: 18.35pt;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 14vw 0;
      span {
        border: 1px solid #dcc8eb;
        color: #e8c6ee;
        font-weight: bold;
        padding: 16pt;
        border-radius: 100%;
        letter-spacing: 0.2vw;
        &:hover {
          color: #fff;
          background: #dcc8eb;
          cursor: pointer;
        }
      }
    }
    .info-map {
      width: 92%;
      display: flex;
      align-items: flex-end;
      margin: 0 auto;
      flex-wrap: nowrap;
      .map {
        width: 100%;
        padding-right: 0;
        img {
          width: 100%;
        }
      }
      .tag1 {
        width: 55%;
        img {
          width: 100%;
        }
      }
    }
    .info-map-control {
      width: 92%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10vw auto;
      font-size: 14pt;
      font-weight: bold;
      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 5vw;
        }
        &.disabled {
          opacity: 0.2;
        }
      }
      .prev {
        transform: rotate(-180deg);
        transform-origin: center;
      }
    }
    .info-map-progress {
      margin: 10vw auto;
      width: 92%;
      height: 1px;
      background: #c4c4c4;
      overflow: hidden;
      position: relative;
      span {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% / 8);
        height: 1px;
        background: #262626;
        z-index: 1;
        transition: all 0.25s linear;
      }
    }
    .info-map-detail {
      width: 92%;
      margin: 5vw auto;
      height: 550px;
      overflow-x: scroll;
      overflow-y: hidden;
      position: relative;
      img {
        width: auto;
        height: 100%;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .info-warning {
      margin: 10vw 0;
      font-size: 9pt;
    }
  }
}
</style>
<script>
import smoothscroll from 'smoothscroll-polyfill';

export default {
  data() {
    return {
      downloadUrl: require('@/assets/img/info/map_download.jpg'),
      totalScollWidth: 2556.1,
      scrollPos: 0,
      scrollStep: 0,
      scrollParam: [
        {
          step: 0,
          offsetRatio: 0,
        },
        {
          step: 1,
          offsetRatio: 0.1338,
        },
        {
          step: 2,
          offsetRatio: 0.2887,
        },
        {
          step: 3,
          offsetRatio: 0.4272,
        },
        {
          step: 4,
          offsetRatio: 0.55983,
        },
        {
          step: 5,
          offsetRatio: 0.675247,
        },
        {
          step: 6,
          offsetRatio: 0.788701,
        },
        {
          step: 7,
          offsetRatio: 0.89746,
        },
      ],
      scrollOptions: {
        container: ".info-map-detail",
        offset: 0,
        x: true,
        y: false,
      },
    }
  },
  methods: {
    download() {
      let a = document.createElement('a');
      a.href = this.downloadUrl;
      a.download = "花蓮城市空間藝術節 - 展區地圖.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    mapPrev() {
      if (this.scrollStep - 1 < 0) {
        return
      }
      this.scrollStep--;
      this.$refs.mapDetail.scrollTo({ left: this.getScrollStepOffset(), behavior: 'smooth' });
    },
    mapNext() {
      if (this.scrollStep + 1 > 7) {
        return
      }
      this.scrollStep++;
      this.$refs.mapDetail.scrollTo({ left: this.getScrollStepOffset(), behavior: 'smooth' });
    },
    getScrollStepOffset() {
      const stepOffset = this.scrollParam.find(item => item.step == this.scrollStep);
      let offset = this.totalScollWidth * stepOffset.offsetRatio;
      return offset;
    },
  },
  created() {
  },
  mounted() {
    smoothscroll.polyfill();
    const scrollEl = this.$refs.mapDetail;
    scrollEl.addEventListener('scroll', () => {
      let scrollLeft = scrollEl.scrollLeft / this.totalScollWidth;
      this.$refs.scrollProgress.style.left = scrollLeft * 100 + '%'

      this.scrollPos = scrollLeft * 100;

console.log(scrollLeft);
      if (scrollLeft >= 0 && scrollLeft <= 0.1337) {
        this.scrollStep = 0;
      } else if (scrollLeft >= 0.1337 && scrollLeft <= 0.2886) {
        this.scrollStep = 1;
      } else if (scrollLeft >= 0.2886 && scrollLeft <= 0.4271) {
        this.scrollStep = 2;
      } else if (scrollLeft >= 0.4271 && scrollLeft <= 0.55982) {
        this.scrollStep = 3;
      } else if (scrollLeft >= 0.55982 && scrollLeft <= 0.675246) {
        this.scrollStep = 4;
      } else if (scrollLeft >= 0.675246 && scrollLeft <= 0.788700) {
        this.scrollStep = 5;
      } else if (scrollLeft >= 0.788700 && scrollLeft <= 0.89745) {
        this.scrollStep = 6;
      } else if (scrollLeft >= 0.89745 && scrollLeft <= 1) {
        this.scrollStep = 7;
      }

      console.log(this.scrollStep);

    })
  },
}
</script>
