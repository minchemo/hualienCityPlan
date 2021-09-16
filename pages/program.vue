<template>
  <div>
    <div class="main">
      <Navbar />
    </div>

    <Footer />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.main {
  height: auto;
  background: #eee;
  padding-top: $pc_navbar_height;
  margin-top: -$pc_navbar_height;
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
