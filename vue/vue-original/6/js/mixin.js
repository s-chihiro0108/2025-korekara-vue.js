const dateLoggable = {
  mounted(){
    console.log(this.$date);
  }
};

Vue.createApp({})
  .component('my-comp', {
    date(){
      return {
        current: new Date()
      };
    },
    template: `<div>現在時刻:{{ current }}</div>`,
    mixins: [dateLoggable]
  })
  .mount('#app')
