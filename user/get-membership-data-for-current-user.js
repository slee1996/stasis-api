const requestWrapper = require('../request-wrapper')

module.exports = async () => {
  return await requestWrapper({url: `/User/GetMembershipsForCurrentUser/`, method: 'get'})
}