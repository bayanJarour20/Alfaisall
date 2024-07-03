export default {
    state: {
      isCreateServiceSettingieModal: false,
    },
    getters: {
      isCreateServiceSettingieModal({isCreateServiceSettingieModal}) {
        return isCreateServiceSettingieModal
      },
    },
    mutations: {
    },
    actions: {
      setIsCreateServiceSettingieModal({state}, is) {
      
        state.isCreateServiceSettingieModal = is
        return is
      }
    }
  }