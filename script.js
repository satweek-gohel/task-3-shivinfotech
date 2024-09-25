const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
const names = characters.map(character => character.name);
console.log('Names:', names);

const heights = characters.map(character => character.height);
console.log('Heights:', heights);

const nameHeightObjects = characters.map(character => ({ name: character.name, height: character.height }));
console.log('Name and Height Objects:', nameHeightObjects);

const firstNames = characters.map(character => character.name.split(' ')[0]);
console.log('First Names:', firstNames);

// REDUCE
const totalMass = characters.reduce((total, character) => total + parseInt(character.mass), 0);
console.log('Total Mass:', totalMass);

const totalHeight = characters.reduce((total, character) => total + parseInt(character.height), 0);
console.log('Total Height:', totalHeight);

const totalNameCharacters = characters.reduce((total, character) => total + character.name.length, 0);
console.log('Total Name Characters:', totalNameCharacters);

const totalCharactersByEyeColor = characters.reduce((acc, character) => {
    acc[character.eye_color] = (acc[character.eye_color] || 0) + 1;
    return acc;
}, {});
console.log('Total Characters by Eye Color:', totalCharactersByEyeColor);

// FILTER
const heavyCharacters = characters.filter(character => parseInt(character.mass) > 100);
console.log('Heavy Characters:', heavyCharacters);

const shortCharacters = characters.filter(character => parseInt(character.height) < 200);
console.log('Short Characters:', shortCharacters);

const maleCharacters = characters.filter(character => character.gender === 'male');
console.log('Male Characters:', maleCharacters);

const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log('Female Characters:', femaleCharacters);

// SORT
const sortedByName = [...characters].sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by Name:', sortedByName);

const sortedByMass = [...characters].sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log('Sorted by Mass:', sortedByMass);

const sortedByHeight = [...characters].sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log('Sorted by Height:', sortedByHeight);

const sortedByGender = [...characters].sort((a, b) => a.gender.localeCompare(b.gender));
console.log('Sorted by Gender:', sortedByGender);

// EVERY
const allHaveBlueEyes = characters.every(character => character.eye_color === 'blue');
console.log('All Have Blue Eyes:', allHaveBlueEyes);

const allHaveMassMoreThan40 = characters.every(character => parseInt(character.mass) > 40);
console.log('All Have Mass More Than 40:', allHaveMassMoreThan40);

const allShorterThan200 = characters.every(character => parseInt(character.height) < 200);
console.log('All Shorter Than 200:', allShorterThan200);

const allAreMale = characters.every(character => character.gender === 'male');
console.log('All Are Male:', allAreMale);

// SOME
const atLeastOneMale = characters.some(character => character.gender === 'male');
console.log('At Least One Male:', atLeastOneMale);

const atLeastOneWithBlueEyes = characters.some(character => character.eye_color === 'blue');
console.log('At Least One With Blue Eyes:', atLeastOneWithBlueEyes);

const atLeastOneTallerThan200 = characters.some(character => parseInt(character.height) > 200);
console.log('At Least One Taller Than 200:', atLeastOneTallerThan200);

const atLeastOneWithMassLessThan50 = characters.some(character => parseInt(character.mass) < 50);
console.log('At Least One With Mass Less Than 50:', atLeastOneWithMassLessThan50);
