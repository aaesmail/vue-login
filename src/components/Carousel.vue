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

// A carousel for switching between images and text
// uses the circle picker for pagination
// if the images are passed as an argument then be pretty generic
// but only component that uses this in application so...
// can be refactored later easily to pass images/text as props

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
    // if there is a transition currently then slide out the current img
    // if there is no transition then slide in the current img
    currentClass() {
      return this.transition ? 'sliding-out' : 'sliding-in'
    },
    // based on page get the image
    currentImage() {
      return require(`../assets/` + this.images[this.current].name)
    },
    // get the text based on page
    currentText() {
      return this.images[this.current].text
    },
  },

  methods: {
    // on page change start animating the image out
    // then after 500 milliseconds (animation time)
    // change image and start sliding new image in
    slideChange(index) {
      this.transition = true
      this.transitionTimeout = setTimeout(() => {
        this.transition = false
        this.current = index
      }, 500)
    },
  },

  // clear the timeout to avoid any memory leaks
  unmounted() {
    clearTimeout(this.transitionTimeout)
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

.carousel-container
  margin: 0
  padding: 0
  background: $carousel-background
  color: #FFF
  @media (min-width: $layout-breakpoint-small)
    width: 100%
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
