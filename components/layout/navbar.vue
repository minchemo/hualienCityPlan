<template>
  <div>
    <div
      class="navbar"
      data-aos="slide-down"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <div class="logo">
        <NuxtLink to="/">
          <img src="@/assets/img/logo.png" alt="" srcset="" />
        </NuxtLink>
      </div>
      <div class="navbar-link">
        <NuxtLink class="navbar-link-item" to="/about"
          ><span @mouseover="popupOpen = true" @mouseleave="popupOpen = false"
            >關於</span
          ></NuxtLink
        >
        <NuxtLink class="navbar-link-item" to="/access"
          ><span @mouseover="popupOpen = true" @mouseleave="popupOpen = false"
            >交通</span
          ></NuxtLink
        >
        <NuxtLink class="navbar-link-item" to="/program"
          ><span @mouseover="popupOpen = true" @mouseleave="popupOpen = false"
            >活動</span
          ></NuxtLink
        >
        <NuxtLink class="navbar-link-item" to="/info"
          ><span @mouseover="popupOpen = true" @mouseleave="popupOpen = false"
            >資訊</span
          ></NuxtLink
        >
        <NuxtLink class="navbar-link-item" to="/info"
          ><span @mouseover="popupOpen = true" @mouseleave="popupOpen = false"
            >資訊</span
          ></NuxtLink
        >
      </div>
    </div>
    <div
      class="navbar-popup"
      v-bind:class="popupOpen ? 'active' : ''"
      @mouseover="popupOpen = true"
      @mouseleave="popupOpen = false"
    >
    nodata
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
    .navbar-link-item {
      font-size: 1vw;
      font-weight: bold;
      margin-left: 2.2vw;
      &:hover {
        opacity: 0.6;
      }
    }
  }
}
.navbar-popup {
  position: fixed;
  width: 15vw;
  height: 50vh;
  background: #fff;
  z-index: 50;
  top: $pc_navbar_height;
  right: 0;
  transform: translateX(100%);
  transition: all 0.5s;
  box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.2);
  &.active {
    transform: translateX(0%);
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
      popupOpen: false
    }
  },
  methods: {
    gogo() {
      alert(1)
    }
  },
  mounted() {
  }
}
</script>
