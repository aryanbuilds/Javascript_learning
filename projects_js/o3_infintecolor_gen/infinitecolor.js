const infinitecolor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervaltime = null; // Initially, interval is not running

const changecolor = function(){
    document.body.style.backgroundColor = infinitecolor();
};

const startchange = function(){
    if (!intervaltime) { // Prevent multiple intervals
        intervaltime = setInterval(changecolor, 2000);
    }
};

const stopchange = function(){
    clearInterval(intervaltime);
    intervaltime = null; // Clear interval reference
};

// Add event listeners
document.querySelector("#start").addEventListener("click", startchange);
document.querySelector("#stop").addEventListener("click", stopchange);
