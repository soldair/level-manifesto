// wooo
var through = require('through');

module.exports = function(db,sourceDb){

  // create data and manifest sublevels

  var manifesto = db.sublevel('manifest');
  var data = db.sublevel('data')

 
  var stream = function(opts){
    //
    // start end lt gt lte gte reverse

    var out = through();

    // i pack this with functions i execute in order
    var dataStreams = [];



    // 
    var s = manifesto.createReadStream(opts)
    s.on('data',function(){

    }).on('end',function(){

    }).on('error',function(){
      // so much sadness
      
    })


    return out;

  }

  //


  var updateManifest = function(manifest,data){
    
  }

  // now patch all of the things
  var rs = data.readStream; 
  data.readStream = data.createReadStream = function(opts){

    return sourceDb.readStream(opts)

  }


  return data;

}


function prefix(p){
  split = p.split("\xffdata\xff");

}
