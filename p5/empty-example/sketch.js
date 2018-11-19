var mouth;
var mouth = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);

}

function draw() {
	frameRate(10);
	background("#FFDAB9");
	
	fill("#000000");
	ellipse(250,350,mouth,mouth);
	mouth = mouth+5;// put drawing code here

  noStroke(0)
  fill("#FF6347");//light red
  textSize(100);
  textFont("Arial Black");
  text("!",random(0,width),random(0,height));
  
  stroke("#ffffff");//white
  strokeWeight(20);
  fill("#000000");//black
  ellipse(100,100,60,60);
  
  stroke("#ffffff");//white
  strokeWeight(20);
  fill("#000000");//black
  ellipse(400,100,60,60);

  stroke("#000000");//black
  strokeWeight(5);
  fill("#FFDAB9");//peach
  ellipse(250,200,150,80);

 
  


 
 
  
}

function mousePressed(){
	if (mouth >=20){
		mouth = 0;
	}else{
		mouth = mouth - 100;
	}
} 