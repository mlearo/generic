'use strict';

$(document).ready(function(){
/*
var array = [];
var screenHeight = 600;
var screenWidth = 800;

$("#overlay").click(function(e){
  var wrapper = $(this).parent();
  var parentOffset = wrapper.offset(); 
  var relX = e.pageX - parentOffset.left + wrapper.scrollLeft();
  var relY = e.pageY - parentOffset.top + wrapper.scrollTop();
  
  
  console.dirxml(this);
  $.post('/setData', {'X' : relX, 'Y': relY, 'time': new Date()}); 
  
  //$("#overlay").append($('<div/>').addClass('placeddiv').css({
  //    left: relX,
  //    top: relY
  //}));    
  

});

//setInterval(move, 500);
  
function move(relX, relY) {
 
  $.post('/setData', {'X' : relX, 'Y': relY, 'time': new Date()}); 
}
*/

//$("#accordion").accordion({
//  collapsible: true
//});



})

/*
$('#ball').click(function(e){

  var ballH = 40;
  var ballW = 40;
  var i = 0;
  while(i < 6) {
    
    ballH += 20;
    ballW += 20;
    
    $('#ball').css({"height": ballH + "px", "width" : ballW + "px"})
    
    $('#ball').append('<div id="ball"></div>');
    i+= 1;
  }



})

*/
/*
function init() {
  var btn = document.getElementById("myButton");
  btn.addEventListener("mousedown", mouseDown, false);
  btn.addEventListener("mouseup", mouseUp, false);
};
  
function mouseDown(e) {
  //console.log(e);
  setCapture(e);
  //e.target.setCapture();
  //e.target.addEventListener("mousemove", mouseMoved, false);
};

  
function mouseUp(e) {
  e.target.removeEventListener("mousemove", mouseMoved, false);
};

  
function mouseMoved(e) {
  var output = document.getElementById("output");
  output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
};

  
function setCapture(e) {
  var y = e.y;
  var x = e.x;
  var obj = { x: e.x , y: e.y, time: new Date() };
  console.log(obj);
  array.push(obj);
};

function printArray() {
  array.forEach(function(item){
    console.log(item);
  })
}
*/



