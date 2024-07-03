<template>
    <b-col cols="6" class="d-flex justify-content-end">
        <b-input-group class="input-group-merge" style="margin: auto; margin-left: 20px;">
            <b-form-input
                id="global-search"
                type="search"
                placeholder="ابحث عن بريد محددة"
            />
            <b-input-group-append is-text>
                <unicon width="16" height="16" fill="gray" name="search" />
            </b-input-group-append>
        </b-input-group>
         <b-button
            size="sm"
            variant="primary"
            class="text-nowrap"
            to="/main/inbox/details/0"
        > 
            بريد جديدة
            <unicon class="ml-1" name="plus" width="18" height="18" fill="#fff" />
        </b-button>
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

export default {
    components: {
        BButton,
        BCol,
        BInputGroup,
        BInputGroupAppend,
        BFormInput
    }
}
</script>