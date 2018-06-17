const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

let colors = [
  '#FF005D',
  '#0085B6',
  '#0BB4C1',
  '#00D49D',
  '#00D49D',
];

let mouse = {
  x: innerWidth/2,
  y: innerHeight/2
};

let gravity = 1;
let friction = 0.50;

let maxRadius = 20;

addEventListener('mousemove',((event)=>{
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}));

addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();


});

addEventListener('click',function(){
  init();
});

function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max-min+1) + min);
}

const randomColor = (arr) => (
  arr[Math.floor(Math.random() * arr.length)]
);

function Ball(x,y,dx,dy,radius,color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;




}

Ball.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,2 * Math.PI,false);
  // c.strokeStyle = this.color;
  c.fillStyle = this.color;
  c.fill();
  c.stroke();
  c.closePath();
};

Ball.prototype.update = function() {
  if(this.y+this.radius+this.dy > canvas.height){
    this.dy = -this.dy * friction;
  } else {
    this.dy += gravity;
  }
  if(this.x + this.radius + this.dx > canvas.height || this.x - this.radius <= 0){
    this.dx = -this.dx;
  }
  this.x += this.dx;
  this.y += this.dy;
  this.draw();
};

// implementation

let ballArray;
let ball;

const init = () => {
  ballArray = [];
  for(let i=0; i<500; i++){
    let radius = randomIntFromRange(8,20);
    let x = randomIntFromRange(radius,canvas.width-radius);
    let y = randomIntFromRange(0,canvas.height-radius);
    let dx = randomIntFromRange(-2,2);
    let dy = randomIntFromRange(-2,2);
    let color = randomColor(colors);
    // let radius =
    ballArray.push(new Ball(x,y,dx,dy,radius,color));
  }
  // ball = new Ball(canvas.width/2,canvas.height/2,2,30,'red');
  console.log(ballArray);
};



function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,canvas.width,canvas.height);
  // c.fillText("My gravity project",mouse.x,mouse.y);
  ballArray.forEach(balls => balls.update());
}

init();
animate();
