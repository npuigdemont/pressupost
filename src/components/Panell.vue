<template>
    <div class="card p-4 m-4">
        <label for="pag"> Numero de pàgines: </label>
        <b-form-input class="d-inline-block text-center" type="number" name="pag" v-model.number="numPg" :state="comprovarPg"></b-form-input>
        <br>
        <label for="lang"> Numero de idiomes: </label>
        <b-form-input class="d-inline-block text-center" type="number" name="lang" v-model.number="numLang" :state="comprovarLang"></b-form-input>

<div>Total {{sum}}</div>
    </div>
</template>

<script>
export default {
   name: 'Panell',
   data(){
       return {
           numPg: 1,
           numLang: 1
       }
   },
   computed: {
       sum() {
           var suma;

           if(this.numPg == 1 && this.numLang == 1 ) suma = 0;
           else suma= this.numPg * this.numLang * 30;
           this.$emit('sumPgLang', suma, this.numPg, this.numLang); 
           return suma;
       },
       comprovarPg(){
           return this.numPg >= 1 ? true : false;
       },
       comprovarLang() {
           return this.numLang >= 1 ? true : false;
       }
   }
}
</script>