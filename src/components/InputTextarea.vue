<template>
  <textarea
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
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
    placeholder: {
      type: String,
      required: false
    },
    rows: {
      type: Number,
      required: false
    },
    cols: {
      type: Number,
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
