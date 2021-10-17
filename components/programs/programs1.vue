<template>
  <div>
    <div class="program1">
      <div class="program-title">
        <h2 class="title">日出大道</h2>
        <div class="subtitle">日出未來河</div>
        <p class="content">
          一條充滿故事的溝仔尾，轉生成為日出大道，曾是一條河，棲河而生的時代後，城市建設往前走了一大<br />
          步，人們的生活改變了。城市因人聚集而生，時間的河繼續地流向未來，在追憶與追求之間，此刻正是<br />
          時候，我們來到自由街，用八道提問來號召藝術跨域作品，一起溫溫的問問過去，一起找出未來花蓮的<br />
          城市共感。
        </p>
      </div>

      <div class="program-item-box">
        <div
          class="program-item"
          v-for="(item, i) in list"
          :key="i"
          data-aos="fade"
          :data-aos-delay="i * 50 + 50"
          data-aos-duration="1000"
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
    </div>
    <Detail />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program1 {
  max-width: 70vw;
  margin: 0 auto;
  margin-bottom: 5vw;
  .program-title {
    margin: 5vw 0;
    .title {
      font-size: 2vw;
    }
    .subtitle {
      font-size: 1vw;
      font-weight: 700;
    }
    .content {
      font-size: 0.7vw;
      line-height: 2;
      letter-spacing: 0.05vw;
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
      }
      .program-item-subtitle {
        position: relative;
        font-size: 0.9vw;
        margin-top: 1vw;
        padding-right: 1.1vw;
        transition: all 0.2s;
        letter-spacing: 0.1vw;

        &::after {
          content: "";
          height: 0.9vw;
          width: 0.9vw;
          background-image: url("@/assets/img/program/arrow.svg");
          background-size: cover;
          position: absolute;
          right: 0;
          bottom: 0;
          transition: all 0.2s;
        }
      }

      &:after {
        content: "";
        width: 80%;
        height: 1px;
        background: #262626;
        position: absolute;
        bottom: 1.8vw;
        left: 10%;
      }

      &:hover {
        cursor: pointer;
        .program-item-title {
          transform: translateY(-3%);
        }
        .program-item-subtitle {
          color: $primaryColor;
          &::after {
            transform: translateX(10px);
          }
        }
      }
    }
  }
}
</style>
<script>
import Detail from "@/components/programs/detail.vue"

export default {
  data() {
    return {
      list: [
        {
          title: 'Q1',
          subtitle: '花式提問',
          color: '#6EB9EB',
          tab: [
            {
              name: '花式提問',
              enname: 'Ask me if you can',
              creator: '陶維均  林清盛',
              info: `場次｜11/20（六）、 11/21（日）<br/>時間｜14:00-18:00`,
              content: `aa`,
              warn: '注意事項：請保持心平氣和',
              slides: [
                require('@/assets/img/program/4-1日出未來河/a1-1花式提問.jpg')
              ],
              links: []
            }
          ],
        },
        {
          title: 'Q2',
          subtitle: '走路草農藝團',
          color: '#DCC8EB',
          tab: [
            {
              name: '白浪海嘯吃菜吧',
              enname: 'Vegetables Everyda',
              creator: '走路草農藝團',
              info: ``,
              content: ``,
              warn: '注意事項｜拍照打卡不用錢，參觀選購更歡迎',
              slides: [
                require('@/assets/img/program/4-1日出未來河/a2-1白浪海嘯.jpg'),
                require('@/assets/img/program/4-1日出未來河/a2-2白浪海嘯.jpg'),
                require('@/assets/img/program/4-1日出未來河/a2-2花式提問.jpg')
              ],
              links: []
            }
          ],
        },
        {
          title: 'Q3',
          subtitle: '呼喊花蓮客廳',
          color: '#C8E6FA',
          tab: [
            {
              name: '家族',
              enname: 'FAMILY',
              creator: '賈茜茹',
              info: ``,
              content: ``,
              warn: '注意事項｜觀眾可自由移動長桌旁的以椅子在這個混聚客廳中找地方坐下，使用完畢時要放回同側桌邊即可。',
              slides: [],
              links: []
            }
          ],
        },
        {
          title: 'Q4',
          subtitle: '城市切面計畫',
          color: '#C3CDEB',
          tab: [
            {
              name: '校準：路徑',
              enname: 'Calibrate: path',
              creator: '謝佑承 王中原',
              info: ``,
              content: ``,
              warn: '注意事項｜本作品使用雷射燈具，觀眾需小心避免雷射直射眼睛與相機器具。',
              slides: [],
              links: []
            }
          ],
        },
        {
          title: 'Q5',
          subtitle: '這原是一條河',
          color: '#C3CDEB',
          tab: [
            {
              name: '這原是一條河',
              enname: 'There is a river',
              creator: '曾令理',
              info: `場次｜每10分鐘 施放一次霧氣`,
              content: ``,
              warn: '注意事項｜水霧施放時請勿距離噴頭過近，並小心衣物潮濕與地滑的可能。',
              slides: [],
              links: []
            }
          ],
        },
        {
          title: 'Q6',
          subtitle: '動態平衡蹺蹺',
          color: '#C8E6FA',
          tab: [
            {
              name: '為非常態運動-失序邊境 （選段演出）',
              enname: 'Helter Skelter – Tilted Border',
              creator: '失序場團隊',
              info: `場次｜11/19 - 11/21 17:00-18:00, ＊19:30-20:30<br/>（＊星號場次週五、週日限定）`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '滑板表演',
              enname: 'Freestyle skate',
              creator: '滑板團隊',
              info: `場次｜11/19 - 11/21 15:30-17:00`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            }
          ],
        },
        {
          title: 'Q7',
          subtitle: '象徵匯聚鏡面',
          color: '#DCC8EB',
          tab: [
            {
              name: '鏡岕',
              enname: 'Helter Skelter – Tilted Border',
              creator: 'Between Reflections',
              info: ``,
              content: ``,
              warn: '注意事項｜請勿觸碰或攀爬作品',
              slides: [],
              links: []
            }
          ],
        },
        {
          title: 'Q8',
          subtitle: '大道流動問答',
          color: '#6EB9EB',
          tab: [
            {
              name: '大人問到底',
              enname: 'We Ask You Answer Me',
              creator: '走問團：大人問到底',
              info: `場次｜11/19 - 11/21 16:30-17:30、18:30-19:30`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '香榭蚌蚌',
              enname: 'Clam Bombshell',
              creator: '走問團：台北劇場實驗室',
              info: `場次｜11/19-11/21 17:30-18:30、＊19:30-20:30<br/>（＊星號場次週五、週日限定）`,
              content: ``,
              warn: '注意事項｜請與表演者保持1.5公尺的肉身距離，但歡迎心靈和語言上的熱情交流。',
              slides: [],
              links: []
            },
            {
              name: '《臺北室外網球公開賽》在花蓮',
              enname: '《Taipei Schwaiwanqiu Open》in Hualien',
              creator: '走問團：張汶皓',
              info: `場次｜<br/>
11/19  18:15-19:15、20:45-21:45<br/>
11/20  14:15-15:15、18:15-19:15<br/>
11/21  18:15-19:15`,
              content: ``,
              warn: `注意事項｜<br/>
- 本節目開放上臺獻花、獻金、獻果。<br/>
- 球飛過來的時候，一起幫我們接起來，丟回場中央。<br/>
- 本節目歡迎攝影、錄影及錄音，記得Tag @wego5519。`,
              slides: [],
              links: []
            },
            {
              name: '廣場帶動跳',
              enname: '',
              creator: '說書團：法咪咪',
              info: `場次｜11/19-11/21 19:00-19:10、21:00-21:10`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '遊俠說書',
              enname: '',
              creator: '說書團：黃懷德',
              info: `場次｜11/19-11/21 17:30-18:30、＊19:30-20:30<br>（＊星號場次週五、週日限定）`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '西服店的日常與盛況',
              enname: 'Daily life of the suite store',
              creator: '說書團：三分生劇團',
              info: `場次｜11/20、11/21 16:30-17:20`,
              content: ``,
              warn: '注意事項｜街上演出時請與表演者維持1.5公尺距離，但歡迎觀眾於最後加入與演員一同共舞',
              slides: [],
              links: []
            },
            {
              name: '汝妮的原住民新聲音',
              enname: '',
              creator: '音樂團：DJ 汝妮',
              info: `場次｜11/19、11/21 20:30-21:30`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '回家跳舞',
              enname: 'Home Party',
              creator: '音樂團：Jesse Chen、Gazer、Venci',
              info: `場次｜11/20 16:30-21:00`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            },
            {
              name: '東岸爵士重奏',
              enname: 'East Coast Jazz Ensemble',
              creator: '音樂團：東岸爵士重奏',
              info: `場次｜11/19-11/21 16:30-17:30`,
              content: ``,
              warn: '',
              slides: [],
              links: []
            }
          ],
        },
      ],
    }
  },
  components: {
    Detail
  },
  methods: {
  },
  created() {
  },
  mounted() {
  }
}
</script>
