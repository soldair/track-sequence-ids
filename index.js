



module.exports = function(save){

  var activeSeq = {}
  // started sequences are tracked here.

  var maxDone = 0
  // this value keep track of the highest completed sequence
  // used when there are no activeSeq to make sure we save the 
  // highest value from completed jobs

  return start

  function start(sequence){
    activeSeq[sequence] = sequence

    return function done(){
      delete activeSeq[sequence]

      if(sequence > maxDone) maxDone = sequence

      var keys = Object.keys(activeSeq)
      var k

      var update = true
      for(var i=0;i<keys.length;++i){
        k = keys[i]
        if(activeSeq[k] < sequence) {
          update = false
          break
        }
      }

      // the lowest active sequence was completed!
      if(update) {
        if(!keys.length){
          sequence = maxDone
        }
        start.seq = sequence
        save(sequence)
      }

    } 
  }

}




