var data;
var r;
var g;
var b;


function preload() {
  data = loadJSON ("simpleData_noRegions.json");
}

function setup() {
  noCanvas();
  
  var countries = data.countries;
  for (var i=0; i< countries.length; i++) {
    createElement ('h1',countries[i].estimate);
    
    //for (var i=0; i< countries.length; i++) {
    //createElement ('h1',countries[i].country);
    
    //createP(countries);
  }


}

function draw() {
  background(100);
  
r = random(200);
g = random (200);
b = random (200);

  
  fill (r,g,b,127);
  text (data.countries,20,30);
}

