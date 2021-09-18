<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1>活動 PROGRAM {{ routeHash }}</h1>
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
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<script>
import { isMobile } from "@/utils";

export default {
  watch: {
    $route() {
      this.routeHash = this.$nuxt.$route.hash;
    },
  },
  data() {
    return {
      isMobile,
      routeHash: this.$nuxt.$route.hash
    }
  },
  created() {
    window.onhashchange = function () {
      console.log(1);
    }
  },
  mounted() {
  }
}
</script>
