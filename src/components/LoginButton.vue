<template>
  <button :class="disabledClass" :disabled="disabled" type="submit">
    Log in
  </button>
</template>

<script>
export default {
  props: ['disabled'],

  computed: {
    disabledClass() {
      return this.disabled ? 'disabled' : ''
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

button
  padding: 0
  margin: 0 auto
  width: 64%
  height: 40px
  background: $primary-color
  color: #FFF
  font-weight: bold
  border: 1px solid $primary-color
  border-radius: 5px
  outline: none

  &:hover, &:focus
    cursor: pointer
    background: $primary-color-light
    border-color: $primary-color-light

  &.disabled
      background: $light-grey
      border: none

      &:hover
          cursor: default
</style>
