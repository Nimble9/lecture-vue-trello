import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../componenets/Home';
import Login from '../componenets/Login';
import Board from '../componenets/Board';
import Card from '../componenets/Card';

import NotFound from "../componenets/NotFound";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token');
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  return isAuth ? next() : next(loginPath);
}


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
        { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
      ] },
    { path: '*', component: NotFound },
  ],
});

export default router;
