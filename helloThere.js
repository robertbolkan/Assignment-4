function helloThere(){

    var audio = new Audio('../audio/obi-wan-hello-there.mp3');
audio.play();

}

function aboutMe(){
    // alert("mouseover works")
    document.getElementById("aboutMeVis").style.opacity=50;
}

function mouseOut(){
    //had to make a function because reasons
    document.getElementById("aboutMeVis").style.opacity=0;
}