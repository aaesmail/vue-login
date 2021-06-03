<template>
  <div class="circles">
    <div
      v-for="index in total"
      :key="index - 1"
      class="circle"
      :class="{ selected: index - 1 === current }"
      @click="circleClicked(index)"
    ></div>
  </div>
</template>

<script>
// A picker with circles that switches automatically every SWITCHING_TIME milliseconds
// and allows to be clicked on to also change
// When user changes it by clicking the auto switching timer also resets
// so that the annoying effect of clicking on a certain circle and
// immediatly switching doesn't happen

// switching time in milliseconds
const SWITCHING_TIME = 5000

export default {
  // accept total number of pages
  // and the initial page
  props: ['value', 'total'],

  // emits this when the page changes
  // whether it was by timer or user
  // one argument the new page
  emits: ['input'],

  data() {
    return {
      current: this.value,
      interval: null,
    }
  },

  // start the interval for switching once mounted on screen
  mounted() {
    this.makeInterval()
  },

  // clear the interval on removing from screen to not have any memory leaks
  unmounted() {
    clearInterval(this.interval)
  },

  methods: {
    // interval every 5 seconds
    // makes the interval and clears it before
    // if it existed
    // on new interval tick update the page and inform parent
    makeInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.current = (this.current + 1) % this.total
        this.$emit('input', this.current)
      }, SWITCHING_TIME)
    },

    // if user clicked on a circle then reset interval
    // and move to clicked page
    circleClicked(index) {
      this.makeInterval()
      this.current = index - 1
      this.$emit('input', this.current)
    },
  },
}
</script>

<style lang="sass" scoped>
.circles
    display: flex
    justify-content: center

.circle
    margin-left: 10px
    width: 10px
    height: 10px
    border: 1px solid #FFF
    border-radius: 50%

.selected
    background: #FFF
</style>
