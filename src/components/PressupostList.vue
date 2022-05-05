<template>
    <div>
        <h4>Pressupost:</h4>
        
        <h6>Budget: {{budget}}</h6>
    </div>
</template>

<script>
export default {
    name: 'PressupostList',
    props: ['budget']
}
</script>