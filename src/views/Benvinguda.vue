<template>
    <div>
        <h1>Benvingut!!</h1>
        <h4>Aquesta és una pàgina per generar pressupostos</h4>
        <h6>Pots personalitzar la teva pàgina web, per fer-ho has de triar quantes pàgines necessites i en quants idiomes</h6>
        <h5>----</h5>
    <router-link to="/home" class="btn btn-success btn-block">
      Entra</router-link>
    </div>
</template>

<script>
export default {
    setup() {
        name: 'Benvinguda'
    },
}
</script>