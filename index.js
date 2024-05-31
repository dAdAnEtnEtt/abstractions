class RationalNumber {
  constructor(numerator, denominator) {
    const gcd = this.gcd(numerator, denominator);

    this._numerator = numerator / gcd;
    this._denominator = denominator / gcd;

    if (this._denominator < 0) {
      this._numerator = -this._numerator;
      this._denominator = -this._denominator;
    }
  }

  get numerator() {
    return this._numerator;
  }

  get denominator() {
    return this._denominator;
  }

  gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  toJSON() {
    return {
      numerator: this.numerator,
      denominator: this.denominator,
    };
  }
}

const rational = new RationalNumber(6, 9);
console.log(JSON.stringify(rational));
console.log(rational.numerator);
console.log(rational.denominator);
