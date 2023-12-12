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
import api from "@/services/api"

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

        console.log(this.forms)

        for(let form of this.forms){
            const dadosUsuario = {
            cpf: form.cpf,
            nome: form.nome,
            email: form.email,
            telefone: form.phone,
            dataNascimento: form.dob,
        };

        this.adicionarUsuario(dadosUsuario)
        }
    
        
        this.redirectPagamento()

    
    },

    redirectPagamento(){

    // Construir o URL de redirecionamento com base no multiplier
      const baseUrl = 'https://sandbox.asaas.com/c/';
      const multiplier = this.FormMultiplier;
      const urlMappings = {
        2: 'd4ki2d2dceh0w4ds',
        3: 'ek4w7as99stn7484',
        4: 'uhz7npl1rllrg33b',
        5: 'qptm6y348xayostz',
      };


      const code = urlMappings[multiplier];


      window.location.href = `${baseUrl}${code}`;

    },

    async adicionarUsuario(dadosUsuario) {
      try {
        // Faz a requisição POST para adicionar o usuário
        const response = await api.post('/adicionar-usuario', dadosUsuario);

        // Trate a resposta conforme necessário
        console.log('Usuário adicionado com sucesso:', response.data);

        // Redirecione ou faça outras ações conforme necessário
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error.message);
        // Lide com o erro conforme necessário
      }
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