export default class Tile {
  char: string;
  passable: boolean;

  constructor(char: string, passable: boolean) {
    this.char = char;
    this.passable = passable;
  }
}
