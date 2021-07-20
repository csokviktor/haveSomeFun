class Player {
  constructor(n, id, color, active = false) {
    this.name = n;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  get activeToken() {
    return this.unusedTokens[0];
  }

  createTokens(num) {
    /**
     * Create tokens for a player
     */
    const tokens = [];

    for (let i = 0; i < num; i++) {
      tokens.push(new Token(i, this));
    }

    return tokens;
  }
  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }
}