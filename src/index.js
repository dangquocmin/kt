import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home";
import Nsl from "./pages/Nsl/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ctkt/nsl",
    name: "Nsl",
    component: Nsl
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
