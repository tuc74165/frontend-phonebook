<template>
  <div class="add-contact-container">
    <div class="name-item">
      <BaseInput
        :placeholder="'Enter First Name'"
        @changeEvent="updateFirstName"
        :label="'First Name'"
        :inputId="'FirstName'"
      />
    </div>
    <div class="name-item">
      <BaseInput
        :placeholder="'Enter Last Name'"
        @changeEvent="updateLastName"
        :label="'Last Name'"
        :inputId="'LastName'"
      />
    </div>
    <VuePhoneNumberInput
      v-model="phoneNumber"
      color="#f53251"
      valid-color="#00afbf"
      size="lg"
      :default-country-code="'US'"
      :preferred-countries="['US', 'CA']"
      :countries-height="70"
      :show-code-on-list="true"
      :no-example="true"
      @update="onCountryChange"
    />
    <span class="info" :class="{ invalid: invalid }"
      >* All fields are required.</span
    >
    <div class="action-group">
      <button class="button danger-button" @click="cancel()">Cancel</button>
      <button
        class="button filled-button"
        @click="addToList()"
        id="addContactButton"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import BaseInput from "../components/BaseInput";
export default {
  name: "AddContact",
  components: {
    VuePhoneNumberInput,
    BaseInput,
  },
  data() {
    return {
      phoneNumber: null,
      newContact: {},
      invalid: false,
    };
  },
  methods: {
    onCountryChange: function(args) {
      if (args.isValid) {
        this.newContact = {
          ...this.newContact,
          Phone: args.phoneNumber,
          Area: args.countryCallingCode,
        };
      }
    },
    updateFirstName: function(name) {
      this.newContact.FirstName = name;
    },
    updateLastName: function(name) {
      this.newContact.LastName = name;
    },
    //Validate before add new contact to make sure all required fields are filled.
    validate: function() {
      this.invalid =
        !this.newContact ||
        Object.keys(this.newContact).length == 0 ||
        !this.newContact.FirstName ||
        !this.newContact.LastName ||
        !this.newContact.Phone;
    },
    addToList: function() {
      this.validate();
      if (!this.invalid) {
        this.$store.commit("addToList", this.newContact);
      }
    },
    cancel: function() {
      this.newContact = null;
      this.$emit("cancel");
    },
  },
};
</script>
<style scoped lang="scss">
.add-contact-container {
  display: flex;
  flex-direction: column;
  margin: 40px;
  position: relative;
  background: #77d9e2;
  border-radius: 5px;
  padding: 30px;
  min-width: 400px;
}
.name-item {
  margin-bottom: 10px;
  width: 100%;
}
.info {
  margin-top: 10px;
  font-size: 1.3rem;
  text-align: left;
  color: #77d9e2;
  &.invalid {
    color: #f53251;
  }
}
.action-group {
  text-align: right;
  width: 100%;
}
.button {
  font-size: 1.3rem;
  margin: 0.2rem;
  width: 10rem;
}
.vue-phone-number-input::v-deep {
  width: 100%;
  outline: none !important;
  input {
    box-shadow: none !important;
  }
  .country-selector__label {
    margin-bottom: 0.2rem;
  }
  .iti-flag {
    transform: scale(1.3);
  }
  .country-selector__list {
    max-width: none;
    width: 400px;
  }
  .country-selector__list__item {
    &:not(last-of-type) {
      border-bottom: 1px solid #ddd;
    }
    &.selected {
      background-color: #77d9e2 !important;
    }
    &:hover {
      background-color: #ebf9fb;
    }
    font-size: 1.2rem;
    .dots-text {
      margin-left: 1rem;
    }
  }
  input {
    height: 60px;
  }
}
</style>
