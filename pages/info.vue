<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="infos">
        <div class="info-buttons">
          <div
            class="info-button"
            v-for="(info, i) in infos"
            :key="i"
            @click="setRouteHash(info.id)"
            v-bind:class="routeHash == info.id ? 'active' : ''"
          >
            <div class="info-title" v-html="info.title"></div>
          </div>
        </div>
        <div class="info-content">
          <Info1 v-if="routeHash == 1" />
          <Info2 v-if="routeHash == 2" />
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
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .infos {
      width: 100%;
      position: relative;
      .info-buttons {
        display: flex;
        width: 100%;
        .info-button {
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2vw 0;
          background-color: #e5e5e5;
          transition: all 0.4s;
          &:hover {
            opacity: 0.5;
            cursor: pointer;
          }
          &.active {
            opacity: 0.5;
          }
          .info-title {
            font-size: 1.2vw;
            font-weight: bold;
          }
          .info-subtitle {
            margin-top: 0.7vw;
            font-size: 1.2vw;
          }
        }
      }
    }
  }
}
</style>
<script>
import Info1 from '@/components/infos/info1.vue';
import Info2 from '@/components/infos/info2.vue';

export default {
  components: {
    Info1,
    Info2
  },
  watch: {
    $route() {
      this.setRouteHash(this.$nuxt.$route.hash);
    },
  },
  data() {
    return {
      routeHash: '',
      infos: [
        {
          id: 1,
          title: '節目表',
        },
        {
          id: 2,
          title: '展區地圖',
        },
      ],
    }
  },
  methods: {
    setRouteHash(hash) {
      if (hash[0] == '#') {
        hash = hash[1];
      }

      if (hash == '') {
        hash = 1;
      }

      if (hash > 0 && hash <= 2) {
        this.routeHash = hash;

        this.$router.push({
          path: '/info',
          hash: '#' + hash
        })
      }
    }
  },
  created() {
    this.setRouteHash(this.$nuxt.$route.hash);
  },
  mounted() {
  }
}
</script>
