<template>
    <div>
        <b-card no-body>
            <b-card-header class="p-0">
                <b-button
                    size="sm"
                    variant="flat-secondary"
                    class="btn-icon rounded-circle"
                    style="padding: .5rem 10px!important"
                    :disabled="isNotSelectedRows"
                >
                    <unicon name="trash-alt" width="18"></unicon>
                </b-button>
            </b-card-header>
            <b-card-body class="px-0">
                <vue-good-table
                    ref="customers-table"
                    :columns="columns"
                    :rows="rows"
                    :rtl="false"
                    :small="true"
                    styleClass="vgt-table condensed"
                    @on-selected-rows-change="selectionChanged"
                    :select-options="{
                        enabled: true,
                        disableSelectInfo: true,
                    }"
                >
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'action'">
                            <router-link :to="'/main/employees/details/' + props.row.id">
                                <b-button
                                    size="sm"
                                    variant="flat-secondary"
                                    class="btn-icon rounded-circle"
                                    style="padding: 2px 6px !important; margin: auto;"
                                >
                                    <unicon name="ellipsis-v" width="18"></unicon>
                                </b-button>    
                            </router-link>
                        </span>
                        
                        <span v-else>
                            {{props.formattedRow[props.column.field]}}
                        </span>
                    </template>
                </vue-good-table>
            </b-card-body>
        </b-card>
        <b-col cols="12" class="d-flex justify-content-center">
            <b-pagination
                first-number
                last-number
                prev-class="prev-item"
                next-class="next-item"
                class="mt-1 mb-0"
            >
                <!-- :value="customerFirstPage"
                :total-rows="customerList.length"
                :per-page="customerPageLength"
                @input="value => updateCustomerPagination(value)" -->
                <template #prev-text>
                    <unicon width="20" name="angle-right" fill="#A41F02" />
                </template>
                <template #next-text>
                    <unicon width="20" name="angle-left" fill="#A41F02" />
                </template>
            </b-pagination>
        </b-col>
    </div>
</template>

<script>
import {
    BButton,
    BCol,
    BCard,
    BCardBody,
    BCardHeader,
    BPagination
} from "bootstrap-vue";
import { VueGoodTable } from "vue-good-table";


export default {
    components: {
        VueGoodTable,
        BPagination,
        BButton,
        BCol,
        BCard,
        BCardBody,
        BCardHeader,
    },
    data() {
        return {
            isNotSelectedRows: true,
            columns: [
                {
                    label: "fullName",
                    field: "fullName"
                },
                {
                    label: "profession",
                    field: "profession"
                },       
                {
                    label: "country",
                    field: "countryName"
                },
                {
                    label: "address",
                    field: "address"
                },
                {
                    label: "mobileNumber",
                    field: "mobile"
                },
                {
                    label: "details",
                    field: "action",
                    sortable: false
                }
            ],
            rows: [
              {
                    id:1,
                    fullName: 'fullName',
                    mobile: "mobile",
                    address: "address",
                    countryName: "countryName",
                    profession: "profession"
              },
              {
                    id: 2,
                    fullName: 'fullName_1',
                    mobile: "mobile_1",
                    address: "address_1",
                    countryName: "countryName_1",
                    profession: "profession_1"
              }
            ]
        };
    },
    methods: {
        selectionChanged() {
            this.isNotSelectedRows = !this.$refs["customers-table"].selectedRows.length;
        },
        getSelectedRow() {
            let rowIds = this.$refs["customers-table"].selectedRows.map(row => row.id);
            return rowIds;
        }
    }
};
</script>
