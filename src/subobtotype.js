
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



/*

var base = {
  bi:1, 
  bf: function () {console.log(bf);},
  bo: { boi: 10, bof: function () {return 100;} },
  $$bo: { boi: 10, bof: function () {return 100;} }
}

var d1 = base.project();

d1.bi=2;
d1.bo.boi=20;
d1.bo.bof=function () {return 200};
d1.$$bo.boi=30;
d1.$$bo.bof=function () {return 300};
console.log("bi:"+base.bi+";boi:"+base.bo.boi+";bof:"+base.bo.bof);
console.log("di:"+d1.bi+";doi:"+d1.bo.boi+";dof:"+d1.bo.bof);
console.log("$boi:"+base.$$bo.boi+";$bof:"+base.$$bo.bof);
console.log("$doi:"+d1.$$bo.boi+  ";$dof:"+d1.$$bo.bof);

var d2 = d1.project();

*/


