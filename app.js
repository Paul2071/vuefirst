const app = Vue.createApp({
  data() {
    return {
      type: "Contrast",
      name: "Doomfire Magenta",
      colour: "Purple",
        owned: false,
        collected: "Collected",
        paints: [
          { type: "Contrast",
          name: "Doomfire Magenta",
          colour: "Purple" },
          { type: "Contrast",
          name: "Striking Scorpion Green",
          colour: "Green" },
          { type: "Contrast",
          name: "Flesh tearer red",
          colour: "Red" }
        ]
        

    };
  },
  methods: {
    changeOwned () {
        this.owned = !this.owned
    }
  }
});

app.mount("#app");
