<template>
    <div class="m-4">
        <h4>Pressupostos:</h4>
        <div v-if="budget.length">
        <div>{{budget}}</div> 
        <ul v-for="(pres, index) in budget" :key="index">
            <li>Client: {{pres.client}}</li>
            <li>Pressupost: {{pres.pressupost}}</li>
          <!--  <li v-if="pres.opcions[0] == 500">Pàgina web || Quantitat de pàgines: {{pres.pag}} || Quantitat d'idiomes: {{pres.lang}}</li>
            <li v-if="pres.opcions[0] == 300 || pres.opcions[1] == 300">Consultoria SEO</li>
            <li v-if="pres.opcions[0] == 200 || pres.opcions[1] == 200 || pres.opcions[3] == 200">Campanya de Google Adds</li>-->
            
            <li>Total: {{pres.total}}</li>
            <li>Data: {{pres.data}}</li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PressupostList',
    props: ['budget'],

}
</script>

<style scoped>
ul {
    border: 2px solid black;
}
li {
    list-style: none;
    text-decoration: none;
    
}
</style>