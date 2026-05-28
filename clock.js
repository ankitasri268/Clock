let hr = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
function displayTime() {
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    let hrRotation = 30*hrs + mins/2 + secs/120;
    let minRotation = 6*mins + secs/10;
    let secRotation = 6*secs;
    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}
setInterval(displayTime, 1000)