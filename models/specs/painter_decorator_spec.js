const assert = require('assert');
const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('PaintCan', function(){
   let paintcan;

   beforeEach(function(){
     paintcan1 = new PaintCan(5)
   })

   it('can should have volume', function (){
     const actual = paintcan1.volume;
     assert.strictEqual(actual, 5);
   })

   it('should be able to empty can', function(){
     paintcan1.emptyCan();
     const actual = paintcan1.volume;
     assert.strictEqual(actual, 0);
   } )

} );


describe('Room', function(){
  let room;

  beforeEach(function(){
    room1 = new Room(10, 0)
  })

  it('should have an area', function()
  {
  const actual = room1.area;
  assert.strictEqual(actual, 10);
  })

  it('the area painted should be zero', function()
  {
  const actual = room1.areaPainted;
  assert.strictEqual(actual, 0);
  })

} );
