<template>
<div>
  <h2>الجملة</h2>
     <b-form-input
                id="global-search"
                type="search"
                placeholder="ابحث عن جملة محددة"
            />
        <div class="mt-5">
        <h4>شرح عن المنتجات</h4>   
            <b-row>
                <b-col>
                    <createProductCardModal/>
                </b-col>
                <b-col>
                    <createProductCardModal/>
                </b-col>
                <b-col>
                    <createProductCardModal/>
                </b-col>
            </b-row>
        </div>
        
</div>
</template>
<script>
import {
 BRow,
 BCol,
  BFormInput
} from "bootstrap-vue";
import createProductCardModal from "./components/create-product-card-modal";
export default {

  components: {
      BRow,
      BCol,
    BFormInput,
    createProductCardModal,
  },
 
  
}
</script>