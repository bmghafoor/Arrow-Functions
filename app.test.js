describe("ES2015 Arrow Functions", function() {
    it("should double the array", function() {
        const arr = [3,4,5,6,7]
      expect(double(arr)).toEqual([6,8,10,12,14]);
    });
    it("should return an empty array", function() {
        const arr = []
      expect(double(arr)).toEqual([]);
    });
  });

  describe("Squares and Evens", function() {
    it("should return squared and evens", function() {
        const arr = [1,2,3,4,5]
      expect(squareEven(arr)).toEqual([4,16]);
    });
    it("should return an empty array", function() {
        const arr = []
      expect(squareEven(arr)).toEqual([]);
    });
  });
