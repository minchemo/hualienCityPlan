<template>
  <div>
    <div class="info1">
      <div class="show-list" id="show-list">
        <div
          class="show-item"
          v-for="(item, i) in list"
          :key="i"
          v-bind:class="item.header == true ? 'header' : ''"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div class="show-name" v-html="item.name"></div>
          <div class="show-time" v-html="item.time"></div>
        </div>
      </div>
      <div class="download" data-aos="fade-up">
        <div @click="download()">
          <span v-if="isDownloading" v-html="DownloadingText"></span>
          <span v-else>下載節目單</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.info1 {
  position: relative;
  width: 60vw;
  margin: 0 auto;
  padding-top: 5vw;
  .show-list {
    width: 100%;
    .show-item {
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding-bottom: 2vw;
      margin-bottom: 2vw;
      .show-name {
        width: 50%;
        font-size: 1vw;
      }
      .show-time {
        width: 50%;
        font-size: 1vw;
      }

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      &.header {
        .show-name {
          font-weight: bold;
        }
        .show-time {
          font-weight: bold;
        }
      }
    }
  }
  .download {
    margin-top: 5vw;
    position: relative;
    text-align: right;
    div {
      display: inline;
      cursor: pointer;
      font-size: 1vw;
      font-weight: bold;
      text-decoration: underline;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
<script>

export default {
  data() {
    return {
      list: [
        {
          'name': '節目名稱',
          'time': '時間',
          'header': true
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
      ],
      isDownloading: false,
      DownloadingText: '處理中'
    }
  },
  methods: {
    // download() {
    //   const self = this;
    //   if (self.isDownloading == true) {
    //     return
    //   }

    //   self.isDownloading = true;

    //   html2canvas(document.querySelector("#show-list"), { scale: 1.5 }).then(canvas => {
    //     const dt = canvas.toDataURL('image/png');

    //     let link = document.createElement('a');
    //     link.download = 'HualienCity2021.png';
    //     link.href = dt;
    //     link.click();

    //     self.isDownloading = false;
    //   });

    // }

  },
  created() {
  },
  mounted() {
  }
}
</script>
