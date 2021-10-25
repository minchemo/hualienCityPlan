<template>
  <div>
    <div class="program3">
      <div class="program-title">
        <h2 class="title">太平洋公園南濱段</h2>
        <div class="subtitle">南濱奔日流</div>
        <p class="content">
          海上日出，太陽一路奔向中央山脈，天空色彩魔幻萬變，這是花蓮獨特的環境濾鏡，潮汐拍打的節<br
            v-show="!$device.isMobile"
          />奏，成為度量時間的方法，人們隨天光而作息，生活因為緩慢而感官更加開闊。在南濱太平洋海岸<br
            v-show="!$device.isMobile"
          />，有巨大的珍貴石群佈落在沿岸邊，我們邀請自己在破曉前回到這裡，就像回家一樣，在這自然之<br
            v-show="!$device.isMobile"
          />中，我們以聲景吟遊，來迎接日出。<br /><br />

          日出開幕儀式｜<span>11.20（六）5:00-7:30</span><br />
          日出閉幕儀式｜<span>11.21（日）5:00-7:30</span><br />
          <span class="small"
            >＊演出為移動式觀賞動線，5:00從南濱入口開始。</span
          >
        </p>
      </div>

      <div class="program-item-box">
        <div
          class="program-item"
          v-for="(item, i) in list"
          :key="i"
          @click="
            $store.commit('openDetail', {
              tab: item.tab,
              title: `${item.title} ${item.subtitle}`,
            })
          "
        >
          <div
            class="program-item-title"
            v-html="item.title"
            v-bind:style="`color: ${item.color}`"
          ></div>
          <div class="program-item-cover">
            <img :src="item.img" alt="" />
          </div>
          <div class="program-item-subtitle" v-html="item.subtitle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program3 {
  max-width: 70vw;
  margin: 0 auto;
  margin-bottom: 5vw;
  .program-title {
    margin: 8vw 0;
    .title {
      font-size: 1.2vw;
    }
    .subtitle {
      font-size: 2.5vw;
      font-weight: 700;
    }
    .content {
      font-size: 1vw;
      line-height: 2;
      letter-spacing: 0.05vw;
      span {
        color: #8c8c8c;
        &.small {
          font-size: 0.9vw;
        }
      }
    }
  }

  .program-item-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 3vw;
    .program-item {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      padding-bottom: 2vw;
      margin: 0 1vw;
      .program-item-title {
        font-size: 7vw;
        font-weight: bold;
        transition: all 0.2s;
        position: relative;
      }
      .program-item-cover {
        position: relative;
        width: 100%;
        margin-top: -3vw;
        z-index: 1;
        img {
          width: 100%;
          vertical-align: bottom;
        }
      }
      .program-item-subtitle {
        position: absolute;
        font-size: 1.3vw;
        margin-top: 1vw;
        padding-right: 1.5vw;
        transition: all 0.2s;
        letter-spacing: 0.1vw;
        bottom: 0;
        left: 0;

        &::after {
          content: "";
          height: 1.3vw;
          width: 1.3vw;
          background-image: url("@/assets/img/program/arrow.svg");
          background-size: 95%;
          background-repeat: no-repeat;
          background-position: center center;
          position: absolute;
          right: 0;
          transition: all 0.2s;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &:hover {
        cursor: pointer;
        .program-item-title {
          transform: translateY(-3vw);
        }
        .program-item-subtitle {
          color: $primaryColor;
          &::after {
            transform: translateY(-50%) translateX(10px);
            background-image: url("@/assets/img/program/arrow_hover.svg");
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .program3 {
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 25vw;
    .program-title {
      margin: 25vw 0 15vw 0;
      .title {
        font-size: 12pt;
        margin-bottom: 2vw;
      }
      .subtitle {
        font-size: 18pt;
      }
      .content {
        font-size: 9.5pt;
        text-align: justify;
        margin-top: 7vw;
        span {
          color: #8c8c8c;
          &.small {
            font-size: 9pt;
          }
        }
      }
    }

    .program-item-box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 3vw;
      .program-item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        color: #fff;
        padding-bottom: 0;
        margin: 0;
        margin-bottom: 30pt;
        .program-item-title {
          font-size: 120pt;
          font-weight: bold;
          transition: all 0.2s;
          position: absolute;
          left: 0;
          margin-left: -25vw;
          height: 100%;
          line-height: 100%;
        }
        .program-item-cover {
          position: relative;
          width: 100%;
          margin-top: 0;
          z-index: 1;
          padding-left: 40%;
          img {
            width: 100%;
            vertical-align: bottom;
            border: 1px solid #262626;
          }
        }
        .program-item-subtitle {
          position: relative;
          font-size: 14pt;
          margin-top: 7pt;
          padding-right: 1.5vw;
          padding-left: 40%;
          transition: all 0.2s;
          letter-spacing: 0.1vw;
          bottom: 0;
          left: 0;
          width: 100%;

          &::after {
            content: "";
            height: 12pt;
            width: 12pt;
            background-image: url("@/assets/img/program/arrow.svg");
            background-size: 95%;
            background-repeat: no-repeat;
            background-position: center center;
            position: absolute;
            right: unset;
            margin-left: 2%;
            transition: all 0.2s;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &:hover {
          cursor: pointer;
          .program-item-title {
            transform: unset;
          }
          .program-item-subtitle {
            color: $primaryColor;
            &::after {
              transform: translateY(-50%) translateX(10px);
              background-image: url("@/assets/img/program/arrow_hover.svg");
            }
          }
        }

        &::before {
          content: "";
          width: 100vw;
          height: 1px;
          background: #262626;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
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
      list: [
        {
          title: "01",
          subtitle: "嘎造・伊漾",
          color: "#6EB9EB",
          img: require("@/assets/img/program/4-3南濱奔日流/01.jpg"),
          tab: [
            {
              name: "嘎造・伊漾 Kacaw.Iyang",
              info: `場次｜11/20（六）、 11/21（日）<br>時間｜05:00 - 05:25`,
              content: `花蓮玉里下德武部落人，只是一名出現在劇場裡的原住民。國立臺北藝術大學劇場藝術創作研究所表演組畢業。曾參演台南人劇團、瘋戲樂工作室、愛樂劇工廠、舞鈴劇場、刺點創作工坊、複象公場等劇團作品，為舞台劇／音樂劇演員，目前任教於基隆崇右影藝科技大學。於2018年創立「部落劇會所」，常用神話故事透過劇場的各種形式與社會對話，尋找現代人聽神話的必要性，致力於將劇場與傳承議題做結合，說那些該被「傳承」的事。`,
              slides: [
                // require("@/assets/img/program/4-3南濱奔日流/01-1部落聚會所.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/01-2部落聚會所.jpg"),
              ],
              links: [],
              warn: "*實際出場時間將依日出狀況調整，演出順序不變。",
            },
          ],
        },
        {
          title: "02",
          subtitle: "汝妮",
          color: "#DCC8EB",
          img: require("@/assets/img/program/4-3南濱奔日流/02.jpg"),
          tab: [
            {
              name: "DJ 汝妮 DUNGI SAPOR",
              info: `場次｜11/20（六）、 11/21（日）<br>時間｜05:25-05:45`,
              content: `來自花蓮阿美族的Dungi非常珍視傳統文化，在部落採集外面聽不到的聲音，不斷嘗試堅硬的敲擊聲碰撞富有文化感的古調，創造出動人心弦的電子音樂。<br/><br/>

汝妮有著古典鋼琴及舞蹈的底子，不侷限任何音樂類型，在奠下基礎後，2015年進入DJ生涯，不斷挑戰清楚建立出自己的聲響辨識，使她的音樂場景擁有獨特品味，表演中大膽拼湊自我意識的風格，被稱為公主的她很快就累積出一批死忠粉絲。<br/><br/>

曾受邀於Australia、New Zealand、S2O Taiwan Songkran Music Festival演出、德國知名TechnoDJ Monoloc亞洲巡迴台灣站指定暖場DJ、與華人世界百大女DJ Cookie演出，以地下場景鍛鍊出的能量與爆發力說服音樂祭的舞客。`,
              slides: [
                require("@/assets/img/program/4-3南濱奔日流/02-1汝妮.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/02-2汝妮.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/djdungisapor",
                },
                {
                  type: "ig",
                  link: "https://www.instagram.com/dungisapor",
                },
              ],
              warn: "*實際出場時間將依日出狀況調整，演出順序不變。",
            },
          ],
        },
        {
          title: "03",
          subtitle: "冉而山劇場",
          color: "#C8E6FA",
          img: require("@/assets/img/program/4-3南濱奔日流/03.jpg"),
          tab: [
            {
              name: "冉而山劇場",
              info: `場次｜11/20（六）、 11/21（日）<br>時間｜05:45 - 06:10`,
              content: `冉而山（Langasan）劇場，相應著阿美族聖山「奇冉而山（Cilangasan）」蘊存的神話與族群繁衍的發祥地的意義，本身亦為原舞者資深團員的團長阿道‧巴辣夫‧冉而山做為大海嘯神話中遷往 Cilangasan 一支的氏族，過去以來懷抱文化使命，透過樂舞復振，維繫原住民文化的細膩內涵。阿道也是冉而山國際行為藝術節的創辦者。<br/><br/>

*圖為第三屆冉而山國際行為藝術節。攝影：顔歸真。<br/><br/>

<div class="en">The Langasan Theater took it’s name from a mountain in Hualien called Cilangasan. Adaw Palaf Langasan is the founder and mentor of the theatre group.  As legend has it, many years and many moons ago, he and his Langasan people came to Taiwan from the ocean in the waves. The LangasanTheater‘s performances incorporate music, dance, singing and story telling, all as a way of keeping traditional Aborigine culture alive. Adaw, he  is also the founder of Langasan International Performance Art Festival (LIPAF)</div>`,
              slides: [
                require("@/assets/img/program/4-3南濱奔日流/03-01.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/03-02.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/03-03.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/03-04.jpg"),
              ],
              links: [],
              warn: "*實際出場時間將依日出狀況調整，演出順序不變。",
            },
          ],
        },
        {
          title: "04",
          subtitle: "原舞者",
          color: "#C3CDEB",
          img: require("@/assets/img/program/4-3南濱奔日流/04.jpg"),
          tab: [
            {
              name: "原舞者",
              info: `場次｜11/20（六）、 11/21（日）<br>時間｜06:15 - 06:40`,
              content: `
自1991年成立，至今已滿30年，透過田野採集的方式向部落請益，製作出不同族群的樂舞製作，也保存記錄美麗且珍貴的文化資產。除了樂舞展演，也透過教學、研習、創作及出版等多元的方式，持續推廣原住民樂舞文化。原舞者相信，只要部落的篝火不滅，原舞者必會在文化傳承這條路繼續走下去。`,
              slides: [
                require("@/assets/img/program/4-3南濱奔日流/04-1原舞者.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/04-2原舞者.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/04-3原舞者.jpg"),
              ],
              links: [
                {
                  type: "personal",
                  link: "https://fidfca.com.tw",
                },
              ],
              warn: "*實際出場時間將依日出狀況調整，演出順序不變。",
            },
          ],
        },
        {
          title: "05",
          subtitle: "阿努",
          color: "#DCC8EB",
          img: require("@/assets/img/program/4-3南濱奔日流/05.jpg"),
          tab: [
            {
              name: "Anu阿努",
              info: `場次｜11/20（六）、 11/21（日）<br>時間｜06:40 - 07:20`,
              content: `有著原住民的身分與脈絡，擁有來自大海的聲音，並且蘊藏著靈性力量與跨時空的音域，可以將各種聲響、節奏、音符塑造成生命，引領生命遠離寂靜，進入極境，讓人置身在那座山林、那片海洋、那條溪流。身處文化斷層的今日，有感於文化式微、語言流失與族群離散，Anu阿努始終專注於母語音樂的創作，希望透過音樂喚起更多人對原民議題的關注。 2019年底製作的專輯《認真生活laloken ko orip》，就是想討論原民在當代環境中如何超越現實世界的種種困境。如何跳脫被資本主義、消費社會、國族主義、西方世界所建構的現代社會，找尋方法抵抗現實、感知自由。如是回到自然、回到自己、回到人的本質。`,
              slides: [
                require("@/assets/img/program/4-3南濱奔日流/05-1阿努.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/05-2阿努.jpg"),
                require("@/assets/img/program/4-3南濱奔日流/05-3阿努.jpg"),
              ],
              links: [],
              warn: "*實際出場時間將依日出狀況調整，演出順序不變。",
            },
          ],
        },
      ],
    };
  },
  components: {},
  methods: {},
  created() { },
  mounted() { },
};
</script>
