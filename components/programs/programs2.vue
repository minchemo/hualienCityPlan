<template>
  <div>
    <div class="program2">
      <div class="program-title">
        <h2 class="title">花創園區</h2>
        <div class="subtitle">花創火溫酒</div>
        <p class="content">
          這是舊時代的酒廠園區，古蹟演進成為文創基地，日治時期的屋舍建築，悠緩的氣氛依舊，有人愛上<br />
          花蓮而移居，有人因為追求而遷出，花蓮城市依舊緩緩的透著生活感，慢慢進步。這時候，適合溫一<br />
          壺茶酒，大家來這裡圍坐，在徐風向晚，聽聽12位「花蓮人」的花蓮因緣，也分享自己的美麗故事，<br />
          一起回到時光中相聚。
        </p>
      </div>

      <div class="program-item-box">
        <div class="program-tabs">
          <template v-for="(tab, i) in tabs">
            <div
              class="program-tab"
              :key="i"
              v-html="tab.name"
              v-bind:class="{ active: tab.id == activeTabId }"
              @click="activeTabId = i + 1"
            ></div>
          </template>
        </div>
        <div class="program-items">
          <template v-for="(speaker, i) in activeTabData.speakers">
            <div class="program-item" :key="i">
              <div class="avatar">
                <img :src="speaker.img" alt="" srcset="" />
              </div>
              <div ref="speakername" class="name" v-html="speaker.name"></div>
              <div class="info">
                <div class="tag">
                  講者｜<span>{{ speaker.tag }}</span>
                </div>
                <div class="time">{{ speaker.time }}</div>
              </div>
              <div class="desc" v-html="speaker.desc"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/variable.scss";
.program-item-box {
  .program-tabs {
    .program-tab {
      span {
        display: inline-block;
        font-size: 0.7vw;
        transform: translateY(-0.7vw);
        margin-right: 0.2vw;
      }
      &:hover {
        span {
          color: $primaryColor;
        }
      }
      &.active {
        span {
          color: $primaryColor;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program2 {
  max-width: 70vw;
  margin: 0 auto;
  margin-bottom: 5vw;
  .program-title {
    margin: 5vw 0;
    .title {
      font-size: 2vw;
    }
    .subtitle {
      font-size: 1.2vw;
      font-weight: 700;
    }
    .content {
      font-size: 1vw;
      line-height: 2;
      letter-spacing: 0.05vw;
    }
  }

  .program-item-box {
    position: relative;
    .program-tabs {
      display: flex;
      justify-content: space-between;
      .program-tab {
        position: relative;
        font-size: 1.5vw;
        font-weight: bold;
        border-right: 1px solid #262626;
        flex: 1;
        box-sizing: border-box;
        &:nth-child(1) {
          text-align: left;
          padding: 1vw 1vw 0 1vw;
        }
        &:nth-child(2) {
          text-align: center;
          padding: 1vw 1vw 0 1vw;
        }
        &:nth-child(3) {
          text-align: right;
          padding: 1vw 1vw 0 1vw;
          border: 0;
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

    .program-items {
      display: flex;
      justify-content: space-around;
      .program-item {
        font-size: 2vw;
        font-weight: bolder;
        flex: 1;
        background: #fff;
        margin: 2vw 2vw;
        .avatar {
          border: 1px solid #262626;
          img {
            width: 100%;
            vertical-align: bottom;
          }
        }
        .name {
          display: flex;
          justify-content: space-between;
          font-size: 2.7vw;
          font-weight: 900;
          color: black;
          -webkit-text-fill-color: white;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;
          margin: 1vw 0;
          border-bottom: 1px solid #262626;
          padding-bottom: 1vw;
        }
        .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1vw 0;
          .tag {
            font-size: 1vw;
            font-weight: 400;
            span {
              font-weight: 900;
            }
          }
          .time {
            font-size: 0.8vw;
            border: 1px solid #262626;
            border-radius: 100%;
            padding: 0.3vw 0.5vw;
          }
        }
        .desc {
          font-size: 1vw;
          font-weight: 400;
          line-height: 2;
          text-align: justify;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &::before {
      content: "";
      width: 100vw;
      height: 1px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      background: #262626;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "<span>FRI.</span>11.19",
          speakers: [
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1119_1900_林昆穎.jpg"),
              name: "林昆穎",
              tag: "策展人",
              time: "19:00",
              desc: `1980 ⽣於花蓮台灣。豪華朗機⼯共同創辦⼈，華麗邏輯有限公司創意總監。以跨域藝術家、⽂化導演與策展⼈身份，專注於當代議題論述、創意組織營運、藝術產業連結與科技表演編導當中，積極實踐社會共創的各種跨域呈現。擔任「2021臺灣⽂博會」總策展⼈、「2020-2021 臺北⽩晝之夜」藝術總監，參與「臺北世界⼤學運動會」⽂化節⽬導演群與聖⽕台裝置藝術、「台中國際花卉博覽會-聆聽花開的聲⾳」聲光機導演、「臺南藝術節-府城流⽔席」總策展人。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1119_1930_吳勁毅.jpg"),
              name: "吳勁毅",
              tag: "文化局長",
              time: "19:30",
              desc: `花蓮縣文化局長。來自桃園的道地客家人，卻長年在花蓮原鄉投入地方創生、部落文化推展工作。在東華大學念研究所時藉由田調開始接觸原民部落，自德國攻讀博士歸國後創立台灣城鄉發展學會，擔任花蓮縣府環境景觀規畫總顧問與地方創生委員等職務，也主持過多項城鄉特色產業發展與文創產業轉型的計畫。身為專長國土計畫的學者卻為了找回阿美族傳統味道，在花蓮光復鄉開了一間無菜單料理餐廳，被稱為斜槓博士。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1119_2000_東冬侯溫.jpg"),
              name: "東冬．侯溫",
              tag: "策展人",
              time: "20:00",
              desc: `來自銅門部落。創辦兒路創作藝術工寮。東冬結合錄像、裝置、行為展演，探討現今與傳統的差異。在銅門部落與來自不同部落與文化背景的年輕人，近年發起《Phpah藝術聚》將旅行、音樂、故事、藝術、工藝交織起來，轉化傳統文化在當代的再現，以盛綻的姿態，實踐傳統在部落的生活。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1119_2030_李德緯.jpg"),
              name: "李德緯",
              tag: "策展人",
              time: "20:30",
              desc: `壽豐義消副小隊長。國泰人壽保險業務人員。裝潢木工、建築工程專長。在台北居住10年後，回到花蓮故鄉深耕，也想著為花蓮做些事情，從而加入地方義消特搜行列，參與107年2月6日花蓮大地震、110年4月2日太魯閣事件的災害救援經歷。`,
            },
          ],
        },
        {
          id: 2,
          name: "<span>SAT.</span>11.20",
          speakers: [
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1120_1900_林育德.jpg"),
              name: "林育德",
              tag: "小說家",
              time: "19:00",
              desc: `1988年生，花蓮人。曾任政治雜工、公務員。花蓮高中、東華華文所畢業。著有摔角小說《擂台旁邊》。將出版政治小說《縣長旁邊》。身為三代花蓮人，對社會零星的貢獻經驗來自公部門服役、地方政治工作、短暫公務員生涯。其他時間，都在從事對宇宙社會沒什麼貢獻的文字工作，觀察各種「花蓮敘事」是最大興趣，交流對「花蓮敘事」的所知所見所思。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1120_1930_楊華美.jpg"),
              name: "楊華美",
              tag: "議員",
              time: "19:30",
              desc: `我是楊華美，卸下議員的工作角色，我是社會工作者。基於對花蓮的熱愛，我從助人工作進入政治工作，帶著溫暖、多元、包容的社工視角行動，朝向推動更多友善政策的政治路上前進，而內心初衷依然存在。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1120_2000_大亨.jpg"),
              name: "大亨",
              tag: "饒舌歌手",
              time: "20:00",
              desc: `花蓮阿美族人，饒舌歌手、鐵工半技工。民國83年在花蓮出生，曾就讀海星國小、國風國中、花蓮高中。在地下饒舌圈發展音樂生涯，至今發行過兩張獨立迷你專輯。在去年與其他花東的饒舌歌手合作的「我阿姨也癢」演唱，至今已累積300多萬點閱。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1120_2030_王力之.jpg"),
              name: "王力之",
              tag: "藝術家",
              time: "20:30",
              desc: `cepo´ 藝術中心藝術總監。2004年於台南藝術學院應用藝術研究所纖維組畢業。2005年為洄瀾國際藝術家創作營參與藝術家，而因此落地於花蓮成為港口部落媳婦。2016年創立「 cepo’者播藝術中心 」，成為藝術進駐與藝術教育的實踐場域，透過此一空間將不同層面的議題，以藝術為媒介來創造來自土地母體的隱性革命，企圖扭轉現實的困境。`,
            },
          ],
        },
        {
          id: 3,
          name: "<span>SUN.</span>11.21",
          speakers: [
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1121_1900_徐榛蔚.jpg"),
              name: "徐榛蔚",
              tag: "縣長",
              time: "19:00",
              desc: `現任花蓮縣縣長。中國文化大學音樂系畢業，曾任立法委員。在「2021年縣市長施政滿意度調查」，獲得5星縣長的殊榮。上任期間致力於傳達「淨」、「靜」、「境」、「勁」、「靚」及「近」的城市意象。將「慢．精品」定調為治理城市的目標，積極將花蓮的文化、精緻的農業物產，推向全台、全世界，打造精品級的城市產業。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1121_1930馬詠恩.jpg"),
              name: "馬詠恩",
              tag: "音樂人",
              time: "19:30",
              desc: `台玖線音樂工作室負責人。是農男樂團的主唱，以及台玖線樂團的主唱和團長。來自台灣的東部—花蓮的馬遠部落，除了身為歌者，另一身份，是真正走在山林與山林學習的獵人。「誠實的唱族語歌或族語創作，是一個責任」憑藉就單純想唱自己的歌給大家聽，從生活中的感動、生命的互動以屬於自己的音樂方式呈現，希望帶給大家純粹的感動。用虔敬謙卑的心，從學生時期的走唱，一直唱到世界各地的大舞台。近期更以專輯編曲身分參與專輯《從此刻起-布農孩子的傳承與跨界》，將布農族音樂推廣至全世界。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1121_2000_程廷.jpg"),
              name: "程廷",
              tag: "小說家",
              time: "20:00",
              desc: `生長在花蓮縣萬榮鄉支亞干部落。畢業於台灣大學建築與城鄉研究所，現任西林社區發展協會理事、部落簡易自來水委員會總幹事、部落會議幹部、阿改玩生活部落體驗公司董事長。曾獲多屆台灣原住民族文學獎散文組獎、二○二○台灣文學獎原住民族漢語散文獎、國藝會創作補助等。剛出版散文集《我長在打開的樹洞》（九歌）。`,
            },
            {
              img: require("@/assets/img/program/4-2花創火溫酒/正方形/1121_2030_張皓琤.jpg"),
              name: "張皓琤",
              tag: "里長的女兒",
              time: "20:30",
              desc: `民國67年出生，最愛花蓮的山和海。爸爸是搞威的阿聰里長，但今天是他女兒來講花蓮的故事。唯一離開花蓮的原因是2003年到台北學生命禮儀。2006年回到花蓮，回到深愛的家鄉。剛回到花蓮的頭五年在麥當勞先工作，之後開六年的飲料店，接著因為媽媽生病，頂讓了飲料店，轉而回家幫忙爸爸的花店以及哥哥嫂嫂會場佈置的工作，也因此開了雷馬人造花藝店。`,
            },
          ],
        },
      ],
      activeTabId: 1,
    };
  },
  computed: {
    activeTabData() {
      return this.tabs.find((item) => item.id == this.activeTabId);
    },
  },
  methods: {
    fitText() {
      const name = this.$refs.speakername;


      if (name.length > 0) {
        name.forEach((item) => {
          let text = item.textContent.split("");

          const div = document.createElement("div");
          text.forEach((t) => {
            const span = document.createElement("span");
            span.textContent = t;
            div.appendChild(span);
          });

          item.innerHTML = div.innerHTML;
        });
      }
    },
  },
  created() {},
  mounted() {
    this.fitText();
  },
  updated() {
    this.fitText();
  },
};
</script>
