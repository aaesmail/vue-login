<template>
  <LoginHeader />
  <LoginForm />
  <LoginFooter />
</template>

<script>
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'
import LoginFooter from './LoginFooter'

export default {
  components: { LoginHeader, LoginForm, LoginFooter },
}
</script>
