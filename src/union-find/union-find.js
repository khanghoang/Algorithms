// @flow
export class UnionFind {

  constructor({length}): UnionFind {
    this.id = [];
    this.count = length;

    for (let i = 0; i < length; i++) {
      this.id[i] = i;
    }
  }

  count() {
    return this.count;
  }

  connected() {
  }


}
