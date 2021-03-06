function go() {
  var here = document.getElementById('here');
  function tabulate(l, r, p, n) {
    return ""+
      "<table border='1' width='100%'>"+
      "<tr><th>Source<th>Result"+
      "<tr style='vertical-align:top;'><td><pre>"+l+"</pre><td id='results'><pre>"+r+"</pre>"+
      "</table>"
  }
  function makeLink(title, url) { 
    return "<a href='"+url+"'>"+title+"</a>"; 
  }
  function maybeAddLinkToId(title, id) {
    var el = document.getElementById(id);
    return  el ? "<p>"+makeLink(title, el.getAttribute('src')) : "";
  }
  function setNav() {
    var pagename = document.location.href.match(/[^\/]+$/)[0];
    var next = navs[pagename].next;
    var prev = navs[pagename].prev;
    if (prev != '-')
      document.getElementById('prev').innerHTML = makeLink('Prev Demo', prev);
    if (next != '-')
      document.getElementById('next').innerHTML = makeLink('Next Demo', next);
  }
  setNav();

  var left = "";
  left += maybeAddLinkToId("Underlying library", 'core'); 
  left += maybeAddLinkToId("Overlying library", 'extra'); 
  left += document.getElementById('meat').innerHTML;

  var log = [];
  meat(log);
  var right = log.join("\n") + "\n\n\n";

  here.innerHTML = tabulate( left, right);
}
