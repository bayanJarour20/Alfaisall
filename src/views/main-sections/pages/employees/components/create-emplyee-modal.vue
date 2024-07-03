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
            <strong>إضافة موظف</strong>
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
            label="الاسم "
            name="الاسم"
            v-model="fristName"
            placeholder="أدخل اسم"
          />
          <BTextInputWithValidation
            rules="required"
            label="الكنية "
            name="الكنية"
            v-model="lastName"
            placeholder="أدخل الكنية"
          />
          <BTextInputWithValidation
            rules="required|email"
            label="البريد الالكتروني "
            name="البريد الإلكتروني"
            v-model="email"
            placeholder="أدخل اسم الموظف"
          />
          <BTextInputWithValidation
            rules="required|min:4"
            label="كلمة السر "
            name="كلمة السر"
            v-model="password"
            placeholder="أدخل كلمة السر"
          />
          <BTextInputWithValidation
            rules="required|digits:10"
            label="رقم الجوال "
            name="رقم الجوال"
            v-model="number"
            placeholder="أدخل رقم الجوال"
          />
          <BDatepickerWithValidation 
            rules="required"
            label="تاريخ الميلاد "
            name="تاريخ الميلاد"
            v-model="date"
            placeholder="أدخل تاريخ الميلاد"
          />
          <BTextInputWithValidation
            rules="required"
            label=" المنصب الوظيفي"
            name="المنصب الوظيفي"
            v-model="levelEmployee"
            placeholder="ادخل المنصب الوظيفي"
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
  import {
    BSidebar,
    BButton,
    BForm,
    BCol
  } from "bootstrap-vue";
  
import { ValidationObserver } from "vee-validate";
import BTextInputWithValidation from "@core/components/inputs/BTextInputWithValidation";
import BDatepickerWithValidation from "@core/components/inputs/BDatepickerWithValidation";


  export default {
    components: {
      BSidebar,
      BButton,
      BCol,
      BForm,
      ValidationObserver,
      BTextInputWithValidation,
      BDatepickerWithValidation
   
    },
    computed: {
      is: {
        get() {
          return this.$store.getters['isCreateEmployeeModal']
        },
        set(is) {
          this.$store.dispatch('setIsCreateEmployeeModal', is)
        }
      }
    },
    data: () => ({
    email: "",
    lastName:"",
    fristName:"",
    password: "",
    number:"",
    brithDay:"",
    date:"",
    levelEmployee:"",
       value: '',
         locale: 'en-US',
    showDecadeNav: false,
    hideHeader: false,
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
     
      this.email="",
      this.lastName="",
      this.fristName="",
      this.password="",
      this.number="",
      this.brithDay="",
      this.levelEmployee="",
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },

  };
</script>
