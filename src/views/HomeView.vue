<template>
  <div class="home">
    <b-row class="m-3">
    <b-col cols="12" md="6">
      <h4>Què vols fer?</h4>
             <input type="checkbox" id="web" value=500 v-model.number="opcions" @click="showContent" class="m-1">
             <label for="web"> Una pàgina web (500 €)</label>   
             <div v-if="checked"><Panell @mes="suma = $event" @pag="numPg = $event" @lang="numLang = $event" @sumPgLang="suma = $event" />
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
    </b-col>


<b-col cols="12" md="6">
  <b-button @click="abc(budget)" class="m-2">Ordenar per nom</b-button>
  <b-button @click="dia(budget)" class="m-2">Ordenar per data</b-button>
  <b-button @click="reinicia(budget)" class="m-2">Reiniciar</b-button>
<PressupostList :pressupost="pressupost" :opcions="opcions" :client="client" :budget="budget"/>

</b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Panell from "../components/Panell.vue";
import PressupostList from "../components/PressupostList.vue";

export default {
  name: 'HomeView',
  components: {
    Panell,
    PressupostList,
},
    
    data() {
      return {
        opcions: [],
        checked: false,
        pressupost: '',
        client: '',
        budget: [],
        numPg: Number,
        numLang: Number,
        suma: Number,
        sumPgLang: Number
        } 
    },
    methods: {
      //mostra o amaga la configuració de la web
      showContent() {
        this.checked = !this.checked;
      },
  
      //guarda a budget el pressupost amb les dades
      save(){
        if(this.pressupost =='' || this.client ==''){
        alert("No pots deixar camps buits")
      } this.budget.push ({
              pressupost: this.pressupost,
              client: this.client,
              pag: this.numPg,
              lang: this.numLang,
              opcions: this.opcions,
              total: this.sum,
              data: new Date
      });
        const parsed = JSON.stringify(this.budge);
        localStorage.setItem('budget', parsed);
      
      //reestablim a zero els paràmetres al guardar
      this.client='';
      this.pressupost='';
      this.opcions=[];
      this.checked= false;

      },
      abc(budget){
        //ordenem els pressupostos per nom

         this.budget.sort((a,b)=> a-b);
        
      },
      dia(budget){
        return this.budget.Date.sort();
      },
      reinicia(budget){
        return this.budget;
      }
      
    },
    computed: {
      //calcula el total del pressupost
        sum() {
          
          if (this.checked){
          
          return this.suma + this.opcions.reduce((a,b)=> (a+b),0);
          }else return this.opcions.reduce((a,b)=> (a+b),0);
        }
    },
    
   

    
}
    

</script>

<style scoped>

</style>