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
            <div class="program-title" v-html="program.title"></div>
            <div class="program-subtitle" v-html="program.subtitle"></div>
          </div>
        </div>
        <div class="program-content">
          <Program1 v-if="routeHash == 1" />
          <Program2 v-if="routeHash == 2" />
          <Program3 v-if="routeHash == 3" />
          <Program4 v-if="routeHash == 4" />
          <Program5 v-if="routeHash == 5" />
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

    .programs {
      width: 100%;
      position: relative;
      .program-buttons {
        display: flex;
        width: 100%;
        .program-button {
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
          .program-title {
            font-size: 1.2vw;
            font-weight: bold;
          }
          .program-subtitle {
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
import Program1 from '@/components/programs/programs1.vue';
import Program2 from '@/components/programs/programs2.vue';
import Program3 from '@/components/programs/programs3.vue';
import Program4 from '@/components/programs/programs4.vue';
import Program5 from '@/components/programs/programs5.vue';

export default {
  components: {
    Program1,
    Program2,
    Program3,
    Program4,
    Program5,
  },
  watch: {
    $route() {
      this.setRouteHash(this.$nuxt.$route.hash);
    },
  },
  data() {
    return {
      routeHash: '',
      programs: [
        {
          id: 1,
          title: '日出大道',
          subtitle: '日出未來河',
        },
        {
          id: 2,
          title: '花創舞台',
          subtitle: '花創火溫酒',
        },
        {
          id: 3,
          title: '日出舞台',
          subtitle: '南濱奔日流',
        },
        {
          id: 4,
          title: '周邊街廓',
          subtitle: '溝仔尾問路',
        },
        {
          id: 5,
          title: '特別場域',
          subtitle: 'RPG豐田村',
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

      if (hash > 0 && hash <= 5) {
        this.routeHash = hash;

        this.$router.push({
          path: '/program',
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
