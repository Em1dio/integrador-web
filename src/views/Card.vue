<template>
  <div class="page">
    <div class="card">
      <div class="header">
        <h3>Transaction History</h3>
        <p class="details">See All</p>
      </div>
      <div class="body" v-for="(day, key) in info" :key="key">
        <div class="header">{{ day.date }}</div>
        <div
          class="mini_card"
          v-for="(transaction, i) in day.transactions"
          :key="i"
        >
          <div>
            <div class="title">{{ transaction.title }}</div>
            <div class="author">{{ transaction.author }}</div>
          </div>
          <div :class="transaction.type === 'invoice' ? 'invoice' : 'sale'">
            <p v-if="transaction.type === 'invoice'">
              {{ transaction.supplier }}
            </p>
            <p>{{ transaction.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          date: "13 April 2022",
          transactions: [
            {
              type: "invoice",
              title: "Purchase Invoice - 998",
              author: "Dona Maria",
              supplier: "Padaria Brasil",
              price: "$ 20.90",
            },
          ],
        },
        {
          date: "12 April 2022",
          transactions: [
            {
              type: "invoice",
              title: "Purchase Invoice - 997",
              author: "Seu Pedro",
              supplier: "Farmacia Maringa",
              price: "$ 32.90",
            },
            {
              type: "sales",
              title: "Closing Balance",
              author: "Dona Maria",
              price: "$ 20.90",
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;600&display=swap");
* {
  box-sizing: border-box;
  font-family: "Roboto";
}

.page {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #e5e5e5;
}

.card {
  width: 510px;
  background: #fff;
  padding: 20px 20px;
}

.card > .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: #0a4364;
  font-weight: 600;
}

.card .header .details {
  font-size: 18px;
  font-weight: 600;
  color: #51b8f2;
}

.body {
  margin-top: 20px;
}

.body > .header {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #bababa;
}

.body > .mini_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background: #fafafa;
  padding: 20px 20px;
  border-radius: 10px;
}

.body > .mini_card .title {
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  color: #124969;
}

.body > .mini_card .author {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #999999;
}

.body > .mini_card .invoice {
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #f37965;
  text-align: right;
}

.body > .mini_card .sale {
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #7ed97c;
  text-align: right;
}
</style>
