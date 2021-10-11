<template>
    <div>
        <Header/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <sidebar v-if="logged" ></sidebar>
                </div>
                <div class="col-md-10">
                   <div class="home">
                        <div class="atas" v-if="first">
                            <h2>Selamat datang, di Portal ini</h2>
                            <router-link to="/home/dashboard" @click="first=!first">Ke Content</router-link>
                        </div>
                        <router-view v-if="!first"></router-view>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../layouts/Header.vue'
import Sidebar from './sidebar/Sidebar.vue'
export default {
    components: { Header,
     Sidebar
     },
    data(){
        return{
            first:true,
            logged: false
        }
    },
    async created(){
    if(this.$store.getters.authenticated ){
            await axios.get('auth/user-profile',{
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then((res)=>{
                console.log('berhasil mendapat data user', res.data)
                this.$store.dispatch('addUser', res.data)
                this.logged = true
            }).catch((e)=>{
                console.log('gagal',e.response.data)
                this.$router.push('/login')
                localStorage.removeItem('token')
        })
        }else{
            console.log('not having token, redirected to login page')
            this.$router.push('/login')
            localStorage.removeItem('token')
            // this.$store.getters.userLevel = null
        }
    }
}
</script>

<style scoped>
.row>*{
  margin: 0;
  padding: 0;
}
.home{
    /* border: solid 1px grey; */
    margin: 1rem;
    padding: 1rem;
}
</style>