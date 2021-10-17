/**
 * Returns a list of credential types attached to the requested account
 */
const requestWrapper = require('../request-wrapper')

module.exports = async (membershipId) => {
  const url = `/User/GetCredentialTypesForTargetAccount/${membershipId}/`
  return await await requestWrapper({url, method: 'get'})
}