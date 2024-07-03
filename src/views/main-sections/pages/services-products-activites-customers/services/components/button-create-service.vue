<template>
    <b-col cols="6" class="d-flex justify-content-end">
        <b-input-group class="input-group-merge" style="margin: auto; margin-left: 20px;">
            <b-form-input
                id="global-search"
                type="search"
                placeholder="ابحث عن خدمة محددة"
            />
            <b-input-group-append is-text>
                <unicon width="16" height="16" fill="gray" name="search" />
            </b-input-group-append>
        </b-input-group>
         <b-button size="sm" variant="primary" class="text-nowrap" @click="setIsCreateServiceModal(true)"> 
            خدمة جديدة
            <unicon class="ml-1" name="plus" width="18" height="18" fill="#fff" />
        </b-button>
        <createServiceModal />
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
import createServiceModal from "./create-service-modal";
import { mapActions } from 'vuex';

export default {
    components: {
        BButton,
        BCol,
        BInputGroup,
        BInputGroupAppend,
        BFormInput,

        createServiceModal
    },
    methods: {
        ...mapActions(['setIsCreateServiceModal'])
    }
}
</script>