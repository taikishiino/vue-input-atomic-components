<template>
  <div>
    <div
      v-for="(option, index) in options"
      :key="index"
    >
      <input
        type="radio"
        :id="`${name}-${index}`"
        :name="name"
        :value="option.value"
        @change="changeRadioValue"
        :disabled="disabled"
      />
      <label :for="`${name}-${index}`">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      required: true,
      validator: prop => typeof prop === "string" || prop === null
    },
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    /**
     * @return {String, String}
     */
    changeRadioValue: function(event) {
      const targetId = event.target.id;
      const newVal = event.target.value;
      this.$emit("input", newVal, targetId);
    }
  }
};
</script>
