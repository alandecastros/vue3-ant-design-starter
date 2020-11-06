import { createApp } from 'vue';
import { Button } from 'ant-design-vue';
import App from './App.vue';

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.mount('#app');
