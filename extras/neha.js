console.log("welcome to spotify");
//intitialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/neha kakkar/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('range');
let songItems = Array.from(document.getElementsByClassName('sp'));

let songs = [
    {songName: "Do gallan",filePath: "songs/neha kakkar/1.mp3",coverPath:"covers/n-1.jpg"},
    {songName: "Naina",filePath: "songs/neha kakkar/2.mp3",coverPath:"covers/n-2.jpg"},
    {songName: "Saiyaan ji",filePath: "songs/neha kakkar/3.mp3",coverPath:"covers/n-3.jpg"},
    {songName: "Shona Shona",filePath: "songs/neha kakkar/1.mp3",coverPath:"covers/6.jpg"},
    {songName: "Marjayenge",filePath: "songs/neha kakkar/2.mp3",coverPath:"covers/9.jpg"},

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
        audioElement.src = `songs/neha kakkar/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/neha kakkar/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/neha kakkar/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})