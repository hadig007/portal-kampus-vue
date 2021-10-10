<template>
    <div>
        <qrcode-vue  :value="clink" :size="size" level="H" />
        <h2>Memampilkan Semua Kontent yang Dibuat oleh admin</h2>
        <hr>
        <div class="cards"
        v-for="c in content" :key="c.id">
            <div class="mark" v-html="c.markdown"></div>
        </div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import axios from 'axios'
export default {
    components:{
        QrcodeVue
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
    background-color: violet;
    padding: 1rem;
    margin: 00.5rem;
}
.mark{
    height: 50vh;
    overflow: auto;
}
</style>