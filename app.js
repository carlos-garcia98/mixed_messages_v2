// object containing different pieces for the random messages.
const messagePieces = {
  // You will be on bed until...
  firstPiece: ["early morning", "late morning", "afternoon"],
  // The artist you will listen to trhoughout the day is...
  secondPiece: [
    "Billie Eilish",
    "Diplo",
    "City Girl",
    "Psalm Trees",
    "Dennis Llyod",
    "Dua Lipa",
    "Foster the People",
    "Tiffi",
    "In Love With a Ghost",
    "Polo & Pan",
    "Feng Suave",
  ],
  // You will go to...
  thirdPiece: [
    "a good restaurant",
    "the zoo",
    "to Disney",
    "a museum",
    "your artist't concert",
  ],
  // You will end your day with...
  fourthPiece: [
    "a good movie",
    "a good book",
    "a good show",
    "a good game",
    "a good nap",
    "a relaxing night walk",
    "a match of league of legend",
  ],
};

// Getting a random number between 0 and the length of the array.
const getRandomPieces = (obj) => {
  const randomPieces = [];

  for (let piece in obj) {
    if (piece === "firstPiece") {
      randomPieces.push(
        obj[piece][Math.floor(Math.random() * obj[piece].length)]
      );
    } else if (piece === "secondPiece") {
      randomPieces.push(
        obj[piece][Math.floor(Math.random() * obj[piece].length)]
      );
    } else if (piece == "thirdPiece") {
      randomPieces.push(
        obj[piece][Math.floor(Math.random() * obj[piece].length)]
      );
    } else if (piece === "fourthPiece") {
      randomPieces.push(
        obj[piece][Math.floor(Math.random() * obj[piece].length)]
      );
    }
  }

  return randomPieces;
};
