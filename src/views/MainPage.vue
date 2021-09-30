<template>
  <div class="main-page">
    <div class="top-bar">
      <BaseInput
        class="search-input"
        @changeEvent="filterContacts"
        :placeholder="'Search By name'"
        :allowClear="true"
      ></BaseInput>
      <button
        class="button filled-button add-contact-button"
        @click="showAddContact = true"
      >
        Add Contact
      </button>
    </div>
    <div v-if="showAddContact" style="width:100%;">
      <AddContact @cancel="cancelAdd" />
    </div>
    <div>
      <ContactList :searchName="searchName" />
    </div>
  </div>
</template>

<script>
import ContactList from "../components/ContactList";
import AddContact from "../components/AddContact";
import BaseInput from "../components/BaseInput";
export default {
  name: "MainPage",
  components: {
    ContactList,
    AddContact,
    BaseInput,
  },
  data: function() {
    return {
      showAddContact: false,
      searchName: null,
    };
  },
  methods: {
    filterContacts: function(searchName) {
      this.searchName = searchName;
    },
    cancelAdd: function() {
      this.showAddContact = false;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  min-width: 769px;
  .search-input {
    max-width: 50%;
  }
}
.add-contact-button {
  font-size: 1.3rem;
  width: 15rem;
}
</style>
