<template>
  <div class="container">
    <div class="column">
      <Carousel />
    </div>
    <div class="column">
      <LoginPart />
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import LoginPart from '../components/LoginPart'

export default {
  components: {
    Carousel,
    LoginPart,
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

.container
  margin: 0
  padding: 0
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

  @media (min-width: $layout-breakpoint-small)
    flex-direction: row

.column
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0
    padding: 0
    @media (min-width: $layout-breakpoint-small)
      width: 100%
      height: 100%
</style>
