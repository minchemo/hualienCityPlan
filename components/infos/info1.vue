<template>
  <div>
    <div class="info1">
      <div class="info-download">
        <span @click="download">下載節目單</span>
      </div>
      <div class="info-content">
        <img
          v-if="!$device.isMobile"
          src="@/assets/img/info/program_list.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          src="@/assets/img/info/program_list_mo.svg"
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

.info1 {
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
  .info-content {
    position: relative;
    width: 100%;
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
  .info1 {
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
    .info-content {
      position: relative;
      width: 100%;
      img {
        width: 100%;
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
      downloadUrl: require('@/assets/img/info/program_list_download.jpg')
    }
  },
  methods: {
    download() {
      let a = document.createElement('a');
      a.href = this.downloadUrl;
      a.download = "花蓮城市空間藝術節 - 節目單.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

  },
  created() {
  },
  mounted() {
  }
}
</script>
