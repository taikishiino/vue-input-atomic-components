<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="changeValue"
    :disabled="disabled"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    changeValue: function(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
