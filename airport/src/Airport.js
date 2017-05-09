function Airport() {
  this.terminal = [];
};

Airport.prototype.landPlane = function(plane) {
  this.terminal.push(plane);
};

Airport.prototype.launchPlane = function() {
  console.log(this.terminal);
  this.terminal.pop();
  console.log(this.terminal);
};
