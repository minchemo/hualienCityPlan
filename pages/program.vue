<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <div class="programs">
        <div class="program-buttons">
          <div
            class="program-button"
            v-for="(program, i) in programs"
            :key="i"
            @click="setRouteHash(program.id)"
            v-bind:class="routeHash == program.id ? 'active' : ''"
          >
            <div class="program-title" v-html="program.showTitle"></div>
          </div>
        </div>
        <div class="program-content">
          <Program1 v-show="routeHash == 1" />
          <Program2 v-show="routeHash == 2" />
          <Program3 v-show="routeHash == 3" />
          <Program4 v-show="routeHash == 4" />
          <Program5 v-show="routeHash == 5" />
        </div>
      </div>

      <Detail />
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

    .programs {
      width: 100%;
      .program-buttons {
        position: fixed;
        top: $program_nav_top;
        display: flex;
        width: 100%;
        z-index: 10;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.4);
        .program-button {
          display: flex;
          flex: auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1vw 0;
          border-right: 1px solid #262626;
          &.active {
            .program-title {
              color: $primaryColor;
            }
          }
          .program-title {
            font-size: 1vw;
            font-weight: 400;
          }
          &:hover {
            cursor: pointer;
            .program-title {
              color: $primaryColor;
            }
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

      .programs {
        width: 100%;
        .program-buttons {
          position: fixed;
          top: $mo_program_nav_top;
          display: flex;
          width: 100%;
          z-index: 10;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.4);
          .program-button {
            display: flex;
            flex: auto;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            border-right: 1px solid #262626;
            &.active {
              .program-title {
                color: $primaryColor;
              }
            }
            .program-title {
              font-size: 9pt;
              font-weight: 400;
              text-align: center;
              line-height: 1.8;
            }
            &:hover {
              cursor: pointer;
              .program-title {
                color: $primaryColor;
              }
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
import Program1 from "@/components/programs/programs1.vue";
import Program2 from "@/components/programs/programs2.vue";
import Program3 from "@/components/programs/programs3.vue";
import Program4 from "@/components/programs/programs4.vue";
import Program5 from "@/components/programs/programs5.vue";
import Detail from "@/components/programs/detail.vue";

export default {
  components: {
    Program1,
    Program2,
    Program3,
    Program4,
    Program5,
    Detail,
  },
  watch: {
    $route() {
      this.setRouteHash(this.$nuxt.$route.hash);
    },
  },
  data() {
    return {
      routeHash: "",
      programs: [
        {
          id: 1,
          showTitle: this.$device.isMobile
            ? "日出大道<br/><b>日出未來河</b>"
            : "日出大道｜<b>日出未來河</b>",
          title: "日出大道",
          subtitle: "日出未來河",
        },
        {
          id: 2,
          showTitle: this.$device.isMobile
            ? "花創園區<br/><b>花創火溫酒</b>"
            : "花創園區｜<b>花創火溫酒</b>",
          title: "花創園區",
          subtitle: "花創火溫酒",
        },
        {
          id: 3,
          showTitle: this.$device.isMobile
            ? "南濱公園<br/><b>南濱奔日流</b>"
            : "南濱公園｜<b>南濱奔日流</b>",
          title: "南濱公園",
          subtitle: "南濱奔日流",
        },
        {
          id: 4,
          showTitle: this.$device.isMobile
            ? "周邊街廓<br/><b>溝仔尾問路</b>"
            : "周邊街廓｜<b>溝仔尾問路</b>",
          title: "周邊街廓",
          subtitle: "溝仔尾問路",
        },
        {
          id: 5,
          showTitle: this.$device.isMobile
            ? "特別場域<br/><b>豐田村秘境</b>"
            : "特別場域｜<b>豐田村秘境</b>",
          title: "特別場域",
          subtitle: "豐田村秘境",
        },
      ],
    };
  },
  methods: {
    setRouteHash(hash) {
      if (hash[0] == "#") {
        hash = hash[1];
      }

      if (hash == "") {
        hash = 1;
      }

      if (hash > 0 && hash <= 5) {
        this.routeHash = hash;

        this.$router.push({
          path: "/program",
          hash: "#" + hash,
        });

        this.$store.commit("forceCloseMobileMenu");
      }
    },
  },
  created() {
    this.setRouteHash(this.$nuxt.$route.hash);
  },
  mounted() {},
};
</script>
