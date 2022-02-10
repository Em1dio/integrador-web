<template>
  <div class="main">
    <h1><u>Task-Creator!</u></h1>
    <div>
      <div class="form">
        <input v-model="person" type="text" placeholder="Sendo..." />
        <input v-model="feature" type="text" placeholder="Quero..." />
        <input v-model="benefit" type="text" placeholder="Para..." />
      </div>
      <div class="form">
        <textarea name="message" rows="10" cols="30" v-model="message" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: "",
      feature: "",
      benefit: "",
    };
  },
  created() {
    this.getValue();
    this.timer = setInterval(this.getValue, 15 * 60 * 1000); // 1 minuto
  },
  computed: {
    message() {
      return (
        "Sendo: " +
        this.person +
        "\n" +
        "Quero: " +
        this.feature +
        "\n" +
        "Para: " +
        this.benefit
      );
    },
  },
  methods: {},
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
  background-color: aquamarine;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* background-image: url("https://i.ibb.co/6NFtRCB/euro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

.form {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

p {
  font-size: 10vh;
}

h1 {
  font-weight: 700;
  font-size: 20vh;
  color: #8026ab;
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

textarea {
  text-align: left;
  width: 100%;
  border: none;
  border-radius: 16px;
  background: #3C3C3C36;
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  padding: 1vh;
  font-size: 3vh;
  color: #121212;
}
</style>