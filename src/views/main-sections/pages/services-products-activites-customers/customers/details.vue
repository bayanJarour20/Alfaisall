<template>
<div>
  <h1>id: {{id}} ___ lang: {{lang}}</h1>
  <b-button-group class="mb-1">
    <b-button
      :variant="!+lang ? 'primary' : 'outline-primary'"
      :to="'/main/customers/details/' + id + '/0'"
    >عربي</b-button>
    <b-button
      :to="'/main/customers/details/' + id + '/1'"
      :variant="!+lang ? 'outline-primary' : 'primary'"
    >English</b-button>
  </b-button-group>
</div>
</template>
<script>
import {
  BButtonGroup,
  BButton,
} from "bootstrap-vue";
export default {
  props:{
    lang: String,
    id: String
  },
  
  components: {
    BButtonGroup,
    BButton,
  }
}
</script>