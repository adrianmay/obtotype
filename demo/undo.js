
function flatten(obj) {
    var result = Object.create(obj);
    for(var key in result) {
        result[key] = result[key];
    }
    return result;
}

Object.prototype.edit = function (p, v, log) { 
  var ob = this.project();
  var target, s; 
  for (target = ob; s = p.shift();) {
    if (p.length)
      target = target[s];
    else
      target[s]=v;
  }
  if (log) console.log(JSON.stringify(flatten(ob)));
  return ob;
}

Object.prototype.undo = function (log) {
  var ob = Object.getPrototypeOf(this);
  if (log) console.log(JSON.stringify(flatten(ob)));
  return ob
}

var u = { }


u = u.edit(["a"],1);  
u = u.edit(["a"],2);
u = u.edit(["b"], { b1: 1, b2: 2});
u = u.edit(["b","b1"], 10);
u = u.undo();
u = u.undo();
u = u.undo();
u = u.undo();
