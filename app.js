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
          colour: "Purple", img: 'images/PaintMagenta.png' },
          { type: "Contrast",
          name: "Striking Scorpion Green",
          colour: "Green", img: 'images/PaintStriking.png' },
          { type: "Contrast",
          name: "Flesh tearer red",
          colour: "Red", img: 'images/PaintFlesh.png' }
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