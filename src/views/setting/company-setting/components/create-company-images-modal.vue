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
            <div class="d-flex justify-content-between align-items-center px-1 py-50 bg-light">
              <h5 class="m-0">
                <strong>تفاصيل الحساب</strong>
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
          <b-col cols="12">
            <BTextInputWithValidation
                rules="required|integer"
                label="رقم الهاتف "
                name="رقم الهاتف"
                placeholder="أدخل رقم الهاتف"
              />
              <BTextInputWithValidation
                rules="required|integer"
                label="رقم الجوال "
                name="رقم الجوال"               
                placeholder="أدخل رقم الجوال"
              />
              <BTextInputWithValidation
                rules="required|email"
                label="البريد الالكتروني "
                name="البريد الإلكتروني"        
                placeholder="أدخل اسم الموظف"
              />
              <BTextInputWithValidation
                rules="required|email"
                label="  الإيميل"
                name=" الإيميل"           
                placeholder="ادخل  الإيميل"
              />
              <BTextInputWithValidation
                rules="required"
                label=" الفيس البوك"
                name="الفيس البوك"           
                placeholder="ادخل الفيس البوك"
              />
               <BTextInputWithValidation
                rules="required|integer"
                label="رقم الهاتف "
                name="رقم الهاتف"
                placeholder="أدخل رقم الهاتف"
              />
              <BTextInputWithValidation
                rules="required|integer"
                label="رقم الجوال "
                name="رقم الجوال"               
                placeholder="أدخل رقم الجوال"
              />
          </b-col>
          <template #footer>
              <div class="d-flex p-1 border-top">
                <b-button variant="outline-primary" class="ml-auto mr-1">إالغاء</b-button>
                <b-button variant="primary">تم</b-button>
              </div>
          </template>
        </b-sidebar>
    </b-form>
        </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BTextInputWithValidation from "@core/components/inputs/BTextInputWithValidation";

  import {
    BSidebar,
    BButton,
    BCol,
    BForm
  } from "bootstrap-vue";
  export default {
    components: {
      BSidebar,
      BButton,
      BCol,
      BTextInputWithValidation,
      ValidationObserver,
      BForm
    },
    computed: {
      is: {
        get() {
          return this.$store.getters['isCreateImagesModal']
        },
        set(is) {
          this.$store.dispatch('setIsCreateImagesModal', is)
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
   
  },
  };
</script>
