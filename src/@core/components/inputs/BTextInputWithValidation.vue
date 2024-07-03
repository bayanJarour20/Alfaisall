<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules">
    <b-form-group slot-scope="{ valid, errors }" v-bind="$attrs">
      <b-form-input
        v-model="innerValue"
        v-bind="$attrs"
        :state="errors[0] ? false : valid ? true : null"
      >
      </b-form-input>
      <b-form-invalid-feedback id="inputLiveFeedback">
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, localize } from "vee-validate";
import { required, email,min,confirmed,regex,url,english_letters,credit,password,exactlyPositive,between,alpha,integer,digits,alphaDash,alphaNum,length,    no_spaces } from "@validations"
import { BFormGroup, BFormInvalidFeedback, BFormInput } from 'bootstrap-vue'
export default {
  components: {
    ValidationProvider,
    BFormGroup, BFormInvalidFeedback, BFormInput
  },
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: "",
    required,
    email,
    min,
    confirmed,
    regex,
    between,
    alpha,
    integer,
    digits,
    alphaDash,
    alphaNum,
    length,
    exactlyPositive,
    credit,
    password,
    url,
    english_letters,
     no_spaces

  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
    localize('ar')

  },
};
</script>
