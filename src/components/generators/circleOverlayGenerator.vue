<template>
  <div class="body">
    <cardApp title="Circle Overlay" :link="componentLink">
      <div class="color_picker">
        <p>First Color</p>
        <input type="color" class="color_picker_style" v-model="firstColor" />
      </div>
      <div class="color_picker">
        <p>Second Color</p>
        <input type="color" v-model="secondColor" />
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
      firstColor: "#000000",
      secondColor: "#ffffff",
    };
  },
  computed: {
    componentLink() {
      const primaryColor = this.firstColor.replace("#", "");
      const secondaryColor = this.secondColor.replace("#", "");
      const url = `/circle?primaryColor=${primaryColor}&secondaryColor=${secondaryColor}`;
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

.color_picker {
  display: flex;
  flex-direction: row;
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