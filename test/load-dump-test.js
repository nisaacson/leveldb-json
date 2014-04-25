var path = require('path')
var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var createDB =  require('../lib/db')
var load = require('../lib/load')
var dump = require('../lib/dump')
var dbFilePath = path.join(__dirname, 'tmp', 'db')

var db = createDB(dbFilePath)
describe('Load from File', function() {

  it('should load and dump correctly', function(done) {
    var file = path.join(__dirname, 'data', 'test.json')
    var loadStream = load(file, db)
    var loadedSpy = sinon.spy(loaded)

    loadStream.on('loaded', loadedSpy)
    loadStream.on('finish', validate)

    function loaded() { }
    function validate() {
      expect(loadedSpy.callCount).to.equal(2)
      done()
    }
  })

  it('should dump correctly', function(done) {
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
