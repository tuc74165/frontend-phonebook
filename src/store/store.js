import Vue from "vue";
import Vuex from "vuex";
import RestResource from "../services/contact.service.js";

Vue.use(Vuex);
const restResourceService = new RestResource();

export const store = new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    addToList(state, contact) {
      state.contacts.push(contact);
      restResourceService.addToList();
    },
    removeFromList(state, contact) {
      const removeIndex = state.contacts
        .map((c) => c.Phone)
        .indexOf(contact.Phone);
      state.contacts.splice(removeIndex, 1);
      restResourceService.removeFromList();
    },
    getContacts(state) {
      return state.contacts;
    },
    setContacts(state) {
      state.contacts = restResourceService.getList();
    },
  },
});
