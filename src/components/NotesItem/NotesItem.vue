<template>
    <div class="notes__note">
        <div class="notes__note-top" :class="{active: viewList}">
            <h4 class="notes__note-top-title">
                {{ note.title }}
            </h4>
            <span class="notes__note-top-date">
                {{ note.date }}
            </span>
        </div>
        <p class="notes__note-text">
            {{ note.text }}
        </p>
        <div class="notes__note-btns">
            <button class="notes__note-btns-btn edit" @click="$emit('onEditModalCall', note.id)">
                <img src="@/assets/icons/edit.svg" alt="edit">
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button class="notes__note-btns-btn del" @click="$emit('onDelNote', note.id)">
                <img src="@/assets/icons/trash.svg" alt="del">
                <span>Удалить</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            typeof: Object
        },
        viewList: {
            typeof: Boolean
        }
    },
}
</script>