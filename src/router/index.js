import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import DataBidning from "../views/DataBinding.vue";
import Computed from "../views/Computed.vue";
import PostmanCall from "../views/PostmanCall.vue";

const routes = [
  { path: "/databinding", component: DataBidning },
  { path: "/computed", component: Computed },
  { path: "/postman", component: PostmanCall },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
