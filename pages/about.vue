<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="intro">
        <img src="@/assets/img/about/intro.svg" alt="" srcset="" />
      </div>
      <div class="text">
        <img src="@/assets/img/about/content.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="team">
      <div class="avatar">
        <img src="@/assets/img/about/team_1.jpg" alt="" srcset="" />
      </div>
      <div class="text">
        <img src="@/assets/img/about/team.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="shop">
      <img class="title" src="@/assets/img/about/shop_title.svg" alt="" srcset="" />
      <img class="logo" src="@/assets/img/about/shop_logos.jpg" alt="" srcset="" />
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
    position: relative;
    margin: 7vw 15vw 0 0;
    padding-bottom: 7vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .intro {
      img {
        height: 90vh;
      }
    }
    .text {
      img {
        height: 90vh;
      }
    }
    &::after {
      content: "";
      width: 100vw;
      height: 1px;
      background: #262626;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .team {
    position: relative;
    max-width: 70vw;
    display: flex;
    align-items: flex-start;
    margin: 5vw auto 3vw auto;
    padding: 1vw 1vw 2vw 1vw;
    .avatar {
      flex: 3;
      margin: 1vw;
      img {
        width: 100%;
      }
    }
    .text {
      flex: 7;
      margin: 1vw;
      margin-top: -1vw;
      img {
        width: 100%;
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
</style>
<script>

export default {
  data() {
    return {
      teams: [
        {
          avatar: require('@/assets/img/about/avatar.jpeg'),
          name: '藝術總監｜林昆穎',
          content: '文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹'
        },
        {
          avatar: require('@/assets/img/about/avatar.jpeg'),
          name: '執行團隊｜中文名稱',
          content: '文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹'
        },
      ]
    }
  },
  mounted() {
  }
}
</script>
