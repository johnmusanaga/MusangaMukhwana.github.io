function pingy(){
var j = document.getElementById("number").value;
for (var i=1; i <= j; i++)
{
    if (i % 15 === 0)
        myprint("PingPong");
    else if (i % 3 === 0)
        myprint("Ping");
    else if (i % 5 === 0)
        myprint("Pong");
    else
        myprint(i);
}
}
function myprint(output) { 
  var p = document.createElement("p"); 
  var t = document.createTextNode(output); 
  p.appendChild(t);
  document.getElementById("content").appendChild(p);
}