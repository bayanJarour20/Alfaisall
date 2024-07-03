<template>
  <ValidationProvider  ref="validator" :vid="vid" :name="$attrs.name" :rules="rules">
    <b-form-group  id="exampleInputGroup3"
      slot-scope="{ valid, errors }"
      v-bind="$attrs"
    >
      <b-form-datepicker id="exampleInput3"
        v-bind="$attrs"
        :state="valid"
        v-model="innerValue"
      >
      </b-form-datepicker>
        <b-form-invalid-feedback id="inputLiveFeedback">
          {{ errors[0] }}
        </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate";
import { required, email,min,confirmed, exactlyPositive,
    credit,
    password,
    url,
    english_letters,
     no_spaces,regex,between,alpha,integer,digits,alphaDash,alphaNum,length } from "@validations"

import {BFormGroup,BFormDatepicker,BFormInvalidFeedback}from 'bootstrap-vue';

export default {
  components: {
    ValidationProvider,
    BFormGroup,
    BFormDatepicker,
    BFormInvalidFeedback
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
    innerValue: '',
    required, email,min,confirmed,regex,between,alpha,integer,digits,alphaDash,alphaNum,length,
     exactlyPositive,
    credit,
    password,
    url,
    english_letters,
     no_spaces
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      console.log(newVal);
      console.log(this.$refs.validator);
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