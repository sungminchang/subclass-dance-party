$(document).ready(function(){
  window.dancers = [];


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });


  $(".lineup").on("click", function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      dancers[i].setPosition(i * 30, i * 7);
    }
  });

  $(".dancer").on("mouseover", function(event) {
    console.log('hi');
  });

  $(".interact").on("click", function(event) {
    var square = function(x){
      return x * x;
    }
    var convertPositionToInt = function(dancer, pos){
      return Number(dancer[pos].slice(0,-2));
    };
    //accepts [x,y] tuples
    var calcDistance = function(pointA, pointB){
      return Math.sqrt(square((pointA[0] - pointB[0]) + square(pointA[1] - pointB[1])));
    }
    for (var i = 0; i < window.dancers.length; i++){
      var distance = 0;
      var furtherstDancerIndex;
      var dancer = window.dancers[i];
      var ogX, ogY, farthestX, farthestY;
      for (var j = 0; j < window.dancers.length; j++){
        var originalCoords = window.dancers[i].$node.css(['top','left']);
        var currentCoords = window.dancers[j].$node.css(['top','left']);
        //returns [x,y] tuples that we can use in calcDistance
        var ogDancerPos = [convertPositionToInt(originalCoords, 'left'), convertPositionToInt(originalCoords,'top')];
        var currDancerPos = [convertPositionToInt(currentCoords, 'left'), convertPositionToInt(currentCoords,'top')];
        //calculate and store distance between dancers
        ogX = ogDancerPos[0];
        ogY = ogDancerPos[1];
        farthestX = currDancerPos[0];
        farthestY = currDancerPos[1];
        var calculatedDistance = calcDistance(ogDancerPos, currDancerPos);
        if (distance < calculatedDistance){
          distance = calculatedDistance;
          furthestDancerIndex = j;
        }
      }
      //we want to move dancer to the position of window.dancer[j]
      //we want to move window.dancer[j] to dancer's position
    //dancer.setPosition((ogX + farthestX) / 2, (ogY + farthestY)/2);
    dancer.interact(ogX, ogY, farthestX, farthestY);

    }

    });

});

