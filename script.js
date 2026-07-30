const unlockBtn = document.getElementById("unlockBtn");
const password = document.getElementById("password");
const error = document.getElementById("error");
//const unlockBtn = document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", checkPassword);

password.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        checkPassword();
        // document.getElementById("loading-screen").style.display = "flex";

        // startLoading();
        
    }

});

function checkPassword(){

    const answer = password.value.trim().toLowerCase();

    if(
        answer === "04.08.2005" ||
        answer === "04.08.2005" ||
        answer === "04.08.2005"
    ){

        error.style.color = "#8cff8c";
        error.innerHTML = "✅ Access Granted";
        setTimeout(() => {

    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("loading-screen").style.display = "flex";

    startLoading();
    playMusic();

},1000);

        // Agle step mein loading screen yahan se show hogi.

    }
    else{

        error.style.color = "#ff8b8b";
        error.innerHTML = "❌ Only My Jaan Ji Can Enter ❤️";

        password.value = "";
        password.focus();

    }

}
function startLoading(){

    const loadingText = document.getElementById("loadingText");

    const message = `Verifying Identity...

██████████████ 100%

Identity Verified ✅

Welcome,
Jaan Ji ❤️

Preparing Your Surprise...`;

    let i = 0;

    function typing(){

        if(i < message.length){

            loadingText.textContent += message.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();
        setTimeout(() => {

    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("intro-screen").style.display = "flex";

},7000);
}
document.addEventListener("click", function(e){

    if(e.target.id === "startJourney"){

        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("gallery-screen").style.display = "flex";

        startSlideshow();
        // document.getElementById("video-screen").style.display="flex";

        // stopMusic();

        // document.getElementById("birthdayVideo").play();

    }

});
const photos = [

"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpg"

];

const captions = [

"Har khoobsurat kahani ki ek shuruaat hoti hai... ❤️",

"Aur meri favourite kahani... tum ho. 🌹",

"Tumhari muskurahat meri duniya roshan karti hai. ✨",

"Kuch yaadein kabhi purani nahi hotin. 💖",

"Tum meri favourite notification ho. 😊",

"Har tasveer ek nayi yaad hai. 🌸",

"Dooriyan yaadon ko kam nahi kartin. 🌙",

"Har lamha tumhare naam. ❤️",

"Aaj ka din sirf tumhara hai. 🎂",

"Happy Birthday, Jaan Ji ❤️"

];

let current = 0;

function startSlideshow(){

    const image = document.getElementById("slideImage");
    const bgImage = document.getElementById("bgImage");
    const title = document.getElementById("captionTitle");

    image.src = photos[0];
    bgImage.src = photos[0];
    // title.innerHTML = captions[0];
    typeCaption(captions[0]);
    const slideshow = setInterval(()=>{

        current++;

        if(current >= photos.length){

    clearInterval(slideshow);

    setTimeout(()=>{

        document.getElementById("gallery-screen").style.display="none";

        document.getElementById("video-screen").style.display="flex";
        stopMusic();
        document.getElementById("birthdayVideo").play();

    },1000);

    return;

    }

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = photos[current];
            bgImage.src = photos[current];
            image.style.animation = "none";

            image.offsetHeight;

            image.style.animation = "kenburns 5s linear forwards";
            typeCaption(captions[current]);

            image.style.opacity = "1";

        },600);

    },5000);

}
function typeCaption(text){

    const title = document.getElementById("captionTitle");

    title.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}
function createHeart(){

    const container = document.getElementById("hearts-container");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}
setInterval(createHeart,1200);
function createSparkle(){

    const container = document.getElementById("sparkles-container");

    const dot = document.createElement("div");

    dot.className = "sparkle";

    dot.style.left = Math.random()*100 + "%";

    dot.style.bottom = "-10px";

    dot.style.width = (2 + Math.random()*4) + "px";
    dot.style.height = dot.style.width;

    container.appendChild(dot);

    setTimeout(()=>{

        dot.remove();

    },5000);

}
setInterval(createSparkle,300);
const video = document.getElementById("birthdayVideo");

video.addEventListener("ended", () => {

    document.getElementById("video-screen").style.display = "none";

    document.getElementById("memory-screen").style.display = "flex";

    resumeMusic();

});
document.addEventListener("click", function(e){

    if(e.target.id === "playMemory"){

        document.getElementById("memory-screen").style.display = "none";

        document.getElementById("video2-screen").style.display = "flex";

        stopMusic();

        document.getElementById("memoryVideo").play();

    }

});
const memoryVideo = document.getElementById("memoryVideo");

memoryVideo.addEventListener("ended", () => {

    document.getElementById("video2-screen").style.display = "none";

    document.getElementById("last-card").style.display = "flex";

    resumeMusic();

});
document.addEventListener("click", function(e){

    if(e.target.id === "playLastVideo"){

        document.getElementById("last-card").style.display = "none";

        document.getElementById("video3-screen").style.display = "flex";

        stopMusic();

        document.getElementById("finalVideo").play();



    }

});
const finalVideo = document.getElementById("finalVideo");

if(finalVideo){

    finalVideo.addEventListener("ended", () => {

        document.getElementById("video3-screen").style.display = "none";

        document.getElementById("ending-screen").style.display = "flex";

        resumeMusic();

    });

}
// setTimeout(() => {

//     const ending = document.getElementById("movieEnding");

//     if(ending){

//         ending.innerHTML = "No... ❤️";

//     }

// });

// setTimeout(() => {

//     const ending = document.getElementById("movieEnding");

//     if(ending){

//         ending.innerHTML = "Because this beautiful memory will always live in my heart. 🌹❤️";

//     }

// });
// setTimeout(() => {

//     const ending = document.getElementById("movieEnding");

//     if(ending){

//         ending.innerHTML = "❤️<br><br>Thank You<br>For Being Part Of My Life.";

//     }

// });

// setTimeout(() => {

//     const ending = document.getElementById("movieEnding");

//     if(ending){

//         ending.innerHTML = "🤲✨<br><br>May Allah always protect you,<br>keep you smiling,<br>and bless every step of your life.<br><br>Ameen ❤️";

//     }

// });

setTimeout(() => {

    const ending = document.getElementById("movieEnding");

    if(ending){

        ending.innerHTML = "Made with ❤️<br><br>Especially For<br><br><span style='color:#ff69c8;'>Jaan Ji 🌹</span>";

    }

},5000);

// setTimeout(() => {

//     document.getElementById("ending-screen").classList.add("fade-out");

// });

// setTimeout(() => {

//     document.body.innerHTML = `

//     <div style="
//     width:100%;
//     height:100vh;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     background:black;
//     color:white;
//     font-size:40px;
//     text-align:center;
//     ">

//         ✨ See You Again... ❤️ ✨

//     </div>

//     `;

// },39000);
// Tumhara last setTimeout

// },39000);

const bgMusic = document.getElementById("bgMusic");

function playMusic(){

    bgMusic.volume = 0.25;

    bgMusic.play().catch(()=>{});

}

function stopMusic(){

    bgMusic.pause();

}

function resumeMusic(){

    bgMusic.play().catch(()=>{});

}
