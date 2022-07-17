<template>
  <div class="body">
    <cardApp title="Spotify Overlay" :link="componentLink">
      <div class="text_element">
        <p>Owner</p>
        <input type="text" v-model="owner" />
      </div>
      <div class="text_element">
        <p>Comments</p>
        <input type="text" v-model="comments" />
      </div>
    </cardApp>
  </div>
</template>

<script>
import cardApp from "../cardApp.vue";
export default {
  components: {
    cardApp,
  },
  data() {
    return {
      owner: "",
      comments: "",
    };
  },
  computed: {
    PreviewStyle() {
      return {
        background: this.background,
        color: this.textColor,
      };
    },
    componentLink() {
      const url = `/barra?owner=${this.owner}&comments=${this.comments}`;
      // clipboard.writeText('Text to get copied');
      return url;
    },
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

.text_element {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  background-color: #1d1d1f;
  border-radius: 10px;
  border: 1px solid transparent;
}

a {
  color: #6763fd;
}

input[type="text"] {
  width: 100%;
  height: 30px;
  border: 1px solid #6763fd;
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
  color: #6763fd;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 15px;
}
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
  border-radius: 10px;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 10px;
}
</style>