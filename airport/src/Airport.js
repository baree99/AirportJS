function Airport() {
  this.terminal = [];
};

Airport.prototype.landPlane = function(plane) {
  this.terminal.push(plane);
  return 'The plane has landed safely';
};

Airport.prototype.launchPlane = function() {
  this.terminal.pop();
  return 'The plane has taken off safely';
};
