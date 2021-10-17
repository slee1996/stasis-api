const requestWrapper = require('../request-wrapper')

module.exports = async () => {
  return await await requestWrapper({url: `/User/GetMembershipsForCurrentUser/`, method: 'get'})
}