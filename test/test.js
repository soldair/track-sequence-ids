var track = require('../')
var test = require('tape')

test('can', function (t) {
  var saves = []
  var start = track(function (sequence) {
    // onsave function
    saves.push(sequence)
  })

  var done1 = start(1)
  var done2 = start(2)
  var done3 = start(3)

  done3()
  done1()
  done2()

  t.deepEquals([1, 3], saves, 'saves should be 1 then 3')
  t.end()
})
