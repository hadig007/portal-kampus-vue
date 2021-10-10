<template>
    <div>
        <div class="main-content">
            <img :src="photo" alt="">
            <div class="text">
            <p>Selamat datang😄</p>
            <p>Selamat bergabung dengan kami, disini kita akan belajar bersama, dari awal sampe mahir pengembangan web, kalian tidak usah khawatir jika sebelumnya belum pernah berurusan dengan website atau belum familiar dengan dunia IT bahkan.</p>
            <p>Kita akan belajar bagaimana memulai untuk membuat website sendiri atau keperluan komersial lainnya, kita mulai dari pengenalan apa itu website dan teknologi apa saja yang dibutuhkan untuk belajar didalamnya</p>
            <p>Mengutip ucapan dari Pak Dika, salah satu Tokoh yang cukup penting dalam dunia developer web, beluai mengatakan belajar pemrograman itu memang sulit, tapi worth it, memang harus bisa membagi cukup waktu untuk belajar dan terus mencoba</p>
            <p>Selanjutnya kita mulai belajar dengan kontent yang sudah tersedia juga di portal ini</p>
        </div>
        </div>
        <div class="second-content">

        </div>
    </div>
</template>

<script>
import poto from '../../../../assets/logo.png'
export default {
data(){
    return{
        photo:poto
    }
}
}
</script>

<style scoped>
.main-content{
    height: 70vh;
    /* border: solid violet 1px; */
    margin-bottom: 1rem;
    border-radius: 4px;
}
.second-content{
    height: 30vh;
    /* border: solid violet 1px; */
}
</style>