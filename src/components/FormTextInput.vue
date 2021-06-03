<template>
  <div>
    <label
      ><span class="title">{{ title }}</span
      ><span v-if="secondaryText" class="side-text">{{
        secondaryText
      }}</span></label
    >
    <input
      :class="inputClass"
      :type="type"
      :placeholder="hint"
      @input="inputChanged"
      @blur="confirmTouched"
    />
    <label v-if="showError" class="error-text">{{ errorMessage }}</label>
  </div>
</template>

<script>
export default {
  props: ['title', 'secondaryText', 'type', 'hint', 'rules', 'errorMessage'],

  emits: ['input'],

  data() {
    return {
      valid: false,
      text: '',
      touched: false,
    }
  },

  computed: {
    inputClass() {
      if (!this.touched) return ''

      return this.valid ? '' : 'error'
    },

    showError() {
      if (!this.touched) return false

      return !this.valid
    },
  },

  methods: {
    inputChanged(event) {
      this.text = event.target.value

      this.valid = true

      if (this.rules.length) {
        this.valid = this.valid && this.text.length >= this.rules.length
      }

      if (this.rules.expression) {
        this.valid = this.valid && this.rules.expression.test(this.text)
      }

      if (this.rules.notContain) {
        const loc = this.text.indexOf(this.rules.notContain)
        this.valid = this.valid && loc === -1
      }

      this.$emit('input', this.text, this.valid)
    },

    confirmTouched() {
      this.touched = true
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

div
    margin-bottom: 15px

label
    color: $primary-text-light
    margin: 0 auto
    width: 63%
    display: flex
    justify-content: space-between
    align-items: baseline

.title
    margin-right: auto

.side-text
    font-size: 12px
    color: $faded-text
    margint-left: auto

    &:hover
        cursor: pointer
        text-decoration: underline

.error-text
    font-size: 13px
    color: red

input
    color: $primary-text-light
    margin: 8px auto
    display: block
    width: 60%
    padding: 10px
    border: 1px solid $light-grey
    border-radius: 5px
    outline: none

    &.error
        border: 1px solid red

    &:focus
        border: 1px solid $primary-color-light

    &::placeholder
        color: $faded-text
</style>
