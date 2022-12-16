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
    createSide(sideEnemy, "Enemy", "enemy");
    let buttonGenerate = document.createElement("button");
    buttonGenerate.className = "btn btn-lg btn-info";
    wrapper.style.flexDirection = "row";
    sideUser.className = "side col";
    sideEnemy.className = "side col";
    sideGenerate.className = "side col";
    sideGenerate.id= "generate__side";
    buttonGenerate.innerText = "Generate";
    sideGenerate.appendChild(buttonGenerate);
    buttonGenerate.addEventListener( "click" , game);
}

function createSide(side, name, id){
    let label = document.createElement("label");
    let card = document.createElement("div");
    let number = document.createElement("div");
    let text = document.createElement("p");
    let textCircle = document.createElement("p");
    side.appendChild(label);
    side.appendChild(number);
    side.appendChild(card);
    number.appendChild(text);
    label.className = "labels";
    card.className = "card";
    card.id = "Image"+id;
    card.style.backgroundImage = "url(./image/6.jpg)";
    number.className = "randomNumber";
    number.id = "idLabel";
    text.id = "p"+id;
    text.innerText = "0";
    label.innerText = name;
}

var attempt = 0;

function game(){
    let userNumber = document.getElementById("puser");
    let enemyNumber = document.getElementById("penemy");
    let userCard= document.getElementById("Imageuser");
    let enemyCard = document.getElementById("Imageenemy");

    let cards = [ 
        { image: 'url(./image/6.jpg)', score: 6},
        { image: 'url(./image/7.jpg)', score: 7 },
        { image: 'url(./image/8.jpg)', score: 8 },
        { image: 'url(./image/9.jpg)', score: 9 },
        { image: 'url(./image/10.jpg)', score: 10 },
        { image: 'url(./image/король.jpg)', score: 4 },
        { image: 'url(./image/dama.png)', score: 3 },
        { image: 'url(./image/tuz.png)', score: 2 },
        { image: 'url(./image/valet.jpg)', score: 11},
    ];
   
    let userNum = Math.floor(Math.random() * 8);
    let enemyNum = Math.floor(Math.random() * 8);

    let currentUserScore = Number(userNumber.innerText);
    let currentEnemyScore = Number(enemyNumber.innerText);
    enemyNumber.innerText = cards[enemyNum].score + currentEnemyScore;
    userNumber.innerText = cards[userNum].score + currentUserScore;
    userCard.style.backgroundImage = cards[userNum].image;
    enemyCard.style.backgroundImage = cards[enemyNum].image;
    attempt++;
    if(attempt === 5){
        if(Number(userNumber.innerText) > Number(enemyNumber.innerText)){
            alert("You win!!!!");
            clear(userNumber, enemyNumber, userCard, enemyCard);
            return;
        }
        if(Number(userNumber.innerText) < Number(enemyNumber.innerText)){
            alert("You lose((");
            clear(userNumber, enemyNumber, userCard, enemyCard);
            return;
        }
        if(Number(userNumber.innerText) === Number(enemyNumber.innerText)){
            alert("It's draw");
            clear(userNumber, enemyNumber, userCard, enemyCard);
            return;
        }
    }
}

function clear(userNumber, enemyNumber, userCard, enemyCard){
    userNumber.innerText = 0;
    enemyNumber.innerText = 0;
    userCard.style.backgroundImage = "url(./image/6.jpg)";
    enemyCard.style.backgroundImage = "url(./image/6.jpg)";
    attempt = 0;
}