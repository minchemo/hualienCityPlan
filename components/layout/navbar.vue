<template>
  <div>
    <div class="navbar" v-bind:class="scrollPos > 100 ? 'scroll' : ''">
      <div class="logo">
        <NuxtLink to="/">
          <img src="@/assets/img/logo.svg" alt="" srcset="" />
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
    <div
      class="navbar-popup-overlay"
      v-bind:class="popupOpen ? 'active' : ''"
    ></div>
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

<style lang="scss">
.navbar-popup-item {
  span {
    .inset {
      font-weight: 900;
      color: black;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }

  &:hover {
    .inset {
      -webkit-text-stroke-color: #6eb9eb;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $pc_navbar_height;
  z-index: 50;
  border-bottom: 1px solid;
  transition: all 0.5s;

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
          &:before {
            content: "";
            height: 100%;
            width: 1px;
            background: #000;
            position: absolute;
            right: -1vw;
          }
        }
      }
      &:hover {
        div {
          span {
            color: #6eb9eb;
          }
        }
      }
      &.nuxt-link-active {
        div {
          span {
            color: #6eb9eb;
          }
        }
      }
      &:last-child {
        div {
          span {
            &::before {
              content: none;
            }
          }
        }
      }
    }
  }

  &.scroll {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
  }
}
.navbar-popup {
  position: fixed;
  height: auto;
  background: transparent;
  z-index: 50;
  top: $pc_navbar_height;
  right: 0;
  transform: translateX(150%);
  transition: all 0.5s;
  padding: 2vw 0vw;
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
    padding-right: 2vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    span {
      font-size: 1vw;
      transition: all .1s;
    }
    &:nth-last-child(1) {
      border-bottom: 0;
      padding-bottom: 0;
    }
    &:hover span {
      color: #6eb9eb;
    }
  }
}
.navbar-popup-overlay {
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  z-index: 49;
  right: 0;
  top: 0;
  width: 0%;
  height: 0%;
  border-radius: 0% 0% 0% 50%;
  transition: all 1s cubic-bezier(0, 0, 0.1, 1);
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;

  &.active {
    width: 100%;
    height: 100%;
    border-radius: 0%;
    backdrop-filter: blur(10px);
  }
}
.social-button {
  position: fixed;
  right: 0;
  top: 80%;
  margin-top: -2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #000;
  z-index: 50;
  filter: drop-shadow(4px 10px 15px rgba(0, 0, 0, 0.1));
  padding: 15px 0;
  a {
    margin: 5px 10px;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 1vw;
      filter: invert(100%);
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      popupOpen: false,
      currentPath: this.$nuxt.$route.name,
      navList: [
        {
          linkTo: "/about",
          linkId: "about",
          linkName: "關於",
        },
        {
          linkTo: "/access",
          linkId: "access",
          linkName: "交通",
        },
        {
          linkTo: "/program",
          linkId: "program",
          linkName: "活動",
          menu: [
            {
              linkTo: "/program",
              hash: "1",
              linkName: "<b>日出大道</b> <span class='inset'>日出未來河</span>",
            },
            {
              linkTo: "/program",
              hash: "2",
              linkName: "<b>花創舞台</b> <span class='inset'>花創火溫酒</span>",
            },
            {
              linkTo: "/program",
              hash: "3",
              linkName: "<b>日出舞台</b> <span class='inset'>南濱奔日流</span>",
            },
            {
              linkTo: "/program",
              hash: "4",
              linkName: "<b>周邊街廓</b> <span class='inset'>溝仔尾問路</span>",
            },
            {
              linkTo: "/program",
              hash: "5",
              linkName: "<b>特別場域</b> <span class='inset'>豐田村秘境</span>",
            },
          ],
        },
        {
          linkTo: "/info",
          linkId: "info",
          linkName: "資訊",
          menu: [
            {
              linkTo: "/info",
              hash: "1",
              linkName: "節目表　",
            },
            {
              linkTo: "/info#2",
              hash: "2",
              linkName: "展區地圖",
            },
          ],
        },
      ],
      activeLinkId: "",
      activeMenu: [],
      scrollPos: 0,
    };
  },
  methods: {
    togglePopup(open, linkId) {
      if (open) {
        this.popupOpen = true;

        if (linkId == "program" || linkId == "info") {
          const activeLink = this.navList.find((item) => item.linkId == linkId);
          this.activeMenu = activeLink.menu;
          this.activeLinkId = linkId;
        }
      } else {
        this.popupOpen = false;
      }
    },
    handleScroll() {
      this.scrollPos = window.scrollY;
    }
  },
  mounted() {
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
};
</script>
