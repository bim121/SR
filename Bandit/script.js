var images = ["url(lemon.png)", "url(apple.jpg)", "url(strawbery.png)", "url(cherry.jpg)", "url(grapes.png)"];
var randomNum = Math.floor(Math.random() * 4);
var attempt;
var wrapper= document.getElementById("wrapper");
var inputUserName = document.getElementById("user__name");

function startGame(){
    var userName = inputUserName.value;
    if(userName === ""){
        alert("Enter name!!!");
        return;
    }
    let buttonGenerate = document.createElement("button");
    let containers = document.createElement("div");
    let row = document.createElement("div");
    let firstSquare =  document.createElement("div");
    let secondSquare =  document.createElement("div");
    let thirdSquare =  document.createElement("div");
    let fourthSquare =  document.createElement("div");
    let fifthSquare =  document.createElement("div");
    let sixthSquare =  document.createElement("div");
    let seventhSquare =  document.createElement("div");
    let eigthSquare =  document.createElement("div");
    let ninthSquare =  document.createElement("div");
    let userLabel = document.createElement("label"); 
    let countLabel = document.createElement("label");
    wrapper.innerHTML = "";
    attempt = 1;
    countLabel.id = "countLabel";
    containers.className = "containers";
    row.className = "row row-cols-3";
    buttonGenerate.innerText = "Generate";
    buttonGenerate.addEventListener( "click" , game);
    buttonGenerate.className = "btn btn-danger btn-lg";
    userLabel.innerText = userName;
    countLabel.innerText = "1 спроба із 3";
    AddSquare(row,firstSquare,1);
    AddSquare(row,secondSquare,2);
    AddSquare(row,thirdSquare,3);
    AddSquare(row,fourthSquare,4);
    AddSquare(row,fifthSquare,5);
    AddSquare(row,sixthSquare,6);
    AddSquare(row,seventhSquare,7);
    AddSquare(row,eigthSquare,8,);
    AddSquare(row,ninthSquare,9);
    wrapper.appendChild(userLabel);
    wrapper.appendChild(countLabel);
    wrapper.appendChild(buttonGenerate);
    wrapper.appendChild(containers);
    containers.appendChild(row);
}

function AddSquare(row, square, number){
    randomNum += 2;
    randomNum %= 5;
    row.appendChild(square);
    square.style.backgroundImage = images[randomNum];
    square.style.backgroundSize = "100% 100%";
    square.className = "col";
    square.id = "square" + number;
}

function game(){
    let countLabel = document.getElementById("countLabel");
    let arr = [
    document.getElementById("square1"),
    document.getElementById("square2"),
    document.getElementById("square3"),
    document.getElementById("square4"),
    document.getElementById("square5"),
    document.getElementById("square6"),
    document.getElementById("square7"),
    document.getElementById("square8"),
    document.getElementById("square9")
    ];

    attempt++;

    for(let i = 0; i < 9; i++){
        randomNum = Math.floor(Math.random() * 4);
        arr[i].style.backgroundImage = images[randomNum];
    }

    for(let i = 0; i < 9; i+=3){
        if(arr[i].style.backgroundImage === arr[i+1].style.backgroundImage && arr[i].style.backgroundImage === arr[i+2].style.backgroundImage){
            setTimeout(win, 100);
            return;
        }
    }

    if(attempt === 4){
        setTimeout(lose, 100);
        return;
    }

    countLabel.innerText = attempt + " спроба із 3"
}

function win(){
    alert("You win!!");
    startGame();
}

function lose(){
    alert("You lose((");
    startGame();
}