const canvas = document.getElementById("canvas"); 

const ctx = canvas.getContext("2d"); 


/*
//canvas.width = window.innerWidth/2;  
//ctx.fillStyle = "green";
//tx.fillRect(10,10,100,100);  

//ctx.fillStyle = "blue"; 
//ctx.fillRect(10,150,100,100); 



//ctx.strokeStyle = "purple";
//ctx.strokeRect(200,200, 5,5);   


//ctx.font ="30px Arial"; 

//ctx.fillText("hello I am paul morgan" , 100 , 100); 


ctx.beginPath(); 
ctx.moveTo(50,50); 
ctx.lineTo(150,50) ;
ctx.lineTo(100,200); 
ctx.lineTo(50,50);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green"  
ctx.fill();   


ctx.beginPath(); 
ctx.moveTo(200,50); 
ctx.lineTo(150, 200); 
ctx.lineTo(250,200); 
ctx.closePath();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 400);
ctx.lineTo(500,400);
ctx.lineTo(500,300);
ctx.fillStyle = "darkBlue"
ctx.fill()

ctx.stroke();


ctx.lineWidth = 14;
ctx.beginPath(); 
ctx.arc(100,400,40 ,0, Math.PI *2);  
ctx.fillStyle = "pink"
ctx.fill()  
ctx.strokeStyle = "orange";
ctx.stroke();
*/  



// circle


/*
const circle ={
    x: 200,
    y: 200,
    size: 30,
    dx:5,
    dy:4

}  

function drawCircle(){
    ctx.beginPath(); 
    ctx.arc(circle.x, circle.y, circle.size,0, Math.PI * 2); 
    ctx.fillStyle = "orange" ;
    ctx.fill();

}  

function update(){ 

    ctx.clearRect(0,0, canvas.width, canvas.height);


    drawCircle();   

    circle.x += circle.dx  
    circle.y += circle.dy 
    

    // hits the wall 
    if (circle.x + circle.size > canvas.width  || circle.x - circle.size <0){
        circle.dx *= -1
    } 
    if (circle.y + circle.size > canvas.width || circle.y - circle.size < 0 ){
        circle.dy *= -1
    }


    requestAnimationFrame(update);
}




update();
*/ 


const image = document.getElementById("source");

const player = {
    w:50,
    h:70, 
    x:20, 
    y:200, 
    speed:5, 
    dx:0,
    dy:0
};  



function drawPlayer(){ 
    ctx.drawImage(image, player.x, player.y, player.w ,player.h); 



}


function newPos(){
    player.x += player.dx; 
    player.y += player.dy    

    detectWalls();
}
 

function detectWalls() {
    if(player.x <0 ){
        player.x = 0;
    } 

    if (player.x  + player.w > canvas.width){
        player.x  = canvas.width - player.w*2;
    }  

    if (player.y <0){
        player.y= 0;
    } 

    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h*1.5
    }
}       

function clear (){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}


function update(){
    clear();
    
    drawPlayer();  


    newPos();

    requestAnimationFrame(update); 

}

function moveUp(){
    player.dy = -player.speed;    
}   

function moveDown(){
    player.dy = +player.speed;    
}  

function moveRight() {
    player.dx = +player.speed;
} 

function moveLeft(){
    player.dx = -player.speed;
}

function keyDown(e){ 
    if (e.key === "ArrowRight" || e.key ==="Right"){
        moveRight()
    }
    else if (e.key === "ArrowLeft" || e.key ==="Left"){
        moveLeft()
    }
    else if (e.key === "ArrowUp" || e.key ==="Up"){
        moveUp()
    }
    else if (e.key === "ArrowDown" || e.key ==="Down"){
        moveDown()
    }

 
} 

function keyUp(e){  
    if (
        e.key == "Right" || 
        e.key == "ArrowRight" || 
        e.key == "Left" || 
        e.key == "ArrowLeft" || 
        e.key == "ArrowUp" || 
        e.key == "Up" || 
        e.key == "ArrowDown" || 
        e.key == "Down" 
    ){
        player.dx =0; 
        player.dy =0; 
    }
}




update();  





document.addEventListener("keydown", keyDown); 

document.addEventListener("keyup", keyUp);