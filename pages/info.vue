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
          <Info1 v-show="routeHash == 1" />
          <Info2 v-show="routeHash == 2" />
        </div>
      </div>
    </div>
    <Footer />
    <Rotate />
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
        position: fixed;
        top: $program_nav_top;
        display: flex;
        width: 100%;
        z-index: 10;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.4);
        .info-button {
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1vw 0;
          border-right: 1px solid #262626;
          &:hover {
            cursor: pointer;
            .info-title {
              color: $primaryColor;
              font-weight: bold;
            }
          }
          &.active {
            .info-title {
              color: $primaryColor;
              font-weight: bold;
            }
          }
          .info-title {
            font-size: 1vw;
            font-weight: 400;
          }

          &:last-child {
            border-right: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .main {
    height: auto;
    margin-top: $mo_navbar_height;

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
          position: fixed;
          top: $mo_program_nav_top;
          display: flex;
          width: 100%;
          z-index: 10;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.4);
          .info-button {
            display: flex;
            flex: auto;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12pt 0;
            border-right: 1px solid #262626;
            &:hover {
              cursor: pointer;
              .info-title {
                color: $primaryColor;
              }
            }
            &.active {
              .info-title {
                color: $primaryColor;
              }
            }
            .info-title {
              font-size: 9pt;
              line-height: 1.8;
            }

            &:last-child {
              border-right: 0;
            }
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
import Rotate from "@/components/rotate.vue";

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
      
        
        this.$store.commit('forceCloseMobileMenu');
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
