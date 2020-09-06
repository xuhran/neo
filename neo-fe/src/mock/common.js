const Mock = require('mockjs')
const Login = {
  'POST /api/login': Mock.mock({
    code: 'SUCCESS',
    data: '',
    message: 'SUCCESS',
  }),
  'GET /api/logout': Mock.mock({
    code: 'SUCCESS',
    data: '',
    message: 'SUCCESS',
  }),
}

module.exports = Login
