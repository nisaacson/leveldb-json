var util = require('util')
var Writable = require('stream').Writable

var when = require('when')
var path = require('path')
var fs = require('fs')

var LinerStream = require('linerstream')

function Loader(db) {
  var opts = {
    objectMode: true
  }
  this._db = db
  Writable.call(this, opts)
}

util.inherits(Loader, Writable)

Loader.prototype._write = function(chunk, encoding, done) {
  var row = JSON.parse(chunk)
  var id = row.key
  var self = this
  var key = row.value
  loadKey.call(self, id, key).then(complete).catch(failHandler)

  function failHandler(err) {
    self.emit('error', err)
  }

  function complete() {
    self.emit('loaded', row)
    done()
  }
}

function parseFile(filePath, db) {
  var liner = new LinerStream()
  var loader = new Loader(db)
  var readStream = fs.createReadStream(filePath, 'utf8')
  return readStream.pipe(liner).pipe(loader)
}

function loadKey(id, key) {
  var deferred = when.defer()
  var db = this._db
  db.put(id, key, cb)
  return deferred.promise

  function cb(err) {
    if (err) {
      deferred.reject(err)
    }
    deferred.resolve()
  }

}

module.exports = function(filePath, db){
  filePath = path.resolve(filePath)
  return parseFile(filePath, db)
}
