import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/compat/app";

//Импорт компонентов
const LandingPageView = () => import("../views/LandingPageView.vue");
const Login = () => import("../views/Login.vue");
const Service = () => import("../views/Service.vue");
const Register = () => import("../views/Register");

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPageView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/service",
    name: "service",
    meta: { auth: true },
    component: Service,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Проверка авторизации при роутинге
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
