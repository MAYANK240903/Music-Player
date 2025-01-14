let Songs = [
    {
        id:1,
        name:"Shape Of You",
        artist:"Ed Sheeran",
        img:"song1.jpeg",
        genre:'pop',
        source:'song1.mp3',
    },
    {
        id:2,
        name:"Tu Aake Dekhle",
        artist:"King",
        img:"song2.jpeg",
        genre:'Hip-Hop',
        source:'song2.mp3',

    },
    {
        id:3,
        name:"Tu Maan Meri Jaan",
        artist:"King",
        img:"song3.jpg",
        genre:'Hip-Hop',
        source:'song3.mp3',
    },
    {
        id:4,
        name:"Saware",
        artist:"Arijit Singh",
        img:"song4.jpg",
        genre:'romantic',
        source:'song4.mp3',
    },
    {
        id:5,
        name:"Pehla Pyar",
        artist:"Armaan Malik",
        img:"song5.jpg",
        genre:'romantic',
        source:'song5.mp3',
    },
];
let playlist= [
    
];


const slideButton = document.querySelector('.slider');
const lightcolor = document.querySelector('.lightcolor');
const root = document.documentElement;
const songList = document.querySelector('.songs-list');
const filterSongs = document.querySelector('#filter');
const photoSong = document.querySelector('.photo');
const songName = document.querySelector('.song-name');
const songAuthor = document.querySelector('.song-author');
const songPlay = document.querySelector('.song-play');
const currentPlaylist = document.querySelector('.current-playlist');
const addToPlaylist = document.querySelector('.add-to-playlist');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const inputPlaylist = document.querySelector('.input-playlist');
const createPlaylist = document.querySelector('.enter');
const allPlaylist = document.querySelector('.all-playlist');
const inputSong = document.querySelector('.search-song');
const searcher = document.querySelector('.searched');
const remove = document.querySelector('#remove');

let bgcolor = "white";
slideButton.addEventListener('click', () => {
    if (lightcolor.textContent=="Dark"){
        slideButton.classList.toggle('slide-to-black');
        slideButton.classList.remove('slide-to-white');
        lightcolor.textContent="Light";
        root.style.setProperty('--main-color', 'rgb(77, 75, 75)');
        root.style.setProperty('--black-color', 'white');
        root.style.setProperty('--card-color', 'rgb(35, 75, 62)');
        root.style.setProperty('--shading-color', 'rgb(20, 88, 20)');
        root.style.setProperty('--song-color', 'rgb(47 , 125 , 47)');
        root.style.setProperty('--filter-color', 'darkgreen');
    }                                       
    else if(lightcolor.textContent=="Light"){
        slideButton.classList.toggle('slide-to-white');
        slideButton.classList.remove('slide-to-black');
        lightcolor.textContent="Dark";
        root.style.setProperty('--main-color', 'white');
        root.style.setProperty('--black-color', 'black');
        root.style.setProperty('--card-color', '#6bb8de');
        root.style.setProperty('--shading-color', '#9282B0');
        root.style.setProperty('--song-color', '#0B81BC');
        root.style.setProperty('--filter-color', '#3F708A');
    }
});



showSong("All");
function showSong(Genre){
    songList.textContent="";
    if (Genre=="All"){
        for (let i=0 ; i<Songs.length ; i++){
            const song = document.createElement('div');
            song.classList.add('songs');
            song.textContent=Songs[i].name;
            songList.appendChild(song);
            song.addEventListener('click' , ()=>{
                renderCurrentSong(Songs[i]);
            });
        }
    }
    else {
        for (let i=0 ; i<Songs.length ; i++){
            if (Genre==Songs[i].genre){
                const song = document.createElement('div');
                song.classList.add('songs');
                song.textContent=Songs[i].name;
                songList.appendChild(song);
                song.addEventListener('click' , ()=>{
                    renderCurrentSong(Songs[i])
                });
            }
        }
    }
}
addGenre();
function addGenre() {
    var uniqueGenre = {};
    for (var i = 0; i < Songs.length; i++) {
        var currentSong = Songs[i];
        if (!uniqueGenre[currentSong.genre]) {
            var newGenre = document.createElement('option');
            newGenre.value = currentSong.genre;
            newGenre.text = currentSong.genre;
            filterSongs.appendChild(newGenre);
            uniqueGenre[currentSong.genre] = true;
        }
    }
}
filterSongs.addEventListener('change' , (event)=>{
    console.log(event.target.value);
    showSong(event.target.value);
});

function renderCurrentSong(currentSong){
    photoSong.src=currentSong.img;
    songAuthor.textContent=currentSong.artist;
    songName.textContent=currentSong.name;
    songPlay.src=currentSong.source;
    songPlay.load();
}

function addtoPlaylist(){
    let j=0;
    for ( ; j<playlist.length ; j++){
        if (currPlaylist==playlist[j].name){
            break;
        }
    }
    let found= false;
    for (let i=0 ; i<playlist[j].songs.length ; i++){
        if (playlist[j].songs[i]==songName.textContent){
            found=true;
        }
    }
    if (found==false){
    
        for (let i=0 ; i<Songs.length ; i++){
            if (songName.textContent==Songs[i].name){
                const newSong = document.createElement('div');
                newSong.textContent = Songs[i].name;
                newSong.classList.add('songs');
                currentPlaylist.appendChild(newSong); 
                playlist[j].songs.push(Songs[i].name);
                break;
            }
        }
    }
}
addToPlaylist.addEventListener('click' , addtoPlaylist);


prevBtn.addEventListener('click' , ()=>{
    for (let i=0; i<Songs.length ; i++){
        if (songName.textContent==Songs[i].name){
            let j=i-1;
            if (i==0){
                j=Songs.length-1;
            }
            renderCurrentSong(Songs[j]);
            break;
        }
    }
});
nextBtn.addEventListener('click' , ()=>{
    for (let i=0; i<Songs.length ; i++){
        if (songName.textContent==Songs[i].name){
            let j=i+1;
            if (i==Songs.length-1){
                j=0;
            }
            renderCurrentSong(Songs[j]);
            break;
        }
    }
});

function renderPlaylistSong(){
    for (let i=0 ; i<playlist.length ; i++){
        if (playlist[i].name==currPlaylist){
            var singing = playlist[i].songs;
            for (let j=0 ; j<singing.length ; j++){
                for (let k=0 ; k<Songs.length ; k++){
                    if (Songs[k].name==singing[j]){
                        const song = document.createElement('div');
                        song.classList.add('songs');
                        song.textContent=Songs[k].name;
                        currentPlaylist.appendChild(song);
                        song.addEventListener('click' , ()=>{
                            renderCurrentSong(Songs[k]);
                        });
                        break;
                    }
                }
            }
            break;
        }
    }
}

function showPlaylist(name){
    if (name==""){
        allPlaylist.textContent="";
        for (let i=0 ; i<playlist.length ; i++){
            const newPlaylist = document.createElement('div');
            newPlaylist.textContent=playlist[i].name;
            newPlaylist.classList.add('songs');
            allPlaylist.appendChild(newPlaylist);
            newPlaylist.addEventListener('click' , ()=>{
                
                currentPlaylist.textContent="";
                currPlaylist=playlist[i].name;
                renderPlaylistSong();
            });
        }
    }
    else{
        allPlaylist.textContent="";
        const newPlaylist = document.createElement('div');
        newPlaylist.textContent=name;
        newPlaylist.classList.add('songs');
        allPlaylist.appendChild(newPlaylist);
        newPlaylist.addEventListener('click' , ()=>{
            
            currentPlaylist.textContent="";
            currPlaylist=name;
            renderPlaylistSong();
        });
    }
}

let currPlaylist="";
let playlistexist = false;
createPlaylist.addEventListener('click' , ()=>{
    for (let i=0 ; i<playlist.length ; i++){
        if (inputPlaylist.value==playlist[i].name){
            playlistexist=true;
            showPlaylist(inputPlaylist.value);
            break;
        }
    }
    if (inputPlaylist.value==""){
        showPlaylist("");
    }
    else if (playlistexist==false){
        showPlaylist("");
        const play ={};
        const newPlaylist = document.createElement('div');
        newPlaylist.textContent=inputPlaylist.value;
        play.name=inputPlaylist.value;
        play.songs=[];
        newPlaylist.classList.add('songs');
        allPlaylist.appendChild(newPlaylist);
        playlist.push(play);
        newPlaylist.addEventListener('click' , ()=>{
            
            currentPlaylist.textContent="";
            currPlaylist=play.name;
            renderPlaylistSong();
        });
    }
    playlistexist=false;
});

searcher.addEventListener('click' , ()=>{
    songList.textContent="";
    if (inputSong.value==""){
        showSong("All");
    }
    for (let i=0 ; i<Songs.length ; i++){
        if (Songs[i].name.toLowerCase()==inputSong.value.toLowerCase()){
            const song = document.createElement('div');
            song.classList.add('songs');
            song.textContent=Songs[i].name;
            songList.appendChild(song);
            song.addEventListener('click' , ()=>{
                renderCurrentSong(Songs[i]);
            });
        }
    }
});

remove.addEventListener('click' , ()=>{
    for (let i=0 ; i<playlist.length ; i++){
        if (playlist[i].name==currPlaylist){
            let play = playlist[i].songs;
            for (let j=0 ; j<play.length ; j++){
                if (songName.textContent==play[j]){
                    playlist[i].songs.splice(j, 1);
                    currentPlaylist.textContent="";
                    renderPlaylistSong();
                    
                    break;
                }
            }
            break;
        }
    }
});        
