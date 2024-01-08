<template>
  <div>
    <div class="form-container">
      <div class="input-container">
        <label class="label" for="name">Nome:</label>
        <input class="input" type="text" id="name" v-model="formData.nome" />
      </div>

      <div class="input-container">
        <label class="label" for="email">Email:</label>
        <input class="input" type="email" id="email" v-model="formData.email" />
      </div>

      <div class="input-container">
        <label class="label" for="cpf">CPF:</label>
        <input class="input" type="text" id="cpf" v-model="formData.cpf" />
      </div>

      <div class="input-container">
        <label class="label" for="dob">Data de Nascimento:</label>
        <input class="input" type="date" id="dob" v-model="formData.dob" />
      </div>

      <div class="input-container">
        <label class="label" for="phone">Telefone:</label>
        <input class="input" type="tel" id="phone" v-model="formData.phone" />
      </div>
    </div>

    <!-- <div class="button" @click="submitForm">Enviar</div> -->
  </div>
</template>

<script>
export default {

  props:{
    form: Object,
  },
  data() {
    return {
      formData: {...this.form}
    }
  },

  watch: {
    formData: {
      handler(newFormData) {
        // Emitir um evento para notificar o componente pai sobre as alterações
        this.$emit("form-data-updated", newFormData);
      },
      deep: true, // Observar alterações profundas dentro de formData
    },
  },

  methods: {
    submitForm() {
      // Aqui você pode adicionar a lógica para lidar com os dados do formulário
      if( this.name === '' || this.email === '' || this.cpf === '' || this.dob === '' || this.phone === ''){
        console.log('preencha seus dados')
      } else {
        console.log('Dados do formulário:', this.formData);
      }
      
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 50px;
  margin: auto;
  box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
  border: solid  rgba(0, 0, 0, 0.2) 0.6px;
  border-radius: 12px;
  background-color: #ffff;
  margin-bottom: 40px;
  color:#082777;
  /* position: relative;
  left: -52px; */

}

.input-container {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.label {
  display: flex;
  font-weight: 500;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1.9px solid #d9d9d9;
  outline: none; /* Remove a borda de foco padrão */
}

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

        max-width: 400px;
        height: 50px;
        margin: auto;


    }

  @media  screen and (max-width: 570px) {
    .form-container{
      width: 100%;
      position: relative;
      left: -52px;
    }
    
  }
</style>
