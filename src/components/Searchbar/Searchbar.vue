<template>
    <nav class="header__search">
        <button class="header__search-back" @click="$emit('setSearch', false), searchInput = ''">
            <img src="@/assets/icons/back.svg" alt="back icon">
        </button>
        <input 
        type="text" 
        :placeholder="$t('search') + '...'"
        v-model="searchInput" 
        class="header__search-field"
        autofocus
        >
        <button class="header__search-clear" @click="searchInput = ''">
            <img src="@/assets/icons/clear.svg" alt="clear icon">
        </button>
    </nav>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            searchInput: ''
        }
    },
    watch: {
        searchInput(newVal) {
            this.$emit('setSearchValue', newVal)
        }
    }
}
</script>