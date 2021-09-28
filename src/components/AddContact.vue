<template>
  <div class="add-contact-container">
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
  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import RestResource from "../services/contact.service.js";
export default {
  name: "AddContact",
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      phoneNumber: null,
      contacts: null
    };
  },
  created: function() {
    const restResourceService = new RestResource();
    this.contacts = restResourceService.getList();
  },
  methods: {
    onCountryChange: function(args) {
      return args.isValid;
    }
  },
};
</script>

<style scoped lang="scss">
.add-contact-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.vue-phone-number-input::v-deep {
  min-width: 50%;
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
