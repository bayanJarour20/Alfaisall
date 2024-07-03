<template>
    <layout-vertical>
        <template slot="bread-actions">
            <router-view name="bread-actions" v-show="!isLoading" />
        </template>
        <div>
            <router-view v-show="!isLoading" />
            <loading v-show="isLoading" />
        </div>
        <template #navbar="{ toggleVerticalMenuActive }">
            <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
        </template>
<!-- 
        <app-customizer
            v-if="showCustomizer"
            slot="customizer"
        /> -->
    </layout-vertical>
</template>

<script>
import LayoutVertical from "@core/layouts/layout-vertical/LayoutVertical.vue";
// import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
// import { $themeConfig } from '@themeConfig'
import Navbar from "../components/Navbar.vue";
import loading from "@core/components/loading/loading.vue";
import { mapGetters } from 'vuex';

export default {
    components: {
        loading,
        // AppCustomizer,
        LayoutVertical,
        Navbar
    },
    data() {
        return {
            // showCustomizer: $themeConfig.layout.customizer,
        };
    },
    computed: {
        ...mapGetters({
            isLoading: "app/isLoading"
        })
    }
};
</script>
