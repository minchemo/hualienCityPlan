<template>
  <div>
    <div class="program5">
      <div class="program-title">
        <h2 class="title">特別場域</h2>
        <div class="subtitle">豐田村秘境</div>
        <p class="content">
          在花蓮狹長的縱谷上，有著許多活力聚落，有著自己的傳統，創造著自己的生活。豐田村是今年從日治<br />
          以來，隨著產業而演進，依然保有悠緩的生活步調，這座耐人尋味的歷史小鎮，邀請你化身為居民，進<br />
          入時光探索的臨場對話，看見花蓮肌理中的進化之聲。
        </p>
        <div class="divider">
          <img
            src="@/assets/img/program/4-5豐田村秘境/bg.png"
            alt=""
            srcset=""
          />
          <div class="join">
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
        <h2 class="title margin-fix">活動主題｜模擬富民</h2>
        <div class="subtitle">
          報名場次｜11/20、11/21 ( 09:00 - 13:00 )<br />
          地點｜豐田村
        </div>
        <div class="introtitle"><b>作品介紹</b></div>
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
        <div class="introtitle"><b>活動策劃</b>｜豐田移創指導所</div>
        <p class="content">
          藉由引進創意人口短或長期移駐，增進地方情感關係人口，打造下個世代的農村創意基地。<br />
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
      font-size: 2vw;
      font-weight: 700;
      z-index: 1;
    }
    .introtitle {
      position: relative;
      font-size: 1.2vw;
      font-weight: 400;
      margin-top: 5vw;
      z-index: 1;
    }
    .content {
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
        z-index: 1;
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
