import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

import employee from "./main-section/employee";
import inbox from "./main-section/inbox";
import servicesProductsActivitesCustomers from "./main-section/services-products-activites-customers";
//---------
import userAccounts from "./setting/user-accounts";
import companySetting from "./setting/company-setting";
import categories from "./setting/categories";
import productStting from "./setting/product-setting"
 import serviceSetting from "./setting/service-setting"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    //---------
    employee,
    inbox,
    servicesProductsActivitesCustomers,
    //---------
    userAccounts,
    productStting,
    companySetting,
    categories,
    serviceSetting
  },
  strict: process.env.DEV,
})
