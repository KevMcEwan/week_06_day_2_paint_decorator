const assert = require('assert');
const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('PaintCan', function(){
   let paintcan;

   it('can should have volume', function (){
     const actual = paintcan.volume;
     assert.strictEqual(actual, 5);
   })

} );
