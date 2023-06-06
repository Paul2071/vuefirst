const app = Vue.createApp({
  data() {
    return {
        type: "Contrast",
        name: "Doomfire Magenta",
        colour: "Purple",
        owned: false,
        collected: "Collected",
        

    };
  },
  methods: {
    changeOwned () {
        this.owned = !this.owned
    }
  }
});

app.mount("#app");
