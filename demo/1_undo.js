
Object.prototype.edit = function (p, v, log) { 
  var ob = this.project();
  var target, s; 
  for (target = ob; s = p.shift();) {
    if (p.length)
      target = target[s];
    else
      target[s] = (typeof v === 'object') ? v.project() : v;
  }
  if (log!==undefined) log.push(JSON.stringify(flatten(ob)));
  return ob;
}

Object.prototype.undo = function (log) {
  var ob = Object.getPrototypeOf(this);
  if (log!==undefined) log.push(JSON.stringify(flatten(ob)));
  return ob
}

