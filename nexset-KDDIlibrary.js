const translate = function (locale) {
  $('[data-i18n]').each(function() {
    let key = $(this).data('i18n');
    $(this).text(dictionary[locale][key]);
  });
}

window.KDDINextsetLib = {
  translate
};
