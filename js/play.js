var cross = document.getElementById("cross");
var myVideo = document.getElementById("myVideo")

function stopVideo(){
    cross.style.display="none";
}

function playVideo(file){
    myVideo.src=file;
    videoPlayer.style.display="block";  
}  