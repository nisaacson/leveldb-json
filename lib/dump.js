
var path = require('path')
var util = require('util')
var fs = require('fs')
var Writable = require('stream').Writable

function Writer(filePath) {
  Writable.call(this, { objectMode: true})
  this._writeStream = fs.createWriteStream(filePath)
}
util.inherits(Writer, Writable)

Writer.prototype._write = function(chunk, encoding, done) {
  var row = JSON.stringify(chunk)

  var line = row + '\n'
  this._writeStream.write(line)
  this.emit('dumped', row)
  done()
}

function dumpToJson(filePath, db) {
  if (!db) {
    throw new Error('leveldb instance required as second argument')
  }
  var writer = new Writer(filePath)
  var readStream = db.createReadStream()
  readStream.pipe(writer)

  return writer
}

module.exports = function(fileName, db){
  var filePath = path.resolve(fileName)
  return dumpToJson(filePath, db)
}
