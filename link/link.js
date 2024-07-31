document.write("hello");

var link=document.getElementsByTagName("a")[0];
link.innerHTM
link.innerHTML="ahmad";

//link.style.textDecoration="none"

link.href="https://www.google.com";
link.style.color="metal"

var heading1=document.getElementsByTagName("h1")[0];
heading1.innerHTML="Say";

var heading2=document.createElement("h1");
var text=document.createTextNode("this is added");
heading2.appendChild(text);

var mydiv=document.getElementsByClassName("mydiv")[0];
mydiv.appendChild(heading2);


