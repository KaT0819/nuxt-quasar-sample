import { Quasar, Dialog, Loading, Notify } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {
        Dialog,
        Loading,
        Notify
    }
  });
});