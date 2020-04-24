
function clock() { 

    const fullDate = new Date();
    var fullhour = (fullDate.getHours());
    var hours = (fullDate.getHours() % 12 || 12);
    var mins  = fullDate.getMinutes();
    var sec = fullDate.getSeconds();
    var AmPm = (fullhour >= 12) ? "PM" : "AM";

    if ( hours < 10) {
        hours = "0" + hours;
    }

    if ( mins < 10) {
        mins = "0" + mins;
    }
    if ( sec < 10) {
        sec = "0" + sec;
    }
    
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML =":" + mins;
    document.getElementById('sec').innerHTML =":" + sec; 
    document.getElementById('amPm').innerHTML = AmPm;   
  
}

setInterval(clock , 100);


// document.querySelector(".butt").addEventListener("click", () => {
//     document.querySelector(".IframeWish").style.display = "none";
// })
// let mydoc = document.querySelector(".shift").addEventListener("click", prepareFrame);

// function prepareFrame(e) {
//     e.preventDefault();
//     let autoplay = 1
//     let play = document.querySelector(".shift")
//     let shift = play.getAttribute("href");
//     let player = shift
//     let ifrm = document.createElement("iframe");

//     ifrm.setAttribute("src", `https://www.youtube.com/embed/${player}?autoplay=${autoplay}&loop=1`)
//     ifrm.style.width = "640px";
//     ifrm.style.height = "480px";
//     document.querySelector(".appended").appendChild(ifrm);
    
//     console.log(shift)
// };

// prepareFrame();


let butttype = document.querySelector(".butt").addEventListener("click", function() {
    document.getElementById("iframea").src = "https://www.youtube.com/embed/7NOSDKb0HlU?autoplay=1&loop=1"
    console.log("changed")
});

let minorKey = document.querySelector(".MinorKey").addEventListener("click", function() {
    document.getElementById("iframea").src = "https://www.youtube.com/embed/kH7qRf_KUyw?autoplay=1&loop=1"
    console.log("changed")
});


let Ndtv = document.querySelector(".Ndtv").addEventListener("click", function() {
    document.getElementById("iframea").src = "https://www.youtube.com/embed/l9ViEIip9q4?autoplay=1&loop=1"
    console.log("changed")
});

let heavymetal = document.querySelector(".HeavyMetal").addEventListener("click", function() {
    document.getElementById("iframea").src = "https://www.youtube.com/embed/dGfdGZ8cH-o?autoplay=1&loop=1"
    console.log("changed")
});




