<template>
    <div class="navbar-container d-flex content align-items-center">
        <!-- Nav Menu Toggler -->
        <ul class="nav navbar-nav d-xl-none">
            <li class="nav-item">
                <b-link class="nav-link" @click="toggleVerticalMenuActive">
                    <feather-icon icon="MenuIcon" size="21" />
                </b-link>
            </li>
        </ul>

        <!-- Left Col -->
        <app-navbar-vertical-layout class="ml-auto" />

        <b-navbar-nav class="nav align-items-center">
            <user-dropdown />
        </b-navbar-nav>
    </div>
</template>

<script>
import { BLink, BNavbarNav } from "bootstrap-vue";
import AppNavbarVerticalLayout from "@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue";
import UserDropdown from "@core/layouts/components/app-navbar/components/UserDropdown.vue";

export default {
    components: {
        BLink,
        BNavbarNav,
        UserDropdown,
        
        // Navbar Components
        AppNavbarVerticalLayout
    },
    props: {
        toggleVerticalMenuActive: {
            type: Function,
            default: () => {}
        }
    },
};
</script>
