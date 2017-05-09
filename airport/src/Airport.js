function Airport() {
  this.terminal = [];
};

Airport.prototype.landPlane = function(plane) {
  this.terminal.push(plane);
};
