<template>
  <div>
    <img src="../assets/404@2x.png" alt="Not found" />
    <h1>404-Page Not Found!</h1>
    <p>Sorry, that page doesn't exist. What would you like to do?</p>
  </div>
</template>

<style lang="sass" scoped>
@import '../styles/variables'

div
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

img
  width: 300px
  @media (min-width: $layout-breakpoint-small)
    width: 500px

h1
  color: navy
  font-size: 25px
  @media (min-width: $layout-breakpoint-small)
    font-size: 40px

p
  color: $primary-color
</style>
