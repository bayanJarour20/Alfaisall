export default {
  state: {
    isCreateInfoModal: false,
    isCreateImagesModal: false
  },
  getters: {
    isCreateInfoModal({isCreateInfoModal}) {
      return isCreateInfoModal
    },
    isCreateImagesModal({isCreateImagesModal}) {
      return isCreateImagesModal
    }
  },
  mutations: {
  },
  actions: {
    setIsCreateInfoModal({state}, is) {
      state.isCreateInfoModal = is
      return is
    },
    setIsCreateImagesModal({state}, is) {
      state.isCreateImagesModal = is
      return is
    }
  }
}