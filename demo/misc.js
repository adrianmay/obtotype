function flatten(obj) {
    var result = Object.create(obj);
    for(var key in result) {
        result[key] = typeof result[key] === 'object' ? flatten(result[key]) : result[key];
    }
    return result;
}

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}
