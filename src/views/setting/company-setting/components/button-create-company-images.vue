<template>
  <b-col cols="6" class="d-flex justify-content-end">
    <b-button
      size="sm"
      variant="primary"
      class="text-nowrap"
      @click="setIsCreateImagesModal(true)"
    >
      صور جديدة
      <unicon class="ml-1" name="plus" width="18" height="18" fill="#fff" />
    </b-button>
    <createCompanyImagesModal />
  </b-col>
</template>
<script>
  import {
    BButton,
    BCol,
  } from "bootstrap-vue";
import { mapActions } from 'vuex';
import createCompanyImagesModal from "./create-company-images-modal";
  export default {
    components: {
      BButton,
      BCol,

      createCompanyImagesModal
    },
    methods: {
        ...mapActions(["setIsCreateImagesModal"])
    }
  };
</script>
