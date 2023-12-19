<template lang="">
    <div class="main-container">
        <div class="header">  <p class="label">Cadastro</p><p class="wrapper">></p> <p class="label">Pagamento</p>
        </div>
        <CheckoutFormContainer
        ref="formContainer"
        @formulario-enviado="lidarComFormularioEnviado"/>
        <div class="button-container">
            <SigninButton
            @click="coletarDadosDoFormulario"/>
        </div>
        
    </div>
</template>
<script>

import SigninButton from '@/components/SigninButton.vue';
import CheckoutFormContainer from '@/components/CheckoutFormContainer.vue';

export default {
    components:{
        CheckoutFormContainer,
        SigninButton
    },

    methods:{

        lidarComFormularioEnviado(formData) {
      // Trata os dados do formulário recebidos do componente filho
      console.log('Dados do formulário recebidos no componente pai:', formData);
      // Atualiza os dados do formulário na propriedade local
      this.dadosDoFormularioColetados = formData;
    },
        coletarDadosDoFormulario() {
            this.$refs.formContainer.submitForm();
        },
    }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 120vh;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
        margin-top: 20px;
        color: #082777;
        width: 80%;

        /* margin: auto; */
        text-align: center;
    }

    .label{
        font-size: 30px;
    }

    .wrapper{
        margin-left: 5px;
        margin-right: 5px;
    }

    .button-container{
        height: 20vh;
    }
</style>