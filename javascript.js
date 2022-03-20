const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
container.style.cssText = "display:flex; flex-flow:row wrap; width: 965px; border: 1px solid black";
body.style.margin="0";
let squareGridArr=[];
let size=16;

body.style.cssText="display:flex; flex-direction:column; align-items:center"

const html = document.querySelector("html");
/*
const asterisk = document.querySelector("*");
const asterisk2 = document.querySelector("*:before");
const asterisk3 = document.querySelector("*:after");
*/


html.style.boxSizing= "border-box";


/*asterisk.style.boxSizing= "inherit";
asterisk2.style.boxSizing= "inherit";
asterisk3.style.boxSizing= "inherit";
*/


const button = document.createElement("button");
button.textContent="start a new grid";
button.addEventListener("click", ()=>{
    let tempSize=size;
    do {
        size=prompt("what size do you want it to be? (max is 100)")
    } while ((!(size<=100)))
    console.log(size)
    console.log(tempSize)
    if (size === null){
        return;
    }
    console.log(`tempSize: ${tempSize}`)
    console.log(`size: ${size}`)
    deleteAll(tempSize);
    resetCustom();
    setCustom(size);
    addAll(size);
});

const topMenu = document.createElement("div")
topMenu.style.cssText="display:flex; align-items:center; justify-content:center; gap: 20px"

const explanation = document.createElement("h3");
explanation.textContent="press r to restart"


addEventListener("keypress",(e)=>{
    if (e.key=="r"){
        reset();
    }
})

function reset(){
    for(let i =0; i< squareGridArr.length; i++){
        squareGridArr[i].style.backgroundColor="white";
    }
}

function deleteAll(size=16){
    for(let i =0; i< size*size; i++){
        container.removeChild(squareGridArr[i]);
    }
}

function addAll(size=16){
    for(let i =0; i< size*size; i++){
        container.appendChild(squareGridArr[i]);
    }
}

function resetCustom(){
    squareGridArr=[]
}

function setCustom(size=16){
    for(let i =0; i< size*size; i++){
        let currentSquare=document.createElement("div")
        currentSquare.classList.add(`${i}`);
        currentSquare.style.cssText = `height:${960/size}px; width:${960/size}px `
        squareGridArr.push(currentSquare);
    
        currentSquare.addEventListener("mouseenter",()=>{
            currentSquare.style.backgroundColor="black";
        })
    }
}



body.appendChild(topMenu)
topMenu.appendChild(button);
topMenu.appendChild(explanation);
body.appendChild(container);
setCustom()
addAll();


