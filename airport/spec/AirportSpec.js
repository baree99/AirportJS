describe('Airport', function() {

  describe('#landPlane', function() {
    var airport = new Airport();
    airport.landPlane('plane');
    it('can land a plane in the terminal', function() {
      expect(airport.terminal).toContain('plane');
    })

    it('prints confirmation that the plane has landed', function() {
      expect(airport.landPlane('plane')).toEqual('The plane has landed safely');
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
