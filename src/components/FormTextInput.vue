<template>
  <div>
    <label
      ><span class="title">{{ title }}</span
      ><span v-if="secondaryText" class="side-text">{{
        secondaryText
      }}</span></label
    >
    <input
      :id="id"
      :class="inputClass"
      :type="type"
      :placeholder="hint"
      @input="inputChanged"
      @blur="confirmTouched"
    />
    <label :id="id + '-error-message'" v-if="showError" class="error-text">{{
      errorMessage
    }}</label>
  </div>
</template>

<script>
// A generic input field

export default {
  // accepts the input id
  // accept the title on top of box
  // the text in the right
  // the type of text in the input
  // a hint to display in the box
  // the validation rules
  // the error message to display in case of validation error
  props: [
    'id',
    'title',
    'secondaryText',
    'type',
    'hint',
    'rules',
    'errorMessage',
  ],

  // emit the input event
  // called on input changed
  // receives two arguments
  // currentText & validation status
  emits: ['input'],

  data() {
    return {
      valid: false,
      text: '',
      touched: false,
    }
  },

  computed: {
    // class to display the red border if not valid
    inputClass() {
      if (!this.touched) return ''

      return this.valid ? '' : 'error'
    },

    // show error message or not based on validation status
    showError() {
      if (!this.touched) return false

      return !this.valid
    },
  },

  methods: {
    // runs whenever the input in field changes
    inputChanged(event) {
      // get the user input
      this.text = event.target.value

      // start checking validation rules
      this.valid = true

      // check the length rule
      if (this.rules.length) {
        this.valid = this.valid && this.text.length >= this.rules.length
      }

      // check if there is a regex passed to validate
      if (this.rules.expression) {
        this.valid = this.valid && this.rules.expression.test(this.text)
      }

      // check if the text doesn't contain certain text
      if (this.rules.notContain) {
        const loc = this.text.indexOf(this.rules.notContain)
        this.valid = this.valid && loc === -1
      }

      // inform parent of change in text and validation status
      this.$emit('input', this.text, this.valid)
    },

    // when input is focused and unfocused
    // then confirm that the user used this
    // input field at least once
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
