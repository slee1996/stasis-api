const requestWrapper = require('../request-wrapper')

module.exports = async ({ membershipType = 'All', membershipId, characterId }) => {
  return await await requestWrapper({
    url: `/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/`,
    params: {
      count: "10",
      mode: 'none',
      page: "0"
    },
    method: 'get'
  })
}