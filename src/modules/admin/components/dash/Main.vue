<template>
    <div>
        <main id="dash">
            <b-container>
                <b-row align-h="center">
                    <div v-for="(item, index) in this.users" :key="index" class="w-100">
                        <b-form-group :label="`Name: ${item.name}`"></b-form-group>
                        <b-form-group :label="`Email address: ${item.email}`"></b-form-group>
                        <b-form-group :label="`Permission: ${itemRoles.name}`" v-for="(itemRoles, indexRoles) in item.roles" :key="`roles-${indexRoles}`"></b-form-group>
                    </div>
                </b-row>
            </b-container>
        </main>
    </div>
</template>

<script>

export default {
  name: 'dash',
  data () {
    return {
      users: {},
      email: '',
      password: '',
      name: ''
    }
  },
  mounted () {
    const self = this
    this.$axios.get('/users', {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    })
      .then(function (success) {
        self.users = success.data
        console.log(self.users)
      })
      .catch(function (error) {
        alert(error)
      })
  }
}
</script>
