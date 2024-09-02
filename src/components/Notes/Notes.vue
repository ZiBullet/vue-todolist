<template>
    <div class="notes" :class="{active: viewList}">
        <NotesItem 
        v-for="note in notes"
        :note="note"
        :key="note.id"
        :viewList="viewList"
        @on-del-note="$emit('onDelNote', note.id)"
        @on-edit-modal-call="$emit('onEditModalCall', note.id)"
        />
    </div>
</template>

<script>
import NotesItem from '@/components/NotesItem/NotesItem.vue'

export default {
    components: {
        NotesItem
    },
    props: {
        notes: {
            typeof: Array
        },
        viewList: {
            typeof: Boolean
        }
    }
}
</script>