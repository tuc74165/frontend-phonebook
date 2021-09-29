<template>
  <div class="input-container">
    <label :for="inputId" v-if="label">{{ label }}</label>
    <input
      :id="inputId"
      :placeholder="placeholder"
      v-model="inputModel"
      @input="changeEvent"
    />
    <button
      v-if="allowClear"
      class="button border-button clear-button"
      @click="
        inputModel = null;
        changeEvent();
      "
    >
      Clear
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: String,
    allowClear: Boolean,
    label: String,
    inputId: String,
  },
  data() {
    return {
      inputModel: null,
    };
  },
  methods: {
    changeEvent: function() {
      this.$emit("changeEvent", this.inputModel);
    },
  },
};
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  width: 100%;
  align-items: center;
  label {
    margin-right: 10px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  input {
    flex: 1 1;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;
    height: 48px;
    border: 1px solid #ccc;
  }
}
.clear-button {
  margin-left: 5px;
  font-size: 1.3rem;
}
</style>
