var wrapper = document.createElement("div");
var button = document.createElement("button");
var magicBall = document.createElement("div");
var text = document.createElement("p");
wrapper.className = "wrapper";
magicBall.className = "magic__ball"
button.className = "prediction";
document.body.style.background = "#466368";
document.body.style.background = "linear-gradient(to right, #f6f1d3, #648880, #293f50)";
button.innerText = "Чи буде завтра сонячно?";
button.addEventListener( "click" , () => {
    let answ = ["No", "Yes"];
    let index = Math.round(Math.random() * 1);
    text.innerText = answ[index];
    });
document.body.appendChild(wrapper);
wrapper.appendChild(button);
wrapper.appendChild(magicBall);
magicBall.appendChild(text);