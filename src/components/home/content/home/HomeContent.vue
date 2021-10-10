<template>
    <div>
        <!-- <qrcode-vue  :value="clink" :size="size" level="H" /> -->
        <h2>Memampilkan Semua Kontent yang Dibuat oleh admin</h2>
        <hr>
        <div class="cards"
            v-for="c in content" :key="c.id"
            @click="baca(c.id)">
            <!-- <div class="mark" v-html="c.markdown"></div> -->
            <h3>{{ c.judul }}</h3>
            <p>by : {{ c.penulis }} | {{ c.created_at }}</p>
        </div>
    </div>
</template>

<script>
// import QrcodeVue from 'qrcode.vue'
import axios from 'axios'
export default {
    components:{
        // QrcodeVue
    },
    data(){
        return{
            content:null,
            clink:null,
            size:300
        }
    },
    computed:{
    },
    methods:{
        baca(id){
            console.log('baca', id )
            this.$router.push(`/home/content/${id}`)
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/html').then((res)=>{
            console.log(res.data)
            this.content = res.data
        })

        this.clink= window.location.href
        console.log(this.clink)
    }
}
</script>

<style scoped>
.cards{
    border-left: solid transparent 3px;
    padding: 0.2rem 1rem;
    margin: 0.5rem;
    transition: 0.5s ease-in;
    border-left-style: double;
}
.mark{
    height: 50vh;
    overflow: auto;
}
.cards:hover{
    border-left: solid rgb(197, 197, 197) 3px;
    background-color: white;
}
h3{
    margin: 0;
}
p{
    margin: 0;
    color: grey;
    font-size: 0.8rem;
}
</style>