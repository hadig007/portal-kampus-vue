<template>
    <div>
        <div class="login">
            <h2>Register Form</h2>
            <form @submit.prevent="register">
                <div class="form">
                    <label>Name</label>
                    <input type="text" v-model.trim="name">
                </div>
                <div class="form">
                    <label>Email</label>
                    <input type="email" v-model.trim="email">
                </div>
                <div class="form">
                    <label>Password</label>
                    <input type="password" v-model.trim="password">
                </div>
                <div class="form">
                    <button>Login</button>
                </div>
                <p>have an account?<router-link to="/login">login</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
        register(){
            axios.post('auth/register',{
                name:this.name,
                level:'user',
                email:this.email,
                password:this.password,
                password_confirmation:this.password
            }).then((res)=>{
                console.log('registrasi berhasail dilakukan', res.data)
                this.$router.push('/login')
            }).catch(e=>console.log(e.response.data))
        }
    }
}
</script>

<style scoped>
.login{
    background-color: violet;
    padding: 1rem 0;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-width: 302px;
    margin: 50% 25%;
}
h2{
    font-weight: bold;
    color:paleturquoise;
    font-size: 1.6rem;
}
form{
    background-color: rgba(255, 255, 255, 0.253);
    padding: 1rem;
    border-radius: 4px;
}
.form{
    display: flex;
    flex-direction: column;
    margin: 0.3rem 0;
}
input{
    border-radius: 4px;
    border: solid pink 1px;
    font-size: 1.2rem;
}
button{
    border-radius: 4px;
    border: solid pink 1px;
    font-size: 1.2rem;
    color: grey;
}
label{
    color: rgb(35, 55, 110);
    font-size: 1.2rem;
}
</style>