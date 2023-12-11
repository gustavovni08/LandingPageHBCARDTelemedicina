<template lang="">
    <div class="main-container">
        <div class="header">  <p class="label">Cadastro</p><p class="wrapper">></p> <p class="label">Pagamento</p>
        </div>
        <FormMultiplier
        @multiplier-change="handleMultiplierChange" />
        <CheckoutFormContainer ref="formContainer"
        v-for="(form, index) in forms" 
        :key="index"
        :form="form"
        @form-data-updated="atualizarFormulario(index, $event)"/>
        <SigninButton @click="coletarDadosDoFormulario"/>
    </div>
</template>
<script>

import SigninButton from '@/components/SigninButton.vue';
import FormMultiplier from '@/components/FormMultiplier.vue';
import CheckoutFormContainer from '@/components/CheckoutFormContainer.vue';

export default {
    components:{
        CheckoutFormContainer,
        FormMultiplier,
        SigninButton
    },

    data() {
        return {
            forms:[
            {
                nome: '',
                email: '',
                cpf: '',
                dob: '',
                phone: '',
            },
            {
                nome: '',
                email: '',
                cpf: '',
                dob: '',
                phone: '',
            },
            
            ],
            FormMultiplier: 2,
        }
    },

    methods:{
        coletarDadosDoFormulario() {
      // Chama o método submitForm do componente filho usando a referência
        // this.$refs.formContainer.forEach((formContainer) => {
        //     formContainer.submitForm()
        // });
        console.log(this.forms)
    },

    atualizarFormulario(index, newFormData) {
      
        this.forms[index] = newFormData
    },

        handleMultiplierChange(newMultiplier) {
          // Lidar com o novo valor do multiplicador
          console.log("Novo valor do multiplicador:", newMultiplier);
          // Atualizar o valor no componente pai
          this.FormMultiplier = newMultiplier;

          this.forms = Array.from({ length: newMultiplier }, () => ({
              nome: "",
              email: "",
              cpf: "",
              dob: "",
              phone: "",
            }));
        },
    }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
        margin-top: 40px;
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
</style>