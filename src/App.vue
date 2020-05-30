<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>Text</h2>
      <div>
        <InputText
          v-model="formData.text"
          placeholder="InputText"
          type="text"
        />
      </div>
      <h2>Textarea</h2>
      <div>
        <InputTextarea
          v-model="formData.textarea"
          placeholder="InputTextarea"
          :rows="5"
          :cols="50"
        />
      </div>
      <h2>Select</h2>
      <div>
        <InputSelect
          v-model="formData.select"
          name="InputSelect"
          :options="INPUT_SELECT_OPTION_DEFAULT"
        />
      </div>
      <h2>Checkbox</h2>
      <div>
        <InputCheckbox
          v-model="formData.checkbox"
          name="InputCheckbox"
          :options="INPUT_CHECKBOX_OPTION_DEFAULT"
        />
      </div>
      <h2>Radio</h2>
      <div>
        <InputRadio
          name="input_radio"
          v-model="formData.radio"
          :options="INPUT_RADIO_OPTION_DEFAULT"
        />
      </div>
      <h2>Radio Deletable</h2>
      <div>
        <InputRadioDeletable
          v-model="formData.radioDeletable"
          name="InputRadioDeletable"
          :options="INPUT_RADIO_OPTION_DEFAULT"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "./components/InputText.vue";
import InputTextarea from "./components/InputTextarea.vue";
import InputSelect from "./components/InputSelect.vue";
import InputCheckbox from "./components/InputCheckbox.vue";
import InputRadio from "./components/InputRadio.vue";
import InputRadioDeletable from "./components/InputRadioDeletable.vue";
import { INPUT_RADIO_OPTIONS, INPUT_SELECT_OPTIONS, INPUT_CHECKBOX_OPTIONS } from "./constants";

export default {
  components: {
    InputText,
    InputTextarea,
    InputSelect,
    InputCheckbox,
    InputRadio,
    InputRadioDeletable
  },
  data() {
    return {
      formData: {
        text: "",
        textarea: "",
        radio: null,
        radioDeletable: null,
        select: 0,
        checkbox: []
      }
    };
  },
  watch: {
    formData: {
      handler() {
        console.log("===> update formData\n", this.formData)
      },
      deep: true
    }
  },
  computed: {
    INPUT_RADIO_OPTION_DEFAULT: () => INPUT_RADIO_OPTIONS.DEFAULT,
    INPUT_SELECT_OPTION_DEFAULT: () => INPUT_SELECT_OPTIONS.DEFAULT,
    INPUT_CHECKBOX_OPTION_DEFAULT: () => INPUT_CHECKBOX_OPTIONS.DEFAULT
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
