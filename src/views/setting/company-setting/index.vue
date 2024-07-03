<template>
  <div>
    <h4>تواصل معنا</h4>
    <div>
      <h1>id: {{ id }} lang: {{ lang }}</h1>
      <b-button-group class="mb-1">
        <b-button
          :variant="!+lang ? 'primary' : 'outline-primary'"
          :to="'/user-accounts/details/' + id + '/0'"
          >عربي</b-button
        >
        <b-button
          :to="'/user-accounts/details/' + id + '/1'"
          :variant="!+lang ? 'outline-primary' : 'primary'"
          >English</b-button
        >
      </b-button-group>
    </div>
    <ValidationObserver ref="observer">
      <b-form
        slot-scope="{ validate }"
        @submit.prevent="validate().then(onSubmit)"
        @reset="resetForm"
      >
        <b-card no-body class="mb-2">
          <b-card-body>
            <b-card-text>
              <b-row>
                <b-col>
                  <BTextInputWithValidation
                    rules="required|integer"
                    name="رقم الهاتف"
                    label="رقم الهاتف"
                    placeholder="رقم الهاتف"
                  />
                  <BTextInputWithValidation
                    rules="required|integer"
                    name=" رقم الجوال"
                    label=" رقم الجوال"
                    placeholder="دخل  رقم الجوال "
                  />
                  <BTextInputWithValidation
                    rules="required|email"
                    name="البريد الإلكتروني"
                    label="البريد الإلكتروني"
                    placeholder="دخل البريد الإلكتروني "
                  />
                  <BTextInputWithValidation
                    rules="required"
                    name="الفيس البوك"
                    label="الفيس البوك"
                    placeholder="دخل الفيس البوك "
                  />
                </b-col>
                <b-col>
                     <BTextInputWithValidation
                    rules="required|integer"
                    name="رقم الهاتف"
                    label="رقم الهاتف"
                    placeholder="رقم الهاتف"
                  />
                  <BTextInputWithValidation
                    rules="required|integer"
                    name=" رقم الجوال"
                    label=" رقم الجوال"
                    placeholder="دخل  رقم الجوال "
                  />
                  <BTextInputWithValidation
                    rules="required"
                    name="البريد الإيميل"
                    label="البريد الإيميل"
                    placeholder="دخل البريد الإيميل "
                  />
                </b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <b-row>
              <b-col>
                <div class="d-flex">
                  <b-button
                    class="mr-1"
                    variant="primary"
                    style="max-width:100px"
                    type="submit"
                    >تعديل</b-button
                  >
                  <b-button
                    href="#"
                    variant="outline-primary"
                    style="max-width:100px"
                    >تراجع</b-button
                  >
                </div>
              </b-col>
              <b-col
                style="    display: flex;
    justify-content: flex-end;"
              >
                <b-button
                  href="#"
                  style="max-width:100px"
                  variant="outline-primary"
                  >حذف</b-button
                >
              </b-col>
            </b-row>
          </b-card-footer>
        </b-card>
      </b-form>
    </ValidationObserver>
    <h4>وكيل</h4>
    <ValidationObserver ref="observer">
      <b-form
        slot-scope="{ validate }"
        @submit.prevent="validate().then(onSubmit)"
        @reset="resetForm"
      >
        <b-card no-body class="mb-2">
          <b-card-body>
            <b-card-text>
              <b-row>
                <b-col>
                          <b-img
                height="140"
                rounded
                style="object-fit: cover;"
                class="w-100"
                src="sdx"
                alt="Image 1"
              ></b-img>
                   <BTextInputWithValidation
                    rules="required"
                    name="الاسم"
                    label="الاسم"
                    placeholder="الاسم"
                  />
                </b-col>
                <b-col>
                  <BTextInputWithValidation
                    rules="required|integer"
                    name="رقم الهاتف"
                    label="رقم الهاتف"
                    placeholder="رقم الهاتف"
                  />
                  <BTextInputWithValidation
                    rules="required|integer"
                    name=" رقم الجوال"
                    label=" رقم الجوال"
                    placeholder="دخل  رقم الجوال "
                  />
                  <BTextInputWithValidation
                    rules="required|email"
                    name="البريد الإلكتروني"
                    label="البريد الإلكتروني"
                    placeholder="دخل البريد الإلكتروني "
                  />
                  <BTextInputWithValidation
                    rules="required"
                    name="الفيس البوك"
                    label="الفيس البوك"
                    placeholder="دخل الفيس البوك "
                  />
                </b-col>
                <b-col>
                     <BTextInputWithValidation
                    rules="required|integer"
                    name="رقم الهاتف"
                    label="رقم الهاتف"
                    placeholder="رقم الهاتف"
                  />
                  <BTextInputWithValidation
                    rules="required|integer"
                    name=" رقم الجوال"
                    label=" رقم الجوال"
                    placeholder="دخل  رقم الجوال "
                  />
                  <BTextInputWithValidation
                    rules="required"
                    name="البريد الإيميل"
                    label="البريد الإيميل"
                    placeholder="دخل البريد الإيميل "
                  />
                </b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <b-row>
              <b-col>          
                  <b-button
                    class="mr-1"
                    variant="primary"
                    style="max-width:100px"
                    type="submit"
                    >تعديل</b-button
                  >
              </b-col>
            </b-row>
          </b-card-footer>
        </b-card>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import BTextInputWithValidation from "@core/components/inputs/BTextInputWithValidation";
import { ValidationObserver } from "vee-validate";
import {
  BButton,
  BButtonGroup,
  BCardText,
  BCardBody,
  BCardFooter,
  BCol,
  BRow,
  BCard,
  BForm,
  BImg
} from "bootstrap-vue";
export default {
  components: {
    BForm,
    BButton,
    BButtonGroup,
    BCardText,
    BCardBody,
    BCardFooter,
    BCol,
    BRow,
    BCard,
    BTextInputWithValidation,
    ValidationObserver,
    BImg
  },
  props: {
    id: String,
    lang: String,
  },
  data: () => ({
    date: "",
  }),
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
