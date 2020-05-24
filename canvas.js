var canvas = document.querySelector('canvas');
var score = document.querySelector('h5')

canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext('2d')

snakeSize = 10;
foodSize = 10;
var direction ;

var directionArray=[]
var positionArray=[]
var start = {
    x: snakeSize+Math.floor(Math.random()*500-snakeSize*2),
    y: snakeSize+Math.floor(Math.random()*500-snakeSize*2),
    foodx : foodSize+Math.floor(Math.random()*500-foodSize*2),
    foody : foodSize+Math.floor(Math.random()*500-foodSize*2)
    
}

 const foodSpawn = (x,y) =>{
   return c.fillRect(x,y,10,10)
 }

 const addTail = (x,y)=>{
return c.fillRect(x,y,snakeSize,10)
 }



window.addEventListener('keydown',(event)=>{
     
    direction = event.key
     
    directionLog(direction)
    

})



const positionLog = (x,y)=>{
    
    positionArray.unshift({x:x,y:y})
    var maxLength = (foodHistory.length+1)*4
    if (positionArray.length > maxLength) {
        positionArray.length = maxLength;
    }
    
}


var foodHistory = [] 

var dx = 1;
var dy = 1;

function move (direct) {

    if (start.x+10<=500 && start.y+10<=500 && start.x>=0 && start.y>=0){

    requestAnimationFrame(move)
    c.clearRect(0,0,500,500);
    c.fillStyle = 'black'
    c.fillRect(start.x,start.y,snakeSize,10)
    positionLog(start.x,start.y)


    setInterval(() => {
        
    }, 30000);
    if(start.x<=start.foodx+10 && start.x>=start.foodx-10 && start.y<=start.foody+10 && start.y>=start.foody-10) {
        foodHistory.push({x:start.x,y:start.y,movingDirection:direction})
        start.foodx=foodSize+Math.floor(Math.random()*500-foodSize*2)
        start.foody= foodSize+Math.floor(Math.random()*500-foodSize*2)
        // snakeSize=snakeSize+10
        dx=dx+.25;
        dy=dy+.25;
        
        score.innerHTML=`score: ${foodHistory.length}`
    }
    c.fillStyle = 'blue';
    foodSpawn(start.foodx,start.foody);
    
    c.fillStyle='red'
    foodHistory.forEach((item,index)=>{
        
        
       addTail(positionArray[(index+1)*3].x,positionArray[(index+1)*3].y)
        

        
        
    })

    if (direction==='ArrowLeft' ){
        start.x=start.x-dx;
    } else if (direction=='ArrowRight'){
        dx=dx;
            start.x=start.x+dx;
    } else if (direction==='ArrowUp'){
        start.y=start.y-dy;
    } else if(direction ==='ArrowDown'){
        start.y=start.y+dy;
    }
    


} else {
    alert('Game Over! Refresh page to start over')
}


   
    

}

move();