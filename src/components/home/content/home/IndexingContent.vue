<template>
    <div>
        <h1>{{ content.judul }}</h1>
        <hr>
        <p v-html="content.markdown"></p>
        <p>{{ content.created_at }}</p>
        <button @click="pdf">Download PDF</button>
    </div>

</template>

<script>

import axios from 'axios'
export default {
    components: {
    },
    data(){
        return{
            content:{}
        }
    },
    methods:{
        pdf(){
            console.log('donwloading pdf')
        }
    },
    async created(){
        let ctn = this.$route.params.ctn
        console.log(ctn)
        await axios.get('html/' + ctn).then((res)=>{
            console.log(this.$route.params)
            console.log(res)
            this.content = res.data
        }).catch(e=>console.log(e.response.data))
    }
}
</script>