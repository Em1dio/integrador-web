<template>
  <div class="teams">
    <div class="header">
      <div class="live" :style="live">
        <p v-if="isToday">Live</p>
        <p v-else>{{ date }}</p>
      </div>
      <div class="status" :style="style_status" v-if="isToday"></div>
    </div>
    <div class="body">
      <div v-for="(team, index) in teams" :key="index">
        <img :src="team.img" alt="" />
      </div>
    </div>
    <div class="footer">
      <div class="team" v-for="(team, index) in teams" :key="index">
        <p>{{ team.name }}</p>
        <p>{{ team.score }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teams: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
      default: "not_started",
    },
  },
  computed: {
    isToday() {
      const today = new Date();
      const dateParts = this.date.split("/");

      // month is 0-based, that's why we need dataParts[1] - 1
      const date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

      return (
        today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth()
      );
    },

    style_status() {
      switch (this.status) {
        case "not_started":
          return {
            backgroundColor: `#828282`,
          };
        case "running":
          return {
            backgroundColor: `#3EBD29`,
          };
        case "interval":
          return {
            backgroundColor: `#FAC43A`,
          };
        case "finished":
          return {
            backgroundColor: `#E91919`,
          };
        default:
          return "";
      }
    },
    live() {
      if (this.isToday) {
        return {
          backgroundColor: `#EAAC0C`,
        };
      }

      return {
        backgroundColor: `#3F3F3F`,
      };
    },
  },
};
</script>

<style scoped>
.teams {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 210px;
  height: 300px;

  padding: 10px;
  background: #eaeaea;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header .live {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding-right: 5px;
  border-radius: 42px;
}

.header .live p {
  margin-left: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  width: 100px;
}

.header .status {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  border-radius: 42px;
}

.body {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.body img {
  width: 64px;
  height: 64px;
}

.footer {
  display: flex;
  flex-direction: column;
}

.footer .team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #838383;
}
</style>