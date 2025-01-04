Vue.createApp({
  data(){
    return {
      books: [
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ',
          price: 2800
        },
      ]
    };
  }
}).mount('#app');
