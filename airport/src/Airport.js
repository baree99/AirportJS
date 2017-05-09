function Airport() {
  this.capacity = 25;
  this.terminal = [];
};

Airport.prototype.landPlane = function(plane, weather = (new Weather()).storm()) {
  if ( weather == 'stormy' ) { return 'The weather is too stormy to fly'}
  if ( this.terminal.length >= this.capacity ) { return 'Terminal is full' }
  this.terminal.push(plane);
  return 'The plane has landed safely';
};

Airport.prototype.launchPlane = function() {
  this.terminal.pop();
  return 'The plane has taken off safely';
};
