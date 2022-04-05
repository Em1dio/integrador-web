<template>
  <div class="body">
    <bitcoin-overlay-generator />
  </div>
</template>

<script>
import BitcoinOverlayGenerator from "../components/bitcoinOverlayGenerator.vue";
// const clipboard = "clipboard";
export default {
  components: {
    BitcoinOverlayGenerator,
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