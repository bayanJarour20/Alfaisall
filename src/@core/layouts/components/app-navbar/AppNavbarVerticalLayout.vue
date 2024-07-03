<template>
  <b-navbar-nav class="nav flex-nowrap pl-1">
    <search-bar />
    <notification-dropdown />
  </b-navbar-nav>
</template>

<script>
import {
  BNavbarNav,
} from 'bootstrap-vue'
import NotificationDropdown from './components/NotificationDropdown.vue'
import SearchBar from './components/SearchBar'

export default {
  components: {
    // Navbar Components
    BNavbarNav,
    SearchBar,
    NotificationDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
