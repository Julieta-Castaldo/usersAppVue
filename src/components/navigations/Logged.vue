<template>
    <header>
        <span>Welcome {{ userName }} </span>
        <div>
            <a @click="goToDashboard">Dashboard</a>
            <a @click="_logout">Cerrar Sesión</a>
        </div>
    </header>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations('userAuth', ['logout']),
        _logout() {
            this.logout()
            this.$router.push('/login')
        },
        goToDashboard(){
            this.$router.push('/dashboard')
        }
    },
    data() {
        return {
            userName: ''
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.userName = user.firstName
    }
}
</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-right: 20px;
}
</style>