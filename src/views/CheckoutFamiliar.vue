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
        <SigninButton @click="enviarFormulario"/>
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

            value:59.8,

            FormMultiplier: 2,

            okToSubmit: false,

            vendor_code: '',
        }
    },

    methods:{

    enviarFormulario(){
        
        window.alert('Seus dados estão sendo processados aguarde um instante!')
        
        try {
            this.coletarDadosDoFormulario();
            setTimeout(() => {
                this.gerarCobranca()
            }, 20000)

            setTimeout(() => {
                this.redirectPagamento()
            }, 40000)

            } catch (error) {
                window.alert('Ocorreu um erro, tente novamente em alguns instantes')
                console.error(error)
            } 
    },
    
    coletarDadosDoFormulario() {

        console.log(this.forms)
        const anoAtual = new Date().getFullYear()

        for (let form of this.forms) {
        
        if (
            form.nome === '' ||
            form.email === '' ||
            form.cpf === '' ||
            form.dob === '' ||
            form.phone === ''
        ) {
            window.alert('Preencha todos os campos antes de enviar.')
            return
        }

        const idade = parseInt(form.dob.substring(0, 4), 10)

        if((anoAtual - idade) < 14){
            window.alert(`${form.nome} é Menor de 14 anos`)
            return
        }

        this.okToSubmit = true

        }

        if(this.okToSubmit === true){
            for (let form of this.forms){
                const dadosUsuario = {
                    cpf: form.cpf,
                    nome: form.nome,
                    email: form.email,
                    telefone: form.phone,
                    dataNascimento: form.dob,
                }

                this.adicionarUsuario(dadosUsuario)
            }
        }
    
    },

    async gerarCobranca(){
        try {

            const body = {
                cpf: this.forms[0].cpf,
                value: this.value * this.FormMultiplier,
                vendor_code: this.vendor_code
            }

            // const assinatura = await api.post('/gerar-assinatura', body)
            // console.log('assinatua gerada com sucesso', assinatura.data)

            setTimeout(async () => {
                const response = await api.post('/gerar-cobranca', body)
            console.log('cobrança criada com sucesso:', response.data)    
            }, 10000)
            

            this.redirectPagamento()
        } catch (error) {
            console.error(error)
        }
    },

    async redirectPagamento(){

        try {
        const cpf = this.forms[0].cpf;
        console.log(cpf)
        const response = await api.get(`/retornar-link-de-cobranca?cpf=${cpf}`)
        const link = response.data.data
        console.log(link); // Verifique se os dados estão dentro de response.data
        window.location.href = link; // Se deseja redirecionar após receber o link
    } catch (error) {
        console.log(error);
    }

    },

    async adicionarUsuario(dadosUsuario) {
      try {
        
        const response = await api.post('/adicionar-usuario', dadosUsuario);

        console.log('Usuário adicionado com sucesso:', response.data);

      } catch (error) {
        console.error('Erro ao adicionar usuário:', error.message);
       
      }
    },

    atualizarFormulario(index, newFormData) {
      
        this.forms[index] = newFormData
    },

    handleMultiplierChange(newMultiplier) {
          console.log("Novo valor do multiplicador:", newMultiplier);
          this.FormMultiplier = newMultiplier;
          this.value = 58.9 * this.FormMultiplier

          this.forms = Array.from({ length: newMultiplier }, () => ({
              nome: "",
              email: "",
              cpf: "",
              dob: "",
              phone: "",
            }));
    },

    getCodigoVendedor(){
        const vendor_code = localStorage.getItem('vendor_code')
        if(vendor_code){
            this.vendor_code = vendor_code
            console.log(this.vendor_code)
            
            if(this.vendor_code === 'vivianePT'){
                this.price = 80 
            }
        } else {
            console.log('não há código de vendedor')
        }

    }
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



    
    @media screen and (max-width:800px) {
        .label{
            font-size: 20px;
        }   
        .wrapper{
            font-size: 20px;
        }
    }
</style>