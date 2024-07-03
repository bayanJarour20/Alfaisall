<template>
  <div>
    <b-row>
      <b-col>
        <h4>رابط الفيديو</h4>
        <b-form-input id="global-search" type="search" placeholder="" />
      </b-col>
      <b-col>
        <h4>مراحل الغزل</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col> </b-col>
      <b-col>
        <b-row>
          <b-col>
            <createServiceCardModel />
            <createServiceCardModel />
            <createServiceCardModel />
          </b-col>
          <b-col>
            <createServiceCardModel />
            <createServiceCardModel />
            <createServiceCardModel />
          </b-col>
          <b-pagination
                first-number
                last-number
                prev-class="prev-item"
                next-class="next-item"
                class="mt-1 mb-0"
            >
                <template #prev-text>
                    <unicon width="20" name="angle-right" fill="#A41F02" />
                </template>
                <template #next-text>
                    <unicon width="20" name="angle-left" fill="#A41F02" />
                </template>
            </b-pagination>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BRow, BCol, BFormInput,
BPagination } from "bootstrap-vue";
import createServiceCardModel from "./components/create-service-card-model";
export default {
  components: {
    BRow,
    BCol,
    BFormInput,
    createServiceCardModel,
    BPagination
  },
};
</script>
