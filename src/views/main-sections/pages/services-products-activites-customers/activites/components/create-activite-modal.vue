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
            label="اسم النشاط"
            name="اسم النشاط"
            v-model="email"
            placeholder="أدخل اسم النشاط"
          />
          <BDatepickerWithValidation 
            rules="required"
            label="تاريخ الميلاد "
            name="تاريخ الميلاد"
            v-model="date"
            placeholder="أدخل تاريخ الميلاد"
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
import fileDragDrop from "@core/components/file-drag-drop/file-drag-drop.vue"
import { ValidationObserver } from "vee-validate";
import BTextInputWithValidation from "@core/components/inputs/BTextInputWithValidation";
import BDatepickerWithValidation from "@core/components/inputs/BDatepickerWithValidation";
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
      fileDragDrop,
      BDatepickerWithValidation
    },
     data: () => ({
    email: "",
    password: "",
    confirmation: "",
    subject: "",
    choices: [],
    value: '',
    locale: 'en-US',
    showDecadeNav: false,
    hideHeader: false,
    photo64:" ",
    date:"",
     weekday: 0,
     labels: {
      'ar-EG': {
        labelPrevDecade: 'العقد السابق',
        labelPrevYear: 'العام السابق',
        labelPrevMonth: 'الشهر السابق',
        labelCurrentMonth: 'الشهر الحالي',
        labelNextMonth: 'الشهر المقبل',
        labelNextYear: 'العام المقبل',
        labelNextDecade: 'العقد القادم',
        labelToday: 'اليوم',
        labelSelected: 'التاريخ المحدد',
        labelNoDateSelected: 'لم يتم اختيار تاريخ',
        labelCalendar: 'التقويم',
        labelNav: 'الملاحة التقويم',
        labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ',
      },
      },
      locales: [
      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },    
    ],
  }),
  computed: {
    is: {
      get() {
        return this.$store.getters["isCreateActiviteModal"];
      },
      set(is) {
        this.$store.dispatch("setIsCreateActiviteModal", is);
      },
    },
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
