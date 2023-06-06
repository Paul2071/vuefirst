const app = Vue.createApp({
  data() {
    return {
        type: "Contrast",
        name: "Doomfire Magenta",
        colour: "Purple",
        owned: false,
        

    };
  },
  methods: {
    changeOwned () {
        this.owned = "collected"
    }
  }
});

app.mount("#app");
