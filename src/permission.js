import router from './router';
import store from './store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false, style: 'green' }); // NProgress Configuration

const whiteList = ['/home']; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // console.log('router:to', to);

  // start progress bar
  NProgress.start();

  if (whiteList.some(w => to.path.includes(w))) {
    next();
    NProgress.done();
  } else {
    // determine whether the user has logged in
    const hasLogin = await store.dispatch('login');

    if (hasLogin) {
      next();
    } else {
      window.location.href = '/login.html';
      // 未登录
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
   NProgress.done();
});
