<template>
  <LoginHeader />
  <LoginForm />
  <LoginFooter />
</template>

<script>
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'
import LoginFooter from './LoginFooter'

// Just use the component as a container for
// the different parts if the login half of the page

export default {
  components: { LoginHeader, LoginForm, LoginFooter },
}
</script>
