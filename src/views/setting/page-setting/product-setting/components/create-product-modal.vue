
<template>
  <div>
    <ValidationObserver ref="observer">
         <b-form
          slot-scope="{ validate }"
          @submit.prevent="validate().then(onSubmit)"
          @reset="resetForm"
        >
    <b-sidebar bg-variant="white" v-model="is" backdrop shadow>
      <template #header>
        <div
          class="d-flex justify-content-between align-items-center px-1 py-50 bg-light"
        >
          <h5 class="m-0">
            <strong>تفاصيل النوع</strong>
          </h5>
          <b-button
            @click="is = false"
            size="sm"
            variant="flat-secondary"
            class="btn-icon rounded-circle"
          >
            <unicon name="times" width="16" height="16" />
          </b-button>
        </div>

      </template>
      <b-col>
            <BTextInputWithValidation
              rules="required"
              label="اسم النوع"
              name="اسم النوع"
              v-model="email"
              placeholder="أدخل اسم النوع"
            />
              <label >صورة</label>
              <fileDragDrop
                @inValidFile="unValidThumbImage"
                @uploaded="uploadThumbImage"
                id="employee-photo"
                height="100px"
                type="image"
                title="صورة جديدة"
              />
              <img
                v-if="!!photo64"
                :src="photo64"
                style="max-height: 320px; object-fit: fill;"
                class="w-100"
              />
      </b-col>
      <template #footer>
        <div class="d-flex p-1 border-top">
          <b-button variant="outline-primary" class="ml-auto mr-1"
            >إالغاء</b-button
          >
          <b-button variant="primary" type="submit">تم</b-button>
        </div>
      </template>
    </b-sidebar>
    </b-form>
        </ValidationObserver>
  </div>
</template>
<script>
import { BSidebar, BButton, BCol, BForm } from "bootstrap-vue";
import fileDragDrop from "@core/components/file-drag-drop/file-drag-drop.vue"

import { ValidationObserver } from "vee-validate";
import BTextInputWithValidation from "@core/components/inputs/BTextInputWithValidation";

export default {
  name: "BootstrapForm",
  components: {
    BSidebar,
    BButton,
    BCol,
    BForm,
    ValidationObserver,
    BTextInputWithValidation,
    fileDragDrop
  },
  data: () => ({
    email: "",
    password: "",
    confirmation: "",
    subject: "",
    choices: [],
    photo64:""
  }),
  
     computed: {
      is: {
        get() {
          return this.$store.getters['isCreateProductSettingieModal']
        },
        set(is) {
          this.$store.dispatch('setIsCreateProductSettingieModal', is)
        }
      }
    },
  watch: {
    subject(val) {
      console.log(val);
    },
  },
  methods: {
    onSubmit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
        uploadThumbImage(file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (() => {
            this.photo64 = reader.result
            console.log(this.photo64)
        }).bind(this)
    },
    unValidThumbImage() {
        console.log('un valid Thumb file');
    }
  },
};


</script>