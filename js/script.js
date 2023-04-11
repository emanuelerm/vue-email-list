const { createApp } = Vue;

createApp({
  data() {
    return {
      path: "https://flynn.boolean.careers/exercises/api/random/mail",
      emailsList: [],
    };
  },
  methods: {
    getEmails() {
      for (let i = 0; i < 10; i++) {
        axios.get(this.path).then((result) => {
          let email = result.data.response;
          this.emailsList.push(email);
        });
      }
    },
  },
  mounted() {
    this.getEmails();
  },
}).mount("#app");
