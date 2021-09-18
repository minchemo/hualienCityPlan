<template>
  <div>
    <div class="info2">
      <div class="map" data-aos="fade">地圖 (圖片)</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.info2 {
  .map {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
    font-weight: 100;
  }
}
</style>
<script>
import { isMobile } from "@/utils";

export default {
  data() {
    return {
      isMobile,
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  }
}
</script>
