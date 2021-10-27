<template>
  <div class="main about">
    <Navbar />
    <div class="content">
      <div class="intro">
        <h2>策展論述</h2>
        <div class="en-name">Curatorial<br />Discourse</div>
        <div class="small-title">
          <div class="t">
            <img src="@/assets/img/about/溫.svg" alt="" srcset="" />
          </div>
          <div class="t">
            <img src="@/assets/img/about/花.svg" alt="" srcset="" />
          </div>
          <div class="t">
            <img src="@/assets/img/about/蓮.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div class="text" v-bind:class="{ show: intro_text_show }">
        花蓮是個長鏡頭，緩緩悠悠低語慢生，隨著海面東昇的天空，保持穩穩的步調，這是花蓮人的節奏感。人口數量適中的城市，建造在生活的肌理上，產業的樣貌，一方面因著天然資源，一方面跟著日活所需，歷長時交流而成，從原住民、在地人、移居者到新住民，花蓮在文化上亦羅列著歷時融合的光譜，在平靜之中透染著奇幻，在海與脈之間，在地鳴與颱嘯之間，以其自然而生的博物姿態，成為台灣人心中的秘境，一來到花蓮便能因其悠緩而融化。<br /><br />

        身為歸鄉的遊子，我有許多遺落的記憶，這座城市有著熟悉的樣貌，而人事早已翻輪，久居的街坊已然進化，回到花蓮，對凡事都感到好奇。花蓮，一直以來也都是富於藝術心靈者嚮往的棲居地，感受花蓮的溫緩，一次次探問而留下體悟成為作品。任何一座城市，都會需要這樣細緻提問，把所思所想讓彼此聽見，在長鏡頭前聚焦。<br /><br />

        花蓮人的心中，花蓮是什麼樣子呢？<br /><br />

        我們從城市空間中畫出了一道中軸線。那是條蓋了12年，有著期待與爭議的棋盤格大道—溝仔尾，兩端頭，一邊是太平洋，一邊是酒廠古蹟。三個地點，仿若一條時間長河淤積出棋盤上曾經的對峙。徘徊多次，訪談居於週邊的眾人，歷史與未來緩緩浮現，「問」是核心，好奇就問，問多了就懂，這個藝術節將是看得見「交流」的藝術節，這裡將是各種問與答的現場。<br /><br />

        「記憶」的呈現在夜晚的花創園區，讓溫火煮酒暢談，讓擁有故事的人願意侃侃而談，自我提問尋找共感線索。「循環」的河流奔向海天，棲坐在岸上大石看著日出，自然海潮聲場中，聽著大地的無限回響。「即刻」的步履走在日出香榭大道，將看見的議題，用八道提問來創造作品，讓嶄新的大道燃起互動對談，而未來樣態成為當下解答。<br /><br />

        自然中蘊含著眾多的循環之道，城市的演進是人們的生活構成，亦順應在循環之中，一座能夠不斷對自己提問的城市，居民就能擁有共同解答的能量。<br /><br />

        「2021花蓮城市空間藝術節－溫花蓮」，以「溫」來定調花蓮的溫、文、穩、問。「溫」，代表著城市氣息、居民特性、旅客心境，「溫」是坦然地保持熱度，也是醞釀中期待沸騰。溫花蓮，我們花蓮，我們的花蓮，以一場城市藝術節來回看，與我們同在一起生活的花蓮人們，是如何一起讓花蓮成為現在的花蓮。我們希望觸發「問答」，問問洄瀾緩流當中對生態的未來觀點，問問城市慢生之中對鄉鎮互聯的合作可能，問問在低速天光之下對文化城市的體驗設計。這也是藝術創作的本質，以敏銳的觀察與細緻的技藝來提出問題，當我們願意讓「問」成為習慣，城市的空間，便能夠從被動的介紹與細數過往故事當中，找到主動面對未來的動能，這也是藝術存在的原因。在花蓮，正適合溫溫的問，溫溫的答，溫溫讓「問答」成為城市的動詞，讓花蓮成為一座習慣共識的城市。<br /><br />

        每個城市，都應該有這樣的提問。
      </div>
      <div
        class="text-more"
        v-show="$device.isMobile"
        v-bind:class="{ hide: intro_text_show }"
        @click="intro_text_show = true"
      >
        <span>展開全文</span>
        <img src="@/assets/img/about/text_more_mo.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="team">
      <div class="avatar">
        <img src="@/assets/img/about/team_1.jpg" alt="" srcset="" v-lazy-load />
      </div>
      <div class="info">
        <template v-for="(team, i) in teams">
          <div :key="i" class="info-item">
            <div class="title">{{ team.title }}</div>
            <div class="in">
              <div class="tag" v-show="!$device.isMobile">{{ team.tag }}</div>
              <div
                class="name"
                v-show="team.name"
                v-bind:class="{ border: team.border }"
              >
                {{ team.name }}
              </div>
              <div class="text" v-html="team.content"></div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="shop" data-aos="fade">
      <img
        v-if="!$device.isMobile"
        class="title"
        src="@/assets/img/about/shop_title.svg"
        alt=""
        srcset=""
        v-lazy-load
      />
      <img
        v-else
        class="title"
        src="@/assets/img/about/shop_title_mo.svg"
        alt=""
        srcset=""
        v-lazy-load
      />
      <img
        v-if="!$device.isMobile"
        class="logo"
        src="@/assets/img/about/shop_logos.jpg"
        alt=""
        srcset=""
        v-lazy-load
      />
      <img
        v-else
        class="logo"
        src="@/assets/img/about/shop_logos_mo.jpg"
        alt=""
        srcset=""
        v-lazy-load
      />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.about {
  .text {
    span {
      color: #8c8c8c;
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
    width: 70vw;
    position: relative;
    margin: 10% auto;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    .intro {
      position: absolute;
      height: 100%;
      width: 35%;
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 3vw;
        margin-top: 0;
      }
      .en-name {
        position: relative;
        font-size: 5.8vw;
        letter-spacing: 0.2vw;
        font-weight: bold;
        color: #c8e6fa;
        line-height: 1;
        transform: translateX(-16vw);
        margin-bottom: 5vw;
      }
      .small-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        flex: 1;
        .t {
          width: 3vw;
          height: 3vw;
          background: #fff;
          padding: 2vw;
          z-index: 1;
          position: relative;
          img {
            width: 100%;
          }
          &:first-child {
            padding-top: 0;
          }
          &:last-child {
            padding-bottom: 0;
          }
        }
        &:after {
          content: "";
          height: 100%;
          width: 1px;
          background: #262626;
          position: absolute;
          left: 3.5vw;
          z-index: 0;
        }
      }
    }
    .text {
      padding-left: 35%;
      width: 65%;
      letter-spacing: 0.2vw;
      line-height: 2;
      font-size: 1vw;
      text-align: justify;
      // max-width: 800px;
    }
    &::after {
      content: "";
      width: 100vw;
      height: 1px;
      background: #262626;
      position: absolute;
      bottom: -5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .team {
    position: relative;
    max-width: 70vw;
    display: flex;
    align-items: flex-start;
    margin: 7vw auto 3vw auto;
    padding-bottom: 5vw;
    .avatar {
      min-width: 30%;
      margin: 1vw;
      img {
        width: 100%;
        border: 1px solid #262626;
      }
    }
    .info {
      .info-item {
        .title {
          font-size: 3.8vw;
          letter-spacing: 0.2vw;
          font-weight: bold;
          color: #c8e6fa;
        }
        .in {
          margin: 1.5vw;
          padding: 1vw 0 1vw 1.5vw;
          border-left: 1px solid #262626;
          .tag {
            font-weight: bold;
            font-size: 1.7vw;
          }
          .name {
            font-size: 1vw;
            font-weight: bold;
            margin-top: 3vw;
          }
          .text {
            margin-top: 1vw;
            font-size: 1vw;
            line-height: 2;
            letter-spacing: 0.2vw;
          }
        }
      }
    }
    &::after {
      content: "";
      width: 100vw;
      height: 1px;
      background: #262626;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .shop {
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 5vw;
    img {
      width: 100%;

      &.title {
        margin-bottom: 2vw;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .main {
    height: auto;
    margin-top: $mo_navbar_height;

    .content {
      width: 100vw;
      margin: 10% auto;
      flex-direction: column;

      .intro {
        position: relative;
        height: auto;
        width: 80vw;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        height: 30vw;
        padding: 0;
        left: 10vw;
        margin: 10vw 0;
        h2 {
          font-size: 19pt;
          margin-top: 0;
          margin-bottom: 0;
        }
        .en-name {
          position: absolute;
          font-size: 26pt;
          letter-spacing: 0.2vw;
          transform: translateX(0);
          margin-bottom: 0;
          left: 0;
          bottom: 3.5vw;
          margin-left: -13vw;
        }
        .small-title {
          height: 100%;
          flex: 0;
          .t {
            width: 4vw;
            height: 4vw;
            padding: 1vw;
          }
          &:after {
            content: "";
            height: 100%;
            width: 1px;
            background: #262626;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 0;
          }
        }
      }
      .text {
        padding-left: 0%;
        width: 100%;
        letter-spacing: 0.2vw;
        font-size: 10pt;
        margin-bottom: 10vw;
        padding: 0 10vw;
        box-sizing: border-box;
        max-height: 200px;
        overflow: hidden;
        transition: all 0.3s;
        &.show {
          max-height: 9999px;
        }
      }
      .text-more {
        position: relative;
        display: flex;
        font-weight: bold;
        font-size: 10pt;
        align-items: center;
        padding: 20vw 10vw 10vw 10vw;
        margin-top: -25vw;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 0.7) 70%,
          rgba(255, 255, 255, 0) 100%
        );
        transition: all 0.3s;
        img {
          height: 9pt;
          margin-left: 6pt;
        }
        &.hide {
          display: none;
        }
        &:hover {
          opacity: 0.7;
        }
      }
      &::after {
        content: "";
        width: 100vw;
        height: 1px;
        background: #262626;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .team {
      max-width: 80vw;
      margin: 0 auto;
      padding-bottom: 0;
      flex-direction: column;
      .avatar {
        width: 40%;
        margin: 0;
        margin-bottom: 3vw;
      }
      .info {
        .info-item {
          margin-bottom: 20vw;
          .title {
            font-size: 26pt;
            letter-spacing: 0.2vw;
            margin-bottom: 7vw;
          }
          .in {
            margin: 0;
            padding: 0;
            border-left: 0;
            .name {
              font-size: 12pt;

              &.border {
                border-bottom: 1px solid #262626;
                padding-bottom: 12pt;
                margin-bottom: 12pt;
              }
            }
            .text {
              font-size: 10pt;
              text-align: justify;
            }
          }
        }
        &:after {
          content: "";
        }
      }
      &::after {
        content: "";
        width: 100vw;
        height: 1px;
        background: #262626;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .shop {
      width: 80vw;
      margin: 10vw auto;
      img {
        &.title {
          margin-bottom: 7vw;
        }
        &.logo {
          width: 110%;
          margin-left: -5%;
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
      intro_text_show: false,
      teams: [
        {
          title: "Art Director",
          tag: "藝術總監",
          name: "林昆穎",
          content: !this.$device.isMobile
            ? `
            1980 ⽣於花蓮台灣。<br/>
            豪華朗機⼯共同創辦⼈，華麗邏輯有限公司創意總監。<br/>
            以跨域藝術家、⽂化導演與策展⼈身份，<br/>
            專注於當代議題論述、創意組織營運、藝術產業連結與科技表演編導當中，<br/>
            積極實踐社會共創的各種跨域呈現。<br/>
            擔任<b>2021臺灣⽂博會</b>總策展⼈、<br/>
            <b>2020-2021 臺北⽩晝之夜</b>藝術總監，<br/>
            參與<b>臺北世界⼤學運動會⽂</b>化節⽬導演群與聖⽕台裝置藝術、<br/>
            <b>台中國際花卉博覽會-聆聽花開的聲⾳</b>聲光機導演、<br/>
            <b>臺南藝術節-府城流⽔席</b>總策展人。 
            `
            : `1980 ⽣於花蓮台灣。
            豪華朗機⼯共同創辦⼈，華麗邏輯有限公司創意總監。
            以跨域藝術家、⽂化導演與策展⼈身份，
            專注於當代議題論述、創意組織營運、藝術產業連結與科技表演編導當中，
            積極實踐社會共創的各種跨域呈現。
            擔任<b>2021臺灣⽂博會</b>總策展⼈、
            <b>2020-2021 臺北⽩晝之夜</b>藝術總監，
            參與<b>臺北世界⼤學運動會⽂</b>化節⽬導演群與聖⽕台裝置藝術、
            <b>台中國際花卉博覽會-聆聽花開的聲⾳</b>聲光機導演、
            <b>臺南藝術節-府城流⽔席</b>總策展人。 `,
        },
        {
          title: "Executive Team",
          tag: "執行團隊",
          name: !this.$device.isMobile ? "" : "執行團隊",
          content: `
          表演藝術策畫統籌｜<span>軟硬倍事</span><br/>
          視覺統籌｜<span>三頁文</span><br/>
          製作執行統籌｜<span>藝外創意</span><br/>
          行銷宣傳/媒體統籌｜<span>好料創意</span><br/>
          硬體技術統籌｜<span>民偉視訊工程</span><br/>
          活動動態紀錄｜<span>狠主流多媒體</span><br/><br/>

          藝術總監｜<span>林昆穎</span><br/>
          藝術總監協策小組｜<span>張楚芬、楊喻斐</span><br/>
          表演藝術策劃統籌｜<span>陳彥斌</span><br/>
          表演藝術策劃執行｜<span>盧崇瑋、陳履歡</span><br/>
          視覺統籌｜<span>顏伯駿</span><br/>
          視覺專案管理｜<span>蔡佩玲</span><br/>
          平面設計｜<span>張耕毓、盧勇翰、江元、楊藥智</span><br/>
          3D設計｜<span>張雅惠、游家廳</span><br/>
          活動網站｜<span>J 莫</span><br/>
          執行總統籌｜<span>吳季娟</span><br/>
          執行製作｜<span>楊喆甯、蔡超聖、劉文誠</span><br/>
          製作行政｜<span>林郁玟、嚴安琪、賴姸方、吳孟欣</span><br/>
          總舞監｜<span>鄒雅荃</span><br/>
          助理舞監｜<span>張君如、曾智偉</span><br/>
          空間與路線指引設計｜<span>魏匡正</span><br/>
          行銷宣傳統籌｜<span>孫嘉蓉</span><br/>
          媒體統籌執行｜<span>盧婷婷、曾郁萍</span><br/>
          宣傳執行助理｜<span>劉若絹、陳品蓉</span><br/>
          攝影紀錄｜<span>李欣哲、池孟諭、游子宸、魏歆曄</span><br/><br/>

          活動執行人員｜<span>平馨、白雅瑜、江昕晏、李虹玫、李雩安、李燕玲、青婕、施嵐茵、胡善悅、徐崇馨、曹郡豪、許瀅真、郭倡佑、陳敏薇、陳雅筑、曾千祐、曾家璇、黃健雄、詹嘉榆、劉宇宸、蔡亦涵、蔡宜珊、蔡若彤、蕭宇翔、蕭秩瑄、戴靖霈、鍾萍佳</span><br/><br/>

          志工｜<span>方美玉、江永郎、吳素真、林千惠、林承、林清標、侯明惠、徐菊、張雅琇、陳吾常、陳淑媛、游秀琴、楊暢生、溫開俊、劉昭雄、潘榮章、閻玉蓮、謝國光、謝惠美</span>
            `,
        },
        {
          title: "Artist",
          tag: "參與藝術家",
          border: true,
          name: !this.$device.isMobile ? "" : "參與藝術家",
          content: `
          <b>日出未來河</b><br/>
          Q1 花式提問｜<span>林清盛、陶維均</span><br/>
          Q2 白浪海嘯吃菜吧｜<span>劉星佑、陳漢聲</span><br/>
          Q3 家族｜<span>賈茜茹、柳冠竹、何冠儀、楊宇政、初柏翰、董育廷、許少軒、穀米機工、柯智豪</span><br/>
          Q4 校準：路徑｜<span>謝佑承、王中原</span><br/>
          Q5 這原是一條河｜<span>曾令理</span><br/>
          Q6 非常動態運動－失序邊境（選段演出）｜<span>曾靖恩、李冠霖、李晉安、王量、陳彥齊、林意翔</span><br/>
          Q6 滑板團隊｜<span>胡冠嘉、李斌、林澄浩、墨梵、慕凡、陳爾陽</span><br/>
          Q7 鏡岕｜<span>豪華朗機工</span><br/>
          Q8 大道流動問答｜<span>羅棋諠、瞿正柔、朱昶維、楊大衛、陳妤蓁、台北劇場實驗室、黃懷德、張汶皓、法咪咪、汝妮、Jesse Chen、Garzer、Venci、三分生劇團、許元耀、王佳祥、李成員、丁羅紀晴、陳健文</span><br/><br/>

          <b>花創火溫酒</b><br/>
          <span>林清盛、林昆穎、吳勁毅、東冬．侯溫、李德緯、林育德、楊華美、大亨、王力之、徐榛蔚、馬詠恩、程廷、張皓琤</span><br/>
          <span>（依場次先後排列）</span><br/><br/>

          <b>南濱奔日流</b><br/>
          <span>嘎造・伊漾、汝妮、冉而山劇場、原舞者、阿努（依場次先後排列）</span>
`,
        },
      ],
    };
  },
  mounted() { },
};
</script>
