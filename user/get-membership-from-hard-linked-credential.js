const requestWrapper = require('../request-wrapper')

module.exports = async ({credentialType,credential}) => {
  return await requestWrapper({url: `/User/GetMembershipFromHardLinkedCredential/${credentialType}/${credential}/`, method: 'get'})
}