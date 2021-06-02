<template>
  <div class="wrap">
    <img src="../assets/logo.png" width="100" alt="instabug logo" />
    <p class="header">Log in to Instabug</p>
    <div class="social google">
      <div class="btn-img">
        <img width="20" src="../assets/Google__G__Logo.svg" alt="google" />
      </div>
      <div class="social-txt">Google</div>
    </div>
    <div class="social github">
      <div class="btn-img">
        <img
          width="20"
          src="../assets/GitHub-Mark-Light-64px.png"
          alt="google"
        />
      </div>
      <div class="social-txt">GitHub</div>
    </div>
    <div class="social microsoft">
      <div class="btn-img">
        <img
          width="20"
          src="../assets/iconfinder_78-microsoft_4202105.png"
          alt="google"
        />
      </div>
      <div class="social-txt">Microsoft</div>
    </div>
    <h2 class="horizontal-break"><span>OR</span></h2>
  </div>
</template>

<style lang="sass" scoped>
@import '../styles/variables'

.wrap
  display: flex
  height: 100%
  margin: 0
  flex-direction: column
  justify-content: center
  align-items: center

.header
  color: $primary-text-light
  font-size: 25px

.social
  display: flex
  align-items: center
  padding-top: 2px
  padding-bottom: 2px
  width: 60%
  height: 30px
  font-size: 15px
  border-radius: 5px
  box-shadow: 1px 1px #888888
  margin-top: 10px

  &:hover
    cursor: pointer

.social-txt
  display: flex
  margin-left: auto
  margin-right: auto

.google .btn-img
  height: 30px
  width: 30px
  display: inline
  border-radius: 3px

  img
    position: relative
    top: 4px

.github .btn-img img
  position: relative
  top: 2px
  left: 10px

.microsoft .btn-img img
  position: relative
  top: 2px
  left: 10px

.google
  background: $google-blue
  border: 1px solid $google-blue
  color: #FFF

  .btn-img
    background: #FFF

  &:hover
    background: $button-active-blue

.github
  background: $github-black
  border: 1px solid $github-black
  color: #FFF
  &:hover
    background: $github-active

.microsoft
  background: #FFF
  color: $primary-text-light
  border: 1px solid $primary-text-light
  &:hover
    background: $microsoft-active

.horizontal-break
    width: 60%
    font-size: 15px
    color: $primary-text-light
    font-weight: bold
    text-align: center
    border-bottom: 1px solid $light-grey
    line-height: 0.1em
    margin: 30px 0 20px

.horizontal-break span
    background: $background-color
    padding: 0 10px
</style>
