<template>
    <div>
        <main id="login">
            <b-container>
                <h2 class="text-center mt-30">Hello user</h2>
                <b-row align-h="center">
                    <b-form class="mt-30">
                        <b-form-group label="Email address:">
                            <b-form-input type="email" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password:">
                            <b-form-input type="password" required></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </b-row>
            </b-container>
        </main>
    </div>
</template>

<script>

export default {
  name: 'login'
}
</script>
