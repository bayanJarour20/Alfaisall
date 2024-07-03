export default {
    state: {
      isCreateProductSettingieModal: false,
    },
    getters: {
      isCreateProductSettingieModal({isCreateProductSettingieModal}) {
        return isCreateProductSettingieModal
      },
    },
    mutations: {
    },
    actions: {
      setIsCreateProductSettingieModal({state}, is) {
      
        state.isCreateProductSettingieModal = is
        return is
      }
    }
  }