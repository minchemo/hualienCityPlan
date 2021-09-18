<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="intro">
        <h1>年度主題｜溫花蓮</h1>
        <p>
          文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
        </p>
      </div>
      <div class="s2 teams">
        <div
          class="team"
          data-aos="fade-up"
          :data-aos-delay="i * 200 + 200"
          v-for="(team, i) in teams"
          :key="i"
        >
          <div class="avatar">
            <div
              class="avatar-img"
              v-bind:style="{ backgroundImage: 'url(' + team.avatar + ')' }"
            ></div>
          </div>
          <div class="info">
            <h2 class="info-name" v-html="team.name"></h2>
            <p class="info-content" v-html="team.content"></p>
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
            background-size: cover;
            background-position: center;
            filter: drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.4));
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
}
</style>
<script>
import { isMobile } from "@/utils";

export default {
  data() {
    return {
      isMobile,
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
