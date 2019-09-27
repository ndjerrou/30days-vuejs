new Vue({
  el: '#root',
  data: {
    langue: 'Française',
    user: 'Nissim DJERROUDI',
    city: 'Suresnes'
  },
  methods: {
    changeLanguage() {
      this.langue =
        this.langue === 'Française'
          ? 'Et vous, vous parlez quelle langue ?'
          : 'Française';
    }
  }
});
