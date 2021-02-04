new Vue({
  el: "#app",
  data: {
    tabIndex: '',
    activeItem: 'positive'
  },
  methods: {
  	isActive (tabItem) {
      return this.activeItem === tabItem
    },
    setActive (tabItem) {
      this.activeItem = tabItem
    },
    changeIndex() {
      if (this.tabIndex === "1") {
        this.activeItem = 'positive';
      } else if (this.tabIndex === "2") {
        this.activeItem = 'negative';
      } else if (this.tabIndex === "3") {
        this.activeItem = 'neutral';
      } 
      
      else {
        alert("Index is invalid");
      }
    }
  }
})