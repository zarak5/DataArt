let data;
let c = 0;
let button;

function preload() {
  data = loadJSON("simpleData_noRegions.json"); // there are objects with properties in this file
}

function setup() {
  createCanvas(500,400);
  // print(data.description);
  // print(data.colors);
  background(255);

  button = createButton("New Country");
  button.position(100, 300);
  button.mousePressed(changeColor);
}

function draw() {
  background(255);

  fill(0)
  textSize(20);
  text(data.countries[c].country, 100, 100);
  
  fill(100,200,100)
  textSize(20)
  text(data.countries[c].estimate, 100, 200);
  
  fill(150, 60,100)
  textSize(20)
  text(data.countries[c].marginOfError,100, 250);
                                              // { } in json file means that these are properties of objects
  
  col = data.countries[c].country
  fill(col);
  rect(250,180,100,100);
}

function changeColor() {
  c = int(random(0,100));
}