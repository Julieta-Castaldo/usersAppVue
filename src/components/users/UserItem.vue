<template>
    <div class="user-card">
        <div class="user-data">
            <p class="name">{{ user.firstName }} {{ user.lastName }}</p>
            <p class="email">{{ user.email }}</p>
            <p class="gender">{{ user.gender }} </p>
        </div>
        <div class="card-actions">
            <button class="editButton" @click="goToUpdateUser">Edit</button>
            <button class="deleteButton" @click="removeUser">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _updateUser: 'users/updateUser',
            _removeUser: 'users/removeUser'
        }),
        ...mapMutations('users', ['setUser']),
        goToUpdateUser() {
            this.setUser(this.user)
            this.$router.push({
                name: 'user-update',
                params: { id: this.user.id }
            })
        },
        removeUser() {
            this._removeUser(this.user.id)
        }
    }
}
</script>

<style scoped>
.user-card {
    display: flex;
    flex-direction: row;
    padding: 8px;
    border: 1px solid grey;
    justify-content: space-between;
}


.name {
    font-weight: bold;
    font-size: 18px;
}

.email {
    color: grey;
    font-weight: 500;
}

.gender {
    color: grey;
}

p {
    margin: 0
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 4px;
}

.editButton{
    background-color: #FF9B50;
}
.editButton:hover {
    background-color: #E25E3E;
}

.deleteButton {
    background-color: #DD5353;
}
.deleteButton:hover {
    background-color: #B73E3E;
}

</style>