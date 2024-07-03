<template>
  <b-form-checkbox-group>
    <b-card no-body class="mb-1">
      <b-card-header class="p-0 justify-content-start">
        <b-button
            size="sm"
            variant="flat-secondary"
            class="btn-icon rounded-circle"
            style="padding: .5rem 10px!important"
        >
            <unicon name="trash-alt" width="18"></unicon>
        </b-button>
        <small>حذف المحدد</small>
      </b-card-header>
    </b-card>
    
    <b-card no-body class="mb-1">
      <b-card-header class="px-1 pt-1 pb-0">
        <span>عنوان البريد</span>
        <span>اسم المرسل</span>
        <span>example@gmail.com</span>
        <span>{{ new Date().toLocaleDateString('en-GB') }}</span>
        <span>
          <b-button
              size="sm"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
              style="padding: .5rem 10px!important"
              to="/main/inbox/details/1"
          >
              <unicon name="ellipsis-v" width="18"></unicon>
          </b-button>
        </span>
      </b-card-header>
      <b-card-body class="p-1 d-flex align-items-center">
        <b-form-checkbox class="mr-25"></b-form-checkbox>
        <p class="m-0">{{lorem.slice(0, 200)}}{{lorem.length > 200 ? '...' : ''}}</p>
      </b-card-body>
    </b-card>
  </b-form-checkbox-group>
</template>
<script>
import {
  BButton,
  BCard,
  BCardBody,
  BCardHeader,
  BFormCheckboxGroup,
  BFormCheckbox,
} from "bootstrap-vue";
export default {
  data: () => ({
    lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eligendi quibusdam soluta perspiciatis quo adipisci necessitatibus eos repellat, architecto, unde fuga velit iure ab explicabo illo qui doloribus dignissimos fugit?'
  }),
  components: {
    BButton,
    BCard,
    BCardBody,
    BCardHeader,
    BFormCheckboxGroup,
    BFormCheckbox,
  }
}
</script>