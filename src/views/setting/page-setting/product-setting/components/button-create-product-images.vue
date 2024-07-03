<template>
    <b-col cols="6" class="d-flex justify-content-end">
         <b-button size="sm" variant="primary" class="text-nowrap" @click="setIsCreateProductSettingieModal(true)"> 
             شرح جديد
            <unicon class="ml-1" name="plus" width="18" height="18" fill="#fff" />
        </b-button>
        <createModal />
    </b-col>
</template>
<script>
import {
    BButton,
    BCol,
   
    
} from "bootstrap-vue";
import createModal from "./create-product-modal";
import { mapActions } from 'vuex';

export default {
    components: {
        BButton,
        BCol,
        createModal
    },
    methods: {
        ...mapActions(['setIsCreateProductSettingieModal'])
    }
}
</script>