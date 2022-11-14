<template>
  <div class="body">
    <cardApp
      title="Tools to Discord"
      :link="componentLink"
      :requestBody="componentBody"
      type="POST"
    >
      <div class="text_element">
        <p>Ferramenta</p>
        <input type="text" v-model="tool" />
      </div>
      <div class="text_element">
        <p>Descricao</p>
        <input type="text" v-model="description" />
      </div>
      <div class="text_element">
        <p>URL</p>
        <input type="text" v-model="url" />
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
      tool: "",
      url: "",
      description: "",
    };
  },
  computed: {
    componentLink() {
      const url = `https://discord.com/api/webhooks/945652339254112267/DopN1w20lmsSmk8prOf-5Owzkf1i1DqymVjOduEZqfMj-A-LS11sixAu_8CBslfyCgsE`;
      return url;
    },
    componentBody() {
      return {
        content: `Ferramenta: ${this.tool} \nDescricao: ${this.description} \nlink: ${this.url}`,
      };
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
