<template>
  <div>
    <div class="navbar">
      <div class="logo">
        <NuxtLink to="/">
          <img src="@/assets/img/logo.png" alt="" srcset="" />
        </NuxtLink>
      </div>
      <div class="navbar-link">
        <NuxtLink
          class="navbar-link-item"
          :to="nav.linkTo"
          v-for="(nav, i) in navList"
          :key="i"
        >
          <div
            @mouseover="nav.menu ? togglePopup(true, nav.linkId) : null"
            @mouseleave="nav.menu ? togglePopup(false, null) : null"
          >
            <span>{{ nav.linkName }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="navbar-popup"
      v-bind:class="popupOpen ? 'active' : ''"
      @mouseover="togglePopup(true, activeLinkId)"
      @mouseleave="togglePopup(false, null)"
    >
      <NuxtLink
        v-for="(item, i) in activeMenu"
        :key="i"
        :to="{ path: item.linkTo, hash: item.hash }"
        class="navbar-popup-item"
      >
        <span v-html="item.linkName"></span>
      </NuxtLink>
    </div>
    <div class="social-button">
      <a href="">
        <img src="@/assets/img/fb.svg" alt="" srcset="" />
      </a>
      <a href="">
        <img src="@/assets/img/ig.svg" alt="" srcset="" />
      </a>
      <a href="">
        <img src="@/assets/img/yt.svg" alt="" srcset="" />
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $pc_navbar_height;
  z-index: 50;

  .logo {
    padding-left: 2.2vw;
    img {
      height: 100%;
    }
  }

  .navbar-link {
    display: flex;
    margin-right: 2vw;
    height: 100%;
    align-items: center;
    .navbar-link-item {
      height: 100%;
      div {
        height: 100%;
        padding: 0 1vw;
        display: flex;
        align-items: center;
        span {
          position: relative;
          font-size: 1vw;
          font-weight: bold;
          &:after {
            content: "";
            height: 3px;
            width: 100%;
            background: #000;
            position: absolute;
            left: 0;
            bottom: -10px;
            transition: all 0.4s;
            transform: scale(0);
            transform-origin: center;
          }
        }
      }
      &:hover {
        div {
          span {
            &:after {
              transform: scale(1);
            }
          }
        }
      }
      &.nuxt-link-active {
        div {
          span {
            &:after {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
}
.navbar-popup {
  position: fixed;
  width: 15vw;
  height: auto;
  background: #fff;
  z-index: 50;
  top: $pc_navbar_height;
  right: 0;
  transform: translateX(150%);
  transition: all 0.5s;
  box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.2);
  padding: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.active {
    transform: translateX(0%);
  }
  .navbar-popup-item {
    margin: 1vw 0;
    padding-bottom: 2vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    span {
      font-size: 1vw;
    }
    &:nth-last-child(1) {
      border-bottom: 0;
      padding-bottom: 0;
    }
    &:hover span {
      opacity: 0.7;
    }
  }
}
.social-button {
  position: fixed;
  right: 1.5vw;
  top: 80%;
  margin-top: -2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 5vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100%;
  z-index: 50;
  filter: drop-shadow(4px 10px 15px rgba(0, 0, 0, 0.1));
  a {
    margin: 3px;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 1vw;
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
      popupOpen: false,
      currentPath: this.$nuxt.$route.name,
      navList: [
        {
          linkTo: '/about',
          linkId: 'about',
          linkName: '關於'
        },
        {
          linkTo: '/access',
          linkId: 'access',
          linkName: '交通'
        },
        {
          linkTo: '/program',
          linkId: 'program',
          linkName: '活動',
          menu: [
            {
              linkTo: '/program',
              hash: '1',
              linkName: '<b>日出大道</b>｜日出未來河'
            },
            {
              linkTo: '/program',
              hash: '2',
              linkName: '<b>花創舞台</b>｜花創火溫酒'
            },
            {
              linkTo: '/program',
              hash: '3',
              linkName: '<b>日出舞台</b>｜南濱奔日流'
            },
            {
              linkTo: '/program',
              hash: '4',
              linkName: '<b>周邊街廓</b>｜溝仔尾問路'
            },
            {
              linkTo: '/program',
              hash: '5',
              linkName: '<b>特別場域</b>｜RPG豐田村'
            },
          ]
        },
        {
          linkTo: '/info',
          linkId: 'info',
          linkName: '資訊',
          menu: [
            {
              linkTo: '/info',
              hash: '1',
              linkName: '節目表'
            },
            {
              linkTo: '/info#2',
              hash: '2',
              linkName: '展區地圖'
            },
          ]
        },
      ],
      activeLinkId: '',
      activeMenu: []
    }
  },
  methods: {
    togglePopup(open, linkId) {
      if (open) {
        this.popupOpen = true;

        if (linkId == 'program' || linkId == 'info') {
          const activeLink = this.navList.find(item => item.linkId == linkId);
          this.activeMenu = activeLink.menu;
          this.activeLinkId = linkId;
        }
      } else {
        this.popupOpen = false;
      }
    }
  },
  mounted() {
  }
}
</script>
