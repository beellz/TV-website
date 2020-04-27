
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



// this is first trial for async await 

async function API(url) {

    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;

    


}

API('users').then(console.log);