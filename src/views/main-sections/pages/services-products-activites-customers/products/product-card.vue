<template>
  <b-card no-body class="overflow-hidden">
    <b-card-header class="p-1">
      <h5 class="m-0">
        <strong class="text-primary">{{item.name}}</strong>
      </h5>
    </b-card-header>
    <b-card-body class="px-1 pb-1">
      <h6>
        <strong>{{item.mainCategory}}</strong>
      </h6>
      <small>{{item.subCategory}}</small>
        <b-img
        block
          height="140"
          rounded
          style="object-fit: cover;"
          class="w-100"
          :src="item.imageSrc"
          alt="Image 1"
        ></b-img>
      <div class="d-flex justify-content-between pt-50">
        <small>سعر المنتج : </small>
        <strong>{{item.price}}</strong>
      </div>
    </b-card-body>
    <b-card-footer class="p-0">
      <b-button
        variant="primary"
        block
        squared
        :to="'/main/products/details/' + item.id"
      >عرض التفاصيل</b-button>
    </b-card-footer>
  </b-card>
</template>
<script>
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BImg,
} from "bootstrap-vue";
export default {
  components: {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BImg,
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>