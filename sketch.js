/// <reference path="./p5.d/p5.global-mode.d.ts" />

var terrain;
var img; 

var particles = [];

function preload(){
	img = loadImage('assets/heighmap.png');
}

function setup() {
	createCanvas(540, 600);

	var w = 540;
	var h = 600;
	var xResolution = 20;
	terrain = createHeightmap(img,w,h,xResolution);
}

function draw() {
	background(0);

	terrain.drawHeightmap();
	terrain.drawVectorField();

	//move particles
	// for (var i = 0; i < particles.length; i++) {
	// 	var p = particles[i];

	// 	var slope = terrain.getSlope(p.x,p.y);

	// 	p.x += slope.x;
	// 	p.y += slope.y;

	// }

	//draw particles
	// for (var i = 0; i < particles.length; i++) {
	// 	var p = particles[i];
	// 	fill(0);
	// 	stroke(0);
	// 	ellipse(p.x,p.y,3,3);
	// }

	noLoop();
}

function mousePressed(){

	var p = createVector(mouseX,mouseY);

	particles.push(p);

}