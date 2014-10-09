
Object.prototype.edit = function (p, v, log) { 
  var ob = this.project();
  var target, s; 
  for (target = ob; s = p.shift();) {
    if (p.length)
      target = target[s];
    else
      target[s] = (typeof v === 'object') ? v.project() : v;
  }
  if (log!==undefined) 
    log.push(JSON.stringify(flatten(ob))); 
    //flatten brings all inherited properties into ultimate object
    // recursing for object-valued properties. It doesn't touch
    // the parameter
  return ob;
}

Object.prototype.undo = function (log) {
  var ob = this.proto();
  if (log!==undefined) 
    log.push(JSON.stringify(flatten(ob)));
  return ob;
}

