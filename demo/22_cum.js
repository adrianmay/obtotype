
  function rand(n) { return Math.floor(Math.random()*n); }

  function randRange(min, max, step) { return rand((max-min)/step)*step + min; }

  function formatTime(t) { 
    var h = Math.floor(t); 
    var m = t-h; 
    var s = (h<10?"0":"")+h+":"+60*m; 
    return s+(s.length-s.indexOf(':')<3?"0":""); 
  }

  function formatDay(day) {
    return " "+formatTime(day.start) + 
           " - (" + formatTime(day.lunch) +") - " + 
           formatTime(day.end) + " = " + 
           formatTime(day.tot()) + " => " + 
           formatTime(day.cum()); 
  }


