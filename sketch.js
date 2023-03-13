var input;
var textBox;
function setup() {
  canvas = createCanvas(1200, 600);
  input = createInput();
  input.position(100, 100);
  textBox=createElement("h2");
  textBox.position(200,200);


}

function draw() {
  background("gray");
  var val = input.value();
  var date = new Date(val);
  var month_diff = Date.now() - date.getTime();

  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);

  //extract year from date      
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user  
  var age = Math.abs(year - 1970);

  //display the calculated age  
  textBox.html("Age of the date entered: " + age + " years");
}

