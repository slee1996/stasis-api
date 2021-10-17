require('dotenv').config()

module.exports = {
  destiny2: require('./destiny2'),
  user: require('./user'),
  player: require('./player'),
  stats: require('./stats')
}