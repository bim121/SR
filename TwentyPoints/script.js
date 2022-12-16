function startGame(){
    let wrapper= document.getElementById("wrapper");
    let sideUser = document.createElement("div");
    let sideGenerate = document.createElement("div");
    let sideEnemy = document.createElement("div");
    let inputUserName = document.getElementById("user__name");
    let userName = inputUserName.value;
    if(userName === ""){
        alert("Enter name!!!");
        return;
    }
    wrapper.innerHTML = "";
    wrapper.appendChild(sideUser);
    wrapper.appendChild(sideGenerate);
    wrapper.appendChild(sideEnemy);
    createSide(sideUser, userName, "user");
    createSide(sideEnemy, "Stepan", "enemy");
    let buttonGenerate = document.createElement("button");
    wrapper.style.flexDirection = "row";
    sideUser.className = "side";
    sideEnemy.className = "side";
    sideGenerate.className = "side";
    sideGenerate.id= "generate__side";
    buttonGenerate.innerText = "Generate";
    sideGenerate.appendChild(buttonGenerate);
    buttonGenerate.addEventListener( "click" , game);
}

function createSide(side, name, id){
    let label = document.createElement("label");
    let circle = document.createElement("div");
    let number = document.createElement("div");
    let text = document.createElement("p");
    let textCircle = document.createElement("p");
    side.appendChild(label);
    side.appendChild(number);
    side.appendChild(circle);
    number.appendChild(text);
    circle.appendChild(textCircle);
    label.className = "labels";
    circle.className = "circle";
    number.className = "randomNumber";
    number.id = "idLabel";
    text.id = "p"+id;
    textCircle.id = "circle"+id;
    text.innerText = "0";
    textCircle.innerText = "0";
    label.innerText = name;
}

function game(){
    let userNumber = document.getElementById("puser");
    let enemyNumber = document.getElementById("penemy");
    let userCircle = document.getElementById("circleuser");
    let enemyCircle = document.getElementById("circleenemy");

    let numUserCircle = Number(userCircle.innerText);
    let numEnemyCircle = Number(enemyCircle.innerText);
    let userNum = Math.round(Math.random() * 12);
    let enemyNum = Math.floor(Math.random() * 12);

    userNumber.innerText = userNum;
    enemyNumber.innerText=enemyNum;

    if(userNum > enemyNum){
        numUserCircle++;
    }else if (userNum < enemyNum){
        numEnemyCircle++;
    }

    if(numEnemyCircle === 5){
        alert("You lose(((");
        clear(userNumber, enemyNumber, userCircle, enemyCircle)
        return;
    }else if (numUserCircle === 5){
        alert("You win!!");
        clear(userNumber, enemyNumber, userCircle, enemyCircle)
        return;
    }
    userCircle.innerText = String(numUserCircle);
    enemyCircle.innerText = String(numEnemyCircle);
}

function clear(userNumber, enemyNumber, userCircle, enemyCircle){
    userNumber.innerText = 0;
    enemyNumber.innerHTML = 0;
    userCircle.innerText = 0;
    enemyCircle.innerText = 0;
}