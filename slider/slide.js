
var cnt=0, photos=["images/camera.jpeg", "images/tiger.jpeg"], imgtag=document.querySelector("img");

function next(){
    cnt++;
    cnt%=2;
    imgtag.src=photos[cnt];
}

function previous(){
    cnt--;
    cnt+=2;
    cnt%=2;
    imgtag.src=photos[cnt];
}