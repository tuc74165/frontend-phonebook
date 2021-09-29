import contacts from './contacts.json'

export default class RestResource {
    addToList(newContact) {
      console.log(JSON.stringify(newContact));
    }
  
    removeFromList() {

    }

    getList() {
      return contacts;
    }
}