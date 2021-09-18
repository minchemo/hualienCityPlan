<template>
  <div>
    <div class="program5">
      <div class="map" data-aos="fade">(圖片)</div>

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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.program5 {
  .map {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
    font-weight: 100;
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
import { isMobile } from "@/utils";

export default {
  data() {
    return {
      isMobile,
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
