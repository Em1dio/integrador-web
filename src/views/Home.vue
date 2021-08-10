<template>
  <div>
    <div class="navbar">
      <div class="container">
        <a href="#">Main</a>
        <a href="#">Projects</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="container main_content">
      <div class="container content">
        <div class="text">
          <div class="title">
            <p>Hi, I am Caio "Em1dio", Software Developer</p>
          </div>
          <div class="subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div class="photo">
          <img src="https://i.ibb.co/RyNjJnD/5342402.jpg" />
          <img src="https://i.ibb.co/VW3pQY0/pp.jpg" />
          <img src="https://i.ibb.co/FKC1tvq/image.png" />
        </div>
      </div>
      <div class="container">
        <div class="button">Download Resume</div>
      </div>
    </div>
    <div class="blog">
      <div class="container">
        <div class="bar">
          <p class="title">Recent posts</p>
          <a href="#" class="link">View all</a>
        </div>
        <div class="posts">
          <div v-for="post of posts" :key="post" class="post">
            <p class="title">{{ post.title }}</p>
            <p class="info">{{ post.data }} | {{ post.tags }}</p>
            <p class="post_content">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="featured_work">
      <div class="container">
        <div class="bar">
          <p class="title">Featured Work</p>
          <a href="#" class="link">View all</a>
        </div>
        <div class="posts">
          <div v-for="work of works" :key="work" class="post">
            <p class="title">{{ work.title }}</p>
            <p class="info">{{ work.data }} | {{ work.tags }}</p>
            <p class="post_content">{{ work.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://www.figma.com/file/vWLP5hQF5RZUGWQ84OhHlf/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=0%3A1
export default {
  data() {
    return {
      posts: [
        {
          title: "Making a design system from scratch",
          data: "12 feb 2020",
          tags: "Design, Teste",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "Just anothe title :)",
          data: "15 feb 2021",
          tags: "Design, Teste",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap");
:root {
  --text-color-light: #000;
  --text-color-gray: #e5e7eb;
  --background-color: white;
  --button-active: #2563eb;
  --button-not-active: #1f2937;
  --text-link: #000;
  --color-primary: #00a8cc;
  --color-secondary: #ff6464;
}

* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
  color: var(--text-color-light);
}

body {
  background-color: var(--background-color);
}

a {
  text-align: center;
  padding: 7px 8px;
  text-decoration: none;
  color: var(--text-color-light);
}

.navbar .container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar {
  width: auto;
}

.container {
  padding: 1%;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

.main_content {
  padding-bottom: 5vh;
  padding-top: 15vh;
}

.main_content .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.text .title {
  font-weight: 700;
  font-size: 44px;
  line-height: 50px;
}

.text .subtitle {
  font-weight: 400;
  font-size: 12px;
}

.content .photo {
  display: flex;
}

.content img {
  border-radius: 50%;
  width: 243px;
  margin-left: -35px;
}

.button {
  display: inline-block;
  color: white;
  background: var(--color-primary);
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.blog {
  background: #edf7fa;
}

.blog .container .bar {
  display: flex;
  justify-content: space-between;
}

.blog .container .bar .link {
  font-size: 16px;
  line-height: 23px;
  color: var(--color-secondary);
}

.posts {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
}

.post {
  padding: 30px;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: var(--background-color);
}

.post:hover {
  transform: scale(1.05);
}

.post .title {
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #21243d;
}

.post .post_content {
  font-weight: 300;
  font-size: 16px;
  line-height: 23px;
}
</style>