<script setup lang="ts">
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

    defineProps(['products'])
</script>
<template>
    <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="type" header="Tipo de movimiento"></Column>
        <Column field="date" header="Fecha"></Column>
        <Column field="value" header="Valor"></Column>
    </DataTable>
</template>