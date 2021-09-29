<template>
  <div class="list-container">
    <div class="contact" v-for="contact in filtered" :key="contact.Phone">
      <div class="avatar-placeholder">
        <svg class="icon icon-user-circle-o">
          <use xlink:href="#icon-user-circle-o"></use>
        </svg>
      </div>
      <div class="contact-info">
        <div class="contact-name">
          <span class="first-name">{{ contact.FirstName }}</span>
          <span class="last-name">{{ contact.LastName }}</span>
        </div>
        <div class="contact-phone">
          <span style="margin-right:2px;">({{ contact.Area }})</span>
          <span>{{ contact.Phone }}</span>
        </div>
      </div>
      <div class="action-col">
        <svg
          class="icon icon-trash-o button danger-button"
          @click="removeFromList(contact)"
        >
          <use xlink:href="#icon-trash-o"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import RestResource from "../services/contact.service.js";
export default {
  name: "ContactList",
  props: ["searchName"],
  data() {
    return {
      contacts: null,
      restResourceService: new RestResource(),
    };
  },
  created: function() {
    this.getWholeList();
  },
  computed: {
    filtered() {
      let searchName = this.searchName;
      if (!searchName) {
        return this.contacts;
      }
      searchName = searchName.toLowerCase();
      var filtered = this.contacts.filter(
        (c) =>
          c.FirstName.toLowerCase().includes(searchName) ||
          c.LastName.toLowerCase().includes(searchName)
      );
      return filtered;
    },
  },
  methods: {
    getWholeList: function() {
      this.contacts = this.restResourceService.getList();
    },
    addToList: function(newContact) {
      this.contacts.push(newContact);
      this.restResourceService.addToList(newContact);
    },
    removeFromList: function(contact) {
      const removeIndex = this.contacts
        .map((c) => c.Phone)
        .indexOf(contact.Phone);
      this.contacts.splice(removeIndex, 1);
    },
  },
};
</script>

<style scoped lang="scss">
$colors: #5ebfe5, #00c59c, #c7c0f8, #e52d96, #ff6393, #f8bd9e, #77d9e2;
.list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@for $i from 1 through length($colors) {
  .contact:nth-of-type(#{length($colors)}n + #{$i}) .avatar-placeholder {
    fill: nth($colors, $i);
  }
}
.contact {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #77d9e2;
  box-shadow: 0px 0px 3px #77d9e2;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ebf9fb;
  }
}
.avatar-placeholder {
  width: 80px;
  height: 80px;
  display: flex;
  grid-row-start: 2;
}
.action-col {
  grid-row-start: 2;
  grid-column-start: 3;

  .button {
    height: 35px;
    width: 35px;
    display: flex;
    fill: #fff;
    float: right;
  }
}
.contact-info {
  grid-row-start: 2;
  grid-column-start: 2;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  .contact-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: capitalize;
    .first-name {
      margin-right: 5px;
    }
  }
  .contact-phone {
    font-size: 18px;
  }
}
</style>
