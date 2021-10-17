/**
 * Gets Bungie net user by ID. 
 * @param {string} id - The Bungie ID of the user you wish to find
 * @param {string} apiKey - The x-api-key assigned to you by Bungie
 */

const requestWrapper = require('../request-wrapper')

module.exports = async (membershipId) => {
  const url = `/User/GetBungieNetUserById/${membershipId}/`
  return await await requestWrapper({url, method: 'get'})
}