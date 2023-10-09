<template>
    <div>
        <h3>Login</h3>
        <p class="error" v-if="error"> {{ errorMessage }}</p>
        <LoginForm :user="user" @login="submit" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoginForm from '../components/users/LoginForm.vue'

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            user: {
                email: '',
                password: '',
            }
        }
    },
    computed: {
        ...mapState('userAuth', ['errorMessage', 'error'])
    },
    methods: {
        ...mapActions('userAuth', ['login']),
        async submit() {
            if (this.user.email.length === 0 || this.user.password.length === 0) {
                return false
            }
            await this.login(this.user).then(() => {
                this.$router.push('/dashboard')
            })
        }
    }
}
</script>

<style scoped>
h3{
    margin-left: 20px;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.error {
    color: red;
    font-size: 18px;
}
</style>