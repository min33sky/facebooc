/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webp: {
    preset: 'default',
    quality: 100,
  },
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
    ],
  },
  //Internationalization
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
};
