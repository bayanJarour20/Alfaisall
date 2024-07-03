export default {
  state: {
    isCreateCategorieModal: false,
  },
  getters: {
    isCreateCategorieModal({isCreateCategorieModal}) {
      return isCreateCategorieModal
    },
  },
  mutations: {
  },
  actions: {
    setIsCreateCategorieModal({state}, is) {
      state.isCreateCategorieModal = is
      return is
    }
  }
}