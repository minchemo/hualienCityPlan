<template>
  <div>
    <div class="navbar" v-bind:class="scrollPos > 20 ? 'scroll' : ''">
      <div class="logo">
        <NuxtLink to="/">
          <img
            src="@/assets/img/logo.svg"
            v-if="!$device.isMobile"
            alt=""
            srcset=""
          />
          <img src="@/assets/img/logo_m.svg" v-else alt="" srcset="" />
        </NuxtLink>
      </div>
      <div class="navbar-link" v-show="!$device.isMobile">
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
      <div
        class="navbar-hamberger"
        v-bind:class="{ active: mobileMenuOpen }"
        @click="mobileMenuOpen = !mobileMenuOpen"
        v-show="$device.isMobile"
      ></div>
    </div>
    <!-- 電腦選單 -->
    <div
      class="navbar-popup"
      v-bind:class="popupOpen ? 'active' : ''"
      @mouseover="togglePopup(true, activeLinkId)"
      @mouseleave="togglePopup(false, null)"
      v-show="!$device.isMobile"
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
      v-show="!$device.isMobile"
    ></div>
    <!-- mobile 選單 -->
    <div
      class="mobile-menu"
      v-bind:class="{ active: mobileMenuOpen }"
      v-show="$device.isMobile"
    >
      <div
        class="mobile-menu-item"
        v-for="nav in navList"
        :key="nav.linkName"
        v-bind:class="{ active: currentMenu == nav.linkId }"
      >
        <h2 class="mobile-menu-title" @click="toggleMenu(nav.linkId)">
          <NuxtLink :to="nav.menu ? `#` : nav.linkTo">
            <span>{{ nav.linkName }}</span>
            <img
              class="active-arrow"
              src="@/assets/img/nav_arrow_blue_m.svg"
              alt=""
              srcset=""
            />
            <img
              class="arrow"
              src="@/assets/img/nav_arrow_m.svg"
              alt=""
              srcset=""
            />
          </NuxtLink>
        </h2>
        <template v-if="nav.menu && nav.menu.length > 0">
          <div class="submenu">
            <div
              v-for="menu in nav.menu"
              :key="menu.linkName"
              class="submenu-item"
            >
              <NuxtLink :to="{ path: menu.linkTo, hash: menu.hash }">
                <div v-html="menu.linkName"></div>
              </NuxtLink>
            </div>
          </div>
        </template>
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

    <div class="social-button" v-show="!$device.isMobile">
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
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }

  &:hover {
    span {
      color: #6eb9eb;
    }
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
      transition: all 0.1s;
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
@media screen and (max-width: 500px) {
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $mo_navbar_height;
    z-index: 50;
    border-bottom: 1px solid;
    transition: all 0.5s;

    .logo {
      padding-left: 16px;
      margin-bottom: -5px; //fix
      img {
        height: auto;
        width: 50vw;
      }
    }

    .navbar-hamberger {
      position: relative;
      margin-right: 16px;
      width: 40px;
      height: 40px;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background: #262626;
        position: absolute;
        top: 60%;
        transition: all 0.2s;
      }
      &::before {
        content: "";
        width: 100%;
        height: 1px;
        background: #262626;
        position: absolute;
        top: 40%;
        transition: all 0.5s;
      }

      &.active {
        &::after {
          top: 50%;
          transform: rotate(45deg) translateY(-50%);
          transform-origin: center;
        }
        &::before {
          top: 50%;
          transform: rotate(315deg) translateY(-50%);
          transform-origin: center;
        }
      }
    }
  }

  .mobile-menu {
    padding-top: $pc_navbar_height;
    background: #fff;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    transform: translateX(100%);
    transition: all 0.3s;

    .mobile-menu-item {
      padding-left: 16px;
      border-bottom: 1px solid #262626;
      .mobile-menu-title {
        a {
          display: flex;
          align-items: center;
          font-size: 24pt;
          img {
            height: 24pt;
            margin-left: 8pt;

            &.arrow {
              display: block;
            }
            &.active-arrow {
              display: none;
            }
          }
        }
      }
      .submenu {
        overflow: hidden;
        transition: all 0.5s;
        height: 0;
        .submenu-item {
          font-size: 14pt;
          margin: 24pt 0;
          &:first-child {
            margin-top: 12pt;
          }
        }
      }
      &.active {
        .mobile-menu-title {
          a {
            span {
              color: #6eb9eb;
            }
            .arrow {
              display: none;
            }
            .active-arrow {
              display: block;
            }
          }
        }
        .submenu {
          height: auto;
          .submenu-item {
            .nuxt-link-active {
              div {
                color: #6eb9eb;
              }
            }
          }
        }
      }
    }

    .social-button {
      position: relative;
      left: 12pt;
      right: unset;
      top: 0;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      background: transparent;
      z-index: 50;
      filter: drop-shadow(4px 10px 15px rgba(0, 0, 0, 0.1));
      padding: 15px 0;
      a {
        margin: 5px 5px;
        &:hover {
          opacity: 0.7;
        }
        img {
          width: 18pt;
          filter: invert(0%);
        }
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &.active {
      transform: translateX(0%);
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      popupOpen: false,
      mobileMenuOpen: false,
      currentMenu: this.$nuxt.$route.name,
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
              fullLink: "/program#1",
              hash: "1",
              linkName: "日出大道｜<b>日出未來河</b>",
            },
            {
              linkTo: "/program",
              fullLink: "/program#2",
              hash: "2",
              linkName: "花創舞台｜<b>花創火溫酒</b>",
            },
            {
              linkTo: "/program",
              fullLink: "/program#3",
              hash: "3",
              linkName: "日出舞台｜<b>南濱奔日流</b>",
            },
            {
              linkTo: "/program",
              fullLink: "/program#4",
              hash: "4",
              linkName: "周邊街廓｜<b>溝仔尾問路</b>",
            },
            {
              linkTo: "/program",
              fullLink: "/program#5",
              hash: "5",
              linkName: "特別場域｜<b>豐田村秘境</b>",
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
              fullLink: "/info#1",
              hash: "1",
              linkName: this.$device.isMobile
                ? "<b>節目表</b>"
                : "<b>　節目表</b>",
            },
            {
              linkTo: "/info",
              fullLink: "/info#2",
              hash: "2",
              linkName: "<b>展區地圖</b>",
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
    },
    toggleMenu(id) {
      if (this.currentMenu != id) {
        this.currentMenu = id;
      } else {
        this.currentMenu = "";
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
