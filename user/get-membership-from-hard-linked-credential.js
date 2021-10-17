const requestWrapper = require('../request-wrapper')

module.exports = async ({credentialType,credential}) => {
  return await await requestWrapper({url: `/User/GetMembershipFromHardLinkedCredential/${credentialType}/${credential}/`, method: 'get'})
}