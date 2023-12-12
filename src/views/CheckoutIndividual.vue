<template lang="">
    <div class="main-container">
        <div class="header">  <p class="label">Cadastro</p><p class="wrapper">></p> <p class="label">Pagamento</p>
        </div>
        <CheckoutFormContainer ref="formContainer"
        :form="form"
        @form-data-updated="atualizarFormulario($event)"/>
        <SigninButton @click="coletarDadosDoFormulario"/>
    </div>
</template>
<script>

import SigninButton from '@/components/SigninButton.vue';
import CheckoutFormContainer from '@/components/CheckoutFormContainer.vue';
import api from "@/services/api"

export default {
    components:{
        CheckoutFormContainer,
        SigninButton
    },

    data() {
        return {
            form:{
                nome: '',
                email: '',
                cpf: '',
                dob: '',
                phone: '',
            }
        }
    },

    methods:{
    //     coletarDadosDoFormulario() {
    //     console.log(this.form)

        
    // },

    coletarDadosDoFormulario() {

    console.log(this.forms)

    const dadosUsuario = {
        cpf: this.form.cpf,
        nome: this.form.nome,
        email: this.form.email,
        telefone: this.form.phone,
        dataNascimento: this.form.dob,
    };

    this.adicionarUsuario(dadosUsuario)
    // this.redirectPagamento()


    },

    redirectPagamento(){

    window.location.href = 'https://sandbox.asaas.com/c/u5d4uhipeo48dtcg'

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

    atualizarFormulario(newFormData) {
        this.form = newFormData
    },

    async listarUsuarios() {
        try {
            const {data} = await api.get('/listar-usuarios')
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    // try {
    //   console.log('oi');
    //   const {data} = await axios.get('http://localhost:3000/listar-usuarios');
    //   console.log('Lista de usuários:', data);
    // } catch (error) {
    //   console.error('Erro ao listar usuários:', error.message);
    // }
  },
  },
    mounted() {
        this.listarUsuarios();
        console.log('oi')
    }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
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