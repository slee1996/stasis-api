const requestWrapper = require('../request-wrapper')

module.exports = async () => {
  return await requestWrapper({
    url: '/User/GetAvailableThemes/', 
    method: 'get'
  })
}