<template>
    <div>
        <UserForm :user="user" @handleUser="addUser" />
        <p v-if="missingData">Debes completar todos los campos del formulario</p>
        <p v-if="shortPassword">La contraseña es demasiado corta. Debe tener más de 3 caracteres.</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserForm from '../components/users/NewUserForm.vue'

export default {
    components: {
        UserForm
    },
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                password: '',
            },
            missingData: false,
            shortPassword: false
        }
    },
    methods: {
        ...mapActions({
            createUser: 'users/addUser'
        }),
        addUser(user) {
            const userProperties = Object.values(user);
            const propertiesAreCompleted = userProperties.every(value => value !== '');
            if (propertiesAreCompleted && user.password.length > 3) {
                this.createUser(user).then(() => {
                    this.$router.push('/login')
                })
            } else {
                if (!propertiesAreCompleted) {
                    this.missingData = true
                } else {
                    if(propertiesAreCompleted) this.missingData = false
                    this.shortPassword = true
                }
            }
        }
    }
}
</script>

<style scoped>
p {
    color: #B73E3E;
}
</style>