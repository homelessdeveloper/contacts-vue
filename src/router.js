import Router from 'vue-router';
import Home from './pages/home';


const  routes=[
  {
    path:'/',
    component:Home,
  },
  

];
const router= new Router({routes});

export default router;