const app = Vue.createApp({
  data() {
    return {
        type: "Contrast",
        name: "Doomfire Magenta",
        colour: "Purple",
        owned: "No"

    };
  },
  methods: {
    changeOwned () {
        this.owned = "Yes"
    }
  }
});

app.mount("#app");
