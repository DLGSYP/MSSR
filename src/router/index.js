import Vue from 'vue'
import Router from 'vue-router'
import page from '../main/page.vue'
import login from '../main/login.vue'
import personal from '../main/common/personal.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'page',
      component : page
    },
    {
      path : '/',
      name : 'login',
      component : login,
    },
    {
      path : '/personal',
      name : 'personal',
      component : personal
    }

  ]
})

/*hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。
比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。
它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，
因此改变 hash 不会重新加载页面。

history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）
这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
*/