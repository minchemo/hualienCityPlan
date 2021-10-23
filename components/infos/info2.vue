<template>
  <div>
    <div class="info2">
      <div class="info-download">
        <span @click="download">下載展區地圖</span>
      </div>
      <div class="info-map" v-show="false">
        <div class="map">
          <img
            v-if="!$device.isMobile"
            src="@/assets/img/info/map.jpg"
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
          v-bind:class="{ disabled: scrollStep == 0 }"
        >
          <img src="@/assets/img/info/arrow.svg" alt="" srcset="" />
        </div>

        <span>地圖索引</span>
        <div
          class="arrow next"
          @click="mapNext"
          v-bind:class="{ disabled: scrollStep >= 6 }"
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
          width: 103%;
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
        &:hover {
          opacity: 0.3;
        }
        &:active {
          opacity: 0.3;
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
        width: calc(100% / 6);
        height: 1px;
        background: #262626;
        z-index: 1;
        transition: all .5s;
      }
    }
    .info-map-detail {
      width: 92%;
      margin: 5vw auto;
      height: 550px;
      overflow-x: scroll;
      overflow-y: hidden;
      position: relative;
      pointer-events: none;
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

export default {
  data() {
    return {
      downloadUrl: require('@/assets/img/info/map_download.jpg'),
      totalScollWidth: 2064,
      scrollStep: 0,
      scrollParam: [
        {
          step: 0,
          offsetRatio: 0,
        },
        {
          step: 1,
          offsetRatio: 0.12,
        },
        {
          step: 2,
          offsetRatio: 0.27,
        },
        {
          step: 3,
          offsetRatio: 0.44,
        },
        {
          step: 4,
          offsetRatio: 0.57,
        },
        {
          step: 5,
          offsetRatio: 0.71,
        },
        {
          step: 6,
          offsetRatio: 0.82,
        },
      ]
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
      if (this.scrollStep + 1 > 6) {
        return
      }
      this.scrollStep++;
      this.$refs.mapDetail.scrollTo({ left: this.getScrollStepOffset(), behavior: 'smooth' });
    },
    getScrollStepOffset() {
      const stepOffset = this.scrollParam.find(item => item.step == this.scrollStep);
      let offset = this.totalScollWidth * stepOffset.offsetRatio;
      
      this.$refs.scrollProgress.style.left = stepOffset.offsetRatio * 100 + '%';
      return offset;
    },

  },
  created() {
  },
  mounted() {
  },
}
</script>
