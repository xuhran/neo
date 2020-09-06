const delay = require('mocker-api/lib/delay')

const Login = require('./common')

module.exports = delay(
  {
    ...Login,
  },
  1000,
)
