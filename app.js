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
          colour: "Purple", img: 'images/PaintMagenta.png', isOwned: true },

          { type: "Contrast",
          name: "Striking Scorpion Green",
          colour: "Green", img: 'images/PaintStriking.png', isOwned: false   },

          { type: "Contrast",
          name: "Flesh tearer red",
          colour: "Red", img: 'images/PaintFlesh.png', isOwned: true }
        ]
        

    };
  },
  methods: {
    changeOwned (paint) {
      console.log(paint.isOwned)
        paint.isOwned = !paint.isOwned
        this.owned =  !this.owned
    }
  },
  computed: {
    filteredPaints () {
      return this.paints.filter( (paint)=> paint.isOwned )
    }
  }
});

app.mount("#app");