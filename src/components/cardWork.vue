<template>
  <div class="work">
    <div class="content">
      <img class="image" :src="work.image" />
      <div class="text">
        <p class="title">{{ work.title }}</p>
        <div class="info">
          <p class="year">{{ work.year }}</p>
          <p class="subtitle">{{ work.subtitle }}</p>
        </div>
        <p class="description">{{ work.description }}</p>
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  props: [ 'work' ]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap");
.work {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.work .content {
  display: flex;
  gap: 20px;
}

.work .content img {
  width: 246px;
  height: 180px;
  border-radius: 6px;
}

.work .text {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.text .title {
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #142850;
}

.text .info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.border {
  border: 1px solid #e0e0e0;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
