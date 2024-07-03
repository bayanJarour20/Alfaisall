import Vue from "vue";
import FeatherIcon from "@core/components/feather-icon/FeatherIcon.vue";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";

import {
  uniBell,
  uniSun,
  uniMoon,
  uniPlus,
  uniCircle,
  uniEstate,
  uniSearch,
  uniAngleRight,
  uniEllipsisV,
  uniTrashAlt,
  uniAngleLeft,
  uniTimes,
  uniBriefcaseAlt,
  uniBookmark,
  uniServer,
  uniUsersAlt,
  uniArchiveAlt,
  uniUserCircle,
  uniUserSquare,
  uniVerticalDistributionCenter,
  uniSetting,
  uniShoppingBag,
  uniBriefcase,
  uniWrench
} from "vue-unicons/dist/icons";

Unicon.add([
  uniBell,
  uniSun,
  uniMoon,
  uniPlus,
  uniEstate,
  uniCircle,
  uniSearch,
  uniAngleRight,
  uniAngleLeft,
  uniEllipsisV,
  uniTrashAlt,
  uniTimes,
  uniBriefcaseAlt,
  uniBookmark,
  uniServer,
  uniUsersAlt,
  uniArchiveAlt,
  uniUserCircle,
  uniUserSquare,
  uniVerticalDistributionCenter,
  uniSetting,
  uniShoppingBag,
  uniBriefcase,
  uniWrench
]);
Vue.use(Unicon);
Vue.component(FeatherIcon.name, FeatherIcon);
