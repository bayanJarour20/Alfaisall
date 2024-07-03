<template>
<div>
  <h1>glob 3 {{type}} {{!+lang}}</h1>
  <b-button-group class="mb-1" v-if="type != 3">
    <b-button
      :variant="!+lang ? 'primary' : 'outline-primary'"
      :to="'/main/' + this.$route.name + '/0'"
    >عربي</b-button>
    <b-button
      :to="'/main/' + this.$route.name + '/1'"
      :variant="!+lang ? 'outline-primary' : 'primary'"
    >English</b-button>
  </b-button-group>
  <div v-else class="d-flex align-items-center mb-1">
    <small>إظهار</small>
    <b-form-checkbox switch class="mx-50"></b-form-checkbox>
    <small>إخفاء</small>
  </div>  
  <b-row>
      <b-col cols="12" md="6" lg="3" v-for="i in 14" :key="i">
        <component :is="$route.name + '-card'" :item="item"></component>
      </b-col>
  </b-row>
</div>
</template>
<script>
import {
  BButtonGroup,
  BButton,
  BCol,
  BRow,
  BFormCheckbox
} from "bootstrap-vue";

const servicesCard = () => import('./services/service-card')
const productsCard = () => import('./products/product-card')
const activitesCard = () => import('./activites/activite-card')
const customersCard = () => import('./customers/customer-card')
export default {
  props: {
    lang: String
  },
  components: {
    BButtonGroup,
    BButton,
    BCol,
    BRow,
    BFormCheckbox,

    servicesCard,
    productsCard,
    activitesCard,
    customersCard
  },
  computed: {
    type() {
      switch(this.$route.name) {
        case 'services' :  return 0; 
        case 'products' :  return 1;
        case 'activites' :  return 2;
        case 'customers' :  return 3;
      }
      return false;
    },
    item() {
      switch(this.$route.name) {
        case 'services' :  return {
          id: 0,
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nisi quos fugit, expedita optio, doloribus rerum corrupti repellat ad doloremque distinctio eveniet animi omnis similique necessitatibus rem! Quos, dolor unde.",
          name: 'title',
          imageSrc: '@/assets/images/portrait/small/avatar-s-1.jpg'
        }; 
        case 'products' :  return {
          id: 0,
          name: 'title',          
          imageSrc: '@/assets/images/portrait/small/avatar-s-1.jpg',
          mainCategory: "main cat name",
          subCategory: "sub cat name",
          price: 0
        };
        case 'activites' :  return {
          id: 0,
          name: 'title',
          imageSrc: '@/assets/images/portrait/small/avatar-s-1.jpg',
          date: new Date().toLocaleDateString(),
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nisi quos fugit, expedita optio, doloribus rerum corrupti repellat ad doloremque distinctio eveniet animi omnis similique necessitatibus rem! Quos, dolor unde.",
        };
        case 'customers' :  return {
          id: 0,
          name: 'title',
          imageSrc: '@/assets/images/portrait/small/avatar-s-1.jpg',
        };
      }
      return false;
    }
  }
}
</script>