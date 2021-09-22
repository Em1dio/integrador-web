<template>
  <div class="main">
    <div class="box">
      <p>€ 1 = R$ {{ this.euro }}</p>
    </div>
  </div>
</template>

<script>
// https://www.figma.com/file/vWLP5hQF5RZUGWQ84OhHlf/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=0%3A1
// import {
//   BrandFacebookIcon,
// } from "vue-tabler-icons";
export default {
  components: {
    // BrandFacebookIcon,
  },
  data() {
    return {
      euro: 0,
    };
  },
  created() {
    this.getValue();
    this.timer = setInterval(this.getQuotes, 15 * 60 * 1000);
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
      this.euro = Math.round(data.currency[0].askPrice * 100) / 100;
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

p {
  font-size: 10vh;
}
</style>