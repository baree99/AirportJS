function Weather() {
};

Weather.prototype._weatherRating = function() {
  return Math.floor((Math.random() * 10) + 1);
};

Weather.prototype.storm = function(rating = this._weatherRating()) {
  console.log(rating)
  if ( rating == 10 ) { return 'stormy' }
  if ( rating < 10 ) { return 'clear' }
};
