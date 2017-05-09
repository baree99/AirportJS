function Weather() {
  this.weatherRating = 10;
};

Weather.prototype.storm = function(rating) {
  if ( rating == 10 ) { return 'stormy' }
  if ( rating < 10 ) { return 'clear' }
};
