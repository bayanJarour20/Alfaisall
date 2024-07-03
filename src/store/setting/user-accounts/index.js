export default {
  state: {
    isCreateAccountModal: false
  },
  getters: {
    isCreateAccountModal({isCreateAccountModal}) {
      return isCreateAccountModal
    }
  },
  mutations: {

  },
  actions: {
    setIsCreateAccountModal({state}, is) {
      state.isCreateAccountModal = is
      return is
    }
  }
}