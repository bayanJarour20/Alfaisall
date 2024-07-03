export default {
  state: {
    isCreateServiceModal: false,
    isCreateProductModal: false,
    isCreateActiviteModal: false,
    isCreateCustomerModal: false,
  },
  getters: {
    isCreateServiceModal({isCreateServiceModal}) {
      return isCreateServiceModal
    },
    isCreateProductModal({isCreateProductModal}) {
      return isCreateProductModal
    },
    isCreateActiviteModal({isCreateActiviteModal}) {
      return isCreateActiviteModal
    },
    isCreateCustomerModal({isCreateCustomerModal}) {
      return isCreateCustomerModal
    }
  },
  mutations: {

  },
  actions: {
    setIsCreateServiceModal({state}, is) {
      state.isCreateServiceModal = is
      return is
    },
    setIsCreateProductModal({state}, is) {
      state.isCreateProductModal = is
      return is
    },
    setIsCreateActiviteModal({state}, is) {
      state.isCreateActiviteModal = is
      return is
    },
    setIsCreateCustomerModal({state}, is) {
      state.isCreateCustomerModal = is
      return is
    }
  }
}