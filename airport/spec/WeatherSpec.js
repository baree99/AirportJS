describe('Weather', function() {
  describe('#storm', function() {
    var weather = new Weather

    it('return stormy if the weather rating is a 10', function() {
      expect(weather.storm(10)).toEqual('stormy');
    });

    it('return clear if the weather rating is a 9', function() {
      expect(weather.storm(9)).toEqual('clear');
    });
  });
});
