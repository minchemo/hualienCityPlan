<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="access-info">
        <img
          class="access-info-map"
          src="~@/assets/img/access/map.jpg"
          alt=""
          srcset=""
        />
        <div class="access-info-content">
          <h1>交通資訊</h1>
          <p>
            文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
          </p>
          <div class="open-map">查看地圖</div>
        </div>
      </div>
      <div class="access-types">
        <div
          class="access-type"
          v-for="(type, i) in accessTypes"
          :key="i"
          data-aos="fade-in-left"
          :data-aos-delay="i * 200 + 200"
        >
          <div
            class="access-type-img"
            v-bind:style="{ backgroundImage: 'url(' + type.img + ')' }"
          ></div>
          <div class="access-type-name" v-html="type.name"></div>
          <div class="access-type-content" v-html="type.content"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.main {
  height: auto;
  margin-top: $pc_navbar_height;

  .content {
    padding-top: 5vw;
    position: relative;
    height: auto;
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    .access-info {
      display: flex;
      justify-content: space-between;
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
    .access-types {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 7vw;
      .access-type {
        width: 29%;
        .access-type-img {
          height: 0;
          padding-bottom: 100%;
          background-size: 180%;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.4s;
          &:hover {
            background-size: 220%;
          }
        }
        .access-type-name {
          font-size: 1vw;
          font-weight: 700;
          margin-top: 1vw;
        }
        .access-type-content {
          padding-top: 1vw;
          margin-top: 1vw;
          border-top: 2px solid #808080;
          font-size: 0.7vw;
          line-height: 2;
          letter-spacing: 1.1px;
          font-weight: 500;
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
      accessTypes: [
        {
          img: require('@/assets/img/access/type/train.jpeg'),
          name: '火車',
          content: '文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹'
        },
        {
          img: require('@/assets/img/access/type/airplane.jpeg'),
          name: '飛機',
          content: '文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹'
        },
        {
          img: require('@/assets/img/access/type/bus.jpeg'),
          name: '公車',
          content: '文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹'
        },
      ]
    }
  },
  mounted() {
  }
}
</script>
