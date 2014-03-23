var test = require('tape');
var manifesto = require('../');
var level = require('levelup');
var sublevel = require('level-sublevel');
var memdown = require('memdown');

test("can create readStream",function(t){

  var source = level('source',{db:memdown});
  var local = sublevel(level('local',{db:memdown}));


  var db = manifesto(local,source);


  var s = db.createReadStream()
  t.ok(s,'should have read stream');

  s.on('data',function(){}); // make it flowing.
  s.on('end',function(){
    t.ok(true,'ended');
    t.end();
  })

})
