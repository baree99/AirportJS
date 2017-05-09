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
      expect(airport.landPlane('plane', 'stormy')).toEqual('The weather is too stormy to fly');
    });

    it('cannot land a plane if the terminal is full', function() {
      for (var i = 0; i < 24; i++) {
        airport.landPlane('plane', 'clear');
      }

      expect(airport.landPlane('plane', 'clear')).toEqual('Terminal is full');
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

  describe('#setCapacity', function() {
    it('sets airport capacity to 30', function() {
      var airport = new Airport();
      airport.setCapacity(30);
      expect(airport.capacity).toEqual(30);
    });
  });
});
