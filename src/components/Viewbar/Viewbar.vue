<template viewList>
    <div class="viewbar">
        <h2 class="viewbar__title">
            {{  
                notesLength && !searchValue.length ? $t("allNotes") 
                : searchValue.length ? $t("search") : $t("noNotes")
            }}
        </h2>
        <button class="viewbar__btn" @click="onViewListClick">
            <img v-show="viewList" src="@/assets/icons/grid.svg" alt="grid">
            <img v-show="!viewList" src="@/assets/icons/list.svg" alt="list">
            <span>{{ viewList ? $t("grid") : $t("list") }}</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        viewList: {
            typeof: Boolean
        },
        onViewListClick: {
            typeof: Function
        },
        notesLength: {
            typeof: Number
        },
        searchValue: {
            typeof: String
        }
    },
    methods: {

    },
    data() {
        return {
        }
    },
}
</script>