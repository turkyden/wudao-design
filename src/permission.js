import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false, style: 'green' }); // NProgress Configuration

const whiteList = ['home']; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // console.log('router:to', to);

  // start progress bar
  NProgress.start();

  if (whiteList.some(w => to.path.includes(w))) {
    next();
    NProgress.done();
  } else {
    next();
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
   NProgress.done();
});
