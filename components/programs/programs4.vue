<template>
  <div>
    <div class="program4">
      <div
        class="program-item"
        v-for="(item, i) in list"
        :key="i"
        data-aos="fade"
        :data-aos-delay="i * 50 + 50"
        data-aos-duration="1000"
      >
        <div class="program-item-title" v-html="item.title"></div>
      </div>

      <div class="access-info">
        <img
          class="access-info-map"
          src=""
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program4 {
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
</style>
<script>

export default {
  data() {
    return {
      list: [
        {
          title: '店家1',
          subtitle: ''
        },
        {
          title: '店家2',
          subtitle: ''
        },
        {
          title: '店家3',
          subtitle: ''
        },
        {
          title: '店家4',
          subtitle: ''
        },
        {
          title: '店家5',
          subtitle: ''
        },
        {
          title: '店家6',
          subtitle: ''
        },
        {
          title: '店家7',
          subtitle: ''
        },
        {
          title: '店家8',
          subtitle: ''
        },
      ]
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
