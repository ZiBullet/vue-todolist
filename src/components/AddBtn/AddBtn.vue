<template>
    <button @click="onModalOpen('add')" class="add-btn">
        <img src="@/assets/icons/edit.svg" alt="add">
    </button>
</template>

<script>
    export default {
        props: {
            onModalOpen: {
                typeof: Function
            },
        },
    }
</script>