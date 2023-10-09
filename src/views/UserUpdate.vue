<template>
    <div>
        <UserForm :user="selectedUser" @handleUser="editUser" :isEdition="true" />
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserForm from '../components/users/NewUserForm.vue'

export default {
    components: {
        UserForm
    },
    computed: {
        ...mapState('users', ['selectedUser'])
    },
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                country: ''
            },
            error: false
        }
    },
    methods: {
        ...mapActions({
            updateUser: 'users/updateUser'
        }),
        editUser(user) {
            const userProperties = Object.values(user);
            const propertiesAreCompleted = userProperties.every(value => value !== '');
            if (propertiesAreCompleted) {
                this.updateUser(user).then((res) => {
                    if (res && res.includes('500')) {
                        this.error = 'Hubo un error, intente nuevamente más tarde.'
                    } else {
                        this.$router.push('/dashboard')
                    }
                })
            } else {
                this.error = 'Debes completar todos los campos del formulario'
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