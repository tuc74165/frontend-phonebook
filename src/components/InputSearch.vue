<template>
  <div class="input-container">
      <input/>
      <svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  data() {
    return {
      phoneNumber: null,
      contacts: null,
    };
  },
  methods: {
    onCountryChange: function(args) {
      return args.isValid;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
