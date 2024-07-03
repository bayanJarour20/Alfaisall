<template>
    <b-col cols="6" class="d-flex justify-content-end">
        <b-input-group class="input-group-merge" style="margin: auto; margin-left: 20px;">
            <b-form-input
                id="global-search"
                type="search"
                placeholder="ابحث عن تصنيف محددة"
            />
            <b-input-group-append is-text>
                <unicon width="16" height="16" fill="gray" name="search" />
            </b-input-group-append>
        </b-input-group>
         <b-button size="sm" variant="primary" class="text-nowrap" @click="setIsCreateCategorieModal(true)"> 
            تصنيف جديد
            <unicon class="ml-1" name="plus" width="18" height="18" fill="#fff" />
        </b-button>
        <createCategorieModal />
    </b-col>
</template>
<script>
import {
    BButton,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    BFormInput
} from "bootstrap-vue";
import createCategorieModal from "./create-categorie-modal.vue";
import { mapActions } from 'vuex';
export default {
    components: {
        BButton,
        BCol,
        BInputGroup,
        BInputGroupAppend,
        BFormInput,

        createCategorieModal
    },
    methods: {
        ...mapActions(["setIsCreateCategorieModal"])
    }
}
</script>