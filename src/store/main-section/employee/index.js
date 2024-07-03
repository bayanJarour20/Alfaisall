export default {
  state: {
    isCreateEmployeeModal: false
  },
  getters: {
    isCreateEmployeeModal({isCreateEmployeeModal}) {
      return isCreateEmployeeModal
    }
  },
  mutations: {

  },
  actions: {
    setIsCreateEmployeeModal({state}, is) {
      state.isCreateEmployeeModal = is
      return is
    }
  }
}