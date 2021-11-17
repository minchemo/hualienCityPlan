<template>
  <div>
    <div class="program4">
      <div class="program-title">
        <h2 class="title">周邊街廓</h2>
        <div class="subtitle">溝仔尾問路</div>
        <p class="content">
          溝仔尾街廓間的商家，是城市演進的見證者，在每日的供需行為中，累積出生活的向度，從里長到店長，<br
            v-show="!$device.isMobile"
          />從居民到旅客，這裏深藏的故事，可以從一道有趣的提問開始，一座親人的城市，交流人情的現場，我們<br
            v-show="!$device.isMobile"
          />或許記不得所有故事，但我們不會忘記願意分享與理解的感動瞬間。
        </p>
        <div class="divider">
          <img
            v-show="!$device.isMobile"
            src="@/assets/img/program/4-4溝仔尾問路/bg.svg"
            alt=""
            srcset=""
          />
        </div>
        <div class="subtitle">問答活動說明</div>
        <p class="content">
          你是花蓮人嗎？<br />
          為何移居花蓮？<br />
          為何曾經的溝仔尾變成日出大道？<br />
          你知道花蓮城市空間藝術節嗎？<br />
          你不知道的花蓮，讓在地店家來告訴你，<br />
          將近30間的響應店家，超過10間的問答現場，市區街廓店家等你來花問。<br />
          <span class="en"
            >*活動注意：入店請遵守店家消費規定，以及體諒藝術節期間忙碌於工作，而無法分身回應問答的店家。</span
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
          <div class="program-item-subtitle" v-html="item.subtitle"></div>
        </div>
      </div>

      <div class="shops">
        <h4>店家總覽</h4>
        <div
          class="shop"
          v-for="(shop, i) in shops"
          :key="i"
          @click="openDetailByShopName(shop.key)"
        >
          {{ shop.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program4 {
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
      &.small {
        font-size: 1.7vw;
      }
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
    }
  }

  .program-item-box {
    margin: 6vw 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3vw;
    .program-item {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      margin: 0 1vw;
      .program-item-title {
        font-size: 6vw;
        font-weight: bold;
        transition: all 0.2s;
        position: relative;
        margin-bottom: -2.5vw;
      }
      .program-item-subtitle {
        position: relative;
        font-size: 1.3vw;
        padding: 1vw 0;
        transition: all 0.2s;
        letter-spacing: 0.1vw;
        background: #fff;
        width: 100%;
        text-align: center;
        border-top: 1px solid #262626;

        &::after {
          content: "";
          height: 1.3vw;
          width: 1.3vw;
          background-image: url("@/assets/img/program/arrow.svg");
          background-size: 95%;
          background-repeat: no-repeat;
          background-position: center center;
          position: absolute;
          margin-left: 0.5vw;
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

  .shops {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h4 {
      flex: 100%;
      margin-bottom: 3vw;
      font-size: 1.2vw;
    }
    .shop {
      font-size: 0.9vw;
      margin: 0 0.8vw 0.8vw 0;
      border: 1px solid #262626;
      border-radius: 50px;
      padding: 0.5vw 1vw;

      &:hover {
        cursor: pointer;
        border-color: #6eb9eb;
        background: #6eb9eb;
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .program4 {
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
        }
      }
      .divider {
        position: relative;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        height: 0.5pt;
        background: #262626;
        margin: 15vw 0;
      }
    }

    .program-item-box {
      margin: 6vw 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 3vw;
      width: 100vw;
      margin-left: -10vw;
      .program-item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        margin: 0;
        .program-item-title {
          font-size: 158.8pt;
          font-weight: bold;
          transition: all 0.2s;
          position: relative;
          margin-bottom: -70pt;
        }
        .program-item-subtitle {
          position: relative;
          font-size: 18pt;
          padding: 15pt 0;
          transition: all 0.2s;
          letter-spacing: 0.1vw;
          background: #fff;
          width: 100%;
          text-align: center;
          border-top: 1px solid #262626;

          &::after {
            content: "";
            height: 14pt;
            width: 14pt;
            background-image: url("@/assets/img/program/arrow.svg");
            background-size: 95%;
            background-repeat: no-repeat;
            background-position: center center;
            position: absolute;
            margin-left: 0.5vw;
            transition: all 0.2s;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &:hover {
          cursor: pointer;
          .program-item-title {
            margin-bottom: 0pt;
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

    .shops {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      h4 {
        flex: 100%;
        margin-bottom: 20pt;
        font-size: 12pt;
      }
      .shop {
        font-size: 8.13pt;
        margin: 8pt 4pt 8pt 0;
        border: 1px solid #262626;
        border-radius: 50px;
        padding: 6pt 12pt;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      shops: [
        {
          "name": "Black cat X Hair 黑貓",
          "key": "Black cat X Hair 黑貓"
        },
        {
          "name": "Cafe Copita",
          "key": "Cafe Copita"
        },
        {
          "name": "大俠米糕",
          "key": "大俠米糕"
        },
        {
          "name": "伊奶奶 i-Granny",
          "key": "伊奶奶 i-Granny"
        },
        {
          "name": "行味 Tasty Way",
          "key": "行味 Tasty Way"
        },
        {
          "name": "多羅滿賞鯨服務棧&鯨蛋糕",
          "key": "多羅滿賞鯨服務棧&鯨蛋糕"
        },
        {
          "name": "花蓮日日",
          "key": "花蓮日日"
        },
        {
          "name": "花聲客廳",
          "key": "花聲客廳"
        },
        {
          "name": "昭和58",
          "key": "昭和58"
        },
        {
          "name": "珈琲花",
          "key": "珈琲花"
        },
        {
          "name": "Madman手縫皮件",
          "key": "Ｍadman 手縫皮件"
        },
        {
          "name": "Stroll散步咖啡",
          "key": "Stroll散步咖啡"
        },
        {
          "name": "小廢柴",
          "key": "小廢柴"
        },
        {
          "name": "私娼寮展示館",
          "key": "私娼寮展示館"
        },
        {
          "name": "雨林 Scone & Coffee",
          "key": "雨林Scone&Coffee"
        },
        {
          "name": "雨樵懶人書店",
          "key": "雨樵懶人書店"
        },
        {
          "name": "花忒發",
          "key": "花忒發"
        },
        {
          "name": "花蓮鐵道電影院",
          "key": "花蓮鐵道電影院"
        },
        {
          "name": "浮室 soave plan",
          "key": "浮室soave plan"
        },
        {
          "name": "遠東魷魚羹",
          "key": "遠東魷魚羹"
        },
        {
          "name": "實季・食記 Seedson Coffee",
          "key": "實季 食記。Seedson Coffee"
        },
        {
          "name": "762書庫 阿榮師文化工作室",
          "key": "762書庫 阿榮師文化工作室"
        },
        {
          "name": "Pay Or Die",
          "key": "Pay Or Die 滑板店"
        },
        {
          "name": "匠心獨作生活實驗室",
          "key": "匠心獨作生活實驗室"
        },
        {
          "name": "花蓮鐵道文化園區",
          "key": "花蓮鐵道文化園區"
        },
        {
          "name": "孩好書屋",
          "key": "孩好書屋"
        },
        {
          "name": "Piatto+菜",
          "key": "Piatto+菜"
        },
        {
          "name": "好地下藝術空間",
          "key": "好地下藝術空間"
        },
        {
          "name": "舊書鋪子",
          "key": "舊書鋪子"
        },
        {
          "name": "活動｜深夜限定",
          "key": "深夜限定"
        }
      ],
      list: [
        {
          title: "01",
          subtitle: "問答活動",
          color: "#6EB9EB",
          tab: [
            {
              name: "Black cat X Hair 黑貓",
              info: `地址：花蓮市成功街292號<br/>
營業時間：11/19-11/21，1100-1900`,
              status: 2,
              content: `在台北工作了四年，滿懷期待的回花蓮結婚生小孩！在第二個孩子出生後把工作給辭了，當起了流浪髮型師！當時時常背著小孩帶著工具到客人所以約的地方服務，後來由於客人太常反應找不到我，於是跟當時的先生討論！決定開一個個人髮型工作室，能顧及工作跟孩子！店名之所以爲黑貓，其實是我本身綽號就是貓，再加上我時常穿黑色衣服，湊巧自己養了7年的阿貓也是黑貓！所以店名誕生不幸的是，阿貓在今年3月，也是他10歲的這年發生意外去世！後來，我先生的弟弟在路上看到一隻很親人的小貓，剛好也是黑貓！就是現在店裡的店貓，不過要看到他真的很難！碰碰運氣來看看小黑貓吧。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-1_黑貓_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-1_黑貓_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/Black-cat-X-Hair-%E9%BB%91%E8%B2%93-1812960102090141/",
                },
              ],
            },
            {
              name: "Cafe Copita",
              info: `地址：花蓮市博愛街105號<br/>
營業時間：11/19-11/21，1300-0000`,
              status: 1,
              content: `花蓮少數營業至深夜的咖啡館，空間獨特寬廣，不管聚會或獨處都能找到適合的一角。飲品選擇多元，完美演繹美酒加咖啡。啤酒控的天堂，精選烈酒及葡萄酒，不時特調。更有手沖咖啡、義式可可與世界產地茶品等，是間想喝什麼都能滿足的空間咖啡廳。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-2_cafecopita_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-2_cafecopita_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-2_cafecopita_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/Cafe-Copita-259896267771364/",
                },
              ],
            },
            {
              name: "大俠米糕",
              info: `地址：花蓮市自由街34號<br/>
營業時間：11/19-11/20，1100-2100`,
              status: 1,
              content: `來自中台灣的道地古早味小吃，原汁原味呈現媽媽的味道，經過反覆翻炒入味蒸熟的糕體，配上手工自製的傳統米醬，值得您細細品嘗！`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-3_大俠米糕_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-3_大俠米糕_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/%E5%A4%A7%E4%BF%A0%E7%B1%B3%E7%B3%95-1798410107119804/",
                },
              ],
            },
            {
              name: "伊奶奶 i-Granny",
              info: `地址：970 花蓮縣花蓮市花蓮鐵道文化園區一館後門E棟<br>
營業時間：11/19，1100-2100、11/20-11/21，1000-2100`,
              status: 1,
              content: `全台手作選物展售、手作教學課程<br/>
展售四十多個品牌，多數為手作作品，少數文創商品，創作者遍及全台；店內亦提供戲劇相關書籍內閱。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-4_伊奶奶_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-4_伊奶奶_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-4_伊奶奶_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/iGranny2015",
                },
              ],
            },
            {
              name: "行味 Tasty Way",
              info: `地址：花蓮市中山路71號 (花蓮鐵道文化園區一館B棟)<br/>
營業時間：11/19，1100-2100、11/20-11/21，1000-2100`,
              status: 1,
              content: `行味，行旅中的滋味。蒐羅花蓮、台東農特產好物，在這裏就可以嚐到花東田野、縱谷與海岸的風味。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-5_行味_1.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/%E8%A1%8C%E5%91%B3-Tasty-Way-102547862125875",
                },
              ],
            },
            {
              name: "多羅滿賞鯨服務棧&鯨蛋糕",
              info: `地址：花蓮市中山路71號<br/>
營業時間：11/19-11/21，1100-2200`,
              status: 2,
              content: `介紹：多羅滿所代表的不僅是一個古地名，更是作為一個富有冒險精神的領航員，帶領大家從不一樣的視角了解台灣；店內販售風味獨特的鯨蛋糕，值得品嘗！`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-6_鯨蛋糕_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-6_鯨蛋糕_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-6_鯨蛋糕_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/WhaleBlackCake/",
                },
              ],
            },
            {
              name: "花蓮日日",
              info: `地址：花蓮市節約街37號<br/>
營業時間：11/19-11/21，1130-2030`,
              status: 2,
              content: `花蓮日日位於花蓮市的巷弄內，是一棟充滿台灣60年代與70年代風格的老房子，整修時保留了早期建築特色，加入現代簡潔的設計概念。喜歡花蓮，創造貼近自己想像的空間，希望能在花蓮注入些許的不一樣，我們樂於分享日常生活的美好與花蓮生活與旅遊資訊。一樓空間以環境永續的理念，推廣無塑永續、公平貿易商品。地下室空間是好地下藝術空間，為當代藝術替代空間，除了定期展出不同主題與媒材的作品，並將打造駐村創作的環境。希望在花蓮創作新的藝術可能性，帶來多樣性的交流。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-7花蓮日日_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-7花蓮日日_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-7花蓮日日-3.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-7花蓮日日_4.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/HuaLiandaily",
                },
              ],
            },
            {
              name: "花聲客廳",
              info: `地址：花蓮市福建街460號<br/>
營業時間：11/19-11/21，1000-1700（預約制）`,
              status: 2,
              content: `聲音體驗展覽、各種聲音器材販賣 / 知識分享中心 / 講座及教學。培育花東聲音人才的客廳，提供一般民眾認識聲音軟硬體，體驗聲音的空間。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-8_花蓮客廳_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-8_花聲客廳_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/%E8%8A%B1%E8%81%B2%E5%AE%A2%E5%BB%B3-100750119016919",
                },
              ],
            },
            {
              name: "昭和58",
              info: `地址：花蓮市成功街306號<br/>
營業時間：11/20-11/21，1300-1900`,
              status: 1,
              content: `店主本身是在溝仔尾這區長大的，所以對溝仔尾在近二三十年的興衰，稍微帶有一些比較特別的情感。希望能在溝仔尾的巷弄裡，傳達同個年代不同背景，明明以前是充滿台式鄉土的老街，出現一間昭和時期的老店，感覺很衝突但又無違和感。店名取自老闆出生的那一年昭和58，用自己喜歡的風格裝潢，再用出生的那一年命名，最後希望為曾經熱鬧過的舊街道，再多留下一點點時光。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-9_昭和58_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-9_昭和58_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-9_昭和58_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/shouwa58/",
                },
              ],
            },
            {
              name: "珈琲花",
              info: `地址：花蓮市忠孝街79號<br/>
營業時間：11/19-11/21，1300-2100`,
              status: 1,
              content: `轉身裡的相遇，是最長情的陪伴。留給自己片刻獨處的時間，是自由。打開門靜心的感受，享受短暫停留的各種光景。每個樣子 都是屬於你的獲得。ㄧ期一會，說的是一種內心的佇留，旅程中最期待的是不期而遇，那頃刻裡的驚喜，會永留心底。願我們守護的日常，能帶點勇氣給相遇的您。最溫柔的存在 珈琲花。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-10_珈琲花_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/1.問答活動/1-10_珈琲花_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/caffefiore2014/",
                },
              ],
            },
          ],
        },
        {
          title: "02",
          subtitle: "城空限定",
          color: "#DCC8EB",
          tab: [
            {
              name: "Ｍadman 手縫皮件",
              info: `地址：花蓮市南京街290巷6號<br/>
營業時間：11/19-11/21，1000-1900`,
              status: 2,
              content: `Madman手縫皮件工作室成立於2010年，母女倆共同製作。當初會接觸皮革純粹因為自己喜歡手縫的溫潤憨厚感，所以持續到現在還是堅持手縫，我們的皮革全來自天然義大利植鞣。<br/><br/><b>藝術節限定：皮件縫製體驗</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-1_Madman_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-1_Madman_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/madman0228/",
                },
              ],
            },
            {
              name: "Stroll散步咖啡",
              info: `地址：花蓮市忠孝街70號<br/>
營業時間：11/19-11/21，1300-1800`,
              status: 1,
              content: `STROLL位於花蓮，以肉桂捲為主題的外帶咖啡店，提供人們在散步時，適合品飲的咖啡甜點，讓人們前往下一個旅程之前，能有一個暫時小憩的地方，帶起一股輕鬆散步、暫時小憩的coffeebreak氛圍。<br/><br/><b>藝術節限定：溝仔尾影像播映</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-2_stroll_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-2_stroll_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-2_stroll_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/stroooll",
                },
              ],
            },
            {
              name: "小廢柴",
              info: `地址：花蓮市明義街75號<br/>
營業時間：11/19-11/21，11:30-14:00、17:30-20:00`,
              status: 0,
              content: `由原是老西服店的空間打造成一家小小的義大利麵餐廳，致力於將我們在歐洲學會的道地味道，分享給後山的大家，也希望所有上門的客人都能在這裡感到放鬆、自在，當一枚小廢柴也沒關係（笑）<br/><br/><b>藝術節限定：特殊口味義大利麵</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-3_小廢柴_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-3_小廢柴_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-3_小廢柴_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/littlesleepyheadhl",
                },
              ],
            },
            {
              name: "私娼寮展示館",
              info: `地址：花蓮市福建街暗巷<br/>
開放時間：11/19-11/21，1000-2200`,
              status: 0,
              content: `穿越暗街的巷弄，陽光再次灑落紅磚牆，位於花蓮市福建街的暗巷，在日治時代曾是全省著名的紅燈區，性工作者的謀生區域。他們隱身巷弄內，在俗稱「貓仔間」的場所招攬客人。她們背後的故事，足足可以編好幾齣長篇連續劇了。這條故事街，有一股淡淡的哀傷，令聽者無不揪心，無論自願或被迫，溝仔尾是一個包容性強的地方，歡迎所有來此尋找生機的人，對渴望離去的人也不會阻擋。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-4_私娼寮展示館_1.jpg"),
              ],
              links: [],
            },
            {
              name: "雨林Scone&Coffee",
              info: `地址：花蓮市明義街55號<br/>
營業時間：11/19-11/21，1100-1800`,
              status: 0,
              content: `位於花蓮香榭大道上的司康專賣店，前身是留海早午餐店，在姊姊北上開店後由妹妹接手這個空間，傳承受大家喜愛的招牌司康，經過數月的規劃整理，今年五月以「雨林Scone & Coffee」新品牌重新出發，整個空間規劃清新簡約，在這裡喝咖啡吃司康能度過一個舒服的下午茶時光，老闆致力於研發多種口味司康，目前已有二十多款口味司康，每日精選十種口味出爐，司康皆為當日新鮮現做，當您踏進雨林就能聞到撲鼻而來濃郁的司康香氣，此外也有提供外縣市宅配服務，讓喜愛雨林司康的朋友也能和親朋好友分享這份美味。<br/><br/><b>藝術節限定：城空限定特餐，拿鐵or鮮奶茶+經典原味司康，限定組合價$130，限外帶（原價$160）</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-5_雨林_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-5_雨林_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-5_雨林_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/rainforestscone/",
                },
              ],
            },
            {
              name: "雨樵懶人書店",
              info: `地址：花蓮市光復街130號2樓<br/>
營業時間：11/19-11/21，1000-1800、1900-2100`,
              status: 1,
              content: `位於花蓮市二樓的小巧書店空間，陳列著文學、小說、社會人文、歷史和繪本等選書，願你在閒適的空間裡享受閱讀，享受寧靜。<br/><br/><b>藝術節限定：城空選書  ＊特別感謝《文訊》</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-6_雨橋懶人書店_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-6_雨橋懶人書店_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/%E9%9B%A8%E6%A8%B5%E6%87%B6%E4%BA%BA%E6%9B%B8%E5%BA%97-196957680844562",
                },
              ],
            },
            {
              name: "花忒發",
              info: `地址：花蓮市中山路71號<br/>
營業時間：11/19-11/21，1400-2200`,
              status: 2,
              content: `餐點內容儘可能選用花蓮在地食材，讓來到花忒發的民眾可以品嘗花蓮在地食材所做的美味佳餚。<br/><br/><b>藝術節限定：黑潮鬼頭刀魚薯條搭配檸檬奶油醬</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-7_花忒發_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-7_花忒發_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://facebook.com/profile.php?id=100066715485124",
                },
              ],
            },
            {
              name: "花蓮鐵道電影院",
              info: `地址：花蓮市中山路71號<br/>
營業時間：依照當日電影播映場次`,
              status: 0,
              content: `東部唯一專業配備的非商用電影院，共64席次，透過放映多元類型電影，辦理講座活動，延續人相聚的精神，並邀請台灣各重要影展在此放映與交流。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-8_花蓮鐵道電影院_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-8_花蓮鐵道電影院_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-8_花蓮鐵道電影院_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/hlfc.cinema/",
                },
              ],
            },
            {
              name: "浮室soave plan",
              info: `地址：花蓮市成功街280號<br/>
營業時間：11/19-11/21，1330-2100`,
              status: 2,
              content: `一間轉角的白色咖啡廳，讓人們在找尋去處的時候能第一時間想到的店，不論是要工作或聊天，看書，還是獨處，浮室都能提供一個這樣的環境！ 就像是難過的時候需要找好朋友好好傾訴一番，天氣冷了要趕快找件外套一樣，就像那樣的存在。<br/><br/><b>藝術節限定：城空限定特餐</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-9_浮室_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-9_浮室_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-9_浮室_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/soaveplan",
                },
              ],
            },
            {
              name: "遠東魷魚羹",
              info: `地址：花蓮市明義街81號<br/>
營業時間：11/19-11/21，1100-2200`,
              status: 0,
              content: `花蓮遠東魷魚羹20年前白手起家，因為在遠東百貨旁而有此命名，直到遠東百貨搬遷，人潮銳減後，又另覓新址至民國路93號。三年前再搬遷至明義街，而楊居賢大哥則是在2020年11月承接了這間有著二十幾年歷史的魷魚羹，繼續賣著花蓮人的老味道。<br/><br/><b>藝術節限定：城空限定特餐，隱藏菜單綜合羹（現場可選加飯或加麵）+小菜+紅茶100元（小菜以30元為限）</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-10_遠東魷魚羹1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-10_遠東魷魚羹2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-10_遠東魷魚羹3.jpg"),
              ],
              links: [],
            },
            {
              name: "實季 食記。Seedson Coffee",
              info: `地址：花蓮市忠孝街68號<br/>
營業時間：11/19-11/21，0800-2100`,
              status: 2,
              content: `實季是一家舊街區中的老宅咖啡廳，老闆是一個從台北到花蓮來創業的年輕人，店內主體形象設計都是以大自然的種子果實做創作加上店長的老物收藏，讓實季以一個獨特氛圍屹立在這個舊街區中。店內主要販售的項目是熱壓吐司以及咖啡，所有口味出自店長獨立研發，非常受到當地居民及觀光客歡迎。想知道老闆是因為什麼契機選擇來到花蓮嗎？就來實季坐坐吧！<br/><br/><b>藝術節限定：活動期間每晚19:30小二說故事</b>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-11_實季_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-11_實季_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/2.城空限定/2-11_實季_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/seedson317/",
                },
              ],
            },
          ],
        },
        {
          title: "03",
          subtitle: "營業延長",
          color: "#C8E6FA",
          tab: [
            {
              name: "762書庫 阿榮師文化工作室",
              info: `地址：花蓮市中山路71號<br/>
營業時間：11/19-11/21，1000-1900`,
              status: 0,
              content: `遊程規劃、室內講堂、鐵道藝廊。設置於花蓮鐵道文化園區之調度室二樓的762書庫，提供鐵道相關書籍查閱及販售，另外更提供親子鐵道相關課程與舊花蓮車站附近舊城、臨港線走讀課程之規劃。透過「跟阿榮一起走讀花蓮」來深度遊花蓮，讓旅客，學子能夠更加了解在地文化與歷史，且「孩好書屋」展售鐵道相關書籍，歡迎選購。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-1_762書庫_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-1_762書庫_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-1_762書庫_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/Hualien1940",
                },
              ],
            },
            {
              name: "Pay Or Die 滑板店",
              info: `地址：花蓮市南京街322號<br/>
營業時間：11/19-11/21，1500-2300`,
              status: 0,
              content: `花蓮最具指標性的本地滑板店鋪之一，這裡有著豐富的滑板軟硬體提供選擇、組裝，同時也能找到各式滑板鞋履，絕對是熱愛滑板運動、文化的朋友，來到花蓮務必留意的店鋪！另外老闆在藝術節期間也會出沒在日出大道上，跟大家一起玩滑板喔！`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-2_payordie滑板店1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-2_payordie滑板店2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-2_payordie滑板店3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/payordie",
                },
              ],
            },
            {
              name: "匠心獨作生活實驗室",
              info: `地址：花蓮市福建街460號<br/>
營業時間：11/19-11/21，1400-2200（預約制）`,
              status: 0,
              content: `生活技藝培育課程。提供一般民眾不意取得或使用到的機器設備，或是職人帶領知識，將此處作為生活匠人培育基地。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-3_匠心獨作生活實驗室_1.jpg"),
              ],
              links: [],
            },
            {
              name: "花蓮鐵道文化園區",
              info: `地址：鐵道一館:花蓮市中山路71號  鐵道二館:花蓮市博愛街24巷35號<br/>
營業時間：11/19-11/21，1000-2200`,
              status: 0,
              content: `舊稱鐵道部花蓮港出張所，早期掌管花東鐵路的總指揮所，如今整修後朝向「多元文化休閒園區」概念作為活化再利用的基礎，賦予空間新的想像和思考方向。並結合附近的舊花蓮工務段、鐵道部警務段武道館、蒸氣火車加水塔、蒸氣火車復駛預定地及鐵路觀光商圈、處長宿舍區等，將整合成為鐵道文化園區之規模，建構成為另一種型態的鐵道建築語彙。鐵道文化園區被譽為為台灣僅存最完整的窄軌鐵道基地遺址，其景觀與西部火車幹線系統截然不同，且基地位處花蓮市中心，其交通網絡便利，未來將成為整體花蓮縣文化觀光產業的發展重心。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-4_花蓮鐵道文化園區_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-4_花蓮鐵道文化園區_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-4_花蓮鐵道文化園區_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/HualienRailway/",
                },
              ],
            },
            {
              name: "孩好書屋",
              info: `地址：花蓮市中山路71號<br/>
營業時間：11/19-11/21，1000-1900`,
              status: 0,
              content: `孩好書屋是一間陪伴孩子一起成長、為孩子營造更好的成長環境的書店。店內選書以友善環境、海洋、鯨豚、多元文化教育、東台灣研究、文學、繪本類為主。同時販售飲料輕食、手作雜貨。透過「跟阿榮一起走讀花蓮」來深度遊花蓮，讓旅客，學子能夠更加了解在地文化與歷史，且「孩好書屋」展售鐵道相關書籍，歡迎選購。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-5_孩好書屋_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/3.營業延長/3-5_孩好書屋_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/goodforkid2016",
                },
              ],
            },
          ],
        },
        {
          title: "04",
          subtitle: "宣傳響應",
          color: "#C3CDEB",
          tab: [
            {
              name: "Piatto+菜",
              info: `地址：花蓮市仁愛街28號 2樓<br/>
營業時間：11/19-11/21，1130-1400、1700-2030`,
              status: 0,
              content: `Piatto+菜 是一間義式蔬食店家；這空間有咖啡香；茶香；老傢俱；綠色植物和我們想和大家分享的美好事物！`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-1_piatto+菜_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-1_piatto+菜_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-1_piatto+菜_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/Piatto%E8%8F%9C-281789476076337",
                },
              ],
            },
            {
              name: "好地下藝術空間",
              info: `地址：花蓮市節約街37號B1<br/>
營業時間：11/19-11/21, 1200-2000`,
              status: 0,
              content: `好地下藝術空間成立於2016年，位於台灣東岸－花蓮，是一個非營利的當代藝術空間。致力於將優秀的當代藝術創作帶給觀眾，為花蓮長期的做在地耕耘，扮演在地的當代藝術實驗、交流、學習的平台。除了引介國內各地藝術家來此展覽，希望培育在地藝術新秀，讓創作者有發揮的場域。活動規劃包括：展覽、駐村創作、講座、假日藝術學校、教育導覽、國際交流等。透過此平台，引發討論藝術和延伸議題，激盪出藝術燦爛的火花。期望好地下藝術空間成為花蓮在地的當代藝術交流中心，透過此一平台，可以引發討論藝術與其延伸議題，激盪出藝術燦爛的火花。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-2_好地下藝術空間_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-2_好地下藝術空間_2.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/goodunderground/about/?ref=page_internal",
                },
              ],
            },
            {
              name: "舊書鋪子",
              info: `地址：花蓮市光復街57號<br/>
營業時間：11/19-11/21，1300-2200`,
              status: 0,
              content: `舊書舖子是在民國92年成立，是花蓮第一家二手書店。為了滿足廣大讀者的閱讀樂趣，店老闆每天不停在各回收場、圖書館、社福團體收書，可謂「上窮碧落下黃泉」，十八年如一日。本店收書賣書，只求品質，不論類別。因此，文學藝術、科學商管、漫畫小說；各式書籍琳瑯滿目，價格合理。店內並提供座位、WiFi，只願愛書人可舒適閱讀，方便購書。`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-3_舊書舖子_1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-3_舊書舖子_2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-3_舊書舖子_3.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/%E8%88%8A%E6%9B%B8%E8%88%96%E5%AD%90-123685401028686",
                },
              ],
            },
            {
              name: "深夜限定",
              info: ``,
              status: 0,
              content: `在火溫酒論壇聽完花蓮人說花蓮的故事，走完日出未來河的八個提問，等待奔日流的日出前，你會跟我一樣，對這座城市產生眷戀。我們準備了市區街廓的深夜酒吧與咖啡館給意猶未盡的你，繼續品味花蓮。<br/><br/>
              串連地圖連結：<a href="https://reurl.cc/WXDVQ5" target="_blank">https://reurl.cc/WXDVQ5</a><br/><p class="en">注意：飲酒後請注意自身安危，請勿駕駛任何交通工具。入內請遵守店家消費規定。深夜限定店家僅「Cafe Copita」與「來+咖啡」為問答活動店家。
特別感謝Cafe Copita協助串連。</p>`,
              slides: [
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-4-1.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-4-2.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-4-3.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-4-4.jpg"),
                require("@/assets/img/program/4-4溝仔尾問路/4.宣傳響應/4-4-5.jpg"),
              ],
              links: [
              ],
            },
          ],
        },
      ],
      openedTab: {
        key: 0,
        name: '',
        fullTab: null
      }
    };
  },
  components: {},
  methods: {
    getTabByName(key) {
      this.list.forEach(elem => {
        const index = elem.tab.findIndex(item => item.name == key);
        if (index > -1) {
          this.openedTab.fullTab = elem;
          this.openedTab.key = index;
          this.openedTab.name = key
        };
      })
    },
    openDetailByShopName(key) {
      this.getTabByName(key);

      this.$store.commit('openDetail', {
        tab: this.openedTab.fullTab.tab,
        title: `${this.openedTab.fullTab.title} ${this.openedTab.fullTab.subtitle}`,
        forceTabKeyId: this.openedTab.key,
        forceTabKeyName: this.openedTab.name
      })
    }
  },
  created() { },
  mounted() { },
};
</script>
