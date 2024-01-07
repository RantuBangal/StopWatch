let container = document.getElementById("container");

let stopWatch = document.createElement("div");
stopWatch.id = "Timer";
stopWatch.innerText = "00:00";

let ButtonDiv = document.createElement("div");
ButtonDiv.id = "ButtonsDiv";

let editButton = document.createElement("button");
editButton.id = "Edit";
editButton.className = "btn";
editButton.innerText = "Edit Timer";

let resetButton = document.createElement("button");
resetButton.id = "Reset";
resetButton.className = "btn";
resetButton.innerText = "Reset";

let startButton = document.createElement("button");
startButton.id = "Start";
startButton.className = "btn";
startButton.innerText = "Start";

ButtonDiv.append(editButton,resetButton,startButton);
container.append(stopWatch,ButtonDiv);
document.body.append(container);

let sec = 0;
let min = 0;
let id;
let id2;


function doubleDigit(num){
    if(num<=9){
        return "0"+num;
    }else {
        return num;
    }
}

function startWatch(){
    sec++;
    if(sec===60){
        sec=0;
        min++;
    }

    stopWatch.innerText = `${doubleDigit(min)}:${doubleDigit(sec)}`;
}

function resetWatch(){
    sec=0;
    min=0;
    stopWatch.innerText = `${doubleDigit(min)}:${doubleDigit(sec)}`;
}

function countDown(){
    if(sec>0){
        stopWatch.innerText = `${doubleDigit(min)}:${doubleDigit(sec)}`;
        sec--;
    }else{
        if(min>0){
            min--;
            sec=59;
            stopWatch.innerText = `${doubleDigit(min)}:${doubleDigit(sec)}`;
        }else{
            sec=0;
            stopWatch.innerText = `${doubleDigit(min)}:${doubleDigit(sec)}`;
            clearInterval(id);
        }
    }
}



startButton.addEventListener("click",()=>{
    if(startButton.innerText === "Start"){
        id = setInterval(startWatch, 1000);
        startButton.innerText = "Stop";
    }else{
        clearInterval(id);
        startButton.innerText = "Start";
    }
})

resetButton.addEventListener("click",()=>{
    clearInterval(id);
    resetWatch();
    startButton.innerText = "Start";
})


editButton.addEventListener("click",()=>{
    clearInterval(id);
    let userInput = prompt("Enter Initial Time", min);
    if(userInput !== null){
        min = parseInt(userInput) || 0;
        id2 = setInterval(countDown, 1000);
        startButton.innerText = "Stop";
    }else{
        clearInterval(id2);
        startButton.innerText = "Start";
    }
    
   
})
