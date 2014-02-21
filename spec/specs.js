describe('letterScore', function() {
  
  it('gives us a score of 1 for "a"', function() {
    letterScore("a").should.equal(1);
  });

  it('returns a score of 1 for any letter that should be scored as a one', function() {
    letterScore("e").should.equal(1);
  });

  it('returns a score of 2 for any letter that should be scored as 2', function() {
    letterScore("d").should.equal(2);
  });

  it('returns a score of 3 for any letter that should be scored as 3', function() {
    letterScore("b").should.equal(3);
  });

  it('returns a score of 4 for any letter that should be scored as 4', function() {
    letterScore("y").should.equal(4);
  });

  it('returns the correct single letter score when a letter is used in the fuction', function () {
    letterScore("z").should.equal(10);
  });

});

describe('wordScore', function() {
  
  it('gives us a score of 1 for "a"', function() {
    wordScore("a").should.equal(1);
  });

  it('it gives us the correct score for a two-letter word', function() {
    wordScore("high").should.equal(11);
  });

});


