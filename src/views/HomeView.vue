<template>
  <div class="home">
    
    <div class="m-3 col-md-6">
      <h4>Què vols fer?</h4>
             <input type="checkbox" id="web" value=500 v-model.number="opcions" @click="showContent" class="m-1">
             <label for="web"> Una pàgina web (500 €)</label>   
             <div v-if="checked"><Panell @cliked="onClickChild" />
             Numero pàgines: {{numPg}} || Numero idiomes: {{numLang}} || Total web: {{suma + 500}} </div> 
             
              <br>
             <input type="checkbox" id="seo" value=300 v-model.number="opcions" class="m-1">
             <label for="seo"> Una consultoria SEO (300 €)</label>  
              <br>
             <input type="checkbox" id="ads" value=200 v-model.number="opcions" class="m-1">
             <label for="ads"> Una campanya de Google Ads (200 €)</label>    
      
      <br>
       <div><strong> Preu:  {{ sum }} euros</strong> </div>
      <br>
         <b-form-input class="col-md-6 m-1" type="text" name="nomprs" v-model="pressupost" placeholder="Nom del pressupost"></b-form-input>
         <b-form-input class="col-md-6 m-1" type="text" name="client" v-model="client" placeholder="Nom del client"></b-form-input> 
         <b-button @click="save" class="m-2">Guardar</b-button>
<br>
       <router-link to="/" class="btn btn-success btn-block">
      Tornar</router-link>
    </div>
<div class="m-3 col-md-6">


</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Panell from "../components/Panell.vue";

export default {
  name: 'HomeView',
  components: {
    Panell,
    },
    props: ['pressupost', 'client'],
    data() {
      return {
        opcions: [],
        checked: false,
        
        mutablePressupost: this.pressupost,
        mutableClient: this.client,
        budget: []
        } 
    },
    methods: {
      showContent() {
        this.checked = !this.checked;
      },
      onClickChild(){
        this.suma= suma;
        this.numPg = numPg;
        this.numLang = numLang;
      },
     /* sumPgLang(suma){
        this.suma= suma;
      },
       sumP(){
        this.numPg= numPg;
      },
       sumL(){
        this.numLang= numLang;
      },*/
      save(){
        if(this.pressupost =='' || this.client ==''){
        alert("No pots deixar camps buits")
      } this.budget.push ({
              pressupost: this.pressupost,
              client: this.client,
              pag: this.numPg,
              lang: this.numLang,
              total: this.sum,
              data: Date.now()
      });
        const parsed = JSON.stringify(this.budge);
        localStorage.setItem('budget', parsed);
      
      }
      
    },
    computed: {
        sum() {
          
          if (this.checked)
          
          return this.suma + this.opcions.reduce((a,b)=> (a+b),0);
          else return this.opcions.reduce((a,b)=> (a+b),0);
        }
    },
    
   

    
}
    

</script>

<style scoped>

</style>