const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings


const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const [bessie, ,dolly, babe, little] = farmAnimals.split(' ')// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const [blackAndWhite, ,black,  pink, ] = farmAnimals.split(' ')// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [ , , , , , indg, ] = colors;
 
const [r, o, y, g, b, , v] = colors 


const Muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const {muppetName, color, song, job, partner} = Muppet;

const Muppet2 = {
  muppet2Name: 'Kermit',
  song2: 'Moving Right Along',
  song4: 'I Hope That Something Better Comes Along',
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {muppet2Name, song2, song4, nestedJob, nestedPartner} = Muppet2
