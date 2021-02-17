new Vue({
  el: "#app",
  data() {
    return {
      current_step: 1,
      max_step: 1
    }
  },
  methods: {
    goToStep(value) {
      if (value - this.current_step >= 2) {
        return
      } else {
        this.current_step = value;
      }
    },
    nextStep() {
      this.current_step++;
      if (this.max_step < this.current_step) {
        this.max_step = this.current_step;
      }
    },
    prevStep() {
      this.current_step--;
      if (this.max_step > this.current_step) {
        this.max_step = this.current_step;
      }
    }
  }
})