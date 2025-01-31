const clock = document.querySelector('.clock');

setInterval( function(){
    const time = new Date();
    // console.log(time);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000)