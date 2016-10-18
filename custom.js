//VARIABLES
var Stage = $('#container1');
var s = Snap('#svg')
var path = s.select('#textpath')

////GSAP
var tl = new TimelineMax({repeat:-1});

//UP
tl.to(Stage, 0.65, {
  ease: Elastic.easeIn.config(1, 0.3),
  onStart: function() {
  up();
  }
});

//DOWN
tl.to(Stage, 0.65, {
  ease: Elastic.easeOut.config(1, 0.3),
  onStart: function() {
  down();
  }
});

////SNAP

//UP
function up() {
  path.animate({
  d: "M0.1,25.5c0,0,200.1-10,400-10c200.1,0,400,10,400,10"
  }, 4000, mina.elastic);
};

//DOWN
function down() {
  path.animate({
  d: "M0.1,25c0,0,200.1,10,400,10c200.1,0,400-10,400-10"
  }, 4000, mina.elastic);
};