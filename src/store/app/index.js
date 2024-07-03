import { $themeBreakpoints } from '@themeConfig'
import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    isLoading: false,
    windowWidth: 0,
    domainHost:  $themeConfig.app.domainPath,
    shallShowOverlay: false,
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
    isLoading(state) {
      return state.isLoading
    },
    domainHost({domainHost}) {
      return domainHost
    }
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
  },
  actions: {
    setLoading({state}, is) {
        state.isLoading = is
    },
  },
}
