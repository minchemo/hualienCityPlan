<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1>活動 PROGRAM</h1>
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
  data() {
    return {
      isMobile
    }
  },
  mounted() {
  }
}
</script>
