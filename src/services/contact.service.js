import contacts from './contacts.json'

export default class RestResource {
    addToList(newContact) {
      console.log("Add contact: " + JSON.stringify(newContact));
      //Make call to backend to add new contact;
    }
  
    removeFromList(contact) {
      console.log("Remove contact: " + JSON.stringify(contact));
      //Make call to backend to remove new contact;
    }

    getList() {
      //make call to backend to get list of contacts;
      return contacts;
    }
}