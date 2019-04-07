<template>
    <div>
        <main id="admin">
            <Dash v-if="hasToken" />
            <Login v-else />
            <router-link :to="{ name: 'home' }">TO HOME</router-link>
        </main>
    </div>
</template>

<script>
import Dash from './dash/Main'
import Login from './login/Main'

export default {
  name: 'admin',
  components: { Dash, Login },
  computed: {
    hasToken: function () {
      if (sessionStorage.getItem('token')) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss" src="../assets/sass/app.scss"></style>
