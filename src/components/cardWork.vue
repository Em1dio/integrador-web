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

.info .year {
  padding: 3px 7px;
  background: #142850;
  color: white;
  font-weight: 700;
  border-radius: 16px;
}

.info .subtitle {
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  color: #8695a4;
}

.text .description {
  margin-top: 1vh;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #21243d;
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
