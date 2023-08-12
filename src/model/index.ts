import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createCharacter(characterData: {
  name: string,
  bio: string,
  like: string,
  notlike: string,
  height: string,
  weight: string,
//   moves: {
//     name: string,
//     type: string, // you might want to provide more details for a Move
//     // other properties related to Move
//   }[]
}) {
  const newCharacter = await prisma.character.create({
    data: {
      name: characterData.name,
      bio: characterData.bio,
      like: characterData.like,
      notlike: characterData.notlike,
      height: characterData.height,
      weight: characterData.weight,
  //     moves: {
  //       create: characterData.moves, // using the 'create' keyword to create new Move records
  //     },
   },
})
  return newCharacter
}

// Example usage
const newCharacterData = {
  name: 'Luke',
  bio: 'A contractor for a PMC...',
  like: 'Travelling, PC games, wacky T-shirts',
  notlike: 'Horror games',
  height: '6\'1"',
  weight: '198 lbs',
  // moves: [
  //   // provide the required data for each move here
  // ],
}


async function main() {
  createCharacter(newCharacterData)
  const allCharacters = await prisma.character.findMany()
  console.log(allCharacters)
}

export function callMain() {
  return main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

console.log('yeah');
callMain();