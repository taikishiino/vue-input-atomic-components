<template>
  <div>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
          type="checkbox"
          :name="name"
          :value="option.value"
          @change="updateValue"
          :disabled="disabled"
        />
        {{ option.label }}
      </label>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: []
    };
  },
  methods: {
    updateValue: function(event) {
      if (event.target.checked) {
        this.values.push(event.target.value);
      } else {
        this.values = this.values.filter(v => v !== event.target.value);
      }
      this.$emit("input", this.values);
    }
  }
};
</script>