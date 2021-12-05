class Board {
  constructor(input, id) {
    this.id = id;
    this.raw = input;
    this.lastNumber = undefined;

    this.matrix = input
      .split("\n")
      .map((row) => row.trim())
      .map((row) => {
        return row
          .split(/\s+/)
          .map((number) => parseInt(number, 10))
          .map((number) => ({ number, drawn: false }));
      });

    this.rowAmount = Array(this.matrix.length).fill(0);
    this.colAmount = Array(this.matrix.length).fill(0);
  }

  markNumber(number) {
    this.lastNumber = number;

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j].number === number) {
          this.matrix[i][j].drawn = true;
          this.rowAmount[i]++;
          this.colAmount[j]++;
        }
      }
    }
  }

  hasBingo() {
    return (
      this.rowAmount.some((row) => row === this.matrix.length) ||
      this.colAmount.some((col) => col === this.matrix.length)
    );
  }

  getResult() {
    let unMarked = [];

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (!this.matrix[i][j].drawn) {
          unMarked.push(this.matrix[i][j].number);
        }
      }
    }

    const sum = unMarked.reduce((a, b) => a + b, 0);

    return sum * this.lastNumber;
  }
}

module.exports = { Board };
