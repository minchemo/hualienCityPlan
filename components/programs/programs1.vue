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
          @click="popupOpen = true"
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
    <div class="program-popup" v-show="popupOpen == true">
      <div class="overlay" @click="popupOpen = false"></div>
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
.program-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  .overlay {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
  }
}
</style>
<script>

export default {
  data() {
    return {
      list: [
        {
          title: 'Q1',
          subtitle: '花蓮提問中心',
          color: '#6EB9EB'
        },
        {
          title: 'Q2',
          subtitle: '綠色答野菜堂',
          color: '#DCC8EB'
        },
        {
          title: 'Q3',
          subtitle: '呼喊花蓮客廳',
          color: '#C8E6FA'
        },
        {
          title: 'Q4',
          subtitle: '城市切面計畫',
          color: '#C3CDEB'
        },
        {
          title: 'Q5',
          subtitle: '這原是一條河',
          color: '#C3CDEB'
        },
        {
          title: 'Q6',
          subtitle: '動態平衡蹺蹺',
          color: '#C8E6FA'
        },
        {
          title: 'Q7',
          subtitle: '象徵匯聚鏡面',
          color: '#DCC8EB'
        },
        {
          title: 'Q8',
          subtitle: '大道流動問答',
          color: '#6EB9EB'
        },
      ],
      popupOpen: false
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  }
}
</script>
