const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const valuesTemplate = {
  1: 'Ace',
  11: 'Jack',
  12: 'Queen',
  13: 'King',
};
const _isFaceCard = Symbol('isFaceCard');
const _count = Symbol('count');
const _wins = Symbol('wins');

const getCardSet = () => {
  const result = [];

  suits.forEach(suit => {
    Object.keys(valuesTemplate).forEach(rank => {
      result.push(new Card(suit, rank));
    })
  })

  return result;
}

class Deck {
  constructor(count) {
    this.cards = getCardSet();
    this[_count] = count;
  }

  get count() {
    return this[_count];
  }

  set count(count){
      this[_count] = count;
  }

  shuffle() {
    this.cards = this.cards.sort(() => 0.5 - Math.random());
  }

  draw(n = 1) {
    this[_count] -= n;
    return this.cards.splice(-1, n);
  }
}

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this[_isFaceCard] = this.rank === 1 || this.rank > 10;
  }
            set isFaceCard(isFaceCard){
                this[_isFaceCard] = isFaceCard;
            } 
        
            get isFaceCard(){
                return this[_isFaceCard];
            }

  static toString() {
    const rankText = this[_isFaceCard] ? valuesTemplate[this.rank] : this.rank;
    return `${rankText} of ${this.suit}`;
  }

  static compare(cardOne, cardTwo) {
    if (!{...cardOne}[0] || !{...cardTwo}[0]) return null;

    const rank1 = {...cardOne}[0].rank;
    const rank2 = {...cardTwo}[0].rank;

    if (rank1 === rank2) return null;
    return rank1 > rank2 ? cardOne : cardTwo;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this[_wins] = 0;
    this.deck = new Deck(52);
  }

  get wins() {
    return this[_wins];
  }

  addPoint() {
    this[_wins] = this.wins + 1;
  }

  play(playerOne, playerTwo) {
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();

    while (playerOne.deck.count && playerTwo.deck.count) {
      const cardOne = playerOne.deck.draw();
      const cardTwo = playerTwo.deck.draw();
      const gameOutcome = Card.compare(cardOne, cardTwo)

      if (gameOutcome) {
        JSON.stringify(gameOutcome) === JSON.stringify(cardOne) ? playerOne.addPoint() : playerTwo.addPoint();
      }
    }

    const winner = playerOne.wins > playerTwo.wins ? playerOne : playerTwo;
    const loser = playerOne.wins > playerTwo.wins ? playerTwo : playerOne;

    return `${winner.name} wins ${winner.wins} to ${loser.name}`;
  }
}

 const player1 = new Player('Ivan');
const player2 = new Player('Kos');
player1.play(player1, player2);