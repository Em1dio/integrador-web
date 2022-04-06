<template>
  <div v-if="musica.imagem !== ''">
    <div class="musica">
      <img :src="musica.imagem" />
      <div class="info">
        <p class="nome">
          {{ musica.nome }}
        </p>
        <p class="artistas">
          {{ musica.artistas }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musica: {
        imagem: "",
        artistas: "",
        nome: "",
      },
    };
  },
  created() {
    this.getValue();
    this.timer = setInterval(this.getValue, 3 * 1000);
  },
  methods: {
    async getValue() {
      const token = this.$route.query.token;
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
          requestOptions
        );
        const data = await response.json();
        this.musica.imagem = data.item.album.images[1].url || "";
        this.musica.artistas =
          data.item.artists
            .map((artist) => artist.name)
            .join(", ")
            .substring(0, 40) || "";
        this.musica.nome = data.item.name || "";
      } catch (error) {
        this.musica = {
          imagem: "",
          artistas: "",
          nome: "",
        };
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  color: #000000;
}

.artistas {
  font-size: 0.6rem;
  font-weight: 500;
  animation: textoh6 4s linear infinite;
}

.nome {
  font-size: 2rem;
  font-weight: 700;
  animation: textoh5 4s linear infinite;
}

@keyframes textoh6 {
  0% {
    font-size: 0.6rem;
  }
  50% {
    font-size: 1rem;
  }
  75% {
    font-size: 0.8rem;
  }
  100% {
    font-size: 0.6rem;
  }
}
@keyframes textoh5 {
  0% {
    font-size: 1rem;
  }
  50% {
    font-size: 1.6rem;
  }
  75% {
    font-size: 1.4rem;
  }
  100% {
    font-size: 1rem;
  }
}

.musica {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #a970ff;
  margin-top: -2rem;
  animation: radious 4s linear infinite;
}
@keyframes radious {
  0% {
    border-radius: 10px;
    background: #af88eb;
  }
  25% {
    border-radius: 0px;
    background: #a970ff;
  }
  50% {
    border-radius: 20px;
    background: #af88eb;
  }
  100% {
    border-radius: 5px;
    background: #a970ff;
  }
}

img {
  border-radius: 50%;
  width: auto;
  height: 200px;
  border: 4px solid #a970ff;
  z-index: -1;
  animation: spin 8s linear infinite;
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>