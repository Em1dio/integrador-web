<template>
  <div class="card">
    <div class="card-header">
      <p>{{title}}</p>
      <div class="icon-badge">
        <DeviceLaptopIcon />
      </div>
    </div>
    <div class="card-body">
      <slot>CODE GO HERE</slot>
    </div>
    <div class="card-actions">
      <button @click="sendTo">{{button_title}}</button>
    </div>
  </div>
</template>

<script>
import { DeviceLaptopIcon } from "vue-tabler-icons";

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "no-title"
    },
    link: {
      type: String,
      required: true,
      default: ""
    },
    button_title: {
      type: String,
      required: false,
      default: "Generate"
    },
  },
  components: {
    DeviceLaptopIcon,
  },
  methods: {
    sendTo() {
      window.open(this.link, "_blank");
    },
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

.card {
  background-color: #3e3d40;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.card:hover {
  border: 1px solid #6763fd;
}

.card .card-header {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #dadada;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .card-body {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.card .card-header .icon-badge {
  background: #313133;
  border: 1px solid #6763fd;
  box-sizing: border-box;
  border-radius: 10px;
  width: 40px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card .card-header .icon-badge:hover {
  background: #6763fd;
  border: 1px solid #6763fd;
}

.card .card-actions {
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #313133;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

button {
  width: 100px;
  height: 25px;

  border: 1px solid transparent;
  background: #6763fd;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.3s ease;
}

button:hover {
  background: #6863FDAC;
  border: 1px solid #6763fd;
}
</style>