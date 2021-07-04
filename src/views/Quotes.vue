<template>
  <div>
    <div class="body">
      <div class="quotes">
        <p class="phrase">
          {{ info.phrase }}
        </p>
        <p class="author">{{ info.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        phrase: "",
        author: "",
        link: "",
      },
    };
  },
  created() {
    this.getQuotes();
    this.timer = setInterval(this.getQuotes, 60000);
  },
  methods: {
    async getQuotes() {
      const response = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/?language_code=pt",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "i0s1Vf3vuJsJKyE3HG0ZEN79J8GmvFXm",
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      this.info.phrase = data.content;
      this.info.author = data.originator.name;
      this.info.link = data.originator.url;

      return {};
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
* {
  box-sizing: border-box;
}

.body {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #7a2feb;
}

.quotes {
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.phrase {
  display: flex;
  align-items: flex-end;
  font-family: "Sacramento";
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 90px;
  color: #ffffff;
}

.author {
  display: flex;
  align-items: flex-end;
  font-family: "Poppins";
  font-size: 60px;
  color: #e9e9e9;
}
</style>