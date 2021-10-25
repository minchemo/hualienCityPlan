<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1>主要展區</h1>
      <div class="info" data-aos="fade">
        <div class="info-item" v-for="(access, i) in accessList" :key="i">
          <div class="num" v-bind:style="{ color: access.color }">
            {{ access.num }}
          </div>
          <div class="info-content">
            <div class="title" v-html="access.title"></div>
            <div class="text" v-html="access.content"></div>
          </div>
        </div>
      </div>
      <div class="map" data-aos="fade">
        <img
          v-if="!$device.isMobile"
          src="@/assets/img/access/map.jpg"
          alt=""
          srcset=""
          v-lazy-load
        />
        <img
          v-else
          src="@/assets/img/access/map_mo.jpg"
          alt=""
          srcset=""
          v-lazy-load
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.content {
  .info {
    .info-item {
      .text {
        span {
          display: inline-block;
          &.light {
            color: #8c8c8c;
          }
        }
        h3 {
          margin: 0;
          span {
            font-weight: 400;
          }
        }
        .divider {
          width: 100%;
          height: 1px;
          margin: 1vw 0;
          background-image: linear-gradient(
            to right,
            black 33%,
            rgba(255, 255, 255, 0) 0%
          );
          background-position: bottom;
          background-size: 5px 1px;
          background-repeat: repeat-x;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.main {
  height: auto;
  margin-top: $pc_navbar_height;

  .content {
    max-width: 70vw;
    margin: 5vw auto;
    h1 {
      text-align: center;
      font-weight: 400;
      padding-top: 5vw;
      font-size: 2.5vw;
    }
    .info {
      margin-bottom: 5vw;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      .info-item {
        display: flex;
        flex-direction: column;
        padding: 0 1vw;
        border-right: 1px solid #262626;
        border-top: 1px solid #262626;
        .num {
          display: block;
          text-align: center;
          font-size: 12vw;
          font-weight: bold;
        }
        .title {
          font-size: 1.5vw;
          line-height: 1.5;
          font-weight: bold;
          margin-bottom: 1vw;
        }
        .text {
          border-top: 1px solid #262626;
          padding-top: 1vw;
          font-size: 0.9vw;
          line-height: 2;
          letter-spacing: 0.1vw;
        }
        &:last-child {
          border-right: 0;
        }
      }
    }
    .map {
      background-image: url("@/assets/img/access/map.jpg");
      background-size: cover;
      img {
        width: 100%;
        visibility: hidden;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .main {
    height: auto;
    margin-top: $mo_navbar_height;

    .content {
      max-width: 100vw;
      margin: 0;
      h1 {
        text-align: center;
        font-weight: 400;
        padding: 5vw;
        font-size: 18pt;
        border-bottom: 1px solid #262626;
      }
      .info {
        margin-bottom: 5vw;
        grid-template-columns: repeat(1, 1fr);
        .info-item {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0 1vw;
          border-right: 0;
          border-top: 0;
          align-items: center;
          margin: 5vw 0;
          padding-bottom: 10vw;
          border-bottom: 1px solid;
          .num {
            display: block;
            text-align: left;
            font-size: 30vw;
            font-weight: bold;
            width: 50vw;
            position: absolute;
            letter-spacing: 0;
            line-height: 1;
            margin-top: -5pt;
            top: 0;
            transform: translateX(-12vw);
          }
          .info-content {
            border-left: 1px solid #262626;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-left: 30vw;
            padding-left: 5vw;
            padding-right: 5vw;
            .title {
              font-size: 18pt;
              line-height: 1.5;
              font-weight: bold;
              margin-bottom: 8vw;
            }
            .text {
              border-top: 0;
              padding-top: 1vw;
              font-size: 10pt;
              line-height: 2;
              letter-spacing: 0.1vw;
            }
          }
          &:last-child {
            border-right: 0;
          }
        }
      }
      .map {
        padding: 5vw 5vw;
        background-image: url("@/assets/img/access/map_mo.jpg");
        img {
          width: 100%;
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
      accessList: [
        {
          num: "01",
          color: "#6EB9EB",
          title: "花蓮<br/>日出大道",
          content: this.$device.isMobile
            ? `主要活動區域為花蓮市自由街，自上海街到重慶路段，建議抵達市區後步行參與。`
            : `<h3>主要活動區域為花蓮市自由街，自上海街到重慶路段，建議抵達市區後步行參與。</h3>`,
        },
        {
          num: "02",
          color: "#DCC8EB",
          title: "花蓮文化創意<br/>產業園區",
          content: `
          <h3>1.自行開車(北往南)</h3>國道5號「蘇澳交流道」下 -「省道臺9線」<br/><br/>
          <h3>2.大眾運輸<span>｜搭臺鐵至花蓮站轉乘公車</span></h3>
          <div class="divider"></div>
          <b>至花蓮文創園區(文化園區站)</b><br/>
          ①花蓮客運｜<span class="light">路線編號：1126、1129、1131、1132、1133、1136、1139、1141</span><br/>
          ②太魯閣客運｜<span class="light">路線編號：301</span><br/>
          ③首都客運｜<span class="light">路線編號：307</span><br/><br/>
          <b>至中正站(步行1分鐘到花蓮文創園區)</b><br/>
          ①花蓮客運｜<span class="light">路線編號：1121、1122、1127、1128、1140、1145</span><br/>
          `,
        },
        {
          num: "03",
          color: "#C8E6FA",
          title: "太平洋公園<br/>南濱段",
          content: `
          <h3>1.自行開車(北往南)</h3>國道5號「蘇澳交流道」下 -「省道臺9線」-「縣道193線」<br/><br/>
          <h3>2.大眾運輸<span>｜搭臺鐵至花蓮站轉乘公車</span></h3><div class="divider"></div>國道5號「蘇澳交流道」下 -「省道臺9線」
          `,
        },
        {
          num: "04",
          color: "#C3CDEB",
          title: "豐田村<br/>Fengtian Village",
          content: `
          <h3>1.自行開車(北往南)</h3>由花蓮市沿台十一丙線南下，至豐裡村右轉<br/><br/>
          <h3>2.大眾運輸</h3>搭乘台鐵東部幹線，於豐田站下車
          `,
        },
      ],
    };
  },
  mounted() {},
};
</script>
