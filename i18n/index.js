const en = require("./translations.en.json");
const zh = require("./translations.zh.json");
const ko = require("./translations.ko.json");
const fr = require("./translations.fr.json");
const es = require("./translations.es.json");
const pt = require("./translations.pt.json");
const ru = require("./translations.ru.json");
const vi = require("./translations.vi.json");
const nl = require("./translations.nl.json");
const ja = require("./translations.ja.json");
const de = require("./translations.de.json");

const i18n = {
  translations: {
    en: en.i18n,
    cn: zh.i18n,
    ko: ko.i18n,
    fr: fr.i18n,
    es: es.i18n,
    pt: pt.i18n,
    ru: ru.i18n,
    vi: vi.i18n,
    nl: nl.i18n,
    ja: ja.i18n,
    de: de.i18n
  },
  defaultLang: "en",
  useBrowserDefault: true
};

module.exports = i18n;
