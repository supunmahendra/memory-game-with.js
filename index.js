
//console.log(document.title)


//let welcomemsg = document.getElementById( "welcome-t");
//console.log(welcomemsg.textContent);

//welcomemsg.textContent = "new masg"

//console.log(welcomemsg);

//const username="s";
//if (username!="" || null ){
//    welcomemsg.textContent = `welocme ${username}`
//}
//else{
//    welcomemsg.textContent = `welocme gust`
//}
//console.log(welcomemsg);
 //const par =document.getElementById("container")
 //console.log(par);
 //const parp = container.getElementsByTagName("p")
 //console.log(parp);
 

 //const parg =document.getElementsByClassName("tt")
 //console.log(parg);

//let query = document.querySelector("p")
//console.log(query);

//class .
//id #
//let firstmsg = document.querySelector("#container .tt")
//console.log(firstmsg);

//let allpar = document.querySelectorAll("#container p ")
//console.log(allpar);

//let childnode= document.querySelector(".child")
//console.log(childnode);
//console.log(childnode.parentNode);

//let containerParent = document.querySelector("#container")
//console.log(containerParent.firstElementChild);

//let terdChildNode = document.querySelector(".terd")
//console.log(terdChildNode)
//console.log(terdChildNode.nextElementSibling)
//console.log(terdChildNode.previousElementSibling)

//let parent = document.querySelector("#container")

//let newpara = document.createElement("h2")
//newpara.textContent = "this is new"
//console.log(newpara)
//parent.appendChild(newpara)
//console.log(parent)

//let image =document.getElementById("image")
//console.log(image.attributes)
//console.log(image.getAttribute("src"))
//image.setAttribute("src", "Image/newpath.png")
//console.log(image.getAttribute("src"))
//image.removeAttribute("alt")
//console.log(image.hasAttribute("alt"))

//let mainId=document.getElementById("main-id")
//console.log(mainId.classList)
//mainId.classList.add("FifthClass")
//console.log(mainId.classList)

//mainId.classList.remove("first")
//console.log(mainId.classList)

//mainId.classList.replace("second", "seven")
//console.log(mainId.classList)

//let button = document.getElementById("btn")
//console.log(button)

//function displayMassage(){
 //   alert ("hei tou have cliked")
//}

//button.addEventListener("click",displayMassage)
//button.removeEventListener("click", displayMassage)




/*
const cardArray = [
    {
        name:'flet welcomemsg =ries',
        img:images/fries.png
    },
    {
        name:'fries',
        img:images/fries.png
    },
    {
        name:'fries',
        img:images/fries.png
    },
    {
        name:'fries',
        img:images/fries.png
    },
    {
        name:'fries',
        img:images/fries.png
    },
    {
        name:'fries',
        img:images/fries.png
    }
]




function shuffleArray (array){
    return array.sort(()=> 0.5 - Math.random());
}
shuffleArray(cardArray);
console.log(cardArray);

const result =document.querySelector("#result");
const board =document.querySelector("#board");

function createBoard(){
    for(let i=0; i<=cardArray.length ; i++){
        
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
        console.log (card, i);
        board.appendChild(card);
    }
}

createBoard();

let cardClicked =[];
let cardClickedId =[];
let cardMatched= [];

function checkForMatch(params) {
    console.log("check for match");

    if (cardClicked[0] == cardClicked[1] {
        console.log("match");
        card[cardClicked(0)].setAttribute('src', images/white.png);
        card[cardClicked(1)].setAttribute('src', images/white.png);

        card[cardClicked(0)].removeEventListener('click',flipCard);
        card[cardClicked(1)].removeEventListener('click',flipCard);
    }
    else{
        console.log("no match");
        card[cardClicked(0)].setAttribute('src', images/blank.png);
        card[cardClicked(1)].setAttribute('src', images/blank.png);
    }

    let cardClicked =[];
    let cardClickedId =[];

    if (cardMatched.length == 6cardArray.length/2) {
        console.log ("you have won the game");
        
    }

}

function flipCard(params) {
    console.log ('card fliped');
   
    let cardId =this. getAttribute('id');
    cardClicked.push(cardArray[cardId].name);
    console.log(cardClicked);

    this.setAttribute('src', cardArray[cardId].img);
    

    if(cardClicked.lengt === 2){
        console.log("check for match");
        setTimeout(checkForMatch, 500);
    }
}*/

const cardArray = [
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'Milkshake',
        img:'images/Milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'Milkshake',
        img:'images/Milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
]

function shuffleArray(array){
    return array.sort(()=> 0.5 - Math.random())
}
shuffleArray(cardArray)

const result =document.querySelector("#result")
const board =document.querySelector("#board")


function createBoard() {
    for (let i=0;  i<cardArray.length ; i++){
        const card = document.createElement("img");
        card.setAttribute ("src", "images/blank.png");
        card.setAttribute ("id", i);
        card.addEventListener("click", flipCard );
        board.appendChild(card);
    }
}
createBoard()

let cardClicked =[];
let cardClickedId =[];
let cardMatched =[];
let cardCount =[];

console.log(shuffleArray(cardArray))

function CheckForMatch(){
    const card= document.querySelectorAll('#board img')
    console.log(card)
    cardCount.push(cardClicked)
    console.log (cardCount.length)

    if(cardClicked[0]===cardClicked[1]){
        console.log("match")
        card[cardClickedId[0]].setAttribute("src", "images/white.png")
        card[cardClickedId[1]].setAttribute("src", "images/white.png")

        card[cardClickedId[0]].removeEventListener("click", flipCard)
        card[cardClickedId[1]].removeEventListener("click", flipCard)

        cardMatched.push(cardClicked);
    }
    else{
        card[cardClickedId[0]].setAttribute("src", "images/blank.png")
        card[cardClickedId[1]].setAttribute("src", "images/blank.png")
    }

    cardClicked =[];
    cardClickedId =[];
    console.log (cardMatched)

    if(cardMatched.length === cardArray.length/2){
    console.log (cardMatched.length/(cardCount.length)*100)
    
    let count = document.createElement("h3");
    count.textContent= (cardMatched.length/(cardCount.length)*100)+"%"
    result.appendChild(count);
    }
}


console.log (cardMatched)

if(cardMatched.length === cardArray.length/2){
    console.log ("won")
}



function flipCard(){
    console.log("card flipped")
    let cardId=this.getAttribute("id")
    cardClicked.push(cardArray[cardId].name)
    this.setAttribute("src",cardArray[cardId].img )

    cardClickedId.push(cardId)
    
    if (cardClicked.length === 2){
        setTimeout(CheckForMatch, 600);
    }
    

    //const flipCard = document.createElement("img");
       // flipcard.setAttribute ("src", "images/fries.png");
       // flipcard.setAttribute ("id", i);
       // board.appendChild(flipCard);
}

//console.log(cardArray)

