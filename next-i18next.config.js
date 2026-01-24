/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "mn",
    locales: ["mn", "en"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
