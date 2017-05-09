describe('Airport', function() {

  describe('#landPlane', function() {
    it('can land a plane in the terminal', function() {
        var airport = new Airport();
        airport.landPlane('plane');
        expect(airport.terminal).toContain('plane');
    });
  });

  describe('#launchPlane', function() {
    it('can launch a plane from the terminal', function() {
        var airport = new Airport();
        airport.landPlane('plane');
        airport.launchPlane();
        expect(airport.terminal).not.toContain('plane');
    });
  });
});
