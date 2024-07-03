<template>
  <ValidationProvider :name="$attrs.name" :rules="rules">
    <b-form-group slot-scope="{ valid, errors }">
      <b-form-checkbox-group :state="errors[0] ? false : (valid ? true : null)" v-model="innerValue">
        <slot />
      </b-form-checkbox-group>
      <b-form-invalid-feedback id="inputLiveFeedback">
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate";
import {BFormGroup, BFormInvalidFeedback,BFormCheckboxGroup} from 'bootstrap-vue'

export default {
  components: {
    ValidationProvider,
    BFormGroup,
    BFormInvalidFeedback,
    BFormCheckboxGroup
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal;
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>
