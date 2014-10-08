//Very simple version without many goodies.

Object.prototype.clone = function() {
  var res = Object.create(Object.getPrototypeOf(this));
  for (var i in this) 
    if (this.hasOwnProperty(i) ) { 
      res[i] = this[i];
      if (typeof res[i] === 'object' && res[i] !== null)
        res[i] = res[i].clone();
    }
    return res;
}

Object.prototype.project = function() {
  var res = Object.create(this);
  for (var i in res) { 
    if (typeof res[i] === 'object' && res[i] !== null) {
      if ( i.startsWith('$$') )
        ;
      else if ( i.startsWith('__') )
        res[i] = res[i].clone();
      else
        res[i] = res[i].project();
    }
  }
  return res;
}

Object.prototype.proto = function() { return Object.getPrototypeOf(this); }




