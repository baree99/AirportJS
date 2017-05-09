describe('Airport', function() {

  describe('#landPlane', function() {
    var airport = new Airport();
    airport.landPlane('plane', 'clear');

    it('can land a plane in the terminal', function() {
      expect(airport.terminal).toContain('plane');
    });

    it('prints confirmation that the plane has landed', function() {
      expect(airport.landPlane('plane', 'clear')).toEqual('The plane has landed safely');
    });

    it('cannot land a plane if the weather is stormy', function() {
      airport.landPlane('plane2', 'stormy')
      expect(airport.terminal).not.toContain('plane2');
    });
  });

  describe('#launchPlane', function() {
    var airport = new Airport();
    airport.landPlane('plane', 'clear');
    airport.launchPlane();

    it('can launch a plane from the terminal', function() {
        expect(airport.terminal).not.toContain('plane');
    });

    it('can launch a plane from the terminal', function() {
        expect(airport.launchPlane()).toEqual('The plane has taken off safely');
    });
  });
});
