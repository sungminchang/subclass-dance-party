// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //console.dir(this);
  this.step();
  // console.log(this);
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);


};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.interact = function(x, y, x1, y1) {
  var xMove, yMove;

  if (x1 - x >= 0) {
    xMove = "+=" + String(x1 - x);
  } else {
    xMove = "-=" + String(x1 - x);
  }

  if (y1 - y >= 0) {
    yMove = "+=" + String(y1 - y);
  } else {
    yMove = "-=" + String(y1 - y);
  }



var div = this.$node;

function runIt() {
  div.animate({ left: xMove }, 2000);
  div.animate({ top: yMove }, 2000);
}

function showIt() {
  var n = div.queue( "fx" );
  // $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}
runIt();
showIt();

};

  // Method that makes the dancer animate its way to the given coordinates, based
  // on its current coordinates. Function signature takes the current position coordinate
  // as well as the new coordinates it needs to move to.
    // Check sign of third - first argument
      // If its positive, we're doing a rightwards move
      // If it's negative, we're doing a leftwards move
        // Convert move to a string
    //Check sign of fourth - second argument
      // If it's positive, we're doing a downwards move
      // If it's negative, we're doing an upwards move
        // Convert move to a string
    // Do the advanced setPosition movement.

//setTimeout(function() {console.log("hi");} () , 2000)
