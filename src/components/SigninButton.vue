<template>

        <div class="button" @click="setLoading"
        :class="{ 'loading': loading }"
        :disable="loading">
        {{ loading ? 'Carregando...' : 'Enviar' }}
        </div>

</template>
<script>
export default {

    data(){
        return{
            loading: false
        }
    },

    methods:{
        setLoading(){
     
            this.loading = true

            setTimeout(() =>{
                this.loading = false
            },  600000)
            
         },
    }
    
}
</script>
<style scoped>
    .button{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #FBBB3F;
        border-radius: 12px;
        font-weight: bold;
        color: #ffff;

        box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;

        width: 400px;
        height: 50px;
        margin: auto;


    }

    .button:hover{
        background-color: #feca62;
    }

    .loading {
        background-color: #feca62;
        cursor: not-allowed; 
    }
</style>