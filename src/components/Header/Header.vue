<template>
    <header class="header">
        <Navbar @set-search="$emit('setSearch', $event)" v-if="!isSearch" />
        <Searchbar @set-search="$emit('setSearch', $event)" @set-search-value="$emit('setSearchValue', $event)" v-else />
    </header>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue"
import Searchbar from '@/components/Searchbar/Searchbar.vue'

export default {
    props: {
        isSearch: {
            typeof: Boolean
        }
    },
    components: {
        Navbar,
        Searchbar,
    },
    data() {
        return {
        }
    }
}
</script>