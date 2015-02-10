var SlidingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //alert(this.ste`p);
  // this.oldStep = this.step;
};

SlidingDancer.prototype = Object.create(Dancer.prototype);

SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //console.log(this);
  Dancer.prototype.step.call(this);
  //console.log(this);
  // console.log('message!');
var div = this.$node;

function runIt() {
  div
    .show( "slow" )
    .animate({ left: "+=" + String(Math.random() * 200) }, 2000 )
    .slideToggle( 1000 )
    .slideToggle( "fast" )
    .animate({ left: "+=" + String(Math.random() * 200) }, 1500 )
    .hide( "slow" )
    .show( 1200 )
    .slideUp( "normal", runIt );
}

function showIt() {
  var n = div.queue( "fx" );
  // $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}

runIt();
showIt();

};
