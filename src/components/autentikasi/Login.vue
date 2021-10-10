<template>
    <div>
        <div class="login">
            <h2>Login Form</h2>
            <form @submit.prevent="login">
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
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            axios.post('auth/login',{
                email:this.email,
                password:this.password
            }).then((res)=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.access_token)
                this.$store.dispatch('addToken', res.data.access_token)
                this.$router.push('/home')
                console.log('memasuki halaman home')
            }).catch((e)=>{
                console.log('gagal login',e.response.data)
                localStorage.setItem('token', null)
                this.$store.dispatch('addToken', null)
            })
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