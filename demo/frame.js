function go() {
  var here = document.getElementById('here');
  function tabulate(l,r) {
    return "<table border='1' width='100%'><tr><th>Source<th>Result<tr style='vertical-align:top;'><td><pre>"+l+"</pre><td><pre>"+r+"</pre></table>"
  }
  var log = [];
  meat(log);
  var right = log.join("\n") + "\n\n\n";
  var left = document.getElementById('meat').innerHTML;
  
  function makeLink(title, url) { return "<a href='"+url+"'>"+title+"</a>"; }
  function maybeAddLinkToId(title, id) {
    var el = document.getElementById(id);
    return  el ? "<p>"+makeLink(title, el.getAttribute('src')) : "";
  }
  left += maybeAddLinkToId("Underlying library", 'core'); 
  left += maybeAddLinkToId("Overlying library", 'extra'); 
  here.innerHTML = tabulate( left, right );
}
