<template>
    <div class="panell m-2 p-1">
    <div class="row p-2 m-2" >
        <label  class="col text-center align-center m-2" for="pag"> Numero de pàgines: </label>
         <b-button class="col-md-1 bg-warning pill" @click="reduirPg">-</b-button>
        <b-form-input class="col ms-2 text-center" type="number" name="pag" v-model.number="numPg" :state="comprovarPg" :v-on="onClick" min="1"></b-form-input> 
            <b-button class="col-md-1 bg-success pill ms-2" @click="numPg++">+</b-button>
            <b-icon icon="info-circle-fill" class="col-md-1 mt-2 cursor" scale="2" v-b-modal.modal> i </b-icon>
                <b-modal id="modal" centered hide-header hide-footer size="lg">
                 <p class="m-4">En aquest component ha d'indicar el número de pàgines que tindrà el seu lloc web</p>
                </b-modal>
                </div>
            <div class="row p-2 m-2" >
            
        <label class="col text-center align-center m-2" for="lang"> Numero de idiomes: </label>
        <b-button class="col-md-1 bg-warning pill" @click="reduirLang">-</b-button>
        <b-form-input class="col ms-2 text-center" type="number" name="lang" v-model.number="numLang" :state="comprovarLang" :v-on="onClick" min="1"></b-form-input>
            <b-button class="col-md-1 bg-success pill ms-2" @click="numLang++">+</b-button>
            <b-icon icon="info-circle-fill" class="col-md-1 mt-2 cursor" scale="2" v-b-modal.modal-1> i </b-icon>
        <b-modal id="modal-1" centered hide-header hide-footer size="lg">
            <p class="m-4">En aquest component ha d'indicar la quantitat d'idiomes que tindrà el seu lloc web</p>
        </b-modal>
    </div>
        <div>Pàgines {{numPg}} || Idiomes {{numLang}} || Total web {{suma + 500}}</div>
    
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
   mounted() {
       /*this.$emit('mes', this.suma);
       this.$emit('pag', this.numPg);
       this.$emit('lang', this.numLang);*/
   },
   
   methods: {
       onClick() {
           this.$emit('cliked', this.numPg, this.numLang, suma)
       },
       reduirPg() {
           if (this.numPg == 1) return 1;
           else this.numPg--;
       },
       reduirLang() {
           if (this.numLang == 1) return 1;
           else this.numLang--;
       }
   },
      watch: {
       
       numPg(){
           console.log(this.numPg);
           this.$emit('sumP', this.numPg);
       },
       numLang(){
           console.log(this.numLang);
           this.$emit('sumL', this.numLang);
        }
       
   },
   computed: {
       suma() {
           var suma;

           if(this.numPg == 1 && this.numLang == 1 ) suma = 0;
           else suma= this.numPg * this.numLang * 30;
           this.$emit('sumPgLang', suma); 
           this.$emit('pag', this.numPg);
            this.$emit('lang', this.numLang);
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

<style scoped>
.panell {
    border: 2px solid black;
}
</style>