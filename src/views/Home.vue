<template>
  <div>
    <div class="navbar">
      <div class="container">
        <a href="#main">Main</a>
        <a href="#blog">Posts</a>
        <a href="#work">Works</a>
        <a href="#contact" class="scrollBehaviour">Contact</a>
      </div>
    </div>
    <div class="container main_content" id="main">
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
    <div class="blog" id="blog">
      <div class="container">
        <div class="bar">
          <p class="title">Recent posts</p>
          <a href="#" class="link">View all</a>
        </div>
        <div class="posts">
          <div v-for="post of posts" :key="post.id" class="post">
            <p class="title">{{ post.title }}</p>
            <p class="info">{{ post.data }} | {{ post.tags }}</p>
            <p class="post_content">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="featured_work" id="work">
      <div class="container">
        <div class="bar">
          <p class="title">Featured Work</p>
        </div>
        <div class="works">
          <div v-for="work of works" :key="work.id" class="work">
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
        </div>
      </div>
    </div>
    <footer id="contact">
      <div class="container">
        <div class="icons">
          <a href="#"><BrandFacebookIcon size="40px" /> </a>
          <a href="#"><BrandInstagramIcon size="40px" /> </a>
          <a href="#"><BrandLinkedinIcon size="40px" /> </a>
          <a href="#"><BrandTwitterIcon size="40px" /> </a>
        </div>
        <p class="copyright">Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
// https://www.figma.com/file/vWLP5hQF5RZUGWQ84OhHlf/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=0%3A1
import {
  BrandFacebookIcon,
  BrandInstagramIcon,
  BrandLinkedinIcon,
  BrandTwitterIcon,
} from "vue-tabler-icons";

export default {
  components: {
    BrandFacebookIcon,
    BrandInstagramIcon,
    BrandLinkedinIcon,
    BrandTwitterIcon,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Making a design system from scratch",
          data: "12 feb 2020",
          tags: "Design, Teste",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          id: 2,
          title: "Just another title :)",
          data: "15 feb 2021",
          tags: "Design, Teste",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
      ],
      works: [
        {
          id: 1,
          image: "https://i.ibb.co/RyNjJnD/5342402.jpg",
          title: "Dashboard",
          year: "2020",
          subtitle: "A simple dashboard",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          id: 2,
          image: "https://i.ibb.co/RyNjJnD/5342402.jpg",
          title: "Portfolio",
          year: "2019",
          subtitle: "A portfolio",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          id: 3,
          image: "https://i.ibb.co/RyNjJnD/5342402.jpg",
          title: "Blog",
          year: "2018",
          subtitle: "A blog",
          description:
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
  --background-color: #fff;
  --button-active: #2563eb;
  --button-not-active: #1f2937;
  --text-link: #000;
  --color-primary: #00a8cc;
  --color-secondary: #ff6464;
  --color-light: #8695a4;
}

* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
  color: #000000;
}

body {
  background-color: #e5e7eb;
}

a {
  text-align: center;
  padding: 7px 8px;
  text-decoration: none;
  color: #0f0f0f;
}

.navbar .container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
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

.content .text {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.content .text .title {
  font-weight: 700;
  font-size: 44px;
  line-height: 50px;
}

.content .text .subtitle {
  font-weight: 400;
  font-size: 12px;
}

.content .photo {
  display: flex;
}

.main_content .content img {
  border-radius: 50%;
  width: 243px;
  margin-left: -35px;
}

.button {
  display: inline-block;
  color: white;
  background: #00a8cc;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: transparent;
  border: 1px solid #00a8cc;
  color: #00a8cc;
}

.bar .title {
  font-weight: 500;
  font-size: 22px;
  line-height: 60px;
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
  color: #00a8cc;
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
  background: white;
  transition: all 0.3s ease;
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

.works {
  margin-top: 2vh;
}

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

.border {
  border: 1px solid #e0e0e0;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
}

footer .icons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

footer .icons svg {
  color: #21243d;
}

footer .copyright {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #21243d;
}

html {
  scroll-behavior: smooth;
}
</style>