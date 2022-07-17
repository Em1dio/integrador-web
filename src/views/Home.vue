<template>
  <div class="body">
    <bitcoin-overlay-generator />
    <circle-overlay-generator />
    <spotify-overlay-generator />
    <barra-overlay-generator />
  </div>
</template>

<script>
import BitcoinOverlayGenerator from "../components/generators/bitcoinOverlayGenerator";
import SpotifyOverlayGenerator from "../components/generators/spotifyOverlayGenerator";
import CircleOverlayGenerator from "../components/generators/circleOverlayGenerator";
import BarraOverlayGenerator from "../components/generators/barraOverlayGenerator";
export default {
  components: {
    BitcoinOverlayGenerator,
    CircleOverlayGenerator,
    SpotifyOverlayGenerator,
    BarraOverlayGenerator
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