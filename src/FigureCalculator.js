class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateArgs(args, expectedCount) {
    if (args.length !== expectedCount) {
      throw new Error(`fungsi hanya menerima ${expectedCount} parameter`);
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const arg of args) {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    }

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._validateArgs(args, 2);
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._validateArgs(args, 2);
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this._validateArgs(args, 3);
    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._validateArgs(args, 2);
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
