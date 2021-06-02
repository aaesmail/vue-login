<template>
  <div class="carousel-container">
    <div class="image-part">
      <img :class="currentClass" :src="currentImage" />
    </div>
    <div class="text-part">{{ currentText }}</div>
    <CirclePicker
      :total="images.length"
      :value="current"
      @input="slideChange"
    />
  </div>
</template>

<script>
import CirclePicker from './CirclePicker'

export default {
  components: {
    CirclePicker,
  },

  data() {
    return {
      current: 0,

      transitionTimeout: null,
      transition: false,

      images: [
        {
          name: 'Product-overview.svg',
          text: 'Accelerate Your Entire Mobile Team Workflow',
        },
        {
          name: 'Products-bug-reporting.svg',
          text: 'The Most Comprehensive Bug Reporting Tool for Mobile Apps',
        },
        {
          name: 'Products-crash-reporting.svg',
          text: 'Secure Crash Reporting With Real-Time Alerts',
        },
      ],
    }
  },

  computed: {
    currentClass() {
      return this.transition ? 'sliding-out' : 'sliding-in'
    },
    currentImage() {
      return require(`../assets/` + this.images[this.current].name)
    },
    currentText() {
      return this.images[this.current].text
    },
  },

  methods: {
    slideChange(index) {
      this.transition = true
      this.transitionTimeout = setTimeout(() => {
        this.transition = false
        this.current = index
      }, 500)
    },
  },

  unmounted() {
    clearTimeout(this.transitionTimeout)
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

.carousel-container
  width: 100%
  height: 100%
  margin: 0
  padding: 0
  background: $carousel-background
  color: #FFF
  @media (min-width: $layout-breakpoint-small)
    height: 100%

.image-part
  height: 50%
  overflow: hidden
  @media (min-width: $layout-breakpoint-small)
    height: 70%

img
  position: relative
  margin-top: 20%
  height: 65%

.text-part
  font-size: 25px
  margin: 20px 0 -75px 0
  height: 200px
  @media (min-width: $layout-breakpoint-small)
    height: 20%
    margin: 5px 0

.sliding-in
  animation: slide-in 0.5s linear forwards
.sliding-out
  animation: slide-out 0.5s linear forwards

@keyframes slide-in
  0%
    position: relative
    left: -800px
  100%
    position: relative
    left: 0

@keyframes slide-out
  0%
    position: relative
    left: 0
  100%
    position: relative
    left: 800px
</style>
