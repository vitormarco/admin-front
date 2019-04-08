<template>
    <div>
        <main id="dash">
            <b-container>
                <b-row align-h="center">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Permission</th>
                              <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="index">
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td v-for="(role, index) in user.roles" :key="`roles-${index}`">{{ role.display_name }}</td>
                                <td class="text-right">
                                    <router-link :to="`/user?id=${user.id}`">EDIT</router-link>
                                    <a>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
      })
      .catch(function (error) {
        alert(error)
      })
  }
}
</script>
