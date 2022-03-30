<template>
  <div class="body">
    <cardApp />
    <cardApp />
    <cardApp />
    <cardApp />
    <cardApp />
  </div>
</template>

<script>

import cardApp from "../components/cardApp.vue";


export default {
  components: {
    cardApp,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  color: #dcdcdc;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  background-color: #1d1d1f;
}
</style>