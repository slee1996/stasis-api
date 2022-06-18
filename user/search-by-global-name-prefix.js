const requestWrapper = require('../request-wrapper')

module.exports = async ({ displayNamePrefix, page }) => {
  return await requestWrapper({url: `/User/Search/Prefix/${displayNamePrefix}/${page}/`, method: 'get'})
}