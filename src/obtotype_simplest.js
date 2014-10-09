//Very simple version without many goodies.

Object.prototype.project = function() {
  var res = Object.create(this);
  for (var i in res) { 
    if (typeof res[i] === 'object' && res[i] !== null) {
      res[i] = res[i].project();
    }
  }
  return res;
}

Object.prototype.proto = function() { return Object.getPrototypeOf(this); }




