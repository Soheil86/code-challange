const Transform = require('./Transform')

// jest.mock("Transform.js", () => {
//   // will work and let you check for constructor calls:
//   return jest.fn().mockImplementation(function () {
//       return {
//           myMethod: () => {
//               return MOCKED_METHOD_RESULT;
//           },
//       };
//   });
// });

// write a test for the fibonacci function
describe('Transform', () => {
  describe('fibonacci', () => {
    it('should throw an error when given a negative number', () => {
      const transform = new Transform()
      expect(() => transform.fibonacci(-1)).toThrow()
    })

    it('should return 1 when given 1', () => {
      const transform = new Transform()
      expect(transform.fibonacci(1)).toBe(1)
    })

    it('should return 1 when given 2', () => {
      const transform = new Transform()
      expect(transform.fibonacci(2)).toBe(1)
    })

    it('should return 3 when given 4', () => {
      const transform = new Transform()
      expect(transform.fibonacci(4)).toBe(3)
    })

    it('should return 13 when given 11', () => {
      const transform = new Transform()
      expect(transform.fibonacci(11)).toBe(13)
    })

    it('should return 13 when given 13', () => {
      const transform = new Transform()
      expect(transform.fibonacci(13)).toBe(13)
    })

    it('should return 21 when given 22', () => {
      const transform = new Transform()
      expect(transform.fibonacci(22)).toBe(21)
    })
  })
})
