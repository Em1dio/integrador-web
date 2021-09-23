<template>
  <div class="main">
    <h1 v-if="!isActive">Hora de Comprar!</h1>
    <div :class="isActive ? 'box' : 'alert'">
      <p>€ 1 = R$ {{ this.euro }}</p>
      <div class="form">
        <input v-model="value" type="number" placeholder="Valor" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      euro: 0,
      listCompras: [],
      alerts: false,
      value: "",
    };
  },
  created() {
    this.getValue();
    this.timer = setInterval(this.getQuotes, 15 * 60 * 1000); // 1 minuto
  },
  computed: {
    isActive() {
      return this.euro > this.value;
    },
  },
  methods: {
    async getValue() {
      const response = await fetch(
        "https://brapi.ga/api/v2/currency?currency=EUR-BRL",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      this.euro = Math.round(data.currency[0].bidPrice * 100) / 100;
      const checkListCompra = this.listCompras.filter(
        (value) => value.valor >= this.euro
      );
      if (checkListCompra.length > 0) {
        this.alerts = checkListCompra
          .map((value) => value.comprador)
          .join(", ");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap");
:root {
}

* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
  color: #000000;
}

.main {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://i.ibb.co/6NFtRCB/euro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.box {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  border: 1px solid rgba(255, 255, 255, 0.33);
  padding: 10vh;
}
.alert {
  /* From https://css.glass */
  background: #1db911;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(29, 255, 0, 0.07);
  padding: 10vh;
}

.form {
  display: flex;
  justify-content: center;
}

p {
  font-size: 10vh;
}

h1 {
  font-weight: 700;
  font-size: 20vh;
  color: #1db911;
}
input {
  text-align: center;
  border: none;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  padding: 1vh;
  font-size: 3vh;
  color: #121212;
}
</style>