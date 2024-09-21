let songs;
let currentSong = new Audio();
let currFolder;

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const totalSeconds = Math.floor(seconds); // Ensure we have an integer number of seconds
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    // Pad with leading zeros if needed
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
function playNext(){
    // console.log("playnext");
    let idx = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((idx + 1) < songs.length && (currentSong.currentTime) >= (currentSong.duration))
            playMusic(songs[idx + 1])
        else if((idx + 1) >= songs.length)
        play.src = "Assets/svg/playSong.svg"
}

async function getSongs(folder) {

    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/Spotify/Assets/${folder}`)
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    // console.log(as);
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3"))
            songs.push(element.href.split(`${folder}/`)[1]);
    }

    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="Assets/svg/playSong.svg" alt="">
        <div class="info">
            <div class="s-at">${song.replaceAll("%20", " ")} </div>
            <div class = "s-at">song artist</div>
        </div>
        <div class="playnow">
            <span>play now</span>
            <img class="invert" src="Assets/svg/playSong.svg" alt="">
        </div>
  </li>`;
    }

    //play the first song
    // var audio = new Audio(songs[0]);
    // audio.play();

    //attach an eventlistener to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        })
    })
    return songs;
}
const playMusic = (track, pause = false) => {
    // let audio = new Audio("/Spotify/Assets/Songs/" + track);
    currentSong.src = `/Spotify/Assets${currFolder}/` + track;
    // console.log(currentSong.src)
    if (!pause) {
        currentSong.play();
        play.src = "Assets/svg/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/Spotify/Assets/songs`)
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    // console.log(div)
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            // get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:3000/Spotify/Assets/songs/${folder}/info.json`)
            let response = await a.json();
            // console.log(response)

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card rounded">
            <img src="Assets/Songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
    // load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {

        e.addEventListener("click", async item => {
            // songs = await getSongs("/songs/ncs");
            // console.log(`/songs/${item.currentTarget.dataset.folder}`)
            songs = await getSongs(`/songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0]);
        })
    })
}


async function main() {


    await getSongs("/songs/ncs");
    // console.log(songs);
    playMusic(songs[0], true);

    //     let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
    //     for (const song of songs) {
    //         songUL.innerHTML = songUL.innerHTML + `<li>
    //         <img class="invert" src="Assets/svg/playSong.svg" alt="">
    //         <div class="info">
    //             <div class="s-at">${song.replaceAll("%20", " ")} </div>
    //             <div class = "s-at">song artist</div>
    //         </div>
    //         <div class="playnow">
    //             <span>play now</span>
    //             <img class="invert" src="Assets/svg/playSong.svg" alt="">
    //         </div>
    //   </li>`;
    //     }

    //     //play the first song
    //     // var audio = new Audio(songs[0]);
    //     // audio.play();

    //     //attach an eventlistener to each song
    //     Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
    //         e.addEventListener("click", element => {
    //             console.log(e.querySelector(".info").firstElementChild.innerHTML);
    //             playMusic(e.querySelector(".info").firstElementChild.innerHTML);
    //         })
    //     })

    // display all the albums on the page
    displayAlbums();


    //attach an event listener to play, next and prev
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "Assets/svg/pause.svg"
        }
        else {
            currentSong.pause();
            play.src = "Assets/svg/playSong.svg"
        }
    })

    //timeupdate
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration)
        // console.log(formatTime(currentSong.currentTime), formatTime(currentSong.duration));
        document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
        if(currentSong.currentTime == currentSong.duration)
            playNext();
    })

    //add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })

    //add hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    })


    //add prev and next btn
    prev.addEventListener("click", () => {
        currentSong.pause();
        let idx = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((idx - 1) >= 0)
            playMusic(songs[idx - 1])
    })
    next.addEventListener("click", () => {
        currentSong.pause();
        let idx = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((idx + 1) < songs.length)
            playMusic(songs[idx + 1])

    })

    //add volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    })


}
main();
