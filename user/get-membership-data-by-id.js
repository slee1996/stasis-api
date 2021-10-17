const requestWrapper = require('../request-wrapper')

module.exports = async ({membershipId, membershipType}) => {
  const url = `/User/GetMembershipsById/${membershipId}/${membershipType}/`
  return await await requestWrapper({url, method: 'get'})
}