const container=document.getElementById("container");
// for(let i=0;i<=111;i++){
//     const x=document.createElement("div");
//     x.setAttribute("id",`${i}`);
//     x.classList.add("sub_container");
//     container.appendChild(x);

// }
// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         const x=document.createElement("div");
//         x.setAttribute("id",`${i}${j}`);
//         // x.classList.add("id",`${j}`);
//         x.classList.add("sub_container");
//         container.appendChild(x);
//     }
// }
let snakeArr=[{x:4,y:5}];
let food={x:8,y:2};
let inputDir={x:0,y:0};
let speed = 8;
let score = 0;
let lastPaintTime = 0;

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    // console.log(ctime)
    gameEngine();
}

function isCollide(){
    if(snakeArr[0].x>9 || snakeArr[0].x<0 || snakeArr[0].y>9 || snakeArr[0].y<0) return true;
    return false;
}

// gameEngine();

function gameEngine(){
    
    if(isCollide()){
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr=[{x:4,y:5}];
        score=0;
    }
    // if snake eat food
    if(snakeArr[0].x==food.x && snakeArr[0].y==food.y){
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        let a = 0;
        let b = 9;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        score++;
    }
    document.getElementById("scoreVal").textContent=`${score}`;
    // move snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    container.innerHTML="";
    
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            const x=document.createElement("div");
            x.setAttribute("id",`${i}${j}`);
            // x.classList.add("id",`${j}`);
            x.classList.add("sub_container");
            container.appendChild(x);
        }
    }
    // display snake
    // snakeArr.forEach((elem)=>{
    //     let x=elem.x;
    //     let y=elem.y;
    //     // console.log(x,y)
    //     // console.log(elem)
    //     document.getElementById(`${x}${y}`).style.backgroundColor="black";
    // })
        

    
    snakeArr.forEach((elem)=>{
        let x=elem.x;
        let y=elem.y;
        document.getElementById(`${x}${y}`).style.backgroundColor="blue";
    })
    
    // display food
    let foodVarx=food.x;
    let foodVary=food.y;
    // document.getElementById()
    document.getElementById(`${foodVarx}${foodVary}`).style.backgroundColor="green";

}

window.requestAnimationFrame(main);

window.addEventListener("keydown",e=>{
    inputDir={x:0,y:1};
    switch(e.key){
        case "ArrowUp":
            console.log("hellio");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowDown":
            inputDir.x=1;
            inputDir.y=0;
            break;
        case "ArrowLeft":
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowRight":
            inputDir.x=0;
            inputDir.y=1;
            break;
        default:break
    }
})
