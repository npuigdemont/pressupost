<template>
  <div class="home">
    
    <div class="m-3">
      <h4>Què vols fer?</h4>
             <input type="checkbox" id="web" value=500 v-model.number="opcions" @click="showContent" class="m-1">
             <label for="web"> Una pàgina web (500 €)</label>   
             <div v-if="checked"><Panell @sumPgLang="sumPgLang" />Numero pàgines: {{numPg}} || Numero idiomes: {{numLang}}</div> 
             
              <br>
             <input type="checkbox" id="seo" value=300 v-model.number="opcions" class="m-1">
             <label for="seo"> Una consultoria SEO (300 €)</label>  
              <br>
             <input type="checkbox" id="ads" value=200 v-model.number="opcions" class="m-1">
             <label for="ads"> Una campanya de Google Ads (200 €)</label>    
      
       <div> Preu amb pagines: {{sumPgLang}}</div>
       <div>Preu:  <strong>{{ sum }}</strong> euros</div>
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
    data() {
      return {
        opcions: [],
        checked: false,
        
        } 
    },
    methods: {
      showContent() {
        this.checked = !this.checked;
      },
      sumPgLang(suma, numPg, numLang){
        this.sum= suma;
        this.numPg = numPg;
        this.numLang = numLang;
      }
    },
    computed: {
        sum() {
          var total = 0
          return this.opcions.reduce((a,b)=> (a+b),0)
        }
      }
}
    

</script>

<style scoped>

</style>