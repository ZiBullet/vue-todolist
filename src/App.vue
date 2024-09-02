<template>
  <div class="wrapper">
    <Header @set-search-value="searchValue = $event" :isSearch="isSearch" @set-search="handleChangeBars" />
    <Container>
      <Viewbar :onViewListClick="handleViewListClick" :notesLength="filterNotes.length" :searchValue="searchValue" :viewList="viewList" />
      <Notes @on-del-note="handleDelNote" :notes="filterNotes" :viewList="viewList"
        @on-edit-modal-call="handleEditModalCall" />
      <Modal @on-add-note="handleAddNote" @on-close="handleClose" v-show="isModalOpen" :modalType="modalType"
        :editedNote="editedNote" @on-add-edited-note="handleAddEditedNote" />
    </Container>
    <AddBtn :onModalOpen="handleModalOpen" v-if="!isModalOpen" />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Container from '@/Layouts/Container/Container.vue'
import Viewbar from "@/components/Viewbar/Viewbar.vue"
import Notes from '@/components/Notes/Notes.vue'
import Modal from '@/components/Modal/Modal.vue'
import AddBtn from '@/components/AddBtn/AddBtn.vue'

export default {

  components: {
    Header,
    Container,
    Viewbar,
    Notes,
    Modal,
    AddBtn
  },
  data() {
    return {
      viewList: false,
      notes: [],
      isModalOpen: false,
      modalType: 'edit', // edit || add
      editedNote: null,
      searchValue: '',
      isSearch: false,
      
    }
  },
  mounted() {
    this.getNotes()
  },
  computed: {
    filterNotes() {
      const currentNotes = this.searchValue ?
        this.notes.filter(note => note.title.toLowerCase().includes(this.searchValue.toLowerCase()))
        : this.notes

      return currentNotes
    }
  },
  methods: {
    handleViewListClick() {
      this.viewList = !this.viewList;
    },
    handleModalOpen(type) {
      this.isModalOpen = true;
      this.modalType = type;
    },
    handleClose() {
      this.isModalOpen = false;
    },
    handleAddNote(note) {
      this.notes.unshift(note);
    },
    getNotes() {
      let localNotes = localStorage.notes;
      if (localNotes) this.notes = JSON.parse(localNotes)
    },
    handleDelNote(id) {
      let index = this.notes.findIndex(note => note.id == id);
      this.notes.splice(index, 1);
    },
    handleEditModalCall(id) {
      this.handleModalOpen('edit');
      const currentNote = this.notes.find(note => note.id === id)
      this.editedNote = currentNote;
    },
    handleAddEditedNote(editedNote) {
      this.notes.forEach(note => {
        if (editedNote.id !== note.id) return;

        note.title = editedNote.title;
        note.text = editedNote.text;
        note.date = editedNote.date
      })
    },
    handleChangeBars(val) {
      console.log(val);

      this.isSearch = val;
    }
  },

  watch: {
    notes: {
      handler() {
        localStorage.notes = JSON.stringify(this.notes)
      },
      deep: true,
    }
  }
}
</script>
