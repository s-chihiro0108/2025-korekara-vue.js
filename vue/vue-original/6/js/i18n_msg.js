const messages = {
  en: {
    greet: {
      morning: 'Good Morning.'
    }
  },
  ja: {
    greet: {
      morning: 'おはようございます。',
      how_are_you: 'ご機嫌いかかですか。',
      hello: 'こんにちは、{0}さん！',
      morning_set: '@:greet.morning @:greet.how_are_you',
      mail: "wings{'@'}example.com",
    }
  },
  de: {
    greet: {
      morning: 'Guten Morgen.',
    }
  }
};

Vue.createApp({})
  .use(
    VueI18n.createI18n({
      locale: 'ja',
      fallbackLocale: 'en',
      messages,
    })
  )
  .mount('#app');
