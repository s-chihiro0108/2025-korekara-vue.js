Vue.createApp({})
  .component('my-book',{
    data(){
      return {
        book: {
          isbon: '978-4-8222-5389-9',
          title: '作って楽しい',
          price: 2000,
          publish: '日経'
        }
      };
    },
    template: `<div>
      <slot v-bind:book="book">{{book.title}} ({{book.publish}})</slot>
    </div>`
  })
  .mount('#app');
