var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //alert(this.ste`p);
  // this.oldStep = this.step;
};

RotatingDancer.prototype = Object.create(Dancer.prototype);

RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //console.log(this);
  Dancer.prototype.step.call(this);

  this.$node.animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

};
