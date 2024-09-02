<template>
    <Transition name="modal">
        <div class="modal" @click="closeModal">
            <div class="modal__content" @click.stop>
                <h4 class="modal__content-title">
                    {{
                        modalType === "edit" ? "Изменить заметку"
                        : "Добавить заметку"
                    }}
                </h4>
                <div class="modal__content-inputs">
                    <label>
                        <input placeholder="Title" v-model="titleInput" type="text">
                        <span>Title</span>
                    </label>
                    <label>
                        <textarea placeholder="Content" v-model="contentInput"></textarea>
                        <span>Content</span>
                    </label>
                </div>
                <div class="modal__content-btns">
                    <button class="modal__content-btns-btn del" @click="closeModal">
                        Отмена
                    </button>
                    <button v-if="modalType === 'edit'" @click="addEditedNoteClick"  class="modal__content-btns-btn act">
                        Изменить
                    </button>
                    <button v-else @click="addNote" class="modal__content-btns-btn act">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import {v4} from 'uuid';

export default {
    props: {
        notes: {
            typeof: Array
        },
        modalType: {
            typeof: String
        },
        editedNote: {
            typeof: Object
        }
    },
    data() {
        return {
            titleInput: '',
            contentInput: '',
        }
    },
    methods: {
        closeModal() {
            this.$emit('onClose');
            this.titleInput = this.contentInput = '';
        },
        addNote() {
            if (this.titleInput.length < 3 || this.contentInput.length < 3) return;

            const note = {
                id: v4(),
                title: this.titleInput,
                text: this.contentInput,
                date: new Date().toLocaleDateString()
            }

            this.closeModal();
            this.$emit('onAddNote', note);
        },
        addEditedNoteClick() {
            if (this.titleInput.length < 3 || this.contentInput.length < 3) return;

            const newNote = {
                ...this.editedNote,
                title: this.titleInput,
                text: this.contentInput
            }

            this.closeModal()
            this.$emit('onAddEditedNote', newNote);
        }
    },

}
</script>