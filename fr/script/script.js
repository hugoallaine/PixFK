var x
var c
var v
var b
var h
h=0;
function setup(){
createCanvas(400,400);
background(240);
}
function draw(){
frameRate(random(1,120))
ellipse(x,c,v,b);
x=random(0,400);
c=random(0,400);
v=random(20,50);
b=random(20,50);
h=h+1;
fill(b,x,c);
strokeWeight(5);
stroke(b,x,c);

}