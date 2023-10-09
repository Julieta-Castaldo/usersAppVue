<template>
    <header>
        <a @click="goToSignIn">Sign in</a>
        <a @click="goToLogin">Login</a>
    </header>
</template>

<script>
export default {
    methods: {
        goToLogin() {
            this.$router.push('/login')
        },
        goToSignIn() {
            this.$router.push('/create-user')
        }
    }
}
</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
}

a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px;
}
</style>