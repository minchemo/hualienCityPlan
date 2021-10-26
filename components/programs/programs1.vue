<template>
  <div>
    <div class="program1">
      <div class="program-title">
        <h2 class="title">日出大道</h2>
        <div class="subtitle">日出未來河</div>
        <p class="content">
          一條充滿故事的溝仔尾，轉生成為日出大道，曾是一條河，棲河而生的時代後，城市建設往前走了一大<br
            v-show="!$device.isMobile"
          />步，人們的生活改變了。城市因人聚集而生，時間的河繼續地流向未來，在追憶與追求之間，此刻正是<br
            v-show="!$device.isMobile"
          />時候，我們來到自由街，用八道提問來號召藝術跨域作品，一起溫溫的問問過去，一起找出未來花蓮的<br
            v-show="!$device.isMobile"
          />城市共感。
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
          <div class="program-item-tag" v-html="item.tag"></div>
          <div class="program-item-subtitle" v-html="item.subtitle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program1 {
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
      position: relative;
      margin-bottom: 10vw;

      &:after {
        content: "";
        position: absolute;
        width: 100vw;
        height: 1px;
        background: #262626;
        left: 50%;
        bottom: -7vw;
        transform: translateX(-50%);
      }
    }
  }

  .program-item-box {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    row-gap: 3vw;
    .program-item {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      padding: 0;
      .program-item-title {
        font-size: 7vw;
        font-weight: bold;
        transition: all 0.2s;
        position: relative;
        &::before {
          content: "";
          width: 150%;
          height: 1px;
          position: absolute;
          background: #262626;
          left: 50%;
          bottom: 30%;
          z-index: 1;
          transform: translateX(-50%);
          transition: all 0.2s;
        }
        &::after {
          content: "";
          width: 100%;
          height: 50%;
          position: absolute;
          background: #fff;
          left: 0;
          bottom: -20%;
          transition: all 0.2s;
        }
      }
      .program-item-tag {
        margin-top: -1vw;
        position: relative;
        z-index: 1;
        transition: all 0.2s;
        font-size: .9vw;
        color: #4d4d4d;
      }
      .program-item-subtitle {
        position: relative;
        font-size: 1.1vw;
        margin-top: 0.5vw;
        padding-right: 1.1vw;
        transition: all 0.2s;
        letter-spacing: 0.1vw;
        font-weight: bold;
        text-align: center;
        line-height: 1.5;

        &::after {
          content: "";
          height: 0.9vw;
          width: 0.9vw;
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
          transform: translateY(-30%);
          &::before {
            bottom: 0%;
            transform: translateX(-50%);
          }
          &::after {
            content: "";
            bottom: -50%;
          }
        }
        .program-item-tag {
          color: $primaryColor;
        }
        .program-item-subtitle {
          color: $primaryColor;
          &::after {
            transform: translateY(-50%) translateX(10px);
            background-image: url("@/assets/img/program/arrow_hover.svg");
          }
        }
      }

      &:nth-child(6) {
        .program-item-subtitle {
          &::before {
            content: "(選段演出)";
            position: absolute;
            font-weight: 400;
            left: 50%;
            transform: translate(-50%, 140%);
            font-size: .9vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .program1 {
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 25vw;
    .program-title {
      margin: 25vw 0;
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
        margin-bottom: 30vw;
        &::after {
          bottom: -15vw;
        }
      }
    }

    .program-item-box {
      position: relative;
      width: 100vw;
      margin-left: -10vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30pt;
      .program-item {
        padding-bottom: 20vw;
        .program-item-title {
          font-size: 77.9pt;
          &::before {
            content: "";
            width: 110%;
            height: 1px;
            position: absolute;
            background: #262626;
            left: 50%;
            bottom: 30%;
            z-index: 1;
            transform: translateX(-50%);
            transition: all 0.2s;
          }
          &::after {
            content: "";
            width: 100%;
            height: 50%;
            position: absolute;
            background: #fff;
            left: 0;
            bottom: -20%;
            transition: all 0.2s;
          }
        }
        .program-item-tag {
          margin-top: -15pt;
          font-size: 9pt;
        }
        .program-item-subtitle {
          font-size: 13pt;
          margin-top: 6pt;
          padding-right: 18pt;
          text-align: left;
          position: absolute;
          top: 85pt;

          &::after {
            height: 12pt;
            width: 12pt;
          }
        }

        &:hover {
          .program-item-subtitle {
            &::after {
              transform: translateY(-50%) translateX(5px);
            }
          }
        }

        &:nth-child(6) {
          .program-item-subtitle {
            &::before {
              content: "";
            }
          }
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
          title: "Q1",
          subtitle: "花式提問",
          tag: "你有愛花蓮嗎？",
          color: "#6EB9EB",
          tab: [
            {
              name: "花式提問",
              enname: "Ask Me If You Can",
              creator: "陶維均  林清盛",
              info: `11/20 (六)、11/21 (日) 1400-1800<br>地點｜花創園區 鍋爐室`,
              content: `每個住花蓮的人，心中對花蓮都有提問。有問題是因為關心，關心是想要更好，無論對自己或社群、對事業或環境，心中有滿滿的疑問想要開噴，《花嘿噴》不怕你噴麥不怕你破音只怕你不敢問。讓我們一起將關心轉為話語，把問題化作實踐，我的道聽是你的塗說，大聲向花蓮問聲好還要更好，問出一條更好的路。<br/><br/>

<b>花式提問｜14:00-17:00</b><br/>
事先邀約花蓮各路豪傑接受採訪，以不曾公開受訪或少有拋頭露面的民間素人各類職人為主。受訪者職業年紀性別不限，包括警察、櫃姐、林務局員工、立委、餐廳老闆、牛肉攤主皆為預計邀請名單。每位受訪者受訪時間以30分鐘為限，並且必須擔任「下一位受訪者」的引言提問人，每位受訪者都回答問題也提出問題，用問題扣連問題的方式體現廣播現場多元匯集的觀點與聲音。<br/><br/>

<b>花黑噴歡迎來噴｜17:00-18:00</b><br/>
由陶維均擔任總主持人，邀約經過的民眾進來隨意開講，想當主持人訪談其他路人也可以，大家一起對花蓮提問，一場人人都是主持人的花式提問大亂鬥。<br/><br/>

<b>｜陶維均</b><br/>
步行嗜好者，移居花蓮靠山新住民。「有点文化」負責人，「有點熟游擊廣播電台」「豐田電台TOYOTA RADIO」台長，「花蓮豐田移創指導所」舍監，小犬MAJIgaga的犬父。<br/><br/>

<b>｜林清盛</b><br/>
飛碟聯播網太魯閣之音廣播節目主持人，在花蓮主持「熱情東海岸」、「花現193」兩個節目，前News98電台「阿貓阿狗逛大街」主持人，入圍兩屆廣播金鐘獎主持人獎。著有《第十個約定》（新經典文化）。在花蓮的日子，新聞採訪、節目製作、業務工作，甚至身兼戶外活動主持，一刻不得閒。聲音與文字的傳播者。`,
              warn: "注意事項：請保持心平氣和",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a1-1花式提問.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/discover193/",
                },
              ],
            },
          ],
        },
        {
          title: "Q2",
          subtitle: "白浪海嘯吃菜吧",
          tag: "花蓮綠色啟示？",
          color: "#DCC8EB",
          tab: [
            {
              name: "白浪海嘯吃菜吧",
              enname: "Vegetables Everyday",
              creator: "走路草農藝團",
              info: `11/19(五)-11/21(日) 1000-2200<br/>作品互動｜1600-2200<br/>地點｜自由街X南京街-成功街`,
              content: `「白浪」有海的意像，也是原住民朋友稱呼漢人時所使用的名稱；「海嘯吧」很可怕，但其實是原住民朋友，對於「還是要吧」的這四個字連音的諧音讀字。「白浪海嘯吃菜吧」是走路草以「白浪」身份，針對地方常見的「野菜」發起的現地計劃，除邀請參與的朋友，認識不同的「野菜」，也告訴來此的「白浪」們，還是要吃地方的野菜吧！本計劃包含從臺灣的蔬果紙箱出發，與當地的媽媽們合作，創造出花蓮特選的野菜紙箱，另外透過動力裝置與作物種子的結合，創造出在海聽濤的聲響，也呼應著過去曾經可以看到溪流的日出大道。<br/><br/>

<b>｜走路草農／藝團成員</b><br/>
來自高雄的甲仙與大社，關注生態自然、農業環境與地景考現等相關議題。「治本於農，以農入藝」走路草創作的方法與目標，農藝不只是農業技術，更是轉化創作的靈感來源與實踐方法。持續的創作計劃包含「思箱計劃」、「噥噥時間交換所」等等。`,
              warn: "注意事項｜拍照打卡不用錢，參觀選購更歡迎",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a2-1白浪海嘯.jpg"),
                require("@/assets/img/program/4-1日出未來河/a2-2白浪海嘯.jpg"),
                require("@/assets/img/program/4-1日出未來河/a2-2花式提問.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/wgagriculture",
                },
              ],
            },
          ],
        },
        {
          title: "Q3",
          subtitle: "家族",
          tag: "有回家的感覺？",
          color: "#C8E6FA",
          tab: [
            {
              name: "家族",
              enname: "Family",
              creator: "賈茜茹",
              info: `11/19(五)-11/21(日) 1000-2200<br/>展演｜1730-1830<br/>地點｜自由街X成功街-福建街`,
              content: `每個家都會有一個客廳，每個客廳都有屬於自己的故事。離不開的是不想離開還是不能離開？回來的是想回來還是不得不回來？在這一座山、一片海、一條消失的溪流之下，將發生一個家族的聚散，一通沒人接聽的電話，一場沒有邊界的演出。<br/><br/>

使用當地的二手傢俱，拼製一座可多面向觀看的架高客廳與如橋樑般的長桌，回應溝仔尾過去建築在河床上房舍和福住橋的形象。與戲劇治療師合作，透過表演者的引導，讓觀眾成為這個混聚客廳裡的短暫家人。其中特別使用柯智豪所提供的作品「國王的驢耳朵」中孩子們的童言童語，放置在裝置中，為這次的作品拉出一個更純粹的情境，回應花蓮的令人感到美好的一部分。<br/><br/>

創作概念：賈茜茹<br/>
協同創作：柳冠竹<br/>
表演者：何冠儀、楊宇政、初柏翰<br/>
視覺統籌：董育廷<br/>
佈展執行：許少軒<br/>
電話裝置製作：穀米機工<br/>
特別感謝：柯智豪<br/><br/>

<b>｜賈茜茹</b><br/>
1984年於台北出生。擅長自言自語，喜歡與萬物對話，在創作上收集、撿拾，使用任何可以在日常生活中可見的物品做為材料，透過聚集某些物件來重現一種分散在人群當中的力量。試著混合日常物品和生活經驗，創作物品的另一種的觀看方式，並讓這種經驗回歸到生活當中，為真實生活中創作新的體驗和可被想像的空間。
`,
              warn: "注意事項｜觀眾可自由移動長桌旁的以椅子在這個混聚客廳中找地方坐下，使用完畢時要放回同側桌邊即可。",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a3-1家族.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/chiachienju",
                },
              ],
            },
          ],
        },
        {
          title: "Q4",
          subtitle: "校準：路徑",
          tag: "大道帶我去哪？",
          color: "#C3CDEB",
          tab: [
            {
              name: "校準：路徑",
              enname: "Calibrate: Path",
              creator: "謝佑承 王中原",
              info: `11/19(五)-11/21(日) 1000-2200<br/>地點｜自由街X成功街-福建街`,
              content: `日出大道的地理位置，往前往後延伸連接，分別連接兩個頂點：山與海的兩邊，縱切從山至海的路線，依著每個人的方向，路線因此有了各自不同的起點與終點。如果路徑的兩端永恆不變，通道將帶我們去哪邊？<br/><br/>

《校準：路徑》運用日出大道棋盤般的場域，以螢光膠帶放大至整個戶外的景觀中。在路徑之上，它既揉合了城市臨時與永久性的街景改造，同時也引領觀者的眼睛橫渡「此刻」與「未來」的探索場景，相較數位技術的便捷與快速，希望能透過人工、勞動所銘刻的身體感覺與轉換，回應當下另一種感覺重置與想像時空。<br/><br/>

<b>創作概念：謝佑承</b><br/>
<b>協同創作：王中原</b><br/><br/>

謝佑承畢業於國立臺北藝術大學新媒體藝術學系碩士班。創作常以現場製作、影像、物質材料等不同形式與媒材，發展以光為存在辯證的系列作品。王中原畢業於倫敦大學金匠學院設計研究所，作品媒材多使用裝置與聲音等複合形式，觀察生態系中人、生物、環境間的互動與影響。<br/><br/>

兩人期許透過計畫的合作，不限於媒體、空間裝置與聲音，關注當前世界人與自然的交互關聯，乃至集體的共感記憶與生存空間。`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a4-1校準.jpg"),
                require("@/assets/img/program/4-1日出未來河/a4-2校準.jpg"),
              ],
              links: [],
            },
          ],
        },
        {
          title: "Q5",
          subtitle: "這原是一條河",
          tag: "這原本是條河？",
          color: "#C3CDEB",
          tab: [
            {
              name: "這原是一條河",
              enname: "There Is A River",
              creator: "曾令理",
              info: `11/19(五)-11/21(日) 1000-2200<br/>互動｜每10分鐘霧氣施放<br/>
地點｜自由街X廣東街-重慶路`,
              content: `日出香榭大道的下方是花蓮居民口中的溝仔尾，承襲著過去沿岸的歷代風華。 城市的發展有著許多複雜綜合的判斷，有些留下成為永恆的日常，有些在不得已中逐漸被淡忘。藝術家在此使用鋪面縫隙作為引導，定時施放向上竄升的水霧，讓來往的人在水氣瀰漫間想起下方伴隨著花蓮的河。<br/><br/>

<b>｜曾令理</b><br/>
藝術家曾令理作品風格總在洗鍊造型中透露著奇幻感，致力於探索不可見的現象並將其轉譯為可體驗的作品。過去在美國庫柏聯盟、哈佛大學完成建築與設計碩士學位。現任陽明交通大學建築學系助理教授，並於2016起擔任偶然設計平台發起人，連結不同的創作者跨領域共同協作專案。`,
              warn: "注意事項｜水霧施放時請勿距離噴頭過近，並小心衣物潮濕與地滑的可能。",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a5-1這原是一條河.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/bigwhitelili/",
                },
                {
                  type: "ig",
                  link: "https://www.instagram.com/lingli_tseng/",
                },
              ],
            },
          ],
        },
        {
          title: "Q6",
          subtitle: this.$device.isMobile
            ? "非常態運動<br/>失序邊境"
            : "非常態運動-失序邊境",
          tag: "什麼永恆不變？",
          color: "#C8E6FA",
          tab: [
            {
              name: "非常態運動-失序邊境 （選段演出）",
              enname: "Helter Skelter – Tilted Border",
              creator: "失序場團隊",
              info: `11/19(五)-11/21(日) 1000-2200<br/>展演｜1700-1800、1930-2030<br/>地點｜自由街X重慶路`,
              content: `<span class="highlight">*本節目為臺中國家歌劇院2021新藝計畫作品，前期發展由財團法人國家文化藝術基金會贊助。</span><br/><br/>

藉著打造類似蹺蹺板的大型金屬裝置及帶有電磁鐵的身上配件，為演出創造一個反重力的「不穩定場域」。在充滿不確定性的環境下，受過身體訓練的3位表演者不再能如過往自主控制身體，更需在與裝置牽引、拉扯的過程中轉換肢體運用方式，找尋各自、彼此及與裝置間的生存之道。《非常態運動-失序邊境》反映著當環境不再以過去的規則進行、所有的秩序被打破時，彼此之間的情感與關係開始在混沌失序的狀態中產生變化、相互衝突，直到新的秩序與平衡重新被建構。然而失序的僅是眼前的環境紛擾或世界變遷，還是內心深處最親近的自己?<br/><br/><br/>


<b>舞者曁共同創作｜曾靖恩、李冠霖、李晉安</b><br/>
<b>裝置設計曁共同創作｜王量、陳彥齊、林意翔</b><br/><br/>

失序場由 3 位編舞者曾靖恩、李冠霖、李晉安及 3 位新媒體藝術家王量、林意翔及陳彥齊共組而成的跨領域表演藝術團體，期望探討表演藝術與新媒體藝術在不失各自領域本質下，激發不同類型的創作形式、打造新藝術語彙。

`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a6-1非常態1.jpg"),
                require("@/assets/img/program/4-1日出未來河/a6-1非常態2.jpg"),
                require("@/assets/img/program/4-1日出未來河/a6-1非常態3.jpg"),
                require("@/assets/img/program/4-1日出未來河/a6-1非常態4.jpg"),
                require("@/assets/img/program/4-1日出未來河/a6-1非常態5.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://reurl.cc/r1dbG1",
                },
                {
                  type: "ig",
                  link: "https://www.instagram.com/o.f.c_theatre/",
                },
                {
                  type: "yt",
                  link: "https://reurl.cc/NZjOAx",
                },
              ],
            },
            {
              name: "滑板表演",
              enname: "Freestyle Skate",
              creator: "滑板團隊",
              info: `11/19(五)-11/21(日) 1530-1645<br/>地點｜自由街X重慶路`,
              content: `滑板極限運動表演，利用現有的道具，做出地板招式以及卡招的運用。<br/><br/>

<b>｜花蓮在地的滑手</b><br/>
胡冠嘉、李斌、林澄浩、墨梵、慕凡、陳爾陽`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a6-2滑板1.jpg"),
                require("@/assets/img/program/4-1日出未來河/a6-2滑板2.jpg"),
              ],
              links: [
                {
                  type: "ig",
                  link: "https://www.instagram.com/pay_or_die/",
                },
              ],
            },
          ],
        },
        {
          title: "Q7",
          subtitle: "鏡岕",
          tag: "過去現在未來？",
          color: "#DCC8EB",
          tab: [
            {
              name: "鏡岕",
              enname: "Between Reflections",
              creator: "豪華朗機工 LuxuryLogico",
              info: `11/19(五)-11/21(日) 1000-2200<br/>地點｜自由街X重慶路`,
              content: `利用募集回收鏡子來反射大道上的一切，包含天地。象徵這個世界是無限循環，映照即看見，所有的一切都在裝置理集聚與擴散，一如這個城市承載著人們的相聚與離合，全都在這夢境般的反射之中，而我們從這裡對未來展開提問。<br/><br/>

<b>｜豪華朗機工</b><br/>
由4位1980年左右出生的新銳藝術家張耿豪、張耿華、陳志建及林昆穎，因混種概念而成軍，作品風格以「輕鬆異境陽光飄浮」而著稱，他們取材於自然環境，憑著狂想討論奇觀社會中的人性思維，將極度的科技整合極度的人文，利用「音樂、視覺、裝置、文本」共陳手法，使面向千變萬化，作品類型橫跨多面。`,
              warn: "注意事項｜請勿觸碰或攀爬作品",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a7-1鏡岕.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/profile.php?id=100044553908975",
                },
              ],
            },
          ],
        },
        {
          title: "Q8",
          subtitle: "大道流動問答",
          tag: "我們來一起問？",
          color: "#6EB9EB",
          tab: [
            {
              name: "大人問到底",
              enname: "We Ask You Answer Me",
              creator:
                "大人問到底團隊（羅棋諠、瞿正柔、朱昶維、楊大衛、陳妤蓁）",
              info: `11/19(五)-11/21(日) 1630-1730、1830-1930<br/><br/>地點｜自由街X南京街-重慶路<br/>（活動時間內隨機出現）`,
              content: `如果你這樣問我，我會那樣回答你。<br/><br/>

問題與答案可以同時存在，卻也無形交織著，<br/>
就像今天相遇的我和你........<br/><br/>

無論未來我們走向哪裡，<br/>
一起創造當下的快樂就對了！。<br/><br/>

<b>｜羅棋諠、瞿正柔、朱昶維、楊大衛、陳妤蓁</b><br/><br/>

由畢業於台北藝術大學戲劇系的五位表演者組成的團體。致力於集結各種藝術形式與元素，搭起大眾與藝術的橋樑，希望世界上的人類都可以站在這座橋樑上，感受「生活即藝術，藝術即生活」的美好。`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-1-1大人問羅棋諠.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-1-2大人問瞿正柔.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-1-3大人問朱昶維.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-1-4大人問楊大衛.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-1-5大人問陳妤蓁.jpg"),
              ],
              links: [],
            },
            {
              name: "香榭蚌蚌",
              enname: "Clam Bombshell",
              creator: "走問團：台北劇場實驗室",
              info: `11/19(五)-11/21(日)<br/>
1730-1830、1930-2030<br/><br/>
地點｜自由街X廣東街-成功街<br/>（活動時間內隨機出現）`,
              content: `溝仔尾的水兀自流，但它總不是自己的主人。<br/>
本作品靈感來自溝仔尾的人文歷史——從過往孩童放學在溪中抓蛤仔的景象、盛極一時的紅燈戶和今日想要邁入國際的香榭大道，虛擬出兩個蚌殼精，一中一西的不同風格卻都宣稱自己是這個地方的最佳代言人。今日兩蚌相爭決定在大道上以歌舞決勝負，請大家用雪亮的眼睛、公正的耳朵和愛花蓮的心投下神聖的一票，看誰最蚌。但這塊地的人文風景是否真的能由民眾決定？這兩個蚌殼精就是我們所有的選擇嗎？有誰真的聽到溝仔尾聲音呢？<br/><br/>

<b>｜台北劇場實驗室</b><br/>
以開放與實驗為經，創作與交流為緯，創作作品不設限領域與形式，風格綺麗擅長以歌舞形式創作，但主題始終關注社會現況。歷年作品包括獲台北藝穗節首獎「永真藝穗獎」肯定的創團作品《愛神紅包場》、《女子比屈歌舞秀》、台北藝術節《但是又何Night》、玩劇場藝術節開幕遊行《舞動起乩》等。`,
              warn: "注意事項｜請與表演者保持1.5公尺的肉身距離，但歡迎心靈和語言上的熱情交流。",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-2-1臺北劇場.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-2-2臺北劇場.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-2-3臺北劇場.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-2-4臺北劇場.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-2-5臺北劇場.jpg"),
              ],
              links: [
                {
                  type: "fb",
                  link: "https://www.facebook.com/taipeitheatrelab",
                },
                {
                  type: "personal",
                  link: "https://taipeitheatrelab.wordpress.com/",
                },
              ],
            },
            {
              name: "《臺北室外網球公開賽》在花蓮",
              enname: this.$device.isMobile ? "《Taipei Schwaiwanqiu Open》<br/>in Hualien":"《Taipei Schwaiwanqiu Open》in Hualien",
              creator: "走問團：張汶皓",
              info: `11/19(五)-11/20(六) 1815-1915、2045-2145<br/>11/21(日) 1815-1915<br/>地點｜自由街X重慶路`,
              content: `我們熱愛網球，就像愛著花蓮這塊土地一樣愛。<br/><br/>


網球的前身是14世紀流行於法國宮廷的一種遊戲叫「Handball掌球戲」規則是兩名玩家隔著一條繩子，使用手掌將被布包著頭髮製成的球互相對打。後來這種遊戲經過發展和改良，用網子代替繩子，並將以手擊球改為使用木製球拍擊球，隨後木製球拍更拉上弦線變成現在看到的碳纖維網球拍的前身。<br/><br/>

18世紀開始，歐洲民間開始出現這種遊戲，並且於19世紀盛行於歐洲，1877年在英國倫敦舉行了首場溫布頓網球錦標賽，為現代網球史上最早的比賽。2020年因疫情爆發，網球四大滿貫賽有的延期、有的取消了。被藝術耽誤的內籍教練張汶皓決定發起大家口中的貴族運動《臺北室外網球公開賽》看他怎麼打破階級、超越權貴，讓網球運動被重新詮釋！<br/><br/><br/>


<b>｜張汶皓</b><br/>
世新大學廣播電視電影學系電視組。1992年出生在台灣台北市，自幼對運動熱愛，接受職業網球運動員訓練，因過於好動，求學時是在班級上是老師們的頭痛人物，被指派去準備慶生表演節目，模仿「Machi麻吉」跳街舞，唯妙唯俏栩栩如生，從此開啟舞蹈人生。<br/>
街舞背景的汶皓擅長Locking、Krump、Breaking、Hip hop，並將舞蹈風格和武術及當代舞蹈元素相結合。在2011-2012年與街舞名師FunkyBambi、Elmo環島旅行，到各城市的弱勢單位做街頭演出和公益演出。2012年舞蹈家許芳宜從紐約回台灣創作，擔任其製作《Way out》舞者，並與世界級舞蹈家阿喀郎．汗在國家戲劇院同台演出。陸軍退伍後和父親共同經營網球訓練及推廣的工作，2017年以PTR國際教練身份受邀至香港訓練ITF職業青少年網球選手。近年更積極投入舞蹈影像的創作，參與台灣資深音樂人林強、魏如昀、徐佳瑩、蘇珮卿的音樂錄影帶製作，並在加拿大樂團Homeshake邀製的MV《Every single thing》作品，入圍加拿大Prism Prize的音樂錄影帶大獎。`,
              warn: `注意事項｜<br/>
- 本節目開放上臺獻花、獻金、獻果。<br/>
- 球飛過來的時候，一起幫我們接起來，丟回場中央。<br/>
- 本節目歡迎攝影、錄影及錄音，記得Tag @wego5519。`,
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-3-1網球公開賽.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-3-2網球公開賽.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-3-3網球公開賽.jpg"),
              ],
              links: [
                {
                  type: "ig",
                  link: "https://www.instagram.com/wego5519/",
                },
              ],
            },
            {
              name: "Charlie的叭叭洗澎澎：<br/>城市廣場舞",
              enname: "",
              creator: "說書團：法咪咪",
              info: `11/20(六) 1900-1910、2100-2110<br/>地點｜自由街X福建街`,
              content: `日出大道上，舞動廣場舞準時齊聲齊動，踏上你的步伐一起跳跳跳。法咪咪跨界與怪奇饒舌歌手春艷合作，推出單曲洗腦歌曲「Charlie的叭叭洗澎澎」，將在花蓮城空藝術節中，於日出大道上與好萊塢歌舞協會一同帶來城市快閃廣場舞！<br/><br/>

<b>｜法咪咪</b><br/>
榴槤世家第三代的亞洲大亨「法咪咪」企圖轉型家族農產形象，以幽默詼諧的媒體行銷來宣傳這外殼有刺、散發極濃氣味的水果之王。法咪咪手拿著榴槤，掛著招牌微笑周遊各國，2019年登上紐約時報廣場最大的艾迪遜螢幕，並於蘇活區開設首間「榴槤美術館」；2020年旋風回到亞洲，進軍首爾開設「榴槤健身房」，並於夏天在臺北開設首間「榴槤製藥廠」概念店。法咪咪的身份遊走在名人、商人、設計師及歌手之間，用跨界的方式滿足資本社會的需求，並向世界宣告他的時代已來臨！<br/><br/>

Photo by Eian Kantor, Performa 19. © FAMEME Studio`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-4法咪咪.jpg"),
              ],
              links: [],
            },
            {
              name: "遊俠說書",
              enname: "",
              creator: "說書團：黃懷德",
              info: `11/19(五)-11/21(日) 1730-1830、1930-2030<br/>地點｜自由街X南京街-重慶路<br/>（活動時間內隨機出現）`,
              content: `俠客/說書人，扮演花蓮曾經有的英雄式角色，遊走在大道上與展覽或民眾互動，也藉此去讓人記憶花蓮曾經有的人與故事。<br/><br/>

<b>｜黃懷德</b><br/>
近年備受矚⽬的新⽣代編舞家，雲⾨2的駐團編舞者。2008年國⽴台灣藝術⼤學舞蹈系畢業，2009年加入驫舞劇場。2015年受邀雲⾨2春⾾編舞，2016再度受邀參與春⾾編舞。作品曾入圍第14屆台新藝術獎，重要作品有《兩條線》、《時間旅⾏》、 《我有⼀張椅⼦》、《暫時⽽已》、《亮》等。`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-5黃懷德.jpg"),
              ],
              links: [],
            },
            {
              name: "西服店的日常與盛況",
              enname: "Daily Life of the Suite Store",
              creator: "說書團：三分生劇團",
              info: `11/20(六)-11/21(日) 1630-1720<br/>地點｜明義街X上海街→往「明星洋服店」`,
              content: `昔日溝仔尾的街上有菜市場、醫生館、戲院、西服店......，日常的西服店裡，老闆教導徒弟學藝態度，傳授他們真心面對手藝學習。每日有各式客人前來店裡，需求各有不同，有外來客到本地做西服、也有因結婚、升官、工作等需求來做西服，那個年頭的西服榮景蓬勃非凡......。<br/><br/>

<b>｜三分生劇團</b><br/>
成立於2018年，成立之際即已進入花蓮溝仔尾做田野調查。溝仔尾是花蓮發展最早與最熱鬧的街區，隨著時代變遷許多過往事蹟均彌足珍貴。劇團因而以溝仔尾地區田調作為劇本創作的依據，二度在花蓮城隍廟前演出，帶領觀眾重回舊時廟前看戲的感受，拉近演出者與觀眾彼此距離，希望在地居民也能看到屬於他們的故事。
`,
              warn: "注意事項｜街上演出時請與表演者維持1.5公尺距離，但歡迎觀眾於最後加入與演員一同共舞",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-6-1三分生.jpg"),
              ],
              links: [],
            },
            {
              name: "汝妮的原住民新聲音",
              enname: "",
              creator: "音樂團：DJ 汝妮",
              info: `11/19(五) 2030-2130<br/>
11/21(日) 2030-2130<br/>
地點｜自由街X成功街-福建街`,
              content: `來自花蓮阿美族的Dungi非常珍視傳統文化，在部落採集外面聽不到的聲音，不斷嘗試堅硬的敲擊聲碰撞富有文化感的古調，創造出動人心弦的電子音樂。<br/><br/>

<b>｜DJ 汝妮</b><br/>
本名DUNGI SAPOR，有著古典鋼琴及舞蹈的底子，不侷限任何音樂類型，在奠下基礎後，2015年進入DJ生涯，不斷挑戰結合在地文化，清楚建立出自己的聲響辨識，使她的音樂場景擁有獨特品味，表演中大膽拼湊自我意識的風格，被稱為公主的她很快就累積出一批死忠粉絲。<br/><br/>

曾受邀於Australia、New Zealand、S2O Taiwan Songkran Music Festival演出、德國知名TechnoDJ Monoloc亞洲巡迴台灣站指定暖場DJ、與華人世界百大女DJ Cookie演出，以地下場景鍛鍊出的能量與爆發力說服音樂祭的舞客。`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-7-1汝妮.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-7-2汝妮.jpg"),
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
            },
            {
              name: "回家跳舞",
              enname: "Home Party",
              creator: "音樂團：Jesse Chen、Gazer、Venci",
              info: `11/20(六) 1630-2100<br/>
地點｜自由街X成功街-福建街`,
              content: `青年外流，壯年回流，重回山海夕陽與夜幕洋流之間，在陌生卻熟悉的海風中，跳舞慶祝。<br/><br/>

Gazer — 泊人 ANKR｜16:30 - 17:45<br/>
Jesse Chen — APleasure Always Brings Pain｜17:45 - 19:00 <br/>
Venci — Evaporate｜19:10 - 21:00 <br/><br/>

<b>｜Jesse Chen</b><br/>
雙好設計2byWu&Chen與派對策劃單位Pleasure Always Brings Pain (PABP) 共同主理人之一。派對風格深受柏林場景影響，近年陸續邀請英國重砲製作人Perc、柏林獨立派對主理人Henning Baer（Grounded Theory) 、柏林Herrensauna派對創始DJ之一MCMLXXXV、 奧地利Meat Market主腦Gerald VDH、柏林新鋭DJ製作人Parallx、Introversion、Emika、Daniela La Luz以及柏林龐克教父Mark Reeder來臺並同台演出。<br/><br/>

<b>｜GAZER (Gary Chen)</b> <br/>
來自台北，成長於90橫跨千禧世代，於2013年開始演出。喜愛飽滿低頻中帶有自然大氣氛圍的Techno音樂風格，擅長融合自然及工業聲響來編排舞曲，營造出穩健的低音及飽和的空間感，並在催眠節奏中帶出持續流動的情緒變化。2020年創立【泊人ANKR】，為從在地自然觀點出發的音樂及活動品牌。<br/><br/>

<b>｜Venci</b><br/>
出身自台東、生活於台北，Techno是她生活中不可或缺的元素。Techno之於Venci，就如同飲食之於人類。與故鄉台東感情深厚，希望更多人聽見臺灣DJ文化的底蘊，也讓東臺灣有機會享受優雅的電音場景。目前為派對單位Evaporate成員之一，並以推廣臺灣電音文化為核心，希望透過電子音樂，讓聽眾更多元、年齡更廣泛。`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-8-1Jesse.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-8-2Jesse.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-8-3Jesse.jpg"),
              ],
              links: [
                {
                  type: "personal",
                  link: "https://soundcloud.com/wenyunlo",
                },
              ],
            },
            {
              name: "東岸爵士重奏",
              enname: "East Coast Jazz Ensemble",
              creator: "音樂團：許元耀、王佳祥、李成員、丁羅紀晴、陳健文",
              info: `表演｜11/19(五)-11/21(日) 1630-1730<br/>地點｜自由街X福建街<br/>
（活動時間內隨機出現）`,
              content: `由薩克斯風、小號、吉他、鋼琴、貝斯所組成的東岸爵士重奏團，要用藍調、搖擺、拉丁、巴薩諾瓦......等不同風格的爵士經典曲目來分享我們對於花蓮生活中的美好。<br/><br/>

<b>｜東岸爵士重奏</b><br/>
許元耀、王佳祥、李成員、丁羅紀晴、陳健文，五位就讀東華大學音樂系爵士組的成員組成。<br/><br/>

許元耀，主修爵士木管，師事楊曉恩。<br/>
王佳祥，主修爵士吉他，師事林華勁。<br/>
李成員，主修爵士貝斯，師事山田洋平。<br/>
丁羅紀晴，主修爵士鋼琴，師事Mark郭、翁家怡。<br/>
陳健文，主修爵士小號，師事魏廣晧。
`,
              warn: "",
              slides: [
                require("@/assets/img/program/4-1日出未來河/a8-9-1東岸爵士重奏-1.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-9-2東岸爵士重奏-2.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-9-3東岸爵士重奏-3.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-9-4東岸爵士重奏-4.jpg"),
                require("@/assets/img/program/4-1日出未來河/a8-9-5東岸爵士重奏-5.jpg"),
              ],
              links: [],
            },
          ],
        },
      ],
    };
  },
  methods: {},
  created() { },
  mounted() { },
};
</script>
