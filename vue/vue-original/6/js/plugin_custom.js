const MyUtil = {
  install(app, options){
    app.directive('highlight', {
      mounted(el,binding){
        el.addEventListener('mouseenter', e =>{
          e.target.style.background = 'yellow'
        }, false);
        el.addEventListener('mouseleave', e =>{
          e.target.style.background = null;
        }, false);
      }
    });
  }
}
Vue
  .createApp({
    date(){
      return {
        color: 'yellow'
      }
    }
  })
  .use(MyUtil)
  .mount('#app');
