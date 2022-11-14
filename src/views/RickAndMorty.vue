<template>
  <div class="body">
    <div class="buttons">
      <button @click="mudarPage(-1)">Anterior</button>
      <button @click="mudarPage(1)">Proxima</button>
    </div>
    <div class="rm_cards">
      <div class="rm_card" v-for="character in characters" :key="character.id">
        <img :src="character.image" class="rm_image" />
        <div class="rm_title">
          <h1>{{ character.name }}</h1>
        </div>
        <div class="rm_descr">
          <p>{{ character.gender }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      page: 2,
      characters: [],
    };
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    mudarPage(value) {
      if (this.page === 1 && value === -1) {
        this.getCharacters();
        return;
      }
      this.page += value;
      this.getCharacters();
    },
    async getCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.page}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      this.characters = data.results;
      console.log(data);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");

.body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  background-color: #383838;
  color: white;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1d1d1f;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

.rm_cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.rm_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  height: 520px;
}

.rm_title {
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom: 24px;
}
.rm_descr {
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom: 24px;
  color: #8d8d8d;
}

.rm_image {
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 8px;
  width: 320px;
  height: 280px;

  border-radius: 20px;
}
</style>
