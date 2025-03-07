Vue
  .createApp({})
  .component('my-heavy', {
    template: `<div>お待たせしました。{{ name }}です。！</div>`,
    setup() {
      const name = Vue.ref('Suspence');
      return new Promise( resolve => {
        setTimeout(() => {
          resolve();
        }, 5000);
      })
      .then(() => {
        return {
          name
        };
      })
    },
  })
  .mount('#app');
