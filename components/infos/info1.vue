<template>
  <div>
    <div class="info1">
      <div class="show-list">
        <div
          class="show-item"
          v-for="(item, i) in list"
          :key="i"
          v-bind:class="item.header == true ? 'header' : ''"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="show-name" v-html="item.name"></div>
          <div class="show-time" v-html="item.time"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";

.info1 {
  width: 60vw;
  margin: 0 auto;
  padding-top: 5vw;
  .show-list {
    width: 100%;
    .show-item {
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding-bottom: 2vw;
      margin-bottom: 2vw;
      .show-name {
        width: 50%;
        font-size: 1vw;
      }
      .show-time {
        width: 50%;
        font-size: 1vw;
      }

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      &.header {
        .show-name {
          font-weight: bold;
        }
        .show-time {
          font-weight: bold;
        }
      }
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
      list: [
        {
          'name': '節目名稱',
          'time': '時間',
          'header': true
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
        {
          'name': '節目名稱',
          'time': '18:00-19:00'
        },
      ]
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
