<template>
    <div>
        <main id="admin">
            <h2>Hello World</h2>
            <router-link :to="{ name: 'home' }">TO HOME</router-link>
        </main>
    </div>
</template>

<script>
export default {
  name: 'admin'
}
</script>
