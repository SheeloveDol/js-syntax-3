// Proud of myself for building it from scratch witout using the guide-along steps

class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  toggleCheckOutStatus() {
   this._isCheckedOut === false ? this._isCheckedOut = true : this._isCheckedOut = false;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  getAverageRating() {
    let numOfRatings = this._ratings.length;
    let totalRatings = this._ratings.reduce((a, b) => a + b);
    return (totalRatings / numOfRatings).toFixed(1);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}


class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    this._songs = ['Old McDonald', 'Baby Shark', 'The Bus Song']
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

// --TESTING CD SUBCLASS--
// const myJams = new CD('Baby Ced', 'Lil Tunes');

// console.log(myJams.artist)
// console.log(myJams.title)
// console.log(myJams.songs)


// --TESTING BOOK SUBCLASS--
// const codingBook = new Book('Sheelove', 'Code4Dummies', 250);
// console.log(codingBook.author)
// console.log(codingBook.title);
// console.log(codingBook.pages);
// console.log(codingBook.isCheckedOut)
// console.log(codingBook.ratings)





// TESTING SUPERCLASS:
// const cd = new Media('DVD');
// cd.toggleCheckOutStatus();
// console.log(cd.isCheckedOut)
// cd.addRating(9);
// cd.addRating(8);
// cd.addRating(8);
// cd.addRating(9);
// cd.addRating(7);
// cd.addRating(10);
// console.log(cd.ratings)
// console.log(cd.getAverageRating())