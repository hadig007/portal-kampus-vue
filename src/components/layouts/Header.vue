<template>
    <header>
        <nav>
            <h2><span>Portal</span>Kampus</h2>
            <ul>
                <li><router-link to="/home/about">About</router-link></li>
                <li><button @click="logout">Logout</button></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        logout(){
            // location.reload()
                axios.post('auth/logout',{
                header:{
                    Authorization: 'Bearer ' + this.$store.state.tokenLogout
                }
            }).then((res)=>{
                console.log(res.data)
                console.log('clicking logout button, redirected to login page')
                this.$router.push('/login')
                localStorage.removeItem('token')
                this.$store.dispatch('addUser', null)
                // this.$store.getters.userLevel = null
            }).catch((e)=>{
                console.log('logout paksa',e.response)
                this.$router.push('/login')
                localStorage.removeItem('token')
                this.$store.dispatch('addUser', null)
                // this.$store.getters.userLevel = null
            }
            )
        }
    }
}
</script>

<style scoped>
header{
    background-color: purple;
    }
nav{
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
ul{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}
h2{
    margin: 0;
    color: whitesmoke;
}
li {
    list-style: none;
    margin: 5px 10px;
    padding: 5px 10px;
}
a{
    text-decoration: none;
    color: whitesmoke;
}
span{
    color: rgba(245, 245, 245, 0.356);
}
</style>