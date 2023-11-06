const body = document.body
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas")
let num = 16;
body.append(canvas);
let isDrawing = false
let isRainbowSelected = false;
const rainbow = document.querySelector("#rainbow");

function Painting(){
    const pixels = document.querySelectorAll(".pixels");
  
    pixels.forEach(pixel => {
        pixel.addEventListener("mousedown", () =>{
            isDrawing = true;
            pixel.style.backgroundColor = "black";
    
        })
        pixel.addEventListener("mouseenter", () => {
            if (isDrawing){
                pixel.style.backgroundColor = "black";
            } else return;
        })
        pixel.addEventListener("mouseup", () => {
            isDrawing = false;
        })
    })
}

function createGrids(){
    let numberOfSquare = num * num;
    for(let i = 1;i <= numberOfSquare; i++){
        const pixels = document.createElement("div");
        pixels.classList.add("class","pixels");
        canvas.appendChild(pixels);
        pixels.style.setProperty("--num", num);
        
    }
}


function removePixels() {
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach(pixel => {
        pixel.remove();
    })
}

createGrids();
Painting();

const changeGridButton = document.querySelector("#inputNum");

changeGridButton.addEventListener("click", () =>
{  
    removePixels();
    let input = prompt("number of grids");
    if(parseInt(input) > 100){
        num = 100;
    }
    else num = parseInt(input);
    createGrids();
    Painting();
    rainbow.style.backgroundColor = "#1F2937";
    isRainbowSelected = false;
   
})

// function rainbowPainting(){
function randomColor(){
    const pixels = document.querySelectorAll(".pixels");
let isRaibow = false;
function red(){
    return Math.floor(Math.random() * 256);
}
function blue(){
    return Math.floor(Math.random() * 256);
};
function green(){
    return Math.floor(Math.random() * 256);
}
    
pixels.forEach(pixel => {
    pixel.addEventListener("mousedown", () =>{
        isRaibow = true;
        pixel.style.backgroundColor = `rgb(${red()},${green()},${blue()})`;

    })
    pixel.addEventListener("mouseenter", () => {
        if (isRaibow){
            pixel.style.backgroundColor = `rgb(${red()},${green()},${blue()})`;
        } else return;
    })
    pixel.addEventListener("mouseup", () => {
        isRaibow = false;
    })
})}
    
rainbow.addEventListener("click", () => {
    if(isRainbowSelected === false){
        isRainbowSelected = true;
        randomColor();
        rainbow.style.backgroundColor = "red"
        console.log(isRainbowSelected)
    } else if (isRainbowSelected === true){
        isRainbowSelected = false;
        rainbow.style.backgroundColor = "#1F2937"
        Painting()
        console.log(isRainbowSelected)
    }
})
// }

