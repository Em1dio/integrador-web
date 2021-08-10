<template>
  <div>
    <div class="barra-progresso-github">
      <div class="content">
        <div class="titulo">
          <div class="github">
            <brand-github-icon style="color: #111827" />
          </div>
          <p>{{ github.owner }}/{{ github.repository }}</p>
        </div>
        <div class="barraprogresso">
          <span class="barra" :style="styled"></span>
          <p>{{ progresso | toPercent }}</p>
        </div>
        <div class="comentarios">
          <h2>{{ comments }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BrandGithubIcon } from "vue-tabler-icons";

export default {
  components: { BrandGithubIcon },
  data() {
    return {
      github: {
        owner: this.$route.query.owner || "user",
        repository: this.$route.query.repository || "repo",
      },
      progresso: 0,
      comments: this.$route.query.comments,
      timer: "",
    };
  },
  created() {
    this.getIssues();
    this.timer = setInterval(this.getIssues, 60 * 1000); // 1 minute
  },
  methods: {
    async getIssues() {
      const response = await fetch(
        `https://api.github.com/repos/${this.github.owner}/${this.github.repository}/issues?state=all`
      );

      const getIssueState = (data, state) => {
        try {
          const issuesByState = data.filter((issues) => issues.state === state);
          return issuesByState.length;
        } catch (error) {
          throw error;
        }
      };

      const getProgress = (githubData) => {
        const opened = getIssueState(githubData, "open");
        const closed = getIssueState(githubData, "closed") || 0;
        const total = opened + closed;
        this.progresso = closed / total;
        return {
          opened,
          closed,
        };
      };

      if (response.status === 200) {
        return getProgress(await response.json());
      } else {
        const proxyResponse = await fetch(
          `https://fragrant-pine-c75b.em1dio.workers.dev/?https://api.github.com/repos/${this.github.owner}/${this.github.repository}/issues?state=all`
        );

        return getProgress(await proxyResponse.json());
      }
    },
  },
  computed: {
    styled() {
      return {
        width: `${this.progresso * 100}%`,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
* {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}

.barra-progresso-github {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #111827;
  color: #fff;
  box-shadow: 0 0 10px 5px rgba(100, 100, 100, 0.1);
  overflow: hidden;
  max-width: 100%;
  padding-right: 3%;
  padding-left: 3%;
  width: 100%;
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.titulo {
  display: flex;
  flex: 3;
  height: 100%;
  align-items: center;
  align-content: center;
}

.github {
  display: flex;
  background: #fff;
  height: 100%;
  padding: 6px;
  align-items: center;
  margin-right: 10px;
}

.barraprogresso {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
}

.barraprogresso p {
  position: relative;
  z-index: 99;
  font-size: 14px;
  font-weight: 500;
}

.barra {
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: 0;
  display: flex;
  height: 26px;
  border-radius: 10px;
  background: #fd8900;
  color: #111827;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  z-index: 90;
}

.comentarios {
  display: flex;
  justify-content: flex-end;
  flex: 3;
  gap: 10px;
}
</style>
