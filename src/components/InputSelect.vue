<template>
  <div>
    <select :name="name" @change="updateValue" :disabled="disabled">
      <template v-for="(option, index) in options">
        <option :value="option.value" :key="index">
          {{ option.label }}
        </option>
      </template>
    </select>
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
      validator: prop => typeof prop === "string" || typeof prop === "number"
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
     * @return {String}
     */
    updateValue: function(event) {
      this.$emit("input", event.target.value);
    }
  },
  mounted() {
    this.$emit("input", this.options[0].value);
  }
};
</script>