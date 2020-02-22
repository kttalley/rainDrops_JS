var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");


//update and animate the screen
var FPS = 60;
setInterval(function() {
  //update();
  draw();
}, 1000/FPS);

var dy = 5,
    blocks = [],
    minWait = 1000,
    lastTime = +new Date();

function Block(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width*0.5;
    this.height = height*1.25;
}

Block.prototype.update = function(){
    if(this.y < 360){
        this.y+=dy   
    }else{
        this.y = 0;   
    }
};

Block.prototype.render = function(){
    context.fillRect(this.x, this.y, this.width, this.height);
};

//draw the screen
function draw() {
    if(+new Date() > lastTime + minWait){
        lastTime = +new Date();
        blocks.push(new Block(Math.random()*300, 0,2,2));
        blocks.push(new Block(Math.random()*100, 0,2,5));

    }
    context.fillStyle = `rgba(0,106,150`+`${Math.random()*255},0.8)`;
    context.clearRect(0,0,canvas.width, canvas.height);

        blocks.forEach(function(e){
            e.update();
            e.render();
        });
};