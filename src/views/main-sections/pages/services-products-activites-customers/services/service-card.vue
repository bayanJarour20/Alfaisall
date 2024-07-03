<template>
  <b-card no-body class="overflow-hidden">
    <b-card-header class="p-1">
      <h5 class="m-0">
        <strong>{{item.name}}</strong>
      </h5>
    </b-card-header>
    <b-card-body class="px-1 pb-1">
      <b-img
        height="140"
        rounded
        style="object-fit: cover;"
        class="w-100"
        :src="item.imageSrc"
        alt="Image 1"
      ></b-img>
      <p class="m-0 pt-50">
        {{ item.desc.slice(0, 50) }}{{ item.desc.length > 50 ? "..." : "" }}
      </p>
    </b-card-body>
    <b-card-footer class="p-0">
      <b-button
        variant="primary"
        block
        squared
        :to="'/main/services/details/' + item.id"
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