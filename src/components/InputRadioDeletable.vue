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
        :checked="value == option.value"
        :value="option.value"
        @click="changeRadioValue"
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
      let newVal = event.target.value;
      // v-model.numberを考慮して、厳密等価演算子「===」ではなく、等価演算子「==」にしている
      if (newVal == this.value) {
        newVal = null;
      }
      this.$emit("input", newVal, targetId);
    }
  }
};
</script>
