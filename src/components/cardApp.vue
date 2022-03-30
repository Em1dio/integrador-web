<template>
  <div class="card">
    <div class="card-header">
      <p>Bitcoin Overlay</p>
      <div class="icon-badge">
        <DeviceLaptopIcon />
      </div>
    </div>
    <div class="card-body">
      <p>This is the home page.</p>
    </div>
    <div class="card-actions">
      <button>Generate</button>
    </div>
  </div>
</template>

<script>
import { DeviceLaptopIcon } from "vue-tabler-icons";

export default {
  components: {
    DeviceLaptopIcon,
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
  padding: 20px;
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #3e3d40;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.card .card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #313133;
}

button {
  width: 100px;
  height: 25px;

  background: #6763fd;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.3s ease;
}
button:hover {
  background: #7f7bf1;
}
</style>