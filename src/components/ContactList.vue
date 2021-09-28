<template>
  <div class="list-container">
    <div class="contact" v-for="contact in contacts" :key="contact.Phone">   
      <div class="avatar-placeholder">
        <svg class="icon icon-user-circle-o"><use xlink:href="#icon-user-circle-o"></use></svg>
      </div>
      <div class="contact-info">
        <div class="contact-name">
          <span class="first-name">{{ contact.FirstName }}</span>
          <span class="last-name">{{ contact.LastName }}</span>
        </div>
        <div class="contact-phone">
          <span>{{ contact.Area }}</span>
          <span>{{ contact.Phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestResource from "../services/contact.service.js";
export default {
  name: "ContactList",
  data() {
    return {
      contacts: null
    };
  },
  created: function() {
    const restResourceService = new RestResource();
    this.contacts = restResourceService.getList();
  } 
};
</script>

<style scoped lang="scss">
$colors: #5EBFE5, #00C59C, #C7C0F8, #E52D96, #FF6393, #F8BD9E,#77D9E2;
.list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@for $i from 1 through length($colors) {
    .contact:nth-of-type(#{length($colors)}n+#{$i}) .avatar-placeholder{
        fill: nth($colors, $i);
    }
}
.contact {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr 2fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 3px #999;
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
.contact-info {
  grid-row-start: 2;
  grid-column-start: 2;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  .contact-name{
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
