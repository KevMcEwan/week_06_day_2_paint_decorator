const PaintCan = function(volume){
  this.volume = volume;
};

PaintCan.prototype.emptyCan = function(){
  this.volume = 0;
}

module.exports = PaintCan;
