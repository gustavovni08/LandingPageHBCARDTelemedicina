<template>
    <div class="card-container">
        <p>Quantidade de Membros</p>
        <select v-model="valor"
        @change="emitMultiplierChange">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valor: 2,
        }
    },

    methods:{
        emitMultiplierChange() {
      
        this.$emit("multiplier-change", parseInt(this.valor, 10));
    },
    },

    updated(){
        console.log(this.valor)
    }
}
</script>
<style scoped>
    .card-container{
        display: flex;
        justify-content: space-evenly;
        border-radius: 12px;
        padding: 14px;
        width: 350px;
        background-color: #ffff;
        box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;
        margin-bottom: 30px;
        color:#082777;

    }   
    
    select{
        width: 60px;
        padding-left: 12px;
        border-radius: 12px;
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;
    }
</style>