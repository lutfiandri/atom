module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/atom/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ],
}