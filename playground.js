const Arr = [
  {
    name: 'rashid',
    moves: [{
      "name": Id,
      "driveGauge": "",
      "video": "",
      "active": "",
      "kitties": ""
    }]
  }
];

const Bee = [
  {
    name: 'rashid',
    moves: [{
      "name": Id,
      "active": "",
      "funkyStuff": "",
    }]
  }
];

const Cee = [
  {
    name: 'rashid',
    moves: [{
      "name": Id,
      "kitties": "",
      "puppies": "",
    }]
  }
];

const Char = [{
  name: 'rashid',
  moves: [{
    ...Arr[0].moves[0],
    ...Bee[0].moves[0],
    ...Cee[0].moves[0]
  }]
}];

console.log(Char);


function mergeCharacterMoves(...arrays) {
  let mergedCharacters = {};

  arrays.forEach(array => {
      array.forEach(character => {
          if (!mergedCharacters[character.name]) {
              mergedCharacters[character.name] = { 
                  name: character.name, 
                  moves: [] 
              };
          }
          character.moves.forEach(move => {
              const existingMove = mergedCharacters[character.name].moves.find(m => m.name === move.name);
              if (existingMove) {
                  Object.assign(existingMove, move);
              } else {
                  mergedCharacters[character.name].moves.push({...move});
              }
          });
      });
  });

  return Object.values(mergedCharacters); // Convert the object back into an array of characters
}

const Character = mergeCharacterMoves(Arr, Bee, Cee);
console.log(Character);


// function mergeCharacterMoves(...arrays) {
//   let mergedMoves = [];

//   arrays.forEach(array => {
//     array.forEach(character => {
//       character.moves.forEach(move => {
//         const existingMove = mergedMoves.find(m => m.name === move.name);
//         if (existingMove) {
//           Object.assign(existingMove, move);
//         } else {
//           mergedMoves.push({...move});
//         }
//       });
//     });
//   });

//   return [{
//     name: 'rashid',
//     moves: mergedMoves
//   }];
// }

const Character = mergeCharacterMoves(Arr, Bee, Cee);
console.log(Character);
