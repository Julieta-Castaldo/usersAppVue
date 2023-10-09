<template>
    <form @submit.prevent="$emit('handleUser', user)">
        <div class="form-group">
            <label for="firstName">Nombre:</label>
            <input type="text" id="firstName" v-model="user.firstName"/>
        </div>
        <div class="form-group">
            <label for="lastName">Apellido:</label>
            <input type="text" id="lastName" v-model="user.lastName"/>
        </div>
        <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="user.email"/>
        </div>
        <div class="form-group">
            <label for="country">País:</label>
            <select id="country" v-model="user.country" class="form-control">
                <option value="Argentina">Argentina</option>
                <option value="España">España</option>
                <option value="Otro">Otro</option>
            </select>
        </div>
        <div class="form-group" v-if="!isEdition">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="user.password"/>
        </div>
        <p v-if="shortPassword">La contraseña debe tener más de 3 caracteres</p>
        <p v-if="missingData">Debes completar todos los campos para continuar</p>
        <div class="form-group">
            <button type="submit">
                <span v-if="isEdition">Guardar cambios</span>
                <span v-else>Crear usuario</span>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        isEdition: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>
form {
    width: 300px;
    margin-left: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

select.form-control {
    width: 320px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}</style>