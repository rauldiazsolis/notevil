var run = require('..')
var test = require('tape')

test('inline functions', function(t){
  t.equal(run('[1, 2, 3, 10, 5].find(x => x == 10)'), 10)
  t.equal(run('[1, 2, 3, 10, 5].find(x => x == 8)'), undefined)
  t.end()
})

