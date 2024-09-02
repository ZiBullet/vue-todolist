<template>
    <nav class="header__nav">
        <button class="header__nav-lang" @click="switchLang">{{ $i18n.locale }}</button>
        <h1 class="header__nav-title">{{ $t('notes') }}</h1>
        <button  class="header__nav-search" @click="$emit('setSearch', true)">
            <img src="@/assets/icons/search.svg" alt="search icon">
        </button>
    </nav>
</template>

<script>
export default {
    methods: {
        switchLang() { 
            this.$i18n.locale = this.$i18n.locale === 'ru' ? 'uz' : 'ru';
            localStorage.lang = this.$i18n.locale;
        }
    },
}
</script>