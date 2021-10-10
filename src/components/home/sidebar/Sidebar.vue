<template>
    <div>
        <nav>
            <h5><router-link to="/home/dashboard">Home</router-link></h5>
            <ul>
                <li><router-link to="/home/content">Content</router-link></li>
                <li><router-link to="/home/users">Users</router-link></li>
            </ul>
            <!-- <h5><router-link to="/home/admin">Admin</router-link></h5> -->
            <ul>
                <li><router-link to="/home/all_admin" v-if="isOwner">All Admin</router-link></li>
                <li><router-link to="/home/admin_task" v-if="isAdmin || isOwner" >My Task</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isOwner : false,
            isAdmin : false
        }
    },
    created(){
        if(this.$store.getters.userLevel == 'owner'){
            return this.isOwner = true
        }
        if(this.$store.getters.userLevel == 'admin'){
            return this.isAdmin = true
        }
    }
}
</script>

<style scoped>
div{
    padding: 2rem 1rem 0 0;
    border-right: solid 2px grey;
    height: 100vh;
}
h5{
    padding-left: 1rem;
    transition: 0.3s;
    border-left: solid 5px transparent;
    /* border-bottom: 1px solid grey; */
}
h5:hover{
    
    padding-left: 1rem;
    border-left: solid 5px rgb(187, 187, 187);
}
li{
    list-style: none;
}
a{
    padding-left: 1rem;
    transition: 0.3s;
    border-left: solid 5px transparent;
    text-decoration: none;
    color: inherit;
}
a:hover{
    border-left: solid 5px rgb(187, 187, 187);
    padding-left: 1rem;
}
</style>