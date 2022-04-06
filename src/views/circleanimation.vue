<template>
  <div class="main">
    <div class="circle" :style="circleStyle">
      <span :style="circleStyleSpan"></span>
      <span :style="circleStyleSpan"></span>
      <span :style="circleStyleSpan"></span>
      <span :style="circleStyleSpan"></span>
      <span :style="circleStyleSpan"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: false,
      default: "#000000",
    },
    primaryColor: {
      type: String,
      required: false,
      default: "#FFFFFF",
    },
    secondaryColor: {
      type: String,
      required: false,
      default: "#000000",
    },
    size: {
      type: Number,
      required: false,
      default: 60,
    },
  },
  computed: {
    circleStyleSpan() {
      const primaryColor = `#${this.$route.query.primaryColor}` || this.primaryColor;
      const secondaryColor = `#${this.$route.query.secondaryColor}` || this.secondaryColor;
      return {
        backgroundImage: `linear-gradient(${primaryColor}, ${secondaryColor})`,
      }
    },
    circleStyle() {
      const primaryColor = `#${this.$route.query.primaryColor}` || this.primaryColor;
      const secondaryColor = `#${this.$route.query.secondaryColor}` || this.secondaryColor;
      return {
        backgroundImage: `linear-gradient(${primaryColor}, ${secondaryColor})`,
        width: `${this.size}vh`,
        height: `${this.size}vh`,
      };
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
}

.main {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.circle {
  position: relative;
  border-radius: 50%;
  animation: animate 2s linear infinite;
}

@keyframes animate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.circle:after {
  content: "";
  position: absolute;
  top: 35px;
  right: 35px;
  bottom: 35px;
  left: 35px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.8;
}

.circle span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.circle span:nth-child(1) {
  filter: blur(5px);
}
.circle span:nth-child(2) {
  filter: blur(10px);
}
.circle span:nth-child(3) {
  filter: blur(20px);
}
.circle span:nth-child(4) {
  filter: blur(55px);
}
</style>