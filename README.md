# track-sequence-ids
if you are doing work related to sequence ids this tracks what you should store in your .sequence file.


```js

var tracker = require('track-sequence-ids')
var write = require('write-file-atomic')

var startSequence = tracker(function saveSequence(sequence){

  write('.sequence',sequence,function(){
    //done. only gets called once with 2 but only after sequence 1 is complete
  })

})

var done = startSequence(1)

setTimeout(function(){
  done()
},1000)

var done2 = startSequence(2)

setTimeout(function(){
  done2()
},500)
```


this logic ensures that you cant accidentally save a sequence id higher than jobs you have yet to complete.
it protects you from skipping jobs if you process multiple jobs at a time from the same queue.
