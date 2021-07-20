class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  createSpaces() {
    const spaces = [];

    for (let i = 0; i < this.columns; i++) {
      const column = [];
      for (let j = 0; j < this.rows; j++) {
        column.push(new Space(i, j));
      }
      spaces.push(column);
    }
    console.log(spaces);
    return spaces;
  }

  drawHTMLBoard() {
    for (let col of this.spaces) {
      for (let space of col) {
        space.drawSVGSpace();
      }
    }
  }
}
