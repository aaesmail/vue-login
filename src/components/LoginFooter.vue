<template>
  <div class="sign-up-text">
    <span class="main"
      >Don't have an account? <span class="link">Sign up</span></span
    >
    <span class="side-text link">Login via SSO</span>
  </div>
  <div class="trusted-text">Trusted by the top companies.</div>
  <div class="company-logos">
    <span>Lyft</span>
    <span>BuzzFeed</span>
    <span>asana</span>
    <span>ONEPLUS</span>
    <span>Houseparty</span>
  </div>
</template>

<style lang="sass" scoped>
@import '../styles/variables'

.sign-up-text
    color: $primary-text-light
    margin: 10px auto
    width: 63%
    display: flex
    justify-content: space-between
    align-items: baseline

.main
    margin-right: auto
    font-size: 15px

.link
    font-size: 13px
    color: $primary-color-light

    &:hover
      cursor: pointer
      text-decoration: underline

.side-text
    margint-left: auto

.trusted-text
  text-align: center
  margin: 10px
  color: $faded-text

.company-logos
  margin: 5px auto 0 auto
  color: $faded-text
  display: flex
  width: 80%
  font-size: 10px
  justify-content: space-between

  @media (min-width: $layout-breakpoint-small)
    font-size: 15px
</style>
