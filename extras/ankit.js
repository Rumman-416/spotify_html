console.log("welcome to spotify");
//intitialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/ankit/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('range');
let songItems = Array.from(document.getElementsByClassName('sp'));

let songs = [
    {songName: "Galliyan",filePath: "songs/ankit/1.mp3",coverPath:"covers/a-1.jpg"},
    {songName: "Tu Hai Ki Nahi",filePath: "songs/ankit/2.mp3",coverPath:"covers/a-2.jpg"},
    {songName: "Dekh Lena",filePath: "songs/ankit/3.mp3",coverPath:"covers/a-3.jpg"},
    {songName: "Pyaar de",filePath: "songs/ankit/1.mp3",coverPath:"covers/4.jpg"},
    {songName: "Sanam teri kasam",filePath: "songs/ankit/2.mp3",coverPath:"covers/5.jpg"},

]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("sn")[0].innerText = songs[i].songName; 
})

// Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');   
        element.classList.add('fa-play');   

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/ankit/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){ //will be changed later
        songIndex=0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/ankit/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=0){ //will be changed later
        songIndex=0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/ankit/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})