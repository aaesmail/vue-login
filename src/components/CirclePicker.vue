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
export default {
  props: ['value', 'total'],
  emits: ['input'],

  data() {
    return {
      current: this.value,
      interval: null,
    }
  },

  mounted() {
    this.makeInterval()
  },

  unmounted() {
    clearInterval(this.interval)
  },

  methods: {
    makeInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.current = (this.current + 1) % this.total
        this.$emit('input', this.current)
      }, 3000)
    },

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
