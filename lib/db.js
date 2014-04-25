var levelup = require('levelup')
module.exports = function(dbPath) {
  var db = levelup(dbPath)
  return db
}
