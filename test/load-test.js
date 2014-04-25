var path = require('path')
var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var createDB =  require('../lib/db')
var load = require('../lib/load')

describe('Load from File', function() {

  it('should load correctly', function(done) {
    var dbFilePath = path.join(__dirname, 'tmp', 'db')
    var db = createDB(dbFilePath)
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
})
