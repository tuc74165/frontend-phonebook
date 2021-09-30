import { mount, createLocalVue } from "@vue/test-utils";
import AddContact from "../components/AddContact.vue";
import RestResource from "../services/contact.service.js";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

const restResourceService = new RestResource();
const store = new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    addToList(state, contact) {
      state.contacts.push(contact);
      restResourceService.addToList();
    },
  },
});

describe("Add Contact test", () => {
  it("test add contact to list", async () => {
    const wrapper = mount(AddContact, { store, localVue });
    await wrapper.setData({
      newContact: {
        FirstName: "Test",
        LastName: "User",
        Phone: "2152365943",
      },
    });
    await wrapper.vm.addToList();
    expect(store.state.contacts.length).toBe(1);
    expect(store.state.contacts[0]["Phone"]).toBe("2152365943");
  });
});
