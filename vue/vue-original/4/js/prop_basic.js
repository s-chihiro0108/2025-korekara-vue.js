Vue.createAPP({})
  .component('my-hello',{
    props: ['yourName'],
    template: '<div>こんにちは、 {{yourName}}!</div>',
  }).mount('#app');
