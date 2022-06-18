<template>
  <div class="teams_all">
    <div v-for="(match, index) in matches" :key="index">
      <card-team :teams="match.teams" :date="match.date" :status="match.status"/>
    </div>
  </div>
</template>

<script>
import cardTeam from "../components/cardTeam.vue";
export default {
  components: {
    cardTeam,
  },
  data() {
    return {
      matches: [
        {
          date: "18/06/2022",
          status: "finished",
          teams: [
            {
              name: "Coritiba",
              img: "https://logodownload.org/wp-content/uploads/2017/02/coritiba-logo-escudo-2.png",
              score: 0,
            },
            {
              name: "Athletico",
              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1503438220atletico-pr-football-logo-png.png&f=1&nofb=1",
              score: 0,
            },
          ],
        },
        {
          date: "18/06/2022",
          status: "running",
          teams: [
            {
              name: "ABC",
              img: "https://logodownload.org/wp-content/uploads/2017/02/coritiba-logo-escudo-2.png",
              score: 0,
            },
            {
              name: "DEF",
              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1503438220atletico-pr-football-logo-png.png&f=1&nofb=1",
              score: 0,
            },
          ],
        },
        {
          date: "22/06/2022",
          status: "not_started",
          teams: [
            {
              name: "Bahia",
              img: "https://cdn.freebiesupply.com/logos/large/2x/bahia-1-logo-png-transparent.png",
              score: 0,
            },
            {
              name: "Athletico",
              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1503438220atletico-pr-football-logo-png.png&f=1&nofb=1",
              score: 0,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.teams_all {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>