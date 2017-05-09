describe('Airport', function() {

  var airport = new Airport();

  describe('#landPlane', function() {
    it('can land a plane in the terminal', function() {
        airport.landPlane('plane');
        expect(airport.terminal).toContain('plane');
    });
  });
});
