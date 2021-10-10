<template>
    <div>
        <h5 @click="show=!show">➕Add New Content</h5>
        <form v-if="show" @submit.prevent="tambah">
            <div class="form">
                <label>Judul</label>
                <input type="text" v-model.trim="judul">
            </div>
            <div class="form">
                <label>Materi Singkat</label>
               <textarea rows="4" v-model.trim="materi"></textarea>
            </div>
            <p>Preview</p>
            <hr>
            <div v-html="markdownToHtml" class="preview"></div>
            <div class="form">
                <button>Tambah</button>
            </div>
        </form>
        <hr>
        <h5>Uploaded Content</h5>
        <div class="cards" v-for="(con) in this.$store.state.content" :key="con.index">
            <p>judul : {{con.judul}} </p>
            <p>link : {{con.link}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked';
export default {
    data(){
        return{
            show:false,
            judul:'',
            materi:'',
            preMateri:'',
        }
    },
    computed:{
        markdownToHtml(){
             return marked(this.materi);
        }
    },
    methods:{
        async tambah(){
            await axios.post('http://127.0.0.1:8000/api/create_markdown',{
                judul:this.judul,
                markdown: this.markdownToHtml,
                penulis:this.$store.state.user.name
            }).then((res)=>{
                alert(res.data)
                this.show=!this.show
                this.$router.push('/home/content')
            }).catch(e=>console.log(e.response.data))
        }
    }
}
</script>

<style scoped>
form{
    background-color: rgb(238, 215, 253);
    box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
}
.form{
    display: flex;
    flex-direction: column;
    margin: 0.3rem 0;
}
input,textarea{
    border-radius: 4px;
    border: solid grey 1px;
}
button{
    border: solid grey 2px;
    border-radius: 4px;
}
h5{
    text-align: center;
    pointer-events: painted;
}
.cards{
    background-color:  rgb(198, 164, 221);
    display: inline-block;
    max-width: 10rem;
    padding: 0.5rem;
    border-radius: 4px;
    height: 5rem;
    overflow: auto;
    margin: 0.5rem;
}
p{
    margin: 0;
}
.preview{
    background-color: whitesmoke;
    border-radius: 4px;
    padding: 1rem;
}
</style>