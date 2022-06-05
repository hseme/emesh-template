import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './stores';
import { setMeta } from './utils/naive-ui';

createApp(App).mount('#app');

(async () => {
  const app = createApp(App);

  // router
  setupRouter(app);

  // pinia
  setupStore(app);

  // naive-ui
  setMeta();

  app.mount('#app', true);
})();
