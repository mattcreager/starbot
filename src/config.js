
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  SLACK_TEAM_TOKEN: process.env.SLACK_TEAM_TOKEN,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  SLASH_TOKEN: 'HnnYZVorWlf5gz7ls56lxQvo'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}
