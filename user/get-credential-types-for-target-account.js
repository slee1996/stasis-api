/**
 * Returns a list of credential types attached to the requested account
 */
const requestWrapper = require('../request-wrapper')
const axios = require('axios')

module.exports = async (id, apiKey) => {
  return await requestWrapper(`/User/GetBungieNetUserById/${id}/`, apiKey)
}