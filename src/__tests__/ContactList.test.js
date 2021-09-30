import { mount, createLocalVue} from '@vue/test-utils';
import ContactList from '../components/ContactList.vue';
import RestResource from "../services/contact.service.js";
import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);

const restResourceService = new RestResource();
const store = new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    removeFromList(state, contact) {
      const removeIndex = state.contacts
        .map((c) => c.Phone)
        .indexOf(contact.Phone);
      state.contacts.splice(removeIndex, 1);
      restResourceService.removeFromList();
    },
    setContacts(state) {
      state.contacts = restResourceService.getList();
    }
  }
});

describe('Contact List test', () => {
  it('test contact list loaded', () => {
    const wrapper = mount(ContactList, { store, localVue });
    expect(wrapper.element.childElementCount).toBe(30);
  });

  it('test remove contact from list', async () => {
    const wrapper = mount(ContactList, { store, localVue });
    let contact = wrapper.find('.contact');
    const firstContactName = contact.find('.contact-name').text();
    const button = contact.find('.button');
    await button.trigger('click');
    contact = wrapper.find('.contact');
    expect(contact.find('.contact-name').text()!=firstContactName).toBe(true);
    expect(wrapper.element.childElementCount).toBe(29);
  });
});