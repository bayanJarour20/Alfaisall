
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
            <strong>إضافة نشاط</strong>
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
            rules="required"
            label="الاسم"
            name="الاسم"
            v-model="name"
            placeholder="أدخل الاسم"
          />
            <BTextInputWithValidation
            rules="required"
            label="الكنية"
            name="الكنية"
            v-model="lastName"
            placeholder="أدخل الكنية"
          />
          <BTextInputWithValidation
            rules="required|email"
            label="البريد الالكتروني"
            name="البريد الالكتروني"
            v-model="email"
            placeholder="أدخل البريد الالكتروني"
          />
            <BTextInputWithValidation
            rules="required|min:4"
            label="كلمة السر"
            name="كلمة السر"
            v-model="password"
            placeholder="أدخل كلمة السر"
          />
          <BTextInputWithValidation
            rules="required|digits:10"
            label="رقم الجوال"
            name="رقم الجوال"
            v-model="number"
            placeholder="أدخل رقم الجوال"
          />
            <BTextInputWithValidation
            rules="required"
            label="المحافظة "
            name="المحافظة "
            v-model="city"
            placeholder="أدخل المحافظة "
          />
          <BTextInputWithValidation
            rules="required"
            label="العنوان "
            name="العنوان "
            v-model="title"
            placeholder="أدخل العنوان "
          />
            <BTextInputWithValidation
            rules="required"
            label="الصفة "
            name="الصفة "
            v-model="status"
            placeholder="أدخل الصفة "
          />
      </b-col>
      <template #footer>
          <div class="d-flex p-1 border-top">
            <b-button variant="outline-primary" class="ml-auto mr-1">إالغاء</b-button>
            <b-button variant="primary" type="submit">تم</b-button>
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
    BForm,   
  } from "bootstrap-vue";
  export default {
    components: {
      BSidebar,
      BButton,
      BCol,
      BTextInputWithValidation,
      ValidationObserver,
      BForm,
    },
     data: () => ({
    name: "",
    number:"",
    status:"",
    lastName:"",
    email:"",
    password:"",
    ciyy:"",
    title:""

  }),
  computed: {
      is: {
        get() {
          return this.$store.getters['isCreateAccountModal']
        },
        set(is) {
          this.$store.dispatch('setIsCreateAccountModal', is)
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
