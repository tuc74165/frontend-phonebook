<template>
  <div class="main-page">
    <div class="add-contact-button">
      <button @click="addContact()">Add Contact</button>
    </div>
    <div v-if="showAddContact">
        <AddContact/>
    </div>
    <div>
        <ContactList/>
    </div>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import AddContact from "../components/AddContact";
export default {
  name: "MainPage",
  components: {
    ContactList,
    AddContact
  },
  data: function() {
      return {
        showAddContact: false
      }
  },
  methods: {
    addContact: function() {
      this.showAddContact = true;
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
