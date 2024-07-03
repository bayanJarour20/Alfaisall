<template>
  <b-card no-body class="overflow-hidden">
    <b-card-header class="p-1">
      <h5 class="m-0">
        <strong>cxvcvc</strong>
      </h5>
    </b-card-header>
    <b-card-body class="px-1 pb-1">
      <b-img
        height="140"
        rounded
        style="object-fit: cover;"
        class="w-100"
        src="sdx"
        alt="Image 1"
      ></b-img>
      <p class="m-0 pt-50">
          khkjhkjh jkjh jhkjh  ssad dd ddddddddddddddd ddffgwuieort;ykljhgfdscxvbvnm
      </p>
    </b-card-body>
    <b-card-footer class="p-0">
      <b-button
        variant="primary"
        block
        squared
        @click="setIsCreateProductSettingieModal(true)"
      >عرض التفاصيل</b-button>
    </b-card-footer>
  </b-card>
</template>
<script>
import { mapActions } from 'vuex';
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BImg,
} from "bootstrap-vue";
export default {
  components: {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BImg,
  },
  methods: {
        ...mapActions(["setIsCreateProductSettingieModal"])
    }
}
</script>