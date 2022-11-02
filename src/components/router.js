
import DashBoard from './components/DashBoard.vue';
import UserLog from './components/UserLog.vue';
import LogView from './components/LogView.vue';
import InFo from './components/InFo.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/DashBoard',
      component: DashBoard,
      name: 'DashBoard'
    },
    {
      path: '/UserLog',
      component: UserLog,
      name: 'UserLog'
    },
    {
      path: '/LogView',
      component: LogView,
      name: 'LogView',
      props: true // true로 설정하면 데이터를 props로도 받음
    },
    {
      path: '/InFo',
      component: InFo,
      name: 'InFo',
      props: true // true로 설정하면 데이터를 props로도 받음
    },
  ]
})


export default[
  {path:'/DashBoard', name:'DashBoard', component:DashBoard},
  {path:'/UserLog', name:'UserLog', component:UserLog},
  {path:'/LogView', name:'LogView', component:LogView.vue},
  {path:'/InFo', name:'InFo', component:InFo},
  { router }
]

