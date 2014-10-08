
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

Object.prototype.clone = function() {
  var res = Object.create(Object.getPrototypeOf(this));
  for (var i in this) 
    if (this.hasOwnProperty(i) ) { 
      //console.log("Found: "+i+":"+res[i]);
      res[i] = this[i];
      if (!i.startsWith('$$') && typeof res[i] === 'object' && res[i] !== null)
        res[i] = res[i].clone();
    }
    return res;
}

Object.prototype.project = function() {
  var res = Object.create(this);
  for (var i in res) { 
    //console.log("Found: "+i+":"+res[i]);
    if (!i.startsWith('$$') && typeof res[i] === 'object' && res[i] !== null)
      res[i] = res[i].clone();
  }
  return res;
}





