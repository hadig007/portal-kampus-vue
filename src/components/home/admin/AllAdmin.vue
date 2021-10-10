<template>
    <div>
        <h1>halaman all admin, Halaman ini hanya bisa diakses oleh Owner dan Para Admin</h1>
        <p>isinya adalah melihat atau memantau produktifitas admin sesama admin </p>
        <p>juga bisa untuk diskusi sesama admin </p>
    </div>
</template>

<script>
export default {
    created(){
        if(this.$store.getters.userLevel == 'admin'){
            this.$router.push('/home/admin_task')
            alert('halaman ini hanya untuk owner, anda akan di redirect ke halaman task')
        }
    }
}
</script>

<style scoped>

</style>