// QUESTION ONE (1)

function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

const post1 = new InstagramPost(
  "johnmark",
  "Beautiful time at the beach",
  "https://image1.jpg",
  5000,
  500
);
console.log(post1);





// QUESTION TWO (2)
const post2 = new InstagramPost(
  "janemark",
  "Having fun at the beach",
  "https://example.com/beach.jpg",
  5000,
  200
);
console.log(post2);






// QUESTION THREE (3)
// createPerson factory function
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

// createJambScores factory function
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

const musaJambScores = createJambScores(70, 85, 82, 94);

musa.jambScores = musaJambScores;

console.log(musa);
console.log(musaJambScores);






//   QUESTION FOUR(4)

// In programming, cloning an object means creating a new object with the same values and properties as the original object. There are several ways to clone an object, some of which are listed below:

// Object.assign() method: The Object.assign() method can be used to clone an object. It creates a new object and copies the properties of the original object into the new object.

let obj = { a: 10, b: 20, c: 30 };
let newObj = Object.assign({}, obj);
console.log(newObj);

// Spread operator: The spread operator (...) can also be used to clone an object. It creates a new object and spreads the properties of the original object into the new object.

let newObj1 = { ...obj };
console.log(newObj1);

// JSON.parse() and JSON.stringify() methods: The JSON.parse() and JSON.stringify() methods can be used to clone an object.

let newObj2 = JSON.parse(JSON.stringify(obj));
console.log(newObj2);






// QUESTION FIVE (5)

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const party in presidentialCandidates) {
  const candidate = presidentialCandidates[party];
  console.log(`${candidate} is the presidential candidate of ${party}`);
}
