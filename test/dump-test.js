var path = require('path')
var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var createDB =  require('../lib/db')
var dump = require('../lib/dump')

describe('Dump To File', function() {

  it('should dump correctly', function(done) {
    var dbFilePath = path.join(__dirname, 'data', 'source_db')
    var db = createDB(dbFilePath)
    var file = path.join(__dirname, 'tmp', 'dump.json')
    var dumpStream = dump(file, db)
    var dumpedSpy = sinon.spy(dumped)

    dumpStream.on('dumped', dumpedSpy)
    dumpStream.on('finish', validate)

    function dumped() { }

    function validate() {
      expect(dumpedSpy.callCount).to.equal(2)
      done()
    }


  })
})
