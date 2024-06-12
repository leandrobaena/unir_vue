<script setup lang="ts">
    import Button from 'primevue/button';
</script>

<template>
    <div class="row">
        <div class="button">
            <Button label="Ingresar ingreso" />
        </div>
        <div class="button">
            <Button label="Ingresar gasto" />
        </div>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
    }

    .button {
        flex-direction: column;
        margin: 10px;
    }
</style>
