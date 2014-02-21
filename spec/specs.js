describe('cryptoDecoder', function(string) {
  it('Takes a string and splits the characters into an array without spaces', function() {
  cryptoDecoder("bigmac").should.eql(['b', 'i', 'g', 'm', 'a', 'c']);
  });
});


