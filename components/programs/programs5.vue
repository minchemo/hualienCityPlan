<template>
  <div>
    <div class="program5">
      <div class="program-title">
        <h2 class="title">特別場域</h2>
        <div class="subtitle join-fix">
          豐田村秘境

          <div class="join" v-show="$device.isMobile">
            <p>
              <b>進行方式</b><br />於花蓮文創園區明義街停車場出口旁<br />
              於時間點集合，搭乘巴士前往豐田村<br />＊需預先報名
            </p>

            <a href="https://forms.gle/CfedrBiU1yNW3CJS6" target="_blank">
              <div class="join-btn">點我報名</div>
            </a>
            <img
              class="arrow"
              src="@/assets/img/program/4-5豐田村秘境/arrow.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <p class="content border-top">
          在花蓮狹長的縱谷上，有著許多活力聚落，有著自己的傳統，創造著自己的生活。豐田村是今年從日治<br
            v-show="!$device.isMobile"
          />以來，隨著產業而演進，依然保有悠緩的生活步調，這座耐人尋味的歷史小鎮，邀請你化身為居民，進<br
            v-show="!$device.isMobile"
          />入時光探索的臨場對話，看見花蓮肌理中的進化之聲。
        </p>
        <div class="divider">
          <img
            v-if="!$device.isMobile"
            src="@/assets/img/program/4-5豐田村秘境/bg.png"
            alt=""
            srcset=""
          />
          <img
            v-else
            src="@/assets/img/program/4-5豐田村秘境/bg_mo.png"
            alt=""
            srcset=""
          />
          <div class="join" v-show="!$device.isMobile">
            <p>
              <b>進行方式</b><br />於花蓮文創園區明義街停車場出口旁<br />
              於時間點集合，搭乘巴士前往豐田村<br />＊需預先報名
            </p>

            <a href="https://forms.gle/CfedrBiU1yNW3CJS6" target="_blank">
              <div class="join-btn">點我報名</div>
            </a>
            <img
              class="arrow"
              src="@/assets/img/program/4-5豐田村秘境/arrow.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="odif">
          <img
            v-if="!$device.isMobile"
            src="@/assets/img/program/4-5豐田村秘境/odif.svg"
            alt=""
            srcset=""
          />
          <img
            v-else
            src="@/assets/img/program/4-5豐田村秘境/odif_mo.svg"
            alt=""
            srcset=""
          />
        </div>
        <h2 class="title margin-fix large">
          活動主題｜回家的聲音 One Day in Fengtian
        </h2>
        <div class="subtitle mobile small">
          報名場次｜11/20、11/21 ( 09:00 、 13:00 )<br />
          地點｜豐田村
        </div>
        <div class="introtitle"><b>活動介紹</b></div>
        <p class="content">
          以豐田幾位返鄉青年的真實返鄉故事出發，藉由真人農村RPG的形式，讓參與者實地體驗返鄉所遇到的<br />
          困境與挑戰；藉由當初返鄉青年們作為出發號角的竹炮DIY，在蒐集素材中也更認識農村的人、事、物<br />
          產與歷史。<br />
          <span class="en"
            >The "Voice of Going Home" rural RPG, together with participants,
            finds the voice of "home" <br />in rural areas where the population
            is declining and the number of children is declining.</span
          >
        </p>
        <div class="introtitle">
          <b>活動策劃</b>｜豐田移創指導所、社團法人花蓮縣牛犁社區交流協會
        </div>
        <p class="content">
          <b>豐田移創指導所  FengTian IDEA Lab</b><br />
藉由引進創意人口短或長期移駐，增進地方情感關係人口，打造下個世代的農村創意基地。<br /><br />

          <b>社團法人花蓮縣牛犁社區交流協會</b><br />
          以建立屬於現今居民特色的社區營造工作為志業，在民國九十年遂正式立案為「花蓮縣牛犁社區交流協會」，<br/>關懷觸角伸及村中的老人、婦女以及青少年，更關切自身的土地認同，透過對土地歷史、禮俗及生活紀事的追尋，逐漸為豐田－我們的家。<br />
          <span>
            <b>FengTian IDEA Lab</b><br />
            By introducing short-term or long-term migration of creative
            population, it will increase the <br />local emotional relationship
            population and create a rural creative base for the next generation.
          </span>
        </p>
        <div class="introtitle"></div>
        <p class="content">
          <span class="en">
            ＊注意事項<br />
            ①本活動採報名制<br />
            ②需著輕便易活動、防雨衣物，並自備防蚊蟲等貼身物品
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program5 {
  max-width: 70vw;
  margin: 0 auto;
  margin-bottom: 5vw;
  .program-title {
    margin: 5vw 0;
    .title {
      position: relative;
      font-size: 1.2vw;
      z-index: 1;
      &.margin-fix {
        margin-top: -15vw;
      }
    }
    .subtitle {
      position: relative;
      font-size: 2.5vw;
      font-weight: 700;
      z-index: 1;
      &.small {
        font-size: 1vw;
        line-height: 2;
      }
    }
    .introtitle {
      position: relative;
      font-size: 1.2vw;
      font-weight: 400;
      margin-top: 5vw;
      z-index: 1;
    }
    .content {
      position: relative;
      z-index: 1;
      font-size: 1vw;
      line-height: 2;
      letter-spacing: 0.05vw;
      span {
        color: #8c8c8c;
      }
    }
    .divider {
      position: relative;
      width: 100vw;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
      }

      .join {
        position: absolute;
        right: 15vw;
        top: -15vw;
        font-size: 1vw;
        text-align: right;
        line-height: 2;
        z-index: 2;
        p {
          color: #dcc8eb;
        }
        .join-btn {
          color: #dcc8eb;
          font-size: 2.5vw;
          font-weight: bold;
          padding: 1vw 1vw;
          border: 1px solid;
          border-radius: 100%;
          text-align: center;
          &:hover {
            background: #dcc8eb;
            color: #fff;
            cursor: pointer;
          }
        }
        .arrow {
          position: absolute;
          left: -1.5vw;
          bottom: -1.5vw;
          width: 2.5vw;
        }
      }
    }
  }

  .odif {
    width: 15vw;
    position: absolute;
    top: 37vw;
    right: 10vw;
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 500px) {
  .program5 {
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 20vw;
    .program-title {
      margin: 25vw 0 15vw 0;
      .title {
        font-size: 12pt;
        margin-bottom: 0vw;
        &.margin-fix {
          margin-top: 0;
        }
        &.large {
          font-size: 18pt;
        }
      }
      .subtitle {
        font-size: 18pt;
        line-height: 2;
        &.mobile {
          font-size: 10pt;
          margin-top: 10pt;
        }
        &.join-fix {
          margin-bottom: 90pt;
        }
        .join {
          position: absolute;
          right: 0;
          top: -20pt;
          font-size: 10pt;
          text-align: right;
          line-height: 2;
          z-index: 1;
          font-weight: 400;
          padding-top: 40pt;
          letter-spacing: 2px;
          p {
            color: #dcc8eb;
          }
          .join-btn {
            color: #dcc8eb;
            font-size: 12pt;
            font-weight: 400;
            padding: 2pt 8pt;
            border: 1px solid;
            border-radius: 100%;
            text-align: center;
            position: absolute;
            top: 0;
            right: 0;
            &:hover {
              background: #dcc8eb;
              color: #fff;
              cursor: pointer;
            }
          }
          .arrow {
            position: absolute;
            top: 30pt;
            right: 60pt;
            width: 16pt;
          }
        }
      }
      .introtitle {
        position: relative;
        font-size: 10pt;
        font-weight: 400;
        margin-top: 5vw;
        z-index: 1;
      }
      .content {
        font-size: 9.5pt;
        line-height: 2;
        letter-spacing: 0.05vw;
        margin: 4pt 0;
        text-align: justify;
        span {
          color: #8c8c8c;
        }
        &.border-top {
          border-top: 1px solid #262626;
          padding-top: 12pt;
        }
      }
      .divider {
        position: relative;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        margin: 40pt 0;
        img {
          width: 100%;
        }
      }
      .odif {
        width: 100vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 30pt;
        top: unset;
        right: unset;
        img {
          width: 60%;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
