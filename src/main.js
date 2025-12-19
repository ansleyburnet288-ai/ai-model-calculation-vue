// Set up error handlers BEFORE any imports to catch early errors
// Global error handler for unhandled promise rejections
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', function(event) {
    // Suppress Firebase-related errors from browser extensions
    if (event && event.reason && typeof event.reason === 'object') {
      const reason = event.reason;
      
      // Check for the specific error pattern: Firebase 403 errors from extensions
      const isFirebaseExtensionError = 
        (reason.code === 403 && reason.httpStatus === 200 && reason.httpError === false) ||
        (reason.code === 403 && reason.httpStatusText === '' && reason.httpError === false) ||
        (reason.name && reason.name.length === 1 && reason.code === 403) ||
        (reason.name === 'i' && reason.code === 403) ||
        (reason.code === 403 && reason.httpStatus === 200 && reason.name === 'i');
      
      if (isFirebaseExtensionError) {
        // Suppress these errors silently as they're from browser extensions
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
    }
  }, true); // Use capture phase to catch early
}

import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles.scss'
import store from './store'
import router from './router';

// Global error handler for general errors
Vue.config.errorHandler = function(err, vm, info) {
  // Suppress Firebase-related errors from browser extensions
  if (err && typeof err === 'object') {
    const isFirebaseExtensionError = 
      (err.code === 403 && err.httpStatus === 200 && err.httpError === false) ||
      (err.code === 403 && err.name === 'i') ||
      (err.name && err.name.length === 1 && err.code === 403) ||
      (err.code === 403 && err.httpStatus === 200 && err.httpStatusText === '' && err.name === 'i');
    
    if (isFirebaseExtensionError) {
      return; // Silently ignore
    }
  }
};

// Also catch errors at the window level
if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  console.error = function(...args) {
    // Filter out Firebase extension errors from console
    if (args.length > 0 && args[0] && typeof args[0] === 'object') {
      const err = args[0];
      const isFirebaseExtensionError = 
        (err.code === 403 && err.httpStatus === 200 && err.httpError === false) ||
        (err.code === 403 && err.name === 'i') ||
        (err.name && err.name.length === 1 && err.code === 403);
      
      if (isFirebaseExtensionError) {
        return; // Don't log this error
      }
    }
    originalConsoleError.apply(console, args);
  };
}

router.beforeEach((to, from, next) => {
  next();
  // console.log(store.state.user.isLoggedIn)
  // if (!store.state.user.isLoggedIn) {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
});


new Vue({
  data: {
    sharedData: {
      commissionPercentage: 0.75,
      totalCost: 5000000
    }
  },
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
