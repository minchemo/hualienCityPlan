<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="info">
        <img src="@/assets/img/access/info.svg" alt="" srcset="" v-lazy-load />
      </div>
      <div class="map">
        <img src="@/assets/img/access/map.jpg" alt="" srcset="" v-lazy-load />
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
    max-width: 70vw;
    margin: 5vw auto;
    .info {
      margin-bottom: 5vw;
      img {
        width: 100%;
      }
    }
    .map {
      img {
        width: 100%;
      }
    }
  }
}
</style>
<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>
