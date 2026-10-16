window.KDDINextsetLib = {
  dictionary: {},

  async loadLocale(locale) {
    const response = await fetch(
      `https://ver50n.github.io/js-lib/${locale}-dictionary.json`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to load ${locale} dictionary: ${response.status}`
      );
    }

    return await response.json();
  },

  async init() {
    const [ja, en, id] = await Promise.all([
      this.loadLocale('ja'),
      this.loadLocale('en'),
      this.loadLocale('id')
    ]);

    this.dictionary = {
      ja,
      en,
      id
    };

    return this;
  },

  translate(locale) {
    $('[data-i18n]').each(function() {
      const key = $(this).data('i18n');
  
      if (KDDINextsetLib.dictionary[locale]?.[key]) {
        $(this).text(
          KDDINextsetLib.dictionary[locale][key]
        );
      }
    });
  }
};
