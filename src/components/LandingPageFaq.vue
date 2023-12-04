<template>
    <div class="faq-container"
    @click="showfaq">
        <div class="title-container">
            <p>{{label}}</p>

            <span class="material-symbols-outlined">
                {{ icon }}
            </span>
        </div>
        <div class="resposta-container" v-show="showAnswer">
            <p> {{text}} </p>
        </div>
    </div>

</template>
<script>
export default {
    props:{
        label: String,
        text: String,
    },

    data() {
        return {
            showAnswer:false,  
            icon: 'keyboard_arrow_down'    
        }
    },

    methods: {
        showfaq(){
            if(this.showAnswer === false){
                this.showAnswer = true
                this.icon = 'keyboard_arrow_up'
            } else {
                this.showAnswer = false
                this.icon = 'keyboard_arrow_down'
            }
        }
    },

}

</script>
<style scoped>

.faq-container{
    display: flex;
    width: 71.3vw;
    height: 9vh;

    align-items: center;
    justify-content: center;

    flex-direction: column;
    cursor: pointer;

}

.title-container{
    display: flex;
    align-items: center;
    width: 86%;
    height: 9vh;
    justify-content: space-between;
    padding-left: 7%;
    padding-right: 7%;
    background-color: #082777;
    border-radius: 8px;
    box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);

    z-index: 100;
}

.title-container p{
    margin-left: 7%;
    color: #ffff;
    font-weight: bold;
}

.title-container span{
    margin-right: 5%;
    color: #ffff;
    font-weight: bold;
}

.resposta-container{
    width: 98%;
    height: 200px;
    display: flex;
    background-color: #ffff;
    color: #082777;
    font-weight: bold;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    
}

.resposta-container p{
    padding-left: 7%;
}


    
</style>