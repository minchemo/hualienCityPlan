<template>
  <div>
    <div class="program1">
      <div
        class="program-item"
        v-for="(item, i) in list"
        :key="i"
        data-aos="fade"
        :data-aos-delay="i * 50 + 50"
        data-aos-duration="1000"
        @click="popupOpen = true"
      >
        <div class="program-item-title" v-html="item.title"></div>
        <div class="program-item-subtitle" v-html="item.subtitle"></div>
      </div>

      <div class="access-info">
        <img
          class="access-info-map"
          src="~@/assets/img/access/map.jpg"
          alt=""
          srcset=""
        />
        <div class="access-info-content">
          <h1>地圖資訊</h1>
          <p>
            文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
          </p>
          <div class="open-map">查看地圖</div>
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
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 0.25vw;
  .program-item {
    height: 25vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    .program-item-title {
      font-size: 1.2vw;
      font-weight: bold;
    }
    .program-item-subtitle {
      font-size: 0.9vw;
      margin-top: 1vw;
    }
  }

  .access-info {
    display: flex;
    justify-content: space-between;
    width: 60vw;
    margin-left: 20vw;
    margin-top: 5vw;
    .access-info-map {
      width: 50%;
    }
    .access-info-content {
      position: relative;
      width: 40%;
      p {
        padding-top: 1vw;
        margin-top: 1vw;
        border-top: 2px solid #808080;
        font-size: 0.7vw;
        line-height: 2;
        letter-spacing: 1.1px;
      }
      .open-map {
        position: absolute;
        font-weight: bold;
        font-size: 0.7vw;
        text-decoration: underline;
        cursor: pointer;
        bottom: 0;
        left: 0;
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
          title: '提問1',
          subtitle: '呼喊花蓮 混聚客廳'
        },
        {
          title: '提問2',
          subtitle: '呼喊花蓮 集體記憶'
        },
        {
          title: '提問3',
          subtitle: '綠色解答＋野菜堂'
        },
        {
          title: '提問4',
          subtitle: '城市切片'
        },
        {
          title: '提問5',
          subtitle: '這是一條河'
        },
        {
          title: '提問6',
          subtitle: '花蓮的變動與平衡'
        },
        {
          title: '提問7',
          subtitle: '象徵大鏡面'
        },
        {
          title: '提問8',
          subtitle: '漂浮魚網'
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
