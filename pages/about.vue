<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="intro" data-aos="fade" data-aos-delay="0">
        <h1>年度主題｜溫花蓮</h1>
        <p>
          文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
        </p>
      </div>
      <div class="s2 teams">
        <div class="team" data-aos="fade" data-aos-delay="200">
          <div class="avatar">
            <div class="avatar-img"></div>
          </div>
          <div class="info">
            <h2 class="info-name">藝術總監｜林昆穎</h2>
            <p class="info-content">
              文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
            </p>
          </div>
        </div>
        <div class="team" data-aos="fade" data-aos-delay="400">
          <div class="avatar">
            <div class="avatar-img"></div>
          </div>
          <div class="info">
            <h2 class="info-name">執行團隊｜中文名稱</h2>
            <p class="info-content">
              文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
            </p>
          </div>
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
    .intro {
      h1 {
        text-align: center;
      }
      p {
        font-size: 0.7vw;
        line-height: 2;
        letter-spacing: 1.1px;
      }
    }

    .teams {
      .team {
        margin: 5vw 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .avatar {
          .avatar-img {
            width: 10vw;
            height: 10vw;
            border-radius: 100%;
            background: #eee;
          }
        }

        .info {
          width: 70%;
          .info-name {
            font-size: 1vw;
          }
          .info-content {
            padding-top: 1vw;
            margin-top: 1vw;
            border-top: 1px solid;
            font-size: 0.7vw;
            line-height: 2;
            letter-spacing: 1.1px;
            font-weight: 500;
          }
        }
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
      isMobile
    }
  },
  mounted() {
  }
}
</script>
