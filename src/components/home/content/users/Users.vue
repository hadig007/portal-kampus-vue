<template>
    <div v-if="users">
        <h3>
            Memampilkan Dummy Users
        </h3>
        <hr>
        <div class="box" v-for="us in filteredUser" :key="us.id">
            <div class="cards">
                <div class="body">
                    <h2>{{ us.name }}✔️</h2>
                    <p>email {{ us.email }}<span> | chat🙌</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            users:null
        }
    },
    computed:{
        filteredUser(){
            return this.users.filter(user => user.level == 'user')
        }
    },
    created(){
        axios.get('users').then((res)=>{
            console.log(res.data)
            this.users = res.data
        }).catch(e=>console.log(e.response.data))
    }
}
</script>

<style scoped>
div{
    display: inline-block;
    align-items: center;
}
.box{
    display: inline-block
}
.cards{
    background-color: violet;
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
    min-width: 220px;
}
</style>